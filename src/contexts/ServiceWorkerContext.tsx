import {
  createContext, useEffect, useMemo, useState
} from 'react';
import type { ReactNode } from 'react';
import * as serviceWorker from '../serviceWorkerRegistration'

interface ProviderProps {
  children?: ReactNode;
}

const ServiceWorkerContext = createContext({ isUpdateAvailable: false, updateAssets: () => { } });

export function ServiceWorkerProvider(props: ProviderProps) {
  const { children } = props;

  const [waitingServiceWorker, setWaitingServiceWorker] = useState<ServiceWorker | null>(null);
  const [isUpdateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    serviceWorker.register({
      onUpdate: (registration) => {
        setWaitingServiceWorker(registration.waiting);
        setUpdateAvailable(true);
      },
      onWaiting: (waiting) => {
        setWaitingServiceWorker(waiting);
        setUpdateAvailable(true);
      }
    });

    setInterval(() => {
      navigator.serviceWorker.register('/service-worker.js').then((reg) => {
        reg.update().then(() => {}).catch(() => {})
      }).catch(() => {})
    }, 60000 * 15)
  }, []);

  useEffect(() => {
    // We setup an event listener to automatically reload the page
    // after the Service Worker has been updated, this will trigger
    // on all the open tabs of our application, so that we don't leave
    // any tab in an incosistent state
    waitingServiceWorker?.addEventListener('statechange', (event: Event) => {
      // TODO come back to fix this type
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (event.state === 'activated') {
        window.location.reload();
      }
    });
  }, [waitingServiceWorker]);

  const value = useMemo(() => ({
    isUpdateAvailable,
    updateAssets: () => {
      if (waitingServiceWorker) {
        // We send the SKIP_WAITING message to tell the Service Worker
        // to update its cache and flush the old one
        waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
      }
    }
  }), [isUpdateAvailable, waitingServiceWorker]);

  return (
    <ServiceWorkerContext.Provider value={value}>
      {children}
    </ServiceWorkerContext.Provider>
  );
}

export const ServiceWorkerConsumer = ServiceWorkerContext.Consumer;

export default ServiceWorkerContext;
