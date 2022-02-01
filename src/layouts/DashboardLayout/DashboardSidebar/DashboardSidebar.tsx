import { useEffect } from 'react'
import {
  useLocation, Link as RouterLink
} from 'react-router-dom'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Link,
} from '@mui/material'
import {
  Key as KeyIcon,
  Apps as AppIcon,
} from '@mui/icons-material'
import Logo from 'src/components/Logo'
import Scrollbar from 'src/components/Scrollbar';
import { ROUTES } from 'src/constants'
import NavSection from './NavSection';

interface NavBarProps {
  onMobileClose: () => void,
  openMobile: boolean
}

const sections = [
  {
    title: 'AppSync',
    items: [
      {
        title: 'Access Keys',
        adminRequired: false,
        icon: <KeyIcon />,
        path: ROUTES.ACCESS_KEYS_LIST
      },
      {
        title: 'Apps',
        icon: <AppIcon />,
        path: ROUTES.APP_LIST
      }
    ],
  },
]

function NavBar({ onMobileClose, openMobile }: NavBarProps) {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname])

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box p={2} sx={{ display: { lg: 'none', xs: 'block' } }} display="flex" justifyContent="center">
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Box>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="User"
              sx={{
                cursor: 'pointer',
                width: 64,
                height: 64
              }}
            />
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              component={RouterLink}
              to="/app/account"
              variant="h5"
              color="textPrimary"
              underline="none"
            />
          </Box>

        </Box>
        <Box p={2}>
          {sections.map((section, i) => (
            <NavSection
              key={i}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
      </Scrollbar>
    </Box>
  )

  return (
    <>
      {/* MOBILE DRAWER */}
      <Drawer
        sx={{ display: { lg: 'none', xs: 'block' } }}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 10px) !important',
            top: '10px !Important',
            width: 256
          }
        }}
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
      >
        {content}
      </Drawer>

      {/* DESKTOP DRAWER */}
      <Drawer
        sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            width: 256
          }
        }}
        anchor="left"
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </>
  )
}

export default NavBar
