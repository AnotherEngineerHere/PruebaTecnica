import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3005', // Reemplaza con la URL correcta de tu backend
});

export default API;
