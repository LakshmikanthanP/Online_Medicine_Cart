import { Component} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Cart from './Components/Cart';
import ProductDetails from './Components/Catalog/ProductDetails';
import ContactPage from './Components/Contact/ContactPage';

class Router extends Component {

    render () {
        return(
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route path="/home" element={<Home/>}  />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;