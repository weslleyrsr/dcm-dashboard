import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '50px',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  wrap: {
    maxWidth: '800px',
    padding: 10,
    paddingRight: 20,
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '50px',
  }
});


export default function Searchbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
        
        <InputBase
          className={classes.input}
          onChange={props.filterByName}
          placeholder='Find certificate'
          inputProps={{ 'aria-label': 'Find certificate' }}
        />
      </Paper>
    </div>
  );
}