import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '50px',
  },
  wrap: {
    padding: '20px 0 0 0'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 15px 0 0',
    transform: 'scale(2.5)',
  },
  vermelho: {
    color: '#f44336',
  },
  amarelo: {
      color: '#fdff81',
  },
  verde : {
      color: '#2cff46',
  }
});

export default function ExpiresIn(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
        <ButtonGroup aria-label="outlined primary button group">
            <Button onClick={props.filterByDays} value={113}> <span className={classes.bullet + ' ' + classes.vermelho}>•</span> 30</Button>
            <Button onClick={props.filterByDays} value={197}> <span className={classes.bullet + ' ' + classes.amarelo}>•</span> 60</Button>
            <Button onClick={props.filterByDays} value={300}> <span className={classes.bullet + ' ' + classes.verde}>•</span> 90</Button>
            <Button onClick={props.filterByDays} value={''}> <span className={classes.bullet}>•</span> ALL</Button>
        </ButtonGroup>
    </div>
  );
}