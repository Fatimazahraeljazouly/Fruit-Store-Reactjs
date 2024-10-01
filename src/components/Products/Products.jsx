import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Head from './components/Head'
import Arrivals from './components/Arrivals'
import Presente from './components/Presente'
import Services from './components/Services'
const Products = () => {
  return (
    <div>
      <Navbar/>
      <Head/>
      <Arrivals/>
      <Presente/>
      <Services/>


      <Footer/>
    </div>
  )
}

export default Products
