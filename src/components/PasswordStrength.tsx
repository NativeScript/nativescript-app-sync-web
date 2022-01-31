import React from 'react'
import { styled } from '@mui/material/styles';
import usePasswordStrength from 'src/hooks/usePasswordStrength'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import clsx from 'clsx'
import { Typography } from '@mui/material'
import { range, zipObj } from 'ramda'
import { useDeepEffect } from 'src/hooks/useDeepEffect'

const PREFIX = 'PasswordStrength';

const classes = {
  root: `${PREFIX}-root`,
  wrapIcon: `${PREFIX}-wrapIcon`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
  },

  [`& .${classes.wrapIcon}`]: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },

  [`& .${classes.success}`]: {
    color: theme.palette.success.main
  },

  [`& .${classes.error}`]: {
    color: theme.palette.error.main
  }
}));

type IProps = {
  password: string,
  passwordMatch: string,
  onChange?: (rules: Rules) => void,
  className?: string
}

export type Rules = {
  message: string,
  valid: boolean
}[]

function PasswordStrength({
  password, passwordMatch, onChange, className
}: IProps) {
  const rules = usePasswordStrength({
    passwordMatch,
    password
  })
  const rulesObject = zipObj(range(0, rules.length), rules)

  useDeepEffect(() => {
    if (onChange) onChange(rules)
  }, [rulesObject])

  return (
    <Root className={className}>
      {rules.map(({ message, valid }, i) => (
        <div key={i}>
          <Typography
            className={clsx(classes.wrapIcon, {
              [classes.success]: valid,
              [classes.error]: !valid
            })}
          >
            {valid ? <CheckIcon /> : <CloseIcon />}
            {message}
          </Typography>
        </div>
      ))}
    </Root>
  );
}

export default PasswordStrength
