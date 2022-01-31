import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import { Helmet } from 'react-helmet-async'

function AccessKeysList() {
  return (
    <Box>
      <Helmet>
        <title>Access Keys</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box mt={6} display="flex" justifyContent="center">
          <Typography>Access Keys</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AccessKeysList
