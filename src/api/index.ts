import { axios } from 'src/utils/axios'

// AUTH
export const login = (account: string, password: string) => axios.post<{ tokens: string }>('/auth/login', { account, password, minutes: 43200 })
export const changePassword = (oldPassword: string, newPassword: string) => axios.patch('/users/password', { oldPassword, newPassword })

// REGISTER
export const register = (email: string, password: string, token: string) => axios.post('/users', { email, password, token })
export const checkEmailExists = (email: string) => axios.get(`/users/exists?email=${encodeURI(email)}`)
export const sendRegisterCode = (email: string) => axios.post('/users/registerCode', { email })
export const checkRegisterCodeExists = (email: string, code: string) => {
  const query = `email=${encodeURI(email)}&token=${encodeURI(code)}`
  return axios.get(`/users/registerCode/exists?${query}`)
}

// ACCESS KEYS
export const getAccessKeys = () => axios.get('/accessKeys')
export const createAccessKey = (friendlyName = 'UI-user') => {
  const time = (new Date()).getTime();
  const createdBy = `Login-${time}`
  const ttl = 30 * 2 * 24 * 60 * 60 * 1000;
  const isSession = true;
  return axios.post('/accessKeys', {
    friendlyName, ttl, createdBy, isSession
  })
}
export const removeAccessKey = (name: string) => axios.delete(`/accessKeys/${encodeURI(name)}`)
export const patchAccessKey = (name: string, friendlyName: string, ttl = 0) => axios.patch(`/accessKeys/${encodeURI(name)}`, { friendlyName, ttl })

// APPS
export const getApps = () => axios.get('/apps')
export const getDeployments = (appName: string) => axios.get(`/apps/${appName}/deployments`)
export const addApp = (name: string, os: string, platform: string) => axios.post('/apps', { name, os, platform })

// READMEs
export const buildReadmeUrl = () => '/README.md' // TODO put this readme as markdown on the front end?
export const buildWebUsageUrl = () => '/WEB_USAGE.md' // TODO put this readme as markdown on the front end?
