export const required = (value: string | number) => (value ? undefined : 'Required')

export const maxLength = (max: number) => (value: string) => (value && value.length > max ? `Must be ${max} characters or less` : undefined)

export const minLength = (min: number) => (value: string) => (value && value.length < min ? `Must be at least ${min} characters` : undefined)

export const isNumber = (value: string | number | unknown) => (value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined)

export const minValue = (min: number) => (value: number) => (value && value < min ? `Must be at least ${min}` : undefined)

export const emailValid = (value: string) => (value
  // eslint-disable-next-line
  && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
  ? undefined
  : 'Invalid email address')

// export const aol = value =>
//     value && /.+@aol\.com/.test(value) ?
//         'Really? You still use AOL for your email?' : undefined
