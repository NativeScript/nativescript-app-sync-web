import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import {
  Card, CardContent, Typography, CircularProgress
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useQueryParam } from 'src/hooks/useQueryParam'
import ResetPasswordForm from './ResetPasswordForm'

const PREFIX = 'ResetPassword';

const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  content: `${PREFIX}-content`,
  loader: `${PREFIX}-loader`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },

  [`& .${classes.card}`]: {
    width: theme.breakpoints.values.sm
  },

  [`& .${classes.content}`]: {
    padding: theme.spacing(8, 4, 3, 4)
  },

  [`& .${classes.loader}`]: {
    marginTop: 100,
    justifyContent: 'center',
    display: 'flex'
  }
}));

function ResetPassword() {
  const { params: { e: email, p: passwordReset } } = useQueryParam()
  const [isValid, setIsValid] = useState<Boolean | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!email || !passwordReset) setIsValid(false)
    else {
      // TODO implement isValidReset
      // isValidReset({
      //   variables: {
      //     email,
      //     passwordReset
      //   }
      // })
      //   .then(() => {
      //     setIsValid(true)
      //   })
      //   .catch(() => {
      //     setIsValid(false)
      //   })
    }
  }, [])

  return (
    <Root className={classes.root}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center" variant="h4">
            Reset Password
          </Typography>

          {isValid && (
            <div className={classes.content}>
              <ResetPasswordForm
                sx={{ mt: 3 }}
                email={email as string}
                passwordReset={passwordReset as string}
              />
            </div>
          )}
          {isValid === false && (
            <div className={classes.content}>
              <Typography color="error" align="center">
                This reset link is no longer valid
              </Typography>
            </div>
          )}
          {loading && (
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          )}
        </CardContent>
      </Card>
    </Root>
  );
}

export default ResetPassword
