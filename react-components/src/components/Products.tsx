import { useGetPhotosQuery, CustomError } from '../redux/apiSlice';
import { useAppSelector } from '../redux/hooks';
import { selectSearchObj } from '../redux/searchSlice';
import { IPhoto } from '../types/photo.model';
import Pagination from './Pagination';
import ProductItem from './ProductItem';
import Spinner from './Spinner';

function Products() {
  const { query, sortBy, page } = useAppSelector(selectSearchObj);

  const { data, isSuccess, isFetching, isError, error } = useGetPhotosQuery(
    {
      query,
      sortBy,
      page,
    },
    { skip: query === '' }
  );

  const err = error as CustomError;
  let content;

  if (!query) {
    content = <p className="not-found-element">Please, Try to search some photos...</p>;
  }

  if (isError) {
    content = <div className="error">Oops: {err.data?.errors[0] || err.error}!</div>;
  } else if (isSuccess && data) {
    const { results: products, total_pages: totalPages } = data;
    content = (
      <>
        <div className="cards">
          {products.length === 0 ? (
            <p className="not-found-element">Sorry, We could not find any photos...</p>
          ) : (
            products.map((product: IPhoto) => <ProductItem key={product.id} product={product} />)
          )}
        </div>
        {totalPages !== 0 && <Pagination totalPages={totalPages} />}
      </>
    );
  }
  return (
    <>
      {content}
      {isFetching && <Spinner />}
    </>
  );
}

export default Products;
