import axios from 'axios';

const api = axios.create({
  baseURL: 'http://omdbapi.com/',
  params: {
    apiKey: '69cf0a5b',
  },
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['apiKey'] = '69cf0a5b';
  return config;
});

export default api;
