const axios = require('axios');
const qs = require('qs');

class Certificados {

    async getIAM() {
        let config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'}
        };
        let params = {grant_type: 'urn:ibm:params:oauth:grant-type:apikey', apikey: process.env.API_KEY}
        const response = await axios.post('https://iam.cloud.ibm.com/identity/token', qs.stringify(params), config);

        process.env.API_IAM = 'Bearer ' + response.data.access_token;

        return process.env.API_IAM;
    }

    async getAxiosInstance() {
        const auth = process.env.API_IAM ? process.env.API_IAM : await this.getIAM();

        return axios.create({
            baseURL: 'https://us-south.certificate-manager.cloud.ibm.com/api/v3/',
            timeout: 5000,
            headers: {'Authorization': auth}
        });
    }
    
    async getCertificados() {
        const instance = await this.getAxiosInstance();
        try {
            const response = await instance.get(`${process.env.API_CRN}/certificates/`);
            return response;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}

module.exports = { Certificados };