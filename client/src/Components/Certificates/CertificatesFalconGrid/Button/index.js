import React from 'react';
import { withStyles, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, yellow, red, indigo } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const GreenButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[300]),
        backgroundColor: green[300],
        '&:hover': {
            backgroundColor: green[500],
        },
    },
}))(Button);

const RedButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(red[300]),
        backgroundColor: red[300],
        '&:hover': {
            backgroundColor: red[500],
        },
    },
}))(Button);

const YellowButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(yellow[300]),
        backgroundColor: yellow[300],
        '&:hover': {
            backgroundColor: yellow[500],
        },
    },
}))(Button);

const IndigoButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(indigo[50]),
        backgroundColor: indigo[50],
        '&:hover': {
            backgroundColor: indigo[100],
        },
    },
}))(Button);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        width: '100%',
        padding: 10,
    },
}));

const theme = createMuiTheme({
    typography: {
      // Tell Material-UI what the font-size on the html element is.
      fontSize:9.5,
    },
  });
  

export default function CustomizedButtons(props) {
    const classes = useStyles();

    let hoje = new Date();
    let dias30 = parseInt(hoje.getDate()) + parseInt(113);
    let dias60 = parseInt(hoje.getDate()) + parseInt(197);
    let dias90 = parseInt(hoje.getDate()) + parseInt(300);

    let dt30dias = new Date();
    dt30dias.setDate(dias30);

    let dt60dias = new Date();
    dt60dias.setDate(dias60);

    let dt90dias = new Date();
    dt90dias.setDate(dias90);

    if(props.expiresOn < dt30dias.getTime()){
        return (
            <RedButton variant="contained" color="primary" className={classes.margin}>
                <ThemeProvider theme={theme}>
                    <Typography align='left' noWrap={Boolean(true)} > {props.certificateName} </Typography>
                </ThemeProvider>
            </RedButton>
            
        );
    } else if(props.expiresOn < dt60dias.getTime()){
        return (
            <YellowButton variant="contained" color="primary" className={classes.margin}>
                <ThemeProvider theme={theme}>
                    <Typography align='left' noWrap={Boolean(true)} > {props.certificateName} </Typography>
                </ThemeProvider>
            </YellowButton>
        );
    } else if(props.expiresOn < dt90dias.getTime()){
        return (
            <GreenButton variant="contained" color="primary" className={classes.margin}>
                <ThemeProvider theme={theme}>
                    <Typography align='left' noWrap={Boolean(true)} > {props.certificateName} </Typography>
                </ThemeProvider>
            </GreenButton>
        );
    } else {
        return (
            <IndigoButton variant="contained" color="primary" className={classes.margin}>
               <ThemeProvider theme={theme}>
                    <Typography align='left' noWrap={Boolean(true)} > {props.certificateName} </Typography>
                </ThemeProvider>
            </IndigoButton>
        );
    }
}