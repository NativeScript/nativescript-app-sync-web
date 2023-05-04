import React, { useState, useEffect } from 'react'
import { ValidateJSSchema, ValidateFunctionValidator } from 'src/types/validatejs'
import validate from 'validate.js'

interface FormStateValues<T> {
  isValid: boolean
  values: T
  touched: { [Property in keyof T]: boolean }
  errors: { [Property in keyof T]: string[] }
  isLoading?: boolean
}

interface Schema extends ValidateJSSchema {
  [key: string]: unknown
}

interface FormStateProps<T> {
  schema?: {
    [Property in keyof T]?: Schema | ValidateFunctionValidator<T>
  },
  initialState?: {
    isLoading?: boolean
    isValid?: boolean
    values: T
    touched?: { [Property in keyof T]: boolean }
    errors?: { [Property in keyof T]: string[] }
  }
}

export interface FormState<T> {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleValueChange: (name: keyof T, value: unknown) => void
  hasError: (field: keyof T) => boolean
  handleClear: () => void
  formState: FormStateValues<T>
  setFormState: React.Dispatch<React.SetStateAction<FormStateValues<T>>>
}

export const useFormState = <T extends {}>(props?: FormStateProps<T>) => {
  const [formState, setFormState] = useState<FormStateValues<T>>({
    isLoading: false,
    isValid: false,
    values: props?.initialState,
    touched: {} as { [Property in keyof T]: boolean },
    errors: {} as { [Property in keyof T]: string[] },
    ...props?.initialState
  })

  const handleClear = () => {
    setFormState({
      ...formState,
      values: props?.initialState?.values
    })
  }

  const handleValueChange = (name: keyof T, value: unknown) => {
    setFormState((currentFormState) => ({
      ...currentFormState,
      values: {
        ...currentFormState.values,
        [name]: value
      }
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.persist) event.persist()

    const fieldName = event.target?.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    setFormState((currentFormState) => ({
      ...currentFormState,
      values: {
        ...currentFormState.values,
        [fieldName]: value
      },
      touched: {
        ...currentFormState.touched,
        [fieldName]: true
      }
    }))
  }

  useEffect(() => {
    if (!props?.schema) return

    const errors = validate(formState.values, props.schema) as { [Property in keyof T]: string[] }

    setFormState((currentFormState) => ({
      ...currentFormState,
      isValid: !errors,
      errors: errors || {} as { [Property in keyof T]: string[] }
    }))
  }, [formState.values])

  const hasError = (field: keyof T) => !!(formState.touched?.[field] && formState.errors?.[field])

  return {
    handleChange, handleValueChange, hasError, handleClear, formState, setFormState
  }
}
