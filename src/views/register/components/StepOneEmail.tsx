import {
  Button, TextField, Box, Typography
} from '@mui/material'
import { useState } from 'react'
import * as api from 'src/api'
import { FormState } from 'src/hooks/useFormState'
import { FormStateRegister } from 'src/types/formstates'

type StepOneEmailProps = {
  form: FormState<FormStateRegister>
  onSubmit: () => void
}

function StepOneEmail(props: StepOneEmailProps) {
  const { form, onSubmit } = props
  const { formState, hasError, handleChange } = form
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    const { email } = formState.values
    setError('')
    const emailExists = await api.checkEmailExists(email)
    if (emailExists.data.exists) {
      setError('This emails already exists')
      return
    }

    await api.sendRegisterCode(formState.values.email)
    onSubmit()
  }

  return (
    <Box>
      <Box onSubmit={handleSubmit}>
        <Box>
          <TextField
            error={hasError('email')}
            fullWidth
            helperText={hasError('email') ? formState.errors.email[0] : null}
            autoComplete="username"
            label="Email address"
            name="email"
            onChange={handleChange}
            value={formState.values.email || ''}
            variant="outlined"
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
          disabled={!formState.values.email}
          type="submit"
          variant="contained"
        >
          Continue
        </Button>
      </Box>
    </Box>

  );
}

export default StepOneEmail
