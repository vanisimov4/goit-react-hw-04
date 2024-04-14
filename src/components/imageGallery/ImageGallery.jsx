import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard urls={item.urls} alt_description={item.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
