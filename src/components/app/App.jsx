import { useState } from 'react';

import fetchPhotosByName from '../../unsplash-api';
import SearchBar from '../searchBar/SearchBar';
import ImageGallery from '../imageGallery/ImageGallery';
import Loader from '../loader/Loader';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ImageModal from '../imageModal/ImageModal';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async userData => {
    console.log(userData);
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);
      const data = await fetchPhotosByName(userData);
      console.log(data);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  // const [searchValue, setSearchValue] = useState('');

  // const onSubmit = event => {
  //   setSearchValue(event.target.value);
  //   console.log(searchValue);
  // };

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {photos.length > 0 && <ImageGallery items={photos}></ImageGallery>}
      {loading && <Loader></Loader>}
      {error && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn></LoadMoreBtn>}
      <ImageModal></ImageModal>
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
