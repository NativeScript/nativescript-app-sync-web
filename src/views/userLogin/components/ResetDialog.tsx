import { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Button,
  TextField
} from '@mui/material'

function ResetDialog({
  toggleResetPassword,
  open
}: {
  toggleResetPassword: () => void,
  open: boolean
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    message: ''
  })

  const onForgotPasswordSubmit = () => {
    if (!email) return
    setMessage({
      type: '',
      message: ''
    })
    setLoading(true)
    // TODO implement forgot password
    // forgotPassword({
    //   variables: {
    //     email
    //   }
    // })
    //   .then(() => {
    //     setMessage({
    //       message: 'Success! If an account exists with this email, you will receive a reset link in your inbox',
    //       type: 'success'
    //     })
    //     setEmail('')
    //   })
    //   .catch((e: Error) => {
    //     setMessage({
    //       message: e.message,
    //       type: 'error'
    //     })
    //   })
  }

  const renderMessage = () => {
    if (message.type === 'error') {
      return <Typography color="error">{message.message}</Typography>
    }

    return <Typography sx={{ color: 'success.main' }}>{message.message}</Typography>
  }
  return (
    <Dialog open={open} onClose={toggleResetPassword} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To reset your password, please enter your email address here. We will send a reset link to
          your inbox if an email exists
        </DialogContentText>
        {renderMessage()}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleResetPassword} color="primary">
          Cancel
        </Button>
        <Button onClick={onForgotPasswordSubmit} color="primary" disabled={loading}>
          Reset
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ResetDialog
