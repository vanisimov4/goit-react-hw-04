import axios from 'axios';
import { useState, useEffect } from 'react';

import SearchBar from '../searchBar/SearchBar';
import ImageGallery from '../imageGallery/ImageGallery';
import Loader from '../loader/Loader';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = userData => {
    console.log(userData);
  };
  // const [searchValue, setSearchValue] = useState('');

  // const onSubmit = event => {
  //   setSearchValue(event.target.value);
  //   console.log(searchValue);
  // };

  useEffect(() => {
    async function fetchArticles() {
      try {
        const BASE_URL = 'https://api.unsplash.com';
        const END_POINT = '/photos/';
        const url = BASE_URL + END_POINT;
        const params = {
          client_id: 'agCoAE_BIGSEpvgvLxJ6ULj4TKLWHwrqFtAGIwtc7sY',
          // q: encodeURIComponent(query),
          // image_type: 'photo',
          // orientation: 'horizontal',
          // safesearch: true,
          per_page: 12,
          // page: currentPage,
        };
        setLoading(true);
        const response = await axios.get(url, { params });
        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {articles.length > 0 && <ImageGallery items={articles}></ImageGallery>}
      {loading && <Loader></Loader>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <LoadMoreBtn></LoadMoreBtn>
    </>
  );
}

export default App;

// <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React is amazing</h1>
//     <div className="card">
//       <button onClick={() => setCount(count => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
