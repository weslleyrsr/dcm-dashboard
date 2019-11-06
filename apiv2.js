const axios = require('axios');
const qs = require('qs');

const getIAM = async () => {
    let config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    };

    let params = { grant_type: 'urn:ibm:params:oauth:grant-type:apikey', apikey: process.env.API_KEY }

    let res = await axios.post('https://iam.cloud.ibm.com/identity/token', qs.stringify(params), config)

    return 'Bearer ' + res.data.access_token
}

const getDcmInstance = async (authorization) => {
    return axios.create({
        baseURL: 'https://us-south.certificate-manager.cloud.ibm.com/api/v3/',
        timeout: 5000,
        headers: {'Authorization': authorization}
    });
}

const getCertificates = async () => {
    // const instance = await getIAM().then( authorization => getDcmInstance(authorization) )

    const authorization = await getIAM()
    const instance = await getDcmInstance(authorization)

    let { data } = await instance.get(`${process.env.API_CRN}/certificates/`)

    return data.certificates
}

module.exports = { 
    getCertificates,
    getIAM
};