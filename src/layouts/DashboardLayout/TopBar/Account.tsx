import { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'
import useAuth from 'src/hooks/useAuth'

function Account() {
  const ref = useRef<Element>(null)
  const [isOpen, setOpen] = useState<boolean>(false)
  const auth = useAuth()

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleLogout = () => {
    try {
      auth.logout()
    } catch (err) {
      toast.error('Unable to logout')
    }
  }

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt="User"
          sx={{
            height: 32,
            width: 32,
            mr: 1
          }}
        />
        <Hidden smDown>
          <Typography variant="h6" color="inherit" />
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{
          sx: { width: 200 }
        }}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem
          onClick={() => {
            handleLogout()
            handleClose()
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Account
