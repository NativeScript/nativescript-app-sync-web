/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
// TODO have not implemented this page yet
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import {
  Typography, Button, TextField, Theme
} from '@mui/material'
import { Box, SxProps } from '@mui/system'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useNavigate } from 'react-router';
import { useFormState } from 'src/hooks/useFormState'
import PasswordStrength, { Rules } from 'src/components/PasswordStrength'
import { all, propEq } from 'ramda'
import { ROUTES } from 'src/constants';

const PREFIX = 'ResetPasswordForm';

const classes = {
  root: `${PREFIX}-root`,
  fields: `${PREFIX}-fields`,
  submitButton: `${PREFIX}-submitButton`,
  success: `${PREFIX}-success`,
  successBtn: `${PREFIX}-successBtn`
};

const Root = styled('form')(({ theme }) => ({
  [`& .${classes.fields}`]: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },

  [`& .${classes.submitButton}`]: {
    marginTop: theme.spacing(2),
    width: '100%'
  },

  [`& .${classes.success}`]: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.success.light
  },

  [`& .${classes.successBtn}`]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    color: theme.palette.success.light
  }
}));

type ResetPasswordFormProps = {
  email: string
  passwordReset: string
  sx?: SxProps<Theme>
}

function ResetPasswordForm(props: ResetPasswordFormProps) {
  const {
    passwordReset, email, ...rest
  } = props

  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const { handleChange, formState, setFormState } = useFormState({
    initialState: {
      values: {
        password: '',
        passwordMatch: ''
      }
    }
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState({
      ...formState,
      isLoading: true
    })
    setMessage('')
    // TODO implement resetPassword
    // try {
    //   await resetPassword({
    //     variables: {
    //       password: formState.values.password,
    //       passwordReset,
    //       email
    //     },
    //     fetchPolicy: 'no-cache'
    //   })

    //   setShowSuccess(true)
    // } catch (e) {
    //   setMessage('Unable to reset password')
    // }
  }

  const setFormValidity = (rules: Rules) => {
    const isValid = all(propEq('valid', true), rules)
    setFormState({
      ...formState,
      isValid
    })
  }

  return (
    <Root onSubmit={handleSubmit}>
      <Box {...rest}>
        <Typography color="error" gutterBottom>
          {message}
        </Typography>
        {!showSuccess && (
          <>
            <div className={classes.fields}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                value={formState.values.password}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Re-enter Password"
                name="passwordMatch"
                onChange={handleChange}
                type="password"
                value={formState.values.passwordMatch}
                variant="outlined"
              />
            </div>

            <PasswordStrength
              password={formState.values.password}
              passwordMatch={formState.values.passwordMatch}
              onChange={setFormValidity}
            />

            <Button
              className={classes.submitButton}
              color="secondary"
              disabled={!formState.isValid}
              size="large"
              type="submit"
              variant="contained"
            >
              Reset Password
            </Button>
          </>
        )}
        {showSuccess && (
          <>
            <div className={classes.success}>
              <CheckCircleOutlineIcon
                style={{
                  fontSize: 120
                }}
              />
            </div>
            <div className={classes.successBtn}>
              <Button
                onClick={() => navigate(ROUTES.LOGIN, { replace: true })}
                type="button"
                color="inherit"
              >
                Sign In
              </Button>
            </div>
          </>
        )}
      </Box>
    </Root>
  );
}

export default ResetPasswordForm
