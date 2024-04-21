const ImageCard = ({ urls, alt_description, onClickModal }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => onClickModal(urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
