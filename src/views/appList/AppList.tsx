/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import {
  Box, Dialog
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import * as api from 'src/api';
import { App } from 'src/types/api';
import Header from './components/Header';
import Results from './components/Results';
import AppDetails from './components/AppDetails';

function AccessKeysList() {
  const [apps, setApps] = useState<App[]>([])
  const [selectedApp, setSelectedApp] = useState<App>()

  const fetchApps = async () => {
    const res = await api.getApps()
    setApps(res.data?.apps || [])
  }

  useEffect(() => {
    fetchApps().then(() => { }).catch(() => { })
  }, [])

  const onDelete = async () => {
    const res = await api.removeApp(selectedApp.name)
    if (res.data[0] === 1) {
      setSelectedApp(null)
      await fetchApps()
    }
  }

  return (
    <Box p={3}>
      <Helmet>
        <title>Apps</title>
      </Helmet>
      <Header fetchApps={fetchApps} />
      <Results data={apps} onSelect={(app: App) => setSelectedApp(app)} />
      {selectedApp
        && (
          <Dialog open fullWidth maxWidth="lg" onClose={() => setSelectedApp(null)}>
            <AppDetails app={selectedApp} onDelete={onDelete} />
          </Dialog>
        )}

    </Box>
  );
}

export default AccessKeysList
