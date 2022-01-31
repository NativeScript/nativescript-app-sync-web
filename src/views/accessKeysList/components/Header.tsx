import {
  Grid, Typography, Button, Theme
} from '@mui/material'
import { SxProps } from '@mui/system'

  type HeaderProps = {
    sx?: SxProps<Theme>
  }

function Header(props: HeaderProps) {
  const { ...rest } = props

  return (
    <Grid {...rest}>
      <Grid alignItems="flex-end" container sx={{ justifyContent: 'space-between' }} spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h4">
            Access Keys
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => alert('unimplemented')}
          >
            Create Access Key
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header
