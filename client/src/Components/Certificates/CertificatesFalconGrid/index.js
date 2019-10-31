import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from './Button';

function Certificates(props) {
    const [certificates, setCertificates] = useState(props.certificates)

    useEffect(() => {
        setCertificates(props.certificates)
    }, [props]);

    return (
        <div>
            <Grid container spacing={2}>
                {certificates && certificates.map((certificate, index) => (
                    <Grid item xs={12} sm={6} lg={2} key={index}>
                        <Button
                            expiresOn={certificate.expires_on}
                            certificateName={certificate.name}
                        ></Button>

                        {/* <Cards certificate={certificate} id={index}></Cards> */}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Certificates;