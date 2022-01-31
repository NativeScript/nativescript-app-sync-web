type IProps = {
  password: string,
  passwordMatch: string
}

const RULES = [
  {
    message: 'Must be at least 8 characters',
    validated: (value: string) => value.length >= 8
  },
  {
    message: 'Must contain a number',
    validated: (value: string) => /\d/.test(value)
  },
  {
    message: 'Must contain a special character',
    validated: (value: string) => /[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)
  },
  {
    message: 'Passwords must match',
    validated: (value1: string, value2: string) => Boolean(value1 && value1 === value2)
  }
]

const usePasswordStrength = ({ password, passwordMatch }: IProps) => RULES.map((rule) => {
  const validValue = rule.validated(password, passwordMatch)
  return {
    message: rule.message,
    valid: validValue
  }
})

export default usePasswordStrength
