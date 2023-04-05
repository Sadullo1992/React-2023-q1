import { useCallback, useState } from 'react';
import Products from '../components/Products';
import Search from '../components/Search';
import SortBy from '../components/SortBy';
import photos from '../data/unsplash.json';

function Home() {
  const [searchText, setSearchText] = useState('');

  const onSearchProduct = useCallback((query: string) => {
    setSearchText(query);
  }, []);

  console.log(searchText);

  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home__title">Our Galery</h1>
          <div className="home__search">
            <Search onSearch={onSearchProduct} />
            <SortBy />
          </div>
          <Products products={photos} />
          {/* <Modal /> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
