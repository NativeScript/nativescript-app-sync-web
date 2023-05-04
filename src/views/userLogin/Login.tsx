import { styled } from '@mui/material/styles';
import {
  Card
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import LoginForm from './components/LoginForm'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6, 2)
}));

function Login() {
  return (
    <Root>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Card>
        <LoginForm sx={{ mt: 3, p: 5 }} />
      </Card>
    </Root>
  );
}

export default Login
