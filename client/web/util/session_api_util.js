const axios = require('axios');
window.axios = axios;

export const fetchCurrentSession = () => (
    axios.get('/api/session')
);

export const startSession = user => (
    axios.post('/api/session', user)
);

export const endSession = () => (
    axios.delete('/api/session')
);