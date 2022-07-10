import React from 'react'
import Home from './../pages/Home';
import { Route, Routes } from 'react-router-dom'
import Product from './../pages/Product';
import Catalog from './../pages/Catalog';
import Cart from './../pages/Cart';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path='/' exact element={Home}/>
      <Route path='/catalog/:slug' element={Product}/>
      <Route path='/catalog' element={Catalog}/>
      <Route path='/cart' element={Cart}/>
    </Routes>
  )
}

export default RoutesConfig
