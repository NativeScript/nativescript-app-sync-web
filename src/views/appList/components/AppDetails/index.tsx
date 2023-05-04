import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { App, Deployment } from 'src/types/api';
import * as api from 'src/api';
import { Apps as AppIcon } from '@mui/icons-material'
import ConfirmDelete from 'src/components/ConfirmDelete';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeploymentHistory from './DeploymentHistoryList';

interface AppDetailsProps {
  app: App
  onDelete: () => void
}

function AppDetails({ app, onDelete }: AppDetailsProps) {
  const [deployments, setDeployments] = useState<Deployment[]>([])
  const [deploymentHistoryStaging, setDeploymentHistoryStaging] = useState<api.DeploymentHistory[]>([])
  const [deploymentHistoryProduction, setDeploymentHistoryProduction] = useState<api.DeploymentHistory[]>([])

  useEffect(() => {
    api.getDeployments(app.name).then((t) => {
      setDeployments(t.data.deployments || [])
    }).catch(() => { })

    api.getDeploymentHistory(app.name, 'Production').then((res) => {
      setDeploymentHistoryProduction(res.data.history || [])
    }).catch(() => { })

    api.getDeploymentHistory(app.name, 'Staging').then((res) => {
      setDeploymentHistoryStaging(res.data.history || [])
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Production History</Typography>
            </AccordionSummary>
            <DeploymentHistory data={deploymentHistoryProduction} />
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Staging History</Typography>
            </AccordionSummary>
            <DeploymentHistory data={deploymentHistoryStaging} />
          </Accordion>
        </Box>
      </Box>
      <Box m={2}>
        <ConfirmDelete onDelete={onDelete} confirmText={app.name} />
      </Box>
    </Box>
  );
}

export default AppDetails;
