import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import ProductViewModal from './ProductViewModal';
import RoutesConfig from './../routes/Routes';

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <div>
          <Header />
          <div className='container'>
            <div className="main">
              <RoutesConfig />
            </div>
          </div>
          <Footer />
          <ProductViewModal />
        </div>
      )}/>
    </BrowserRouter>
  )
}

export default Layout
