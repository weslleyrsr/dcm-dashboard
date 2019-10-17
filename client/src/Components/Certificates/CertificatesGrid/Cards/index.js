import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#F5F5F5',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(data) {
    let certificate = data.certificate;
    let id = data.id;
    const classes = useStyles();

    return (
        <Card className={classes.card} key={id}>
            <CardContent>

                {/* STATUS */}
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Status: {certificate.status}
                </Typography>

                { /* DATA DE VALIDADE */ }
                <Typography className={classes.pos} color="textSecondary">
                    Expira em {new Date(parseInt(certificate.expires_on)).toLocaleDateString()}
                </Typography>

                { /* DESCRICAO */}
                <Typography variant="h5" component="h2">
                   {certificate.name}
                </Typography>
                
                { /* DOMINIO */ }
                <Typography className={classes.pos} color="textSecondary">
                    {certificate.domains[0]}
                </Typography>

                { /* ISSUER */ }
                <Typography variant="body2" component="p">
                    {certificate.issuer}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="large">Mais informações</Button>
            </CardActions>
        </Card>
    );
}