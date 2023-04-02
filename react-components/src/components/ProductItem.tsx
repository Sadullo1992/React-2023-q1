import { useState } from 'react';
import heartLine from '../assets/icons/heart-3-line.svg';
import heartFill from '../assets/icons/heart-3-fill.svg';
import shoppingCart from '../assets/icons/shopping-cart-fill.svg';

import { Product } from './Products';

type ProductProps = {
  index: number;
  product: Product;
};

function ProductItem({ index, product }: ProductProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <article className="card">
      <div className="card__header">
        <span>{product.price}$</span>
        <button
          type="button"
          className="btn btn--heart"
          onClick={() => setIsLiked(!isLiked)}
          data-testid="heart-btn"
        >
          <img src={isLiked ? heartFill : heartLine} alt="heart" />
        </button>
      </div>
      <img
        src={`https://source.unsplash.com/random?sig=${index}`}
        alt="card"
        className="card__photo"
      />
      <div className="card__body">
        <div>
          <h3 className="card__title">{product.title}</h3>
          <p className="card__desc">{product.description}</p>
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
