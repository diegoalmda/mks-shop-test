import axios from 'axios';

const BASE_URL = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});