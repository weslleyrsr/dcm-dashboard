const express = require('express');
const axios = require('axios');
const Certificados = require('./certificates.model');
const { getCertificados, getIAM } = require('./apiv2');
const dotenv = require('dotenv');
  dotenv.config(); // Config .env

const app = express();
const port = process.env.PORT || 5000;

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

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

app.post('/newCertificate', function(req, res, next) {  
  var item = {  
    name: req.body.name,  
    expires_on: req.body.expires_on,  
    domains: [req.body.domain[0], req.body.domain[1]],
    status: req.body.status
  };  

  var data = new Certificados(item);
  data.save();

  res.redirect('/');  
 });

app.listen(port, () => console.log(`Listening on port ${port}`));