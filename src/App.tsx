import {
  Box, Button, CssBaseline, ThemeProvider
} from '@mui/material'
import { useRoutes } from 'react-router';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { createCustomTheme } from './theme'
import useSettings from './hooks/useSettings'
import routes from './routes';
import useScrollReset from './hooks/useScrollReset'
import { useServiceWorker } from './hooks/useServiceWorker';
import useAuth from './hooks/useAuth';
import SplashScreen from './components/SplashScreen';

function App() {
  const { settings } = useSettings()
  const content = useRoutes(routes);
  const { isUpdateAvailable, updateAssets } = useServiceWorker();
  useScrollReset();
  const { isInitialized } = useAuth()

  useEffect(() => {
    if (isUpdateAvailable) {
      toast((t) => (
        <Box display="flex">
          A new version of this app is available!
          <Button
            size="small"
            onClick={() => {
              updateAssets()
              toast.dismiss(t.id)
            }}
          >
            reload
          </Button>
        </Box>
      ), { duration: Infinity, position: 'bottom-left' });
    }
  }, [isUpdateAvailable])

  const theme = createCustomTheme({
    theme: settings.theme
  });

  if (!isInitialized) return <SplashScreen />

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  )
}

export default App
