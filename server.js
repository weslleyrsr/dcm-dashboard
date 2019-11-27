const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { getCertificates } = require('./api');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

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