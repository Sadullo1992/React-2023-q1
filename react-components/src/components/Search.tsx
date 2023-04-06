import { FormEvent, useEffect, useState } from 'react';

type SearchProps = {
  onSearch: (searchText: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const searchLocalStorageValue = localStorage.getItem('searchText') || '';

  const [searchText, setSearchText] = useState(searchLocalStorageValue);

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
  }, [searchText]);

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
