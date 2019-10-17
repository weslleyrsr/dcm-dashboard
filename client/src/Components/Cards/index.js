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
    const classes = useStyles();
    console.log(certificate);

    return (
        <Card className={classes.card}>
            <CardContent>

                {/* STATUS */}
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Status: {certificate.status}
                </Typography>

                { /* DESCRICAO */}
                <Typography variant="h5" component="h2">
                   {certificate.description}
                </Typography>

                { /* DATA DE VALIDADE */ }
                <Typography className={classes.pos} color="textSecondary">
                    Expira em {new Date(parseInt(certificate.expires_on)).toLocaleDateString()}
                </Typography>

                <Typography variant="body2" component="p">
                    {certificate.issuer}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}