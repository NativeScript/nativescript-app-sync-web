import {
  Button, TextField, Box, Typography
} from '@mui/material'
import { useState } from 'react'
import { register } from 'src/api'
import PasswordStrength from 'src/components/PasswordStrength'
import { FormState } from 'src/hooks/useFormState'
import { FormStateRegister } from 'src/types/formstates'

type StepThreePasswordProps = {
  form: FormState<FormStateRegister>
  onSubmit: () => void
}

function StepThreePassword(props: StepThreePasswordProps) {
  const { form, onSubmit } = props
  const { formState, hasError, handleChange } = form
  const [error, setError] = useState('')
  const [isValidPassword, setIsValidPassword] = useState(false)

  const { password, passwordMatch } = formState.values

  const handleSubmit = async () => {
    const { email, ackCode, password } = formState.values
    setError('')
    const { data } = await register(email, password, ackCode)

    if (data.status === 'OK') {
      return onSubmit()
    }

    return setError(data.errorMessage)
  }

  return (
    <Box>
      <Box onSubmit={handleSubmit}>
        <Box>
          <TextField
            sx={{ m: 1 }}
            error={hasError('password')}
            fullWidth
            helperText={formState.errors?.password?.[0]}
            autoComplete="password"
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={formState.values.password}
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            error={hasError('passwordMatch')}
            fullWidth
            helperText={formState.errors?.passwordMatch?.[0]}
            autoComplete="password"
            label="Re-Password"
            name="passwordMatch"
            onChange={handleChange}
            type="password"
            value={formState.values.passwordMatch}
            variant="outlined"
          />
        </Box>
        <Box>
          <PasswordStrength
            password={password}
            passwordMatch={passwordMatch}
            onChange={(rules) => {
              setIsValidPassword(!rules.find((f) => !f.valid))
            }}
          />
        </Box>
        <Box mt={1}>
          <Typography color="red">
            {error}
          </Typography>
        </Box>
        <Button
          sx={{
            mt: 2,
            width: '100%'
          }}
          onClick={handleSubmit}
          color="secondary"
          disabled={!isValidPassword}
          type="submit"
          variant="contained"
        >
          Create account
        </Button>
      </Box>
    </Box>

  );
}

export default StepThreePassword
