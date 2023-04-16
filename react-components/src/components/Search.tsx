import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectSearchText, addSearchText } from '../redux/searchSlice';

type SearchProps = {
  onSearch: (searchText: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const searchTextFromStore = useAppSelector(selectSearchText);
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState(searchTextFromStore);

  useEffect(() => {
    if (searchTextFromStore !== searchText) {
      dispatch(addSearchText(searchText));
    }
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form className="search__form" onSubmit={handleSearch}>
      <input
        className="search input"
        type="text"
        placeholder="Search photos..."
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
      <button type="submit" className="btn btn--primary">
        <span className="btn__text">Search</span>
      </button>
    </form>
  );
}

export default Search;
