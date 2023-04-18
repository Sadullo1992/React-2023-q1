import { useEffect } from 'react';
import { Products, Search, SortBy, Spinner } from '../components';
import { CustomError, useGetPhotosMutation } from '../redux/apiSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addPhotos } from '../redux/photosSlice';
import { selectSearchObj, selectSearchText } from '../redux/searchSlice';

function Home() {
  const dispatch = useAppDispatch();
  const { query, sortBy, page } = useAppSelector(selectSearchObj);
  const searchTextFromStore = useAppSelector(selectSearchText);

  const [getPhotos, { data, isSuccess, isLoading, isError, error }] = useGetPhotosMutation();
  const err = error as CustomError;

  useEffect(() => {
    getPhotos({ query, sortBy, page });
  }, [query, sortBy, page, getPhotos]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addPhotos(data));
    }
  }, [isSuccess, dispatch, data]);

  let content;

  if (isError) {
    content = <div className="error">Oops: {err.data?.errors[0] || err.error}!</div>;
  } else {
    content = !searchTextFromStore ? (
      <p className="not-found-element">Please, Try to search some photos...</p>
    ) : (
      <Products />
    );
  }

  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home__title">Our Gallery</h1>
          <div className="home__search">
            <Search />
            <SortBy />
          </div>
          {content}
          {isLoading && <Spinner />}
        </div>
      </div>
    </section>
  );
}

export default Home;
