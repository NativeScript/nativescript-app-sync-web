import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material';
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import TopBar from './TopBar'

const Root = styled('div')(() => ({
  display: 'flex',
  overflow: 'hidden',
  width: '100%'
}));

interface DashboardLayoutProps {
  children?: ReactNode
}

function DashboardLayout(_props: DashboardLayoutProps) {
  const [isMobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  return (
    <Root>
      <DashboardSidebar onMobileClose={() => setMobileNavOpen(false)} openMobile={isMobileNavOpen} />
      <Box sx={{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingLeft: lgUp ? '256px' : 0
      }}
      >
        <Box display="flex" flex="1 1 auto" overflow="hidden">
          <Box flex="1 1 auto" height="100%" overflow="hidden">
            <TopBar toggleMobileNav={() => setMobileNavOpen(!isMobileNavOpen)} />
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Root>
  );
}

export default DashboardLayout
