import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home, About, NotFound } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
