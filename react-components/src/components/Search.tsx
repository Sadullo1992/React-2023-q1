import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectSearchText, addSearchText, resetPage } from '../redux/searchSlice';

function Search() {
  const searchTextFromStore = useAppSelector(selectSearchText);
  const dispatch = useAppDispatch();

  const searchValue = useRef<string>('');

  const [searchText, setSearchText] = useState(searchTextFromStore);

  useEffect(() => {
    searchValue.current = searchText;
  }, [searchText]);

  useEffect(() => {
    return () => {
      if (searchTextFromStore !== searchValue.current) {
        dispatch(addSearchText(searchValue.current));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTextFromStore !== searchText) {
      dispatch(addSearchText(searchText));
      dispatch(resetPage());
    }
  };

  return (
    <form className="search__form" onSubmit={handleSearch}>
      <input
        className="search input"
        type="text"
        placeholder="Search photos..."
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        data-cy="search-box"
      />
      <button type="submit" className="btn btn--primary" data-cy="search-btn">
        <span className="btn__text">Search</span>
      </button>
    </form>
  );
}

export default Search;
