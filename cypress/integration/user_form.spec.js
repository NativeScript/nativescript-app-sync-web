/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:

// https://on.cypress.io/introduction-to-cypress
describe('adding and updating a user', () => {
  beforeEach(() => {
    // requests to intercept at a later point
    cy.intercept('POST', 'http://localhost:5000/graphql', (req) => {
      if (req.body.hasOwnProperty('query') && req.body.query.includes('mutation') && req.body.query.includes('createUser')) {
        req.alias = 'create-user'
      }
      if (req.body.hasOwnProperty('query') && req.body.query.includes('mutation') && req.body.query.includes('updateUser')) {
        req.alias = 'update-user'
      }
    })

    cy.visit('http://localhost:3000/login')
    cy.get('[name=email]').should('have.value', 'testinguseradmin')
    cy.get('button:contains("Sign in")').click()
    cy.wait(300); // wait for login and tokens to be set
  })

  it('creates a user with no phone number - and then updates user', () => {
    cy.visit('http://localhost:3000/user/c/general')
    const randomNumber = Math.random()
    console.log(randomNumber)
    cy.get('[name=first_name]').type(`Testuser${randomNumber}`)
    cy.get('[name=last_name]').type('Lastname')
    cy.get('[name=email]').type(`testuser${randomNumber}@gmail.com`)
    cy.get('button:contains("Save")').click()

    // make sure sending in right info to request
    cy.wait('@create-user').should(({ request, response }) => {
      expect(request.method).to.equal('POST')
      expect(request.body.variables.user, 'request variables').to.include({
        email: `testuser${randomNumber}@gmail.com`,
        first_name: `Testuser${randomNumber}`,
        inactive: false,
        last_name: "Lastname"   
      })
      expect(response.body.errors, 'response data').to.equal(undefined)
      expect(response.body.data, 'response data').to.not.equal(null)

      // update user
      cy.get('[name=last_name]').clear().type('updated last name')
      cy.get('button:contains("Save")').click()
      cy.wait('@update-user').then(console.log).should(({ request, response }) => {
        expect(request.method).to.equal('POST')
        expect(request.body.variables.user, 'request variables').to.include({
          last_name: "updated last name"   
        })
        expect(response.body.errors, 'response data').to.equal(undefined)
        expect(response.body.data, 'response data').to.not.equal(null)
      })
    })
  })
})
