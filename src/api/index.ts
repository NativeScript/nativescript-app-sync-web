import { AccessKey, App } from 'src/types/api'
import { axios } from 'src/utils/axios'

interface IApiResponseBase {
  status?: 'OK' | 'ERROR'
  errorMessage?: string
}

// AUTH
interface LoginResponse extends IApiResponseBase { results: { tokens: string } }

export const login = (account: string, password: string) => axios.post<LoginResponse>('/auth/login', { account, password, minutes: 43200 })
export const changePassword = (oldPassword: string, newPassword: string) => axios.patch('/users/password', { oldPassword, newPassword })

// REGISTER
interface CheckEmailExistsResponse extends IApiResponseBase { exists: boolean }

export const register = (email: string, password: string, token: string) => axios.post<IApiResponseBase>('/users', { email, password, token })
export const checkEmailExists = (email: string) => axios.get<CheckEmailExistsResponse>(`/users/exists?email=${encodeURI(email)}`)
export const sendRegisterCode = (email: string) => axios.post<IApiResponseBase>('/users/registerCode', { email })
export const checkRegisterCodeExists = (email: string, code: string) => {
  const query = `email=${encodeURI(email)}&token=${encodeURI(code)}`
  return axios.get<IApiResponseBase>(`/users/registerCode/exists?${query}`)
}

// ACCESS KEYS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface GetAccessKeysResponse extends IApiResponseBase { accessKeys: AccessKey[] }
interface CreateAccessKeysResponse extends IApiResponseBase { accessKey: AccessKey }

export const getAccessKeys = () => axios.get<GetAccessKeysResponse>('/accessKeys')
export const createAccessKey = ({ name = '', ttl = 0, description = '' }) => {
  const time = new Date().getTime()
  const createdBy = 'UI'
  const oneDayInMilliseconds = 86400000
  const expiresIn = oneDayInMilliseconds * ttl
  const isSession = true;
  const friendlyName = name || `UI-${time}`
  return axios.post<CreateAccessKeysResponse>('/accessKeys', {
    friendlyName, ttl: expiresIn, createdBy, isSession, description
  })
}
export const removeAccessKey = (name: string) => axios.delete<IApiResponseBase>(`/accessKeys/${encodeURI(name)}`)
export const patchAccessKey = (name: string, friendlyName: string, ttl = 0) => axios.patch(`/accessKeys/${encodeURI(name)}`, { friendlyName, ttl })

// APPS
interface GetAppsResponse extends IApiResponseBase { apps: App[] }
export const getApps = () => axios.get<GetAppsResponse>('/apps')
export const getDeployments = (appName: string) => axios.get(`/apps/${appName}/deployments`)
export const addApp = (name: string, os: string, platform: string) => axios.post('/apps', { name, os, platform })

// READMEs
export const buildReadmeUrl = () => '/README.md' // TODO put this readme as markdown on the front end?
export const buildWebUsageUrl = () => '/WEB_USAGE.md' // TODO put this readme as markdown on the front end?
