import { IOrder } from '../types/order.model';

type OrderProps = {
  order: IOrder;
};

function Order({ order }: OrderProps) {
  const { name, country, date, file, paymentType, agree } = order;
  return (
    <article className="card">
      <img src={file} alt="card" className="card__photo" />
      <div className="card__body">
        <p className="card__desc" data-testid="order-name">
          <strong>Name: </strong>
          {name}
        </p>
        <p className="card__desc">
          <strong>Country: </strong>
          {country}
        </p>
        <p className="card__desc">
          <strong>Delivery date: </strong>
          {date}
        </p>
        <p className="card__desc">
          <strong>Payment type: </strong>
          {paymentType}
        </p>
        <p className="card__desc" data-testid="order-agree">
          <strong>Agreement: </strong>
          {agree ? 'approved' : 'not approved'}
        </p>
        <button type="button" className="btn btn--primary">
          <span className="btn__text">Completed</span>
        </button>
      </div>
    </article>
  );
}

export default Order;
