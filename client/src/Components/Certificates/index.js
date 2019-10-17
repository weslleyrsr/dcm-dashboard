import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import CertificatesGrid from './CertificatesGrid'

function Certificates() {
    const [certificates, setCertificates] = useState();
    const [filteredCertificates, setFilteredCertificates] = useState();

    const fetchCertificates = async (year) => {
        const { data } = await axios.get('/api/certificados');
        console.log(data);
        if(data){
            setCertificates(data);
            setFilteredCertificates(data);
        }
    };

    // const filterByDays = async (days) => {
    //     // TODO - Filtrar certificados que expiram em X dias
    // };

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
            <Search filterByName={filterByName}></Search>

            <CertificatesGrid certificates={filteredCertificates}></CertificatesGrid>
        </div>
    );
}

export default Certificates;