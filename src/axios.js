import axios from 'axios';

const instance = axios.create({
  baseUrl: '...', //The API (cloud fucntion) URL
});

export default instance;
