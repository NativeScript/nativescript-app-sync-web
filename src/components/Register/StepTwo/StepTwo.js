import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  Alert,
} from 'react-bootstrap';
import Countdown from '../../Countdown';

class StepTwo extends Component {
  static propTypes = {
    isChecking: PropTypes.bool,
    validateCode: PropTypes.string,
    validateCodeInputChange: PropTypes.func,
    isSending: PropTypes.bool,
    lastSendTime: PropTypes.number,
    sendValidateCode: PropTypes.func,
    submit: PropTypes.func,
    error: PropTypes.object,
  };

  static defaultProps = {
    isChecking: false,
    validateCode: '',
    validateCodeInputChange: (code)=>{},
    isSending: false,
    lastSendTime: 0,
    sendValidateCode: ()=>{},
    submit: ()=>{},
    error: {},
  };

  componentDidMount() {
    if (120 - (parseInt((new Date()).getTime()/1000) - this.props.lastSendTime) <= 0){
      this.props.sendValidateCode();
    }
  }

  constructor() {
    super();
    this.setInputValidateCode = this.setInputValidateCode.bind(this);
  }

  setInputValidateCode(event) {
    this.props.validateCodeInputChange(event.target.value);
  }

  render() {
    const self = this;
    let leftTime = 120 - (parseInt((new Date()).getTime()/1000) - this.props.lastSendTime);
    let isValidate = this.props.validateCode ? true : false;
    var disabled = true;
    if (!this.props.isChecking && isValidate){
      disabled = false;
    }
    let countDownView = (
      <Countdown
        leftTime={leftTime<0 ? 0 : leftTime}
        renderFunc={({second})=>{
          return <Button disabled>{second}</Button>
        }}
        renderRetryFunc={(times)=>{
          let sendText = 'Send email';
          if (times > 0) {
            sendText = 'Resend';
          }
          if (self.props.isSending) {
            return <Button disabled>发送中</Button>
          }
          return (
            <Button
              onClick={()=>{
                if (!self.props.isSending) {
                  self.props.sendValidateCode();
                }
              }}
              >
            {sendText}
            </Button>
          )
        }}
      />
    );
    return (
      <Form style={{ maxWidth:350, marginLeft:"auto", marginRight: "auto" }}>
        <FormGroup>
          <Alert bsStyle="warning">
            Check your verification code
          </Alert>
        </FormGroup>
        <FormGroup>
          <Col sm={8} style={{ marginBottom:10}} >
            <FormControl
              onChange={this.setInputValidateCode}
              value={this.props.validateCode}
              type="text"
              placeholder="Enter the verification code"
              autoComplete="off"
              autoFocus
              />
          </Col>
          <Col sm={4} style={{ marginBottom:10 }} >
          {countDownView}
          </Col>
        </FormGroup>
        <FormGroup style={{ paddingTop: 20 }}>
          <div style={{ color:'red', paddingLeft:15 }} >
          {_.get(this.props, 'error.message')}
          </div>
        </FormGroup>
        <FormGroup style={{ textAlign: "center", paddingTop: 20 }}>
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
      </Form>
    );
  }
}
export default StepTwo;
