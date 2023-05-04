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
  id: number
  collaborators: {
    [key: string]: { permission: string, isCurrentAccount: boolean }
  }
  deployments: string[]
  os: string
  platform: string
  name: string
}

export type Deployment = {
  id: string
  createdTime: number
  key: string
  name: string
  package: string
}

export type AppError = {
  errorMessage: string
}
