import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  SvgIcon
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Logo from 'src/components/Logo'
import ThemeSwitch from './ThemeSwitch';
import Account from './Account';

const PREFIX = 'TopBar';

const classes = {
  root: `${PREFIX}-root`,
  mobileToolbar: `${PREFIX}-mobileToolbar`,
  mobileAppBar: `${PREFIX}-mobileAppBar`,
  show: `${PREFIX}-show`,
  hide: `${PREFIX}-hide`,
  divider: `${PREFIX}-divider`
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    zIndex: theme.zIndex.drawer + 100,
    ...(theme.palette.mode === 'light'
      ? {
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.main
      }
      : {
      }),
    ...(theme.palette.mode === 'dark'
      ? {
        backgroundColor: theme.palette.background.default
      }
      : {
      })
  },

  [`& .${classes.mobileToolbar}`]: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  [`& .${classes.mobileAppBar}`]: {
    top: 'auto',
    bottom: 0,
    backgroundColor: 'black'
  },

  [`& .${classes.show}`]: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },

  [`& .${classes.hide}`]: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },

  [`& .${classes.divider}`]: {
    borderRight: 'solid white 1px',
    borderColor: 'white'
  }
}));

interface TopBarProps {
  className?: string,
  toggleMobileNav?: () => void
}

function TopBar({ className, toggleMobileNav, ...rest }: TopBarProps) {
  return (
    <Root>
      <AppBar className={clsx(classes.root, className)} {...rest} position="sticky">
        <Toolbar sx={{ minHeight: 64 }}>
          <Hidden lgUp>
            <IconButton color="inherit" onClick={toggleMobileNav}>
              <SvgIcon fontSize="small">
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Hidden>
          <Box flexGrow={5} />
          <ThemeSwitch />
          <Account />
        </Toolbar>
      </AppBar>
    </Root>
  )
}

export default TopBar
