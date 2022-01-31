import { useEffect, useState } from 'react'
import {
  Typography, Button, TextField, Link, Divider, CardContent, CircularProgress
} from '@mui/material'
import type {
  Theme
} from '@mui/material'
import { useNavigate } from 'react-router';
import useAuth from 'src/hooks/useAuth'
import { Box } from '@mui/system'
import type { SxProps } from '@mui/system'
import { Lock, LogIn } from 'react-feather';
import { isNumber } from 'validate.js';
import { MfaMethod } from 'src/types/__generated__/typescript-operations';
import { formatDuration, intervalToDuration } from 'date-fns'

type MFAFormProps = {
  sx?: SxProps<Theme>
}

function MFAForm(props: MFAFormProps) {
  const { ...rest } = props
  const auth = useAuth()
  const navigate = useNavigate()

  const [nextSendOTPAt, setNextSendOTPAt] = useState('')
  const [waitTime, setWaitTime] = useState('')

  const [error, setError] = useState('')
  const [loadingOTP, setLoadingOTP] = useState(false)

  const [code, setCode] = useState('')
  const [method, setMethod] = useState<MfaMethod>()
  const [availMethods, setAvailMethods] = useState<MfaMethod[]>()

  const otherMethods = availMethods?.filter((f) => f !== method)
  const isSendMethod = method !== MfaMethod.Authenticator

  const waitToSendOTP = nextSendOTPAt && new Date(nextSendOTPAt) > new Date()

  const setOTPWaitMsg = () => {
    if (!waitToSendOTP) {
      if (setWaitTime) { setWaitTime('') }
      return
    }

    const duration = intervalToDuration({ start: new Date(nextSendOTPAt), end: new Date() })

    const timeLeft = formatDuration(duration, { format: ['hours', 'minutes', 'seconds'] })
    setWaitTime(timeLeft)
  }

  useEffect(() => {
    const { mfa } = auth
    const hasAuthenticator = mfa?.mfaOptions.find((f) => f.type === MfaMethod.Authenticator)
    const hasSMS = mfa?.mfaOptions.find((f) => f.type === MfaMethod.Sms)
    const hasEmail = mfa?.mfaOptions.find((f) => f.type === MfaMethod.Email)

    if (hasAuthenticator) setMethod(hasAuthenticator.type)
    else {
      const type = hasSMS?.type || hasEmail?.type
      setMethod(type)
      sendOTP(type).then(() => { }).catch(() => { })
    }

    const types = mfa?.mfaOptions?.map((m) => m.type)
    setAvailMethods(types)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setOTPWaitMsg()
    }, 500)

    return () => clearInterval(interval)
  }, [nextSendOTPAt])

  const handleSubmit = async () => {
    setError('')

    const res = await auth.login({ method, code })
    if (!res) { return setError('Code incorrect') }

    return navigate('/', { replace: true })
  }

  const sendOTP = async (method: MfaMethod) => {
    setLoadingOTP(true)

    try {
      const res = await auth.sendOTPWithToken(method)
      if (!res.success) {
        setError('Unable to send code')
        setNextSendOTPAt(String(res.otp_send_next_at))
      }
    } finally {
      setLoadingOTP(false)
    }
  }

  const onMethodChange = async (m: MfaMethod) => {
    if (m !== MfaMethod.Authenticator) { await sendOTP(m) }

    setMethod(m)
  }

  if (!availMethods) return <div />

  const viaMsg = isSendMethod ? `sent to you via ${method.toLowerCase()}` : `from your ${method.toLowerCase()} app`

  const showResendOption = isSendMethod && !loadingOTP && !waitToSendOTP

  return (
    <CardContent {...rest} onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
        <Lock size={70} />
        <Typography sx={{ mt: 2 }} gutterBottom variant="h4">
          Athenticate your account
        </Typography>
        <Typography gutterBottom variant="body1">
          Protecting your account is our top priority.
        </Typography>
        <Typography gutterBottom variant="body1">
          Please confirm your account by entering the code
          {' '}
          <strong>{viaMsg}</strong>
        </Typography>
        <Typography gutterBottom color="red">
          {error}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box maxWidth={400}>
          <TextField
            value={code}
            onChange={(e) => {
              if (!isNumber(Number(e.target.value))) return

              setCode(e.target.value)
            }}
            autoComplete="one-time-code"
            label="Code"
            name="code"
            variant="standard"
          />
          <Button
            sx={{
              ml: 2,
              mt: 1
            }}
            onClick={handleSubmit}
            color="primary"
            disabled={!code}
            size="large"
            type="submit"
            variant="contained"
          >
            <LogIn />
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        {loadingOTP && <CircularProgress size={13} />}
        {showResendOption && (
          <Typography gutterBottom variant="body1" fontSize={13}>
            Sending a code can take a minute. If you did not receive your code you can
            {' '}
            <Link
              onClick={() => sendOTP(method)}
              align="right"
              fontSize={14}
              sx={{ cursor: 'pointer' }}
            >
              Resend
            </Link>
            {' '}
            it
          </Typography>
        )}
        {waitToSendOTP && (
          <Typography gutterBottom variant="body1" fontSize={13}>
            You must wait
            {' '}
            {waitTime}
            {' '}
            before resending code
          </Typography>
        )}
      </Box>

      <Divider />
      {otherMethods.map((m, i) => (
        <div key={i}>
          <Link
            onClick={() => onMethodChange(m)}
            align="right"
            fontSize={14}
            sx={{ cursor: 'pointer' }}
          >
            Send via
            {' '}
            {m}
          </Link>
        </div>
      ))}
    </CardContent>
  );
}

export default MFAForm
