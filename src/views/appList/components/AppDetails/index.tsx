/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { useFormState } from 'src/hooks/useFormState';
import { pathOr } from 'ramda';
import { App, Deployment } from 'src/types/api';
import * as api from 'src/api';
import { Apps as AppIcon } from '@mui/icons-material'

interface AppDetailsProps {
  app: App
  onDelete: () => void
}

function AppDetails({ app, onDelete }: AppDetailsProps) {
  const [deployments, setDeployments] = useState<Deployment[]>([])

  useEffect(() => {
    api.getDeployments(app.name).then((t) => {
      setDeployments(t.data.deployments || [])
    }).catch((e) => console.log(e))
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
        <Button color="error" onClick={onDelete} variant="outlined">Delete</Button>
      </Box>
    </Box>
  );
}

export default AppDetails;
