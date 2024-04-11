import axios from 'axios';
import { useState, useEffect } from 'react';

import SearchBar from '../searchBar/SearchBar';
import ImageGallery from '../imageGallery/ImageGallery';
import Loader from '../loader/Loader';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // const [searchValue, setSearchValue] = useState('');

  // const onSubmit = event => {
  //   setSearchValue(event.target.value);
  //   console.log(searchValue);
  // };

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        '<https://api.unsplash.com/photos/?client_id=agCoAE_BIGSEpvgvLxJ6ULj4TKLWHwrqFtAGIwtc7sY>'
      );
      console.log(response);
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
