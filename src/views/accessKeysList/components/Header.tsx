import {
  Grid, Typography, Button, Theme
} from '@mui/material'
import { SxProps } from '@mui/system'
import { useState } from 'react'
import CreateDialog from './CreateDialog'

type HeaderProps = {
  sx?: SxProps<Theme>
  fetchAccessKeys: () => {}
}

function Header(props: HeaderProps) {
  const { fetchAccessKeys, ...rest } = props
  const [createModal, setCreateModal] = useState(false)

  return (
    <Grid {...rest}>
      <Grid alignItems="flex-end" container sx={{ justifyContent: 'space-between' }} spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Api
          </Typography>
          <Typography component="h1" variant="h4">
            Access Keys
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setCreateModal(true)}
          >
            Create Access Key
          </Button>
        </Grid>
      </Grid>
      {createModal && (
        <CreateDialog onClose={() => {
          fetchAccessKeys()
          setCreateModal(false)
        }}
        />
      )}
    </Grid>
  );
}

export default Header
