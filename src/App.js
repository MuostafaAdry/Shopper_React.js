import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Footer from './components/Footer/Footer';
import banner_men from './Assets/Frontend_Assets/banner_mens.png'
import banner_women from './Assets/Frontend_Assets/banner_women.png'
import banner_kid from './Assets/Frontend_Assets/banner_kids.png'
import { ToastContainer } from 'react-toastify';
import Payment from './Pages/Payment';
 
 
 
const App = () => {
  return (
   
       <div>
      {<ToastContainer/>}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/women' element={<ShopCategory banner={banner_women} category={'women'}/>} />
          <Route path='/men' element={<ShopCategory banner={banner_men} category={'men'}/>} />
          <Route path='/kid' element={<ShopCategory banner={banner_kid} category={'kid'}/>} />
          
          <Route path='/Login' element={<Login />} />
          <Route path='/Cart' element={ <Cart /> } />
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/Product/:ProductId' element={<Product/>}/>
          
          
        </Routes>
        <Footer/>
      
      </BrowserRouter> 
      
    </div>
    
   
  );
}

export default App;
