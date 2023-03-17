import Products from '../components/Products';
import Search from '../components/Search';
import products from '../data/products.json';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home__title">Our Products</h1>
          <Search />
          <Products products={products} />
        </div>
      </div>
    </section>
  );
}

export default Home;
