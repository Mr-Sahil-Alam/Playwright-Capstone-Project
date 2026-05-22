const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://automationexercise.com/api',
    timeout: 10000
});

module.exports = apiClient;