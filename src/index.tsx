/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { Toaster } from 'react-hot-toast';
import { StyledEngineProvider } from '@mui/material'
import { SettingsProvider } from 'src/contexts/SettingsContext'
import { AuthProvider } from 'src/contexts/JWTAuthContext'
import { ServiceWorkerProvider } from 'src/contexts/ServiceWorkerContext'
import 'react-perfect-scrollbar/dist/css/styles.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

try {
  window.addEventListener('error', async (err) => {
    // Since we are handling the error here, we must make
    // sure we log it into the console nonetheless, otherwise
    // it will be very difficult to understand why your app
    // is crashing.
    console.error(err);

    // If no service worker is available, our work ends here
    // because we don't need to unregister the service worker
    // to make sure the user is able to get a newer version of
    // our application.
    if (!navigator.serviceWorker) {
      return;
    }

    // On development builds of React, error boundaries don't stop
    // errors from bubbling up to the window error handler, so we don't
    // want to execute this code here because it would be unreliable
    // https://github.com/facebook/react/issues/12897#issuecomment-410036991
    if (process.env.NODE_ENV !== 'development') {
      // We want to run this code only if we detect a new service worker
      // is getting installed or is installed but waiting to be activated.
      // This will make sure we don't run this code on a sane environment
      // that is crashing for an error not related to stale app cache.
      const registration = await navigator.serviceWorker.ready;
      if (registration.installing || registration.waiting) {
        navigator.serviceWorker.ready.then(async (registration) => {
          await registration.unregister();
          // Once the service worker is unregistered, we can reload
          // the page to let the browser download a fresh copy of our app
          window.location.reload();
        });
      }
    }
  });
} catch (error) {
  console.log(error)
}

ReactDOM.render(
  <ServiceWorkerProvider>
    <StyledEngineProvider injectFirst>
      <HelmetProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <AuthProvider>
              <Router>
                <Toaster position="top-center" />
                <App />
              </Router>
            </AuthProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </HelmetProvider>
    </StyledEngineProvider>
  </ServiceWorkerProvider>,
  document.getElementById('root')
)

reportWebVitals()
