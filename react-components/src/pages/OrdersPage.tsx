import Form from '../components/Form/Form';
import Order from '../components/Order';
import { selectOrders } from '../redux/formSlice';
import { useAppSelector } from '../redux/hooks';
import { IOrder } from '../types/order.model';

function OrdersPage() {
  const orders = useAppSelector(selectOrders);
  return (
    <section className="orders">
      <div className="container">
        <div className="orders__inner">
          <h1 className="orders__title">Place order</h1>
          <Form />
          <div className="cards__wrapper">
            <h2>Orders:</h2>
            <div className="cards">
              {orders.map((item: IOrder) => (
                <Order key={item.id} order={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersPage;
