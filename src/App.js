import { BrowserRouter as Router ,Link , Routes , Route} from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import Home from './pages/home/home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/cart" element={<Cart />}/>

          <Route exact path="/product/:id" element={<Product />}/>
          <Route exact path="/products/:category" element={<ProductList />}/>



        </Routes>
   </Router>
  );
}

export default App;
