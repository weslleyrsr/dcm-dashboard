import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from './Button';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    typography: {
      // Tell Material-UI what the font-size on the html element is.
      fontSize:9.5,
    },
});

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    card: {
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#EAEAEA',
    },
    titleModal: {
        fontSize: '0.8rem',
    },
    posModal: {
        marginBottom: 2,
        fontSize: '0.7rem',
    },
    teste: {
        minHeight: 100,
        paddingBottom: 0,
        backgroundColor: '#5ecc66',
        '&last-child': {
            paddingBottom: 0,
        }
    },
}));

function Certificates(props) {
    const classes = useStyles();
    const [certificates, setCertificates] = useState(props.certificates);
    const [modalCertificate, setModalCertificate] = useState();
    const [open, setOpen] = React.useState(false);

    const handleOpen = (param) => {
        setModalCertificate(certificates[param.currentTarget.value]);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setCertificates(props.certificates)
    }, [props]);

    return (
        <div>
            <Grid container spacing={2}>
                {certificates && certificates.map((certificate, index) => (
                    <Grid item xs={12} sm={6} lg={2} key={index}>
                        <Button
                            certificate={certificate}
                            index={index}
                            handleOpen={handleOpen}
                        ></Button>
                    </Grid>
                ))}
            </Grid>

            {modalCertificate && 
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                {/* STATUS */}
                                <ThemeProvider theme={theme}>
                                    <Typography className={classes.posModal} color="textSecondary" gutterBottom>
                                        Status: {modalCertificate.status}
                                    </Typography>
                                </ThemeProvider>

                                { /* DATA DE VALIDADE */ }
                                <ThemeProvider theme={theme}>
                                    <Typography className={classes.posModal} color="textSecondary">
                                        Expires on {new Date(parseInt(modalCertificate.expires_on)).toLocaleDateString('en-US')}
                                    </Typography>
                                </ThemeProvider>

                                { /* DESCRICAO */}
                                <ThemeProvider theme={theme}>
                                    <Typography className={classes.titleModal}>
                                        <strong>{modalCertificate.name}</strong>
                                    </Typography>
                                </ThemeProvider>
                                
                                { /* DOMINIO */ }
                                <ThemeProvider theme={theme}>
                                    <Typography className={classes.posModal} color="textSecondary">
                                        {modalCertificate.domains[0]}
                                    </Typography>
                                </ThemeProvider>
                            </div>
                        </Fade>
                    </Modal>
                </div>
            }
        </div>
    );
}

export default Certificates;