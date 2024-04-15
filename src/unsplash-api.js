import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotosByName = async name => {
  const response = axios.get(`/search?query=${name}`);
  return response.data.hits;
};
