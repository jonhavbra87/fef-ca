import './index.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';

function Home() {
  return <div className="flex-grow">Home</div>;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" index element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
