import {
  Button, TextField, Box, Typography
} from '@mui/material'
import { useState } from 'react'
import { checkRegisterCodeExists } from 'src/api'
import { FormState } from 'src/hooks/useFormState'
import { FormStateRegister } from 'src/types/formstates'

type StepTwoVerifyProps = {
  form: FormState<FormStateRegister>
  onSubmit: () => void
}

function StepTwoVerify(props: StepTwoVerifyProps) {
  const { form, onSubmit } = props
  const { formState, hasError, handleChange } = form
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    const { email, ackCode } = formState.values
    setError('')
    const { data } = await checkRegisterCodeExists(email, ackCode)

    if (data.status === 'OK') {
      return onSubmit()
    }

    return setError('Invalid code')
  }

  return (
    <Box>
      <Box onSubmit={handleSubmit}>
        <Box>
          <TextField
            error={hasError('ackCode')}
            fullWidth
            helperText={formState.errors?.ackCode?.[0]}
            label="Verification Code"
            name="ackCode"
            onChange={handleChange}
            value={formState.values.ackCode}
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
          disabled={!formState.values.ackCode}
          type="submit"
          variant="contained"
        >
          Verify
        </Button>
      </Box>
    </Box>

  );
}

export default StepTwoVerify
