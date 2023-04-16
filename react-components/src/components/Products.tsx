import { useAppSelector } from '../redux/hooks';
import { selectPhotosData } from '../redux/photosSlice';
import { IPhoto } from '../types/photo.model';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

function Products() {
  const data = useAppSelector(selectPhotosData);
  const { results: products, total_pages: totalPages } = data;
  return (
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

export default Products;
