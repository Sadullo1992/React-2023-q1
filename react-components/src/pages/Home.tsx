import { useCallback, useEffect, useState } from 'react';
import { Pagination, Products, Search, SortBy, Spinner } from '../components';
import { IError } from '../types/error.model';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'PSIVIHcV7KeBrf5S34ayiSiPeoKDJ2Cwg6kKDmg2Nyc';

function Home() {
  const searchLocalStorageValue = localStorage.getItem('searchText') || '';
  const [searchText, setSearchText] = useState(searchLocalStorageValue);
  const [sortBy, setSortBy] = useState('relevant');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onSearchProduct = useCallback((query: string) => {
    setSearchText(query);
    setPage(1);
  }, []);

  const fetchPhotos = async (query: string, orderBy: string, pageNumber: number) => {
    try {
      setIsLoading(true);
      setPhotos(null);
      setTotalPages(null);
      setError(null);
      const response = await fetch(
        `${BASE_URL}/search/photos?page=${pageNumber}&query=${query}&order_by=${orderBy}&client_id=${ACCESS_KEY}`
      );
      const data = await response.json();
      if (!response.ok) {
        const { errors } = data as IError;
        setPhotos(null);
        setTotalPages(null);
        throw Error(errors[0]);
      }
      const { results, total_pages: totalPag } = data;
      setPhotos(results);
      setTotalPages(totalPag);
      setError(null);
    } catch (err) {
      const { message } = err as Error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchText) {
      fetchPhotos(searchText, sortBy, page);
    } else {
      setIsLoading(false);
      setError(null);
      setPhotos(null);
    }
  }, [searchText, sortBy, page]);

  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home__title">Our Gallery</h1>
          <div className="home__search">
            <Search onSearch={onSearchProduct} />
            <SortBy setSortBy={setSortBy} />
          </div>
          {photos && <Products products={photos} />}
          {isLoading && <Spinner />}
          {error && <div className="error">Oops: {error}!</div>}
          {!searchText && <p className="not-found-element">Please, Try to search some photos...</p>}
          {!!totalPages && <Pagination totalPages={totalPages} setPage={setPage} page={page} />}
        </div>
      </div>
    </section>
  );
}

export default Home;
