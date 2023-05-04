import {
  Grid, Typography, Button, Theme
} from '@mui/material'
import { SxProps } from '@mui/system'
import { useState } from 'react'
import CreateDialog from './CreateDialog'

type HeaderProps = {
  sx?: SxProps<Theme>
  fetchApps: () => {}
}

function Header(props: HeaderProps) {
  const { fetchApps, ...rest } = props
  const [createModal, setCreateModal] = useState(false)

  return (
    <Grid {...rest}>
      <Grid alignItems="flex-end" container sx={{ justifyContent: 'space-between' }} spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h4">
            Apps
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setCreateModal(true)}
          >
            Create App
          </Button>
        </Grid>
      </Grid>
      {createModal && (
        <CreateDialog onClose={() => {
          fetchApps()
          setCreateModal(false)
        }}
        />
      )}
    </Grid>
  );
}

export default Header
