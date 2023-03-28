import React, { Component } from 'react';

type SearchProps = {
  onSearch: (searchText: string) => void;
};

type SearchState = {
  searchText: string;
};

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    const searchText: string | null = localStorage.getItem('searchText');

    this.state = {
      searchText: searchText || '',
    };
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ searchText: e.currentTarget.value });
    this.props.onSearch(e.currentTarget.value);
  };

  saveToLocalStorage() {
    const { searchText } = this.state;
    localStorage.setItem('searchText', searchText);
  }

  render(): React.ReactNode {
    const { searchText } = this.state;
    return (
      <input
        className="search input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={this.onChange}
      />
    );
  }
}

export default Search;
