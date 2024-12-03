import './index.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
//import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="bg-white text-background">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkoutpage" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
