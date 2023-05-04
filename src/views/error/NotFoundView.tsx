import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { Helmet } from 'react-helmet-async'

const PREFIX = 'NotFoundView';

const classes = {
  root: `${PREFIX}-root`,
  image: `${PREFIX}-image`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80
  },

  [`& .${classes.image}`]: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  }
}));

function NotFoundView() {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Root className={classes.root}>
      <Helmet>
        <title>404: Not found</title>
      </Helmet>
      <Container maxWidth="lg">
        <Typography align="center" variant={mobileDevice ? 'h4' : 'h1'} color="textPrimary">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          You either tried some shady route or you came here by mistake. Whichever it is, try using
          the navigation.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src="/static/images/undraw_page_not_found_su7k.svg"
          />
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button color="primary" component={RouterLink} to="/" variant="outlined">
            Back to home
          </Button>
        </Box>
      </Container>
    </Root>
  );
}

export default NotFoundView
