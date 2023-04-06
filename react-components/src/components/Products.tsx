import { IPhoto } from '../types/photo.model';
import ProductItem from './ProductItem';

export interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
}

type PropTypes = {
  products: IPhoto[];
};

function Products({ products }: PropTypes) {
  return (
    <div className="cards">
      {products.length === 0 ? (
        <p className="not-found-element">Sorry, We could not find any photos...</p>
      ) : (
        products.map((product: IPhoto) => <ProductItem key={product.id} product={product} />)
      )}
    </div>
  );
}

export default Products;
