import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const fetchPhotosByName = async name => {
  // const BASE_URL = 'https://api.unsplash.com';
  const END_POINT = '/search/photos/';
  // const url = BASE_URL + END_POINT;
  // const query = 'moon';
  const params = {
    query: encodeURIComponent(name),
    orientation: 'landscape',
    per_page: 12,
    page: 1,
    // page: currentPage,
    client_id: 'agCoAE_BIGSEpvgvLxJ6ULj4TKLWHwrqFtAGIwtc7sY',
  };

  const response = await axios.get(END_POINT, { params });
  console.log(response.data);
  console.log(response.data.total_pages);
  return response.data.results;
};

export default fetchPhotosByName;
