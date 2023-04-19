import { Products, Search, SortBy } from '../components';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home__title">Our Gallery</h1>
          <div className="home__search">
            <Search />
            <SortBy />
          </div>
          <Products />
        </div>
      </div>
    </section>
  );
}

export default Home;
