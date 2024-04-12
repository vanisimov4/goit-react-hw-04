import axios from 'axios';
import { useState, useEffect } from 'react';

import SearchBar from '../searchBar/SearchBar';
import ImageGallery from '../imageGallery/ImageGallery';
import Loader from '../loader/Loader';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  // const [searchValue, setSearchValue] = useState('');

  // const onSubmit = event => {
  //   setSearchValue(event.target.value);
  //   console.log(searchValue);
  // };

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        'https://api.unsplash.com/photos/?client_id=agCoAE_BIGSEpvgvLxJ6ULj4TKLWHwrqFtAGIwtc7sY'
      );
      console.log(response.data);
      setArticles(response.data);
    }

    fetchArticles();
  }, []);

  const handleSearch = userData => {
    console.log(userData);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <Loader></Loader>
      <ImageGallery></ImageGallery>
      <LoadMoreBtn></LoadMoreBtn>

      {articles.length > 0 && (
        <ul>
          {articles.map(({ id, urls, slug }) => (
            <li key={id}>
              <a href={urls.small} target="_blank" rel="noreferrer noopener">
                {slug}
              </a>
            </li>
          ))}
        </ul>
      )}
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
