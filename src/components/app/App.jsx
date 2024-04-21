import { animateScroll } from 'react-scroll';

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
  const [showBtn, setShowBtn] = useState(false);

  const handleSearch = userData => {
    closeModal();
    setPhotos([]);
    setSearchStored(userData);
    setPage(page + 1);
    fetchData(userData, page);
  };

  async function fetchData(searchData, page) {
    try {
      setError(false);
      setLoading(true);
      const { results, total_pages } = await fetchPhotosByName(
        searchData,
        page
      );
      setShowBtn(total_pages && total_pages !== page);
      if (searchData === searchStored) {
        setPhotos([...photos, ...results]);
      } else {
        setPhotos(results);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    setPage(page + 1);
    fetchData(searchStored, page);
    animateScroll.scrollToBottom({
      duration: 800, // тривалість анімації в мілісекундах
      smooth: 'easeInOutQuint', // згладжування анімації
    });
  }

  const openModal = image => {
    if (!isOpen) {
      setSelectedImage(image);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickModal = image => openModal(image);

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {photos.length > 0 && (
        <ImageGallery items={photos} onClickModal={onClickModal}></ImageGallery>
      )}
      {loading && <Loader></Loader>}
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn handleClick={handleClick}></LoadMoreBtn>}
      <ImageModal
        isOpen={isOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      ></ImageModal>
    </>
  );
}

export default App;
