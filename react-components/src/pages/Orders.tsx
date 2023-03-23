import Form from '../components/Form';

function Orders() {
  return (
    <section className="orders">
      <div className="container">
        <div className="orders__inner">
          <h1 className="orders__title">Place order</h1>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Orders;
