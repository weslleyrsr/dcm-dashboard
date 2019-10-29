import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#EAEAEA',
    },
    title: {
        fontSize: '0.8rem',
    },
    pos: {
        marginBottom: 2,
        fontSize: '0.7rem',
    },
    teste: {
        minHeight: '100px',
    },
});

export default function SimpleCard(data) {
    let certificate = data.certificate;
    let id = data.id;
    const classes = useStyles();

    return (
        <Card className={classes.card} key={id}>
            <CardContent className={classes.teste}>

                {/* STATUS */}
                <Typography className={classes.pos} color="textSecondary" gutterBottom>
                    Status: {certificate.status}
                </Typography>

                { /* DATA DE VALIDADE */ }
                <Typography className={classes.pos} color="textSecondary">
                    Expira em {new Date(parseInt(certificate.expires_on)).toLocaleDateString('en-GB')}
                </Typography>

                { /* DESCRICAO */}
                <Typography className={classes.title}>
                   <strong>{certificate.name}</strong>
                </Typography>
                
                { /* DOMINIO */ }
                <Typography className={classes.pos} color="textSecondary">
                    {certificate.domains[0]}
                </Typography>

                { /* ISSUER */ }
                {/* <Typography variant="body2" component="p">
                    {certificate.issuer}
                </Typography> */}
            </CardContent>
{/* 
            <CardActions>
                <Button size="small">Mais informações</Button>
            </CardActions> */}
        </Card>
    );
}