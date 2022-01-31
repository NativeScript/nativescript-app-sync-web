import { useState } from 'react'
import type { ReactNode } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import {
  Box,
  Button, Collapse, ListItem
} from '@mui/material'
import { ChevronsDown as ChevronDownIcon, ChevronsRight as ChevronRightIcon } from 'react-feather';

interface NavItemProps {
  active?: boolean;
  children?: ReactNode;
  depth: number;
  icon?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

function NavItem({
  active,
  children,
  depth,
  icon,
  open: openProp,
  path,
  title,
  ...rest
}: NavItemProps) {
  const [open, setOpen] = useState<boolean>(openProp)
  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen)
  }

  let paddingLeft = 8

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth
  }

  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'block',
          py: 0
        }}
        {...rest}
      >
        <Button
          endIcon={!open ? <ChevronRightIcon fontSize="small" />
            : <ChevronDownIcon fontSize="small" />}
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: 'text.secondary',
            fontWeight: 'fontWeightMedium',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: '8px',
            py: '12px',
            textAlign: 'left',
            textTransform: 'none',
            width: '100%'
          }}
          variant="text"
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
        <Collapse in={open}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0
      }}
    >
      <Button
        component={path && RouterLink}
        startIcon={icon}
        sx={{
          color: 'text.secondary',
          fontWeight: 'fontWeightMedium',
          justifyContent: 'flex-start',
          textAlign: 'left',
          pl: `${paddingLeft}px`,
          pr: '8px',
          py: '12px',
          textTransform: 'none',
          width: '100%',
          ...(
            active && {
              color: 'primary.main',
              fontWeight: 'fontWeightBold',
              '& svg': {
                color: 'primary.main'
              }
            }
          )
        }}
        variant="text"
        to={path}
      >
        <Box sx={{ flexGrow: 1 }}>
          {title}
        </Box>
      </Button>
    </ListItem>
  )
}

export default NavItem
