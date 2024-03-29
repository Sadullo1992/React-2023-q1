import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useGetPhotoByIdQuery } from '../redux/apiSlice';
import dateFormatter from '../utils/dateFormatter';
import Spinner from './Spinner';

type ModalProps = {
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  id: string;
};
function Modal({ setIsShowModal, id }: ModalProps) {
  const { data: product, isLoading } = useGetPhotoByIdQuery(id);

  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsShowModal(false);
  };

  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  if (isLoading) return <Spinner />;
  if (!product) return null;

  return (
    <div className="modal" onClick={closeModal} aria-hidden="true" data-cy="modal">
      <div
        className="modal__inner"
        onClick={stopPropagation}
        aria-hidden="true"
        data-cy="modal-inner"
      >
        <button type="button" className="btn btn--close" onClick={closeModal} data-cy="close-btn">
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
