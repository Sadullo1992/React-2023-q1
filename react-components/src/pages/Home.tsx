import { useCallback, useState } from 'react';
import Products from '../components/Products';
import Search from '../components/Search';
import searchProducts from '../utils/searchProducts';

function Home() {
  const [searchText, setSearchText] = useState('');

  const onSearchProduct = useCallback((query: string) => {
    setSearchText(query);
  }, []);

  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home__title">Our Products</h1>
          <Search onSearch={onSearchProduct} />
          <Products products={searchProducts(searchText)} />
        </div>
      </div>
    </section>
  );
}

export default Home;
