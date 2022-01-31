export type AccessKey = {
  name: string
  token?: string
  createdTime: string
  createdBy: string
  expires: string
  description: string
  friendlyName: string
}

export type App = {
  name: string
  token?: string
  createdTime: string
  createdBy: string
  expires: string
  description: string
  friendlyName: string
}

export type AppError = {
  errorMessage: string
}
