import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import {
  Col,
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Checkbox,
  Button,
  Panel,
} from 'react-bootstrap';
import Link from '../Link';

class Login extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    account: PropTypes.string,
    password: PropTypes.string,
    accountInputChange: PropTypes.func,
    passwordInputChange: PropTypes.func,
    submit: PropTypes.func,
    error: PropTypes.object
  };
  static defaultProps = {
    isFetching: false,
    account: '',
    accountInputChange: (account)=>{},
    password: '',
    passwordInputChange: (password)=>{},
    submit: (account, password)=>{},
    error: {}
  };
  constructor() {
    super();
    this.setInputAccount = this.setInputAccount.bind(this);
    this.setInputPassword = this.setInputPassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit() {
    if (this.props.isFetching) {
      return;
    }
    this.props.submit();
  }

  setInputAccount(event) {
    this.props.accountInputChange(event.target.value);
  }

  setInputPassword(event) {
    this.props.passwordInputChange(event.target.value);
  }

  render() {
    return (
      <div style={{height:650, paddingLeft: 20, paddingRight:20 }}>
        <Panel header="Log in" style={{ maxWidth:350, marginLeft:"auto", marginRight: "auto" }}>
          <Form>
            <FormGroup>
              <ControlLabel>Email address</ControlLabel>
              <FormControl
                onChange={this.setInputAccount}
                value={this.props.account}
                type="email"
                placeholder="Email address"
                autoFocus
                />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                onChange={this.setInputPassword}
                value={this.props.password}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup style={{ paddingTop: 20 }}>
              <div style={{ color:'red' }} >
              {_.get(this.props, 'error.errorMessage')}
              </div>
            </FormGroup>
            <FormGroup>
              <Button
                style={{width: "100%"}}
                bsStyle="primary"
                onClick={this.submit}
                disabled={this.props.isFetching}
              >
              {this.props.isFetching ? 'Logging in...' : 'Log in'}
              </Button>
            </FormGroup>
            <FormGroup style={{ paddingTop: 28 }}>
              <span style={{ marginRight: 20 }}>No account yet?</span>
              <Link to="/register">Register</Link>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}
export default Login;
