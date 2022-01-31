import { styled } from '@mui/material/styles';
import {
  Card
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import useAuth from 'src/hooks/useAuth';
import LoginForm from './components/LoginForm'
import MFAForm from './components/MFAForm';

const PREFIX = 'Login';

const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`
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
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  }

}));

function Login() {
  const auth = useAuth()
  const isMfaStep = Boolean(auth.mfa)

  return (
    <Root className={classes.root}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Card className={classes.card}>

        {isMfaStep && <MFAForm sx={{ mt: 3 }} />}
        {!isMfaStep && <LoginForm sx={{ mt: 3 }} />}

      </Card>
    </Root>
  );
}

export default Login
