import { Component } from 'react';
import Form, { IFormData } from '../components/Form';
import Order from '../components/Order';

type OrdersState = {
  orders: IFormData[];
};

class Orders extends Component<unknown, OrdersState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      orders: [],
    };
  }

  setOrders = (order: IFormData) => {
    this.setState((prevState) => {
      return { orders: [...prevState.orders, order] };
    });
  };

  render() {
    const { orders } = this.state;
    return (
      <section className="orders">
        <div className="container">
          <div className="orders__inner">
            <h1 className="orders__title">Place order</h1>
            <Form setOrders={this.setOrders} />
            <div className="cards__wrapper">
              <h2>Orders:</h2>
              <div className="cards">
                {orders.map((item: IFormData) => (
                  <Order key={item.name} order={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Orders;
