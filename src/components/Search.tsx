import { useState } from 'react'
import { styled } from '@mui/material/styles';
import {
  Paper, Button, Input, Theme
} from '@mui/material'
import { SxProps } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'

const PREFIX = 'Search';

const classes = {
  root: `${PREFIX}-root`,
  search: `${PREFIX}-search`,
  searchIcon: `${PREFIX}-searchIcon`,
  searchInput: `${PREFIX}-searchInput`,
  searchButton: `${PREFIX}-searchButton`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center'
  },

  [`& .${classes.search}`]: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },

  [`& .${classes.searchIcon}`]: {
    marginRight: theme.spacing(2)
  },

  [`& .${classes.searchInput}`]: {
    flexGrow: 1
  },

  [`& .${classes.searchButton}`]: {
    marginLeft: theme.spacing(2)
  }
}));

type IPropsSearch = {
  onSearch: (search: string) => void,
  showButton?: boolean
  sx?: SxProps<Theme>
}

function Search(props: IPropsSearch) {
  const {
    onSearch, showButton, ...rest
  } = props
  const [search, setSearch] = useState('')
  const handleSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <Root {...rest}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSearch(search)
          }}
        />
      </Paper>
      {showButton && (
        <Button
          className={classes.searchButton}
          onClick={() => onSearch(search)}
          size="large"
          variant="contained"
        >
          Search
        </Button>
      )}
    </Root>
  );
}

export default Search
