import { useRef, useEffect } from 'react'
import { equals } from 'ramda'

const useDeepCompareMemoize = <T,>(value: T[]) => {
  const ref = useRef<T[]>()

  if (!equals(value, ref.current)) ref.current = value

  return ref.current
}

export const useDeepEffect = <T,>(callback: () => void, dependencies: T[]) => {
  useEffect(callback, useDeepCompareMemoize(dependencies))
}
