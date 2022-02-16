/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { App, Deployment } from 'src/types/api';
import * as api from 'src/api';
import { Apps as AppIcon } from '@mui/icons-material'
import ConfirmDelete from 'src/components/ConfirmDelete';

interface AppDetailsProps {
  app: App
  onDelete: () => void
}

function AppDetails({ app, onDelete }: AppDetailsProps) {
  const [deployments, setDeployments] = useState<Deployment[]>([])

  useEffect(() => {
    api.getDeployments(app.name).then((t) => {
      setDeployments(t.data.deployments || [])
    }).catch(() => { })
  }, [app])

  const renderDeployments = () => deployments.map((d, i) => (
    <Box mt={1} key={i}>
      <Typography>
        (
        {d.name}
        )
        {' - '}
        {d.key}
      </Typography>
    </Box>
  ))

  return (
    <Box bgcolor="background.paper" display="flex" flexDirection="column" width="100%">

      <Box p={2} flexDirection="column">
        <Box display="flex">
          <AppIcon fontSize="large" />
          <Typography variant="h5" sx={{ ml: 2 }}>
            {' '}
            {app.name}
            {' '}
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Deployments</Typography>
          {renderDeployments()}
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Deployment History</Typography>
        </Box>
      </Box>
      <Box m={2}>
        <ConfirmDelete onDelete={onDelete} confirmText={app.name} />
      </Box>
    </Box>
  );
}

export default AppDetails;
