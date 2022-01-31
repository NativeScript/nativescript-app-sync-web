import { useState } from 'react'
import {
  Typography, Box, Stepper, Step, StepLabel, Container
} from '@mui/material'
import { useNavigate } from 'react-router';
import useAuth from 'src/hooks/useAuth'
import { useFormState } from 'src/hooks/useFormState';
import StepOneEmail from './components/StepOneEmail';
import StepTwoVerify from './components/StepTwoVerify';
import StepThreePassword from './components/StepThreePassword';

const steps = [
  'Provide your email',
  'Verify email',
  'Create password',
];

function Register() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const auth = useAuth()

  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(1)

  const registerForm = useFormState({
    schema: {
      email: {
        email: true,
        presence: true
      }
    },
    initialState: {
      values: {
        email: '',
        password: '',
        passwordMatch: '',
        ackCode: ''
      }
    }
  })

  const incrementStep = () => setActiveStep(activeStep + 1)

  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography gutterBottom variant="h4">
          Register
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>

      <Box sx={{
        mt: 5, display: 'flex', justifyContent: 'center',
      }}
      >
        {activeStep === 1 && <StepOneEmail form={registerForm} onSubmit={incrementStep} />}
        {activeStep === 2 && <StepTwoVerify form={registerForm} onSubmit={incrementStep} />}
        {activeStep === 3 && <StepThreePassword form={registerForm} onSubmit={() => navigate('/login')} />}
      </Box>
    </Box>
  );
}

export default Register
