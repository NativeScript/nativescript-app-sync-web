import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography, Link, Theme
} from '@mui/material'
import { SxProps } from '@mui/system'

const StyledAppBar = styled(AppBar)(() => ({
  boxShadow: 'none'
}));

type TopbarProps = {
  sx?: SxProps<Theme>
}

function Topbar(props: TopbarProps) {
  const { ...rest } = props

  return (
    <StyledAppBar {...rest} color="primary">
      <Toolbar>
        <Link component={RouterLink} to="/" underline="none">
          <Typography variant="h4" color="white">
            Nativescript OTA
          </Typography>
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Topbar
