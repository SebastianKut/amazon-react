import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-ef788.cloudfunctions.net/api', //The API (cloud fucntion) URL
});

export default instance;
