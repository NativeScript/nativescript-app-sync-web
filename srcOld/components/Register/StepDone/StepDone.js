import React from 'react';
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import Link from '../../Link';


function StepDone() {
  return (
    <Form style={{  maxWidth:350, marginLeft:"auto", marginRight: "auto" }}>
      <FormGroup style={{ textAlign:'center' }}>
        <div>
          <span>Congrats! You have successfully registered 😊</span>
          <Link to="/login" style="font-weight: bold">Log in</Link>
        </div>
      </FormGroup>
    </Form>
  );
}
export default StepDone;
