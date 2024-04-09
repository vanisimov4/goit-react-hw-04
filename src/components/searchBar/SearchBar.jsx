import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
