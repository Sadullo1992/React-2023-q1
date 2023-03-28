import { Component } from 'react';
import Products, { Product } from '../components/Products';
import Search from '../components/Search';
import productsData from '../data/products.json';

type HomeState = {
  products: Product[];
};

class Home extends Component<unknown, HomeState> {
  constructor(props: unknown) {
    super(props);

    const searchText: string | null = localStorage.getItem('searchText') || '';
    const products = this.searchProducts(searchText, productsData);

    this.state = {
      products,
    };
  }

  onSearch = (searchText: string) => {
    const products = this.searchProducts(searchText, productsData);
    this.setState({ products });
  };

  // eslint-disable-next-line class-methods-use-this
  searchProducts(searchText: string, products: Product[]) {
    return products
      .filter((item) => item.description.toLowerCase().includes(searchText.toLowerCase()))
      .slice();
  }

  render() {
    const { products } = this.state;
    return (
      <section className="home">
        <div className="container">
          <div className="home__inner">
            <h1 className="home__title">Our Products</h1>
            <Search onSearch={this.onSearch} />
            <Products products={products} />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
