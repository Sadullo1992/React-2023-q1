import heartLine from '../assets/icons/heart-3-line.svg';
import shoppingCart from '../assets/icons/shopping-cart-fill.svg';
// import heartFill from '../assets/icons/heart-3-fill.svg';

import { Product } from './Products';

interface ProductProps {
  index: number;
  product: Product;
}

function ProductItem({ product, index }: ProductProps) {
  const { price, title, description } = product;
  return (
    <article className="card">
      <div className="card__header">
        <span>{price}$</span>
        <button type="button" className="btn btn--heart">
          <img src={heartLine} alt="heart" />
        </button>
      </div>
      <img
        src={`https://source.unsplash.com/random?sig=${index}`}
        alt="card"
        className="card__photo"
      />
      <div className="card__body">
        <div>
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{description}</p>
        </div>
        <button type="button" className="btn btn--primary">
          <img className="btn__icon" src={shoppingCart} alt="button icon" />
          <span className="btn__text">Add to cart</span>
        </button>
      </div>
    </article>
  );
}

export default ProductItem;
