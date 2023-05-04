import { useContext } from 'react'
import ServiceWorkerContext from 'src/contexts/ServiceWorkerContext'

// With this React Hook we'll be able to access `isUpdateAvailable` and `updateAssets`
export const useServiceWorker = () => useContext(ServiceWorkerContext)
