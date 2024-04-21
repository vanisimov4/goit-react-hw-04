import { animateScroll } from 'react-scroll';
// import Modal from 'react-modal';

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
  const [searchStored, setSearchStored] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = userData => {
    closeModal();
    setPhotos([]);
    setSearchStored(userData);
    setPage(page + 1);
    console.log(photos);
    console.log(searchStored);
    console.log(userData);

    fetchData(userData, page);
  };

  async function fetchData(searchData, page) {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchPhotosByName(searchData, page);
      if (searchData === searchStored) {
        setPhotos([...photos, ...data]);
      } else {
        setPhotos(data);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    setPage(page + 1);
    console.log(page);
    console.log(searchStored);
    fetchData(searchStored, page);
    animateScroll.scrollToBottom({
      duration: 800, // тривалість анімації в мілісекундах
      smooth: 'easeInOutQuint', // згладжування анімації
    });
  }

  const openModal = image => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickModal = image => openModal(image);

  // const [searchValue, setSearchValue] = useState('');

  // const onSubmit = event => {
  //   setSearchValue(event.target.value);
  //   console.log(searchValue);
  // };

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {photos.length > 0 && (
        <ImageGallery items={photos} onClickModal={onClickModal}></ImageGallery>
      )}
      {loading && <Loader></Loader>}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <LoadMoreBtn handleClick={handleClick}></LoadMoreBtn>
      )}
      <ImageModal
        isOpen={isOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      ></ImageModal>
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
