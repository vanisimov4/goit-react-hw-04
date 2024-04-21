import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const textSearch = form.elements.textSearch.value.trim();
    if (textSearch === '') {
      return toast.error('text must be entered to search for images');
    }
    onSubmit(textSearch);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          name="textSearch"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-left" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
