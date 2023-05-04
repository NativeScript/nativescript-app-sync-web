import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Topbar from './components/Topbar'

const PREFIX = 'Auth';

const classes = {
  content: `${PREFIX}-content`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.content}`]: {
    height: '100%',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  }
}));

interface AuthLayoutProps {
  children?: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Auth({ children }: AuthLayoutProps) {
  return (
    <Root>
      <Topbar />
      <main className={classes.content}>
        {children}
        <Outlet />
      </main>
    </Root>
  )
}

export default Auth
