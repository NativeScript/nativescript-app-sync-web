interface LogoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

function Logo(props: LogoProps) {
  return <img alt="Logo" height={40} src="/static/images/logo.svg" {...props} />
}

export default Logo
