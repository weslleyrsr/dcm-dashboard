import React, { useState, useEffect } from 'react';
import Cards from './../Cards';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

function Certificates() {
    const [certificates, setCertificates] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/certificados');
            console.log(response);
            response.data && setCertificates(response.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <center><h1>Certificates List</h1></center>
            <Grid container spacing={3}>
                {certificates && certificates.map((certificate) => (
                    <Grid item xs={12} sm={6} lg={3}>
                        <Cards certificate={certificate}></Cards>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Certificates;