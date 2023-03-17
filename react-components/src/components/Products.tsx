import ProductItem from './ProductItem';

export interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
}

type PropTypes = {
  products: Product[];
};

function Products({ products }: PropTypes) {
  return (
    <div className="cards">
      {products.map((product: Product, index) => (
        <ProductItem key={product.id} index={index} product={product} />
      ))}
    </div>
  );
}

export default Products;
