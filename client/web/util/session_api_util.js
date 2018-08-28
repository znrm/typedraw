const axios = require('axios');

export const fetchCurrentSession = () => (
    axios.get('http://localhost:5000/api/session')
);

export const startSession = user => (
    axios.post('http://localhost:5000/api/session', user)
);

export const endSession = () => (
    axios.delete('http://localhost:5000/api/session')
);