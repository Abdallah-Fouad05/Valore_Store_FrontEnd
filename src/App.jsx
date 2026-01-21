
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/pages/Home'
import Store from './Components/Store'
import ProductMen from './Components/product/ProductMen.jsx'
import ProductWomen from './Components/product/ProductWomen.jsx'
import ProductKid from './Components/product/ProductKid.jsx'
import ProductDatails from './Components/product/ProductDatails.jsx';
import { CartProvider } from './Components/cartHeader/CartContext.jsx';
import Blog from './Components/blog.jsx';
import Content from './Components/Content.jsx';
import FAQ from './Components/FAQ.jsx';
import CartProcess from './Components/cart/PageCart.jsx';
import Checkout from './Components/checkout/checkout.jsx';
import Login from './Components/User/Login.jsx';
import SignUp from './Components/User/SignUp.jsx';

function App() {
  return (
  <CartProvider>
    <BrowserRouter>
      <Header />     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store'>
            <Route index element={<Store />} />
            <Route path='men' element={<ProductMen />} />
            <Route path='women' element={<ProductWomen />} />
            <Route path='kids' element={<ProductKid />} />
            <Route path=':productId' element={<ProductDatails />} />
          </Route>
          <Route path='/cart' element={<CartProcess />} />
          <Route path='/faq' element={<FAQ />} />
          <Route  path='/blog' element={<Blog />} />
          <Route path='/content' element={<Content />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  </CartProvider>
  );
}


export default App
