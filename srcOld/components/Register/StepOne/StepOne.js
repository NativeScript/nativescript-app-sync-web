import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import validator from 'validator';
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import Link from '../../Link';

class StepOne extends Component {
  static propTypes = {
    isChecking: PropTypes.bool,
    email: PropTypes.string,
    emailInputChange: PropTypes.func,
    submit: PropTypes.func,
    error: PropTypes.object,
  };

  static defaultProps = {
    isChecking: false,
    email: '',
    emailInputChange:(email)=>{},
    submit: ()=>{},
    error: {},
  };

  constructor() {
    super();
    this.setInputEmail = this.setInputEmail.bind(this);
  }

  setInputEmail(event) {
    this.props.emailInputChange(event.target.value);
  }
  render() {
    const self = this;
    var emailIsValidate = validator.isEmail(this.props.email);
    var disabled = true;
    if (!this.props.isChecking && emailIsValidate){
        disabled = false;
    }
    return (
      <Form style={{maxWidth: 350, marginLeft:"auto", marginRight: "auto"}}>
        <FormGroup>
          <ControlLabel>Email address</ControlLabel>
          <FormControl
            onChange={this.setInputEmail}
            value={this.props.email}
            type="email"
            placeholder="Email address"
            autoComplete="off"
            autoFocus
            />
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
          Next step
          </Button>
        </FormGroup>
        <FormGroup style={{ paddingTop: 28, textAlign: 'center' }}>
          <Link to="/login">Existing account</Link>
        </FormGroup>
        <FormGroup>
          <label style={{ fontWeight: 300 }}>This service is in BETA. By registering for this service, you agree with its <a href="https://github.com/EddyVerbruggen/nativescript-app-sync-web/blob/master/EULA.pdf" target="_blank">EULA</a>.</label>
        </FormGroup>
      </Form>
    );
  }
}
export default StepOne;
