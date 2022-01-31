import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs'

export const useQueryParam = () => {
  const loc = useLocation()
  const navigate = useNavigate()

  const parse = () => qs.parse(loc.search, {
    ignoreQueryPrefix: true
  })

  const set = (name: string, value: string) => {
    const params = new URLSearchParams(loc.search)
    params.delete(name)
    params.append(name, value)
    navigate(`${loc.pathname}?${params.toString()}`)
  }

  const remove = (name: string) => {
    const params = new URLSearchParams(loc.search)
    params.delete(name)
    navigate(`${loc.pathname}?${params.toString()}`)
  }

  return {
    params: parse(),
    query: loc.search,
    set,
    remove
  }
}
