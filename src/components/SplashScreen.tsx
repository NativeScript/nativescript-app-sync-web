import { styled } from '@mui/material/styles';
import {
  Box, LinearProgress
} from '@mui/material'

const Root = styled('div')(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  left: 0,
  padding: theme.spacing(3),
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 2000
}));

function SlashScreen() {
  return (
    <Root>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </Root>
  )
}

export default SlashScreen
