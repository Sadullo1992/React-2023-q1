import { useEffect, useState } from 'react';
import heartLine from '../assets/icons/heart-3-line.svg';
import heartFill from '../assets/icons/heart-3-fill.svg';
import dateFormatter from '../utils/dateFormatter';
import { IPhoto } from '../types/photo.model';
import Modal from './Modal';

type ProductProps = {
  product: IPhoto;
};

function ProductItem({ product }: ProductProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => document.body.removeAttribute('style');
  }, [isShowModal]);

  return (
    <>
      <article className="card">
        <div className="card__header">
          <span>Likes: {product.likes}</span>
          <button
            type="button"
            className="btn btn--heart"
            onClick={() => setIsLiked(!isLiked)}
            data-testid="heart-btn"
          >
            <img src={isLiked ? heartFill : heartLine} alt="heart" />
          </button>
        </div>
        <img src={product.urls.small} alt="card" className="card__photo" />
        <div className="card__body">
          <div>
            <h3 className="card__title"> Published: {dateFormatter(product.created_at)}</h3>
            <p className="card__desc">{product.alt_description}</p>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setIsShowModal(true)}
            data-cy="more-btn"
          >
            <span className="btn__text">More info about photo</span>
          </button>
        </div>
      </article>
      {isShowModal && <Modal setIsShowModal={setIsShowModal} id={product.id} />}
    </>
  );
}

export default ProductItem;
