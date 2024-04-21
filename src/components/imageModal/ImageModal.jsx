import Modal from 'react-modal';

import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  return (
    <>
      {/* {isOpen && <div className={css.overlay}> </div>} */}
      <Modal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          content: {
            width: '80%',
            height: '80%',
            margin: 'auto',
            border: 'none', // Прибираємо рамку
            outline: 'none', // Прибираємо зовнішню контурну рамку (для фокусу)
            boxShadow: 'none', // Прибираємо тінь (якщо вона є)
            padding: 0, // Опціонально: прибираємо відступи
          },
        }}
      >
        {/* <button onClick={onClose}>Close Modal</button> */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Selected"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </Modal>
    </>
  );
};

export default ImageModal;
