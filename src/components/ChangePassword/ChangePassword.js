
import React, { PropTypes, Component } from 'react';
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

import _ from 'lodash';

class ChangePassword extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    oldPassword: PropTypes.string,
    oldPasswordInputChange: PropTypes.func,
    newPassword: PropTypes.string,
    newPasswordInputChange: PropTypes.func,
    newPasswordConfirm: PropTypes.string,
    newPasswordConfirmInputChange: PropTypes.func,
    submit: PropTypes.func,
    error: PropTypes.object,
  };

  static defaultProps = {
    isFetching: false,
    oldPassword: '',
    oldPasswordInputChange: (oldPassword)=>{},
    newPassword: '',
    newPasswordInputChange: (newPassword)=>{},
    newPasswordConfirm: '',
    newPasswordConfirmInputChange: (newPasswordConfirm)=>{},
    submit: ()=>{},
    error: {},
  };

  constructor(){
    super();
    this.state = {field1: false, field2: false, field3: false};
    this.setOldPassword = this.setOldPassword.bind(this);
    this.setNewPassword = this.setNewPassword.bind(this);
    this.setNewPasswordConfirm = this.setNewPasswordConfirm.bind(this);
  }

  setOldPassword(event) {
    this.props.oldPasswordInputChange(event.target.value);
  }

  setNewPassword(event) {
    this.props.newPasswordInputChange(event.target.value);
  }

  setNewPasswordConfirm(event) {
    this.props.newPasswordConfirmInputChange(event.target.value);
  }

  render() {
    const self = this;
    let isValidate = true;
    let oldPasswordTips = '';
    if (!this.props.oldPassword) {
      isValidate = false;
      oldPasswordTips = 'Old password';
    }
    let newPasswordTips = '';
    let newPasswordConfirmTips = '';
    if (this.props.newPassword.length < 6) {
      newPasswordTips = 'Please enter 6 to 22 characters';
    }
    if (!_.eq(this.props.newPassword, this.props.newPasswordConfirm)) {
      isValidate = false;
      newPasswordConfirmTips = 'These passwords do not match';
    }
    var disabled = true;
    if (!this.props.isFetching && isValidate) {
      disabled = false;
    }
    return (
      <div style={{height:650, paddingLeft: 20, paddingRight:20 }}>
        <Panel header="Change password" style={{ maxWidth:350, marginLeft:"auto", marginRight: "auto" }}>
          <Form>
            <FormGroup>
              <ControlLabel>Old password</ControlLabel>
              <FormControl
                onChange={this.setOldPassword}
                type="password"
                value={this.props.oldPassword}
                placeholder="Old password"
                onBlur={()=>this.setState({field1: true})}
                autoFocus
                />
            </FormGroup>
            <FormGroup>
              <div style={{ color:'red' }} >
              {
                this.state.field1 ?
                oldPasswordTips
                : null
              }
              </div>
            </FormGroup>
            <FormGroup>
              <ControlLabel>New password</ControlLabel>
              <FormControl
                onChange={this.setNewPassword}
                type="password"
                value={this.props.newPassword}
                placeholder="New password"
                onBlur={()=>this.setState({field2: true})}
              />
            </FormGroup>
            <FormGroup>
              <div style={{ color:'red' }} >
              {
                this.state.field2 ?
                newPasswordTips
                : null
              }
              </div>
            </FormGroup>
             <FormGroup>
              <ControlLabel>Confirm new password</ControlLabel>
              <FormControl
                onChange={this.setNewPasswordConfirm}
                type="password"
                value={this.props.newPasswordConfirm}
                placeholder="Repeat the new password"
                onBlur={()=>this.setState({field3: true})}
              />
            </FormGroup>
            <FormGroup>
              <div style={{ color:'red' }} >
              {
                this.state.field3 ?
                newPasswordConfirmTips
                : null
              }
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
                disabled={disabled}
                onClick={()=>{
                  if (disabled) {
                    return;
                  }
                  self.props.submit();
                }}
              >
              Confirm
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}
export default ChangePassword;
