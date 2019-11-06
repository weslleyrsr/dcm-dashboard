import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import ExpiresIn from './ExpiresIn';
import Grid from '@material-ui/core/Grid';
// import CertificatesGrid from './CertificatesGrid';
import CertificatesFalconGrid from './CertificatesFalconGrid';

function Certificates() {
    const [certificates, setCertificates] = useState();
    const [filteredCertificates, setFilteredCertificates] = useState();

    const fetchCertificates = async (year) => {
        const { data } = await axios.get('/api/certificates');
        if(data){
            setCertificates(data);
            setFilteredCertificates(data);
        }
    };

    const filterByDays = async (param) => {
        if (!param.currentTarget.value || param.currentTarget.value === '') {
            setFilteredCertificates(certificates);
            return;
        }

        let hoje = new Date();
        let dias = parseInt(hoje.getDate()) + parseInt(param.currentTarget.value);

        let dataFiltro = new Date();
        dataFiltro.setDate(dias);

        const dataEpoch = dataFiltro.getTime();

        setFilteredCertificates(
            certificates.filter(
                certificate => certificate.expires_on <= dataEpoch
            )
        );
    };

    const filterByName = async (param) => {
        setFilteredCertificates(
            certificates.filter(
                certificate => certificate.name.toUpperCase().includes(
                    param.target.value.toUpperCase()
                )
            )
        );
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    <ExpiresIn filterByDays={filterByDays}></ExpiresIn>
                </Grid>

                <Grid item xs={12} sm={6} lg={8}>
                    <Search filterByName={filterByName}></Search>
                </Grid>
            </Grid>

            {/* <CertificatesGrid certificates={filteredCertificates}></CertificatesGrid> */}
            <CertificatesFalconGrid certificates={filteredCertificates}></CertificatesFalconGrid>
        </div>
    );
}

export default Certificates;