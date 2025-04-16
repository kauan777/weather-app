import axios from 'axios';

export const url = 'https://api.weatherapi.com/v1';

export const api = axios.create({
  baseURL: url,
  params: {
    key: 'YOUR_KEY',
  },
});
