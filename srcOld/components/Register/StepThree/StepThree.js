import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

class StepThree extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    password: PropTypes.string,
    passwordInputChange: PropTypes.func,
    passwordConfirm: PropTypes.string,
    passwordConfirmInputChange: PropTypes.func,
    submit: PropTypes.func,
    error: PropTypes.object,
  };

  static defaultProps = {
    isFetching: false,
    password: '',
    passwordInputChange: (password)=>{},
    passwordConfirm: '',
    passwordConfirmInputChange: (passwordConfirm)=>{},
    submit: ()=>{},
    error: {},
  };

  constructor() {
    super();
    this.state = {field1: false, field2: false};
    this.setInputPassword = this.setInputPassword.bind(this);
    this.setInputPasswordConfirm = this.setInputPasswordConfirm.bind(this);
  }

  setInputPassword(event) {
    this.setState({field1: true});
    this.props.passwordInputChange(event.target.value);
  }

  setInputPasswordConfirm(event) {
    this.setState({field2: true});
    this.props.passwordConfirmInputChange(event.target.value);
  }

  render() {
    const self = this;
    let passwordTips = '';
    let passwordConfirmTips = '';
    if (this.state.field1 && this.props.password.length < 6) {
      passwordTips = 'Must be at least 6 characters';
    }
    if (this.state.field2 && !_.eq(this.props.passwordConfirm, this.props.password) ) {
      passwordConfirmTips = 'Make sure those passwords are the same';
    }
    let isValidate = false;
    if (this.props.password.length >= 6
      && _.eq(this.props.passwordConfirm, this.props.password)) {
      isValidate = true;
    }
    var disabled = true;
    if (!this.props.isFetching && isValidate) {
      disabled = false;
    }
    return (
      <Form style={{  maxWidth:350, marginLeft:"auto", marginRight: "auto" }}>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            onChange={this.setInputPassword}
            onBlur={()=>this.setState({field1: true})}
            value={this.props.password}
            type="password"
            placeholder="Password"
            autoComplete="off"
            autoFocus
            />
        </FormGroup>
        <FormGroup>
          <div style={{ color:'red' }} >
          {passwordTips}
          </div>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Confirm password</ControlLabel>
          <FormControl
            onChange={this.setInputPasswordConfirm}
            onBlur={()=>this.setState({field2: true})}
            type="password"
            value={this.props.passwordConfirm}
            placeholder="Repeat your password"
            autoComplete="off"
            />
        </FormGroup>
        <FormGroup>
          <div style={{ color:'red' }} >
          {passwordConfirmTips}
          </div>
        </FormGroup>
        <FormGroup style={{ paddingTop: 20 }}>
          <div style={{ color:'red' }} >
          {_.get(this.props, 'error.message')}
          </div>
        </FormGroup>
        <FormGroup>
          <Button
            style={{width: "100%"}}
            bsStyle="primary"
            onClick={()=>{
              if (disabled) {
                return;
              }
              self.props.submit();
            }}
            disabled={disabled}
          >
          Register
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
export default StepThree;
