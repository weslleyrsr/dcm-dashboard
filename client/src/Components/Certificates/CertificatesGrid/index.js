import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import Grid from '@material-ui/core/Grid';

function Certificates(props) {
    const [certificates, setCertificates] = useState(props.certificates)

    useEffect(() => {
        setCertificates(props.certificates)
    }, [props]);

    return (
        <div>
            <Grid container spacing={3}>
                {certificates && certificates.map((certificate, index) => (
                    <Grid item xs={12} sm={6} lg={2} key={index}>
                        <Cards certificate={certificate} id={index}></Cards>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Certificates;