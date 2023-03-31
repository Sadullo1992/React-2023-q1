import React, { useEffect, useState } from 'react';

type SearchProps = {
  onSearch: (searchText: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const searchLocalStorageValue = localStorage.getItem('searchText') || '';

  const [searchText, setSearchText] = useState(searchLocalStorageValue);

  useEffect(() => {
    localStorage.setItem('searchText', searchText);

    onSearch(searchText);
  }, [onSearch, searchText]);

  return (
    <input
      className="search input"
      type="text"
      placeholder="Search"
      value={searchText}
      onChange={(e) => setSearchText(e.currentTarget.value)}
    />
  );
}

export default Search;
