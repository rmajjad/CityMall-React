import React from 'react'
import Home from './components/home/Home.jsx'
import Products from './components/products/Products.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import NotFoundPage from './components/notFoundPage/NotFoundPage.jsx';
import Resturant from './components/resturant/Resturant.jsx';

import {Routes,Route} from 'react-router-dom'



export default function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/products' element = {<Products/>} /> 
      <Route path='/resturant' element = {<Resturant/>}/>
      <Route path='*' element = {<NotFoundPage/>}/>
    </Routes>
    
    <Footer/>
    </div>
  )
}
