import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import ExpiresIn from './ExpiresIn';
import {Grid, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import CertificatesFalconGrid from './CertificatesFalconGrid';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(2),
    },
}));

function Certificates() {
    const classes = useStyles();
    const [certificates, setCertificates] = useState();
    const [filteredCertificates, setFilteredCertificates] = useState();

    const fetchCertificates = async (year) => {
        const { data } = await axios.get('/api/certificates');

        if(data){
            setCertificates(data);
            setFilteredCertificates(data);
        }
    };

    const filterByDays = async (data) => {
        if (!data.currentTarget.value || data.currentTarget.value === '') {
            setFilteredCertificates(certificates);
            return;
        }

        let hoje = new Date();
        let dias = parseInt(hoje.getDate()) + parseInt(data.currentTarget.value);

        let dataFiltro = new Date();
        dataFiltro.setDate(dias);

        const dataEpoch = dataFiltro.getTime();

        setFilteredCertificates( certificates.filter(
            certificate => certificate.expires_on <= dataEpoch
        ));
    };

    const filterByName = async (param) => {
        setFilteredCertificates( certificates.filter(
            certificate => certificate.name.toUpperCase().includes(param.target.value.toUpperCase())
        ));
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    const logOut = () => {
        sessionStorage.removeItem('auth');
        window.location.reload();
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <ExpiresIn filterByDays={filterByDays}></ExpiresIn>
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <Search filterByName={filterByName}></Search>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}
                        onClick={logOut}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>

            <CertificatesFalconGrid certificates={filteredCertificates}></CertificatesFalconGrid>
        </div>
    );
}

export default Certificates;