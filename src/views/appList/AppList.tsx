import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import { Helmet } from 'react-helmet-async'

function AppList() {
  return (
    <Box>
      <Helmet>
        <title>Apps</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box mt={6} display="flex" justifyContent="center">
          <Typography>Apps</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AppList
