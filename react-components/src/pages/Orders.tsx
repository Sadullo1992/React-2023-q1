import { useCallback, useState } from 'react';
import Form, { IFormData } from '../components/Form/Form';
import Order from '../components/Order';

function Orders() {
  const [orders, setOrders] = useState<IFormData[]>([]);

  const setOrdersCallback = useCallback((order: IFormData) => {
    setOrders((state) => [...state, order]);
  }, []);

  return (
    <section className="orders">
      <div className="container">
        <div className="orders__inner">
          <h1 className="orders__title">Place order</h1>
          <Form setOrders={setOrdersCallback} />
          <div className="cards__wrapper">
            <h2>Orders:</h2>
            <div className="cards">
              {orders.map((item: IFormData) => (
                <Order key={item.file} order={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
