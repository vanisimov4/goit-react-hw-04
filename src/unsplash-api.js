import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const fetchPhotosByName = async (name, currentPage) => {
  const END_POINT = '/search/photos/';
  const params = {
    query: encodeURIComponent(name),
    orientation: 'landscape',
    per_page: 12,
    page: currentPage,
    client_id: 'agCoAE_BIGSEpvgvLxJ6ULj4TKLWHwrqFtAGIwtc7sY',
  };

  const response = await axios.get(END_POINT, { params });
  return response.data;
};

export default fetchPhotosByName;
