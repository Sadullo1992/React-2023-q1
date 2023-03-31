import productsData from '../data/products.json';

const searchProducts = (searchText: string) =>
  productsData
    .filter((item) => item.description.toLowerCase().includes(searchText.toLowerCase()))
    .slice();

export default searchProducts;
