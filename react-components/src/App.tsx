import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home, About, NotFound, Orders } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
