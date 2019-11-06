const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config(); // Config .env
const { getCertificates, getIAM } = require('./apiv2');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/certificates', async (req, res) => {
  getCertificates().then(certificates => {
    res.send(certificates)
  })
    .catch(error => {
      console.log(error)
      res.statusCode(error.status)
      res.send(error)
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));