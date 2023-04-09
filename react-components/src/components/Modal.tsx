import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { IPhoto } from '../types/photo.model';
import dateFormatter from '../utils/dateFormatter';

type ModalProps = {
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  product: IPhoto;
};
function Modal({ setIsShowModal, product }: ModalProps) {
  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsShowModal(false);
  };

  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className="modal" onClick={closeModal} aria-hidden="true">
      <div className="modal__inner" onClick={stopPropagation} aria-hidden="true">
        <button type="button" className="btn btn--close" onClick={closeModal}>
          X
        </button>
        <img src={product.urls.small} alt="modal-img" className="modal__photo" />
        <div className="modal__content">
          <div className="modal__header">
            <div
              className="modal__header__avatar"
              style={{
                background: `#e1e1e1 url(${product.user.profile_image.medium})`,
              }}
            />
            <div className="modal__header__user">
              <h3>{product.user.name}</h3>
              <p>Photo owner</p>
            </div>
          </div>
          <p className="modal__content__info">
            <strong>Published: </strong>
            {dateFormatter(product.created_at)}
          </p>
          <p className="modal__content__info">
            <strong>Likes: </strong>
            {product.likes}
          </p>
          <p className="modal__content__info">
            <strong>Size: </strong>
            {product.width} x {product.height}
          </p>
          <p className="modal__content__info">
            <strong>Color: </strong>
            {product.color}
          </p>
          <p className="modal__content__info">
            <strong>Description: </strong> <br />
            {product.alt_description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
