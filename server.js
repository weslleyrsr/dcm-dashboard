const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config(); // Config .env
const { getCertificados, getIAM } = require('./apiv2');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/certificados', async (req, res) => {
  getCertificados().then(certificados => {
    res.send(certificados)
  })
    .catch(error => {
      console.log(error)
      res.statusCode(error.status)
      res.send(error)
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));