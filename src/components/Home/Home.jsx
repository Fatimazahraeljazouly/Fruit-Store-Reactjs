/* import React from 'react'
 */
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero';
import Menus  from '../Menus/Menus'
import Banner from '../Banners/Banner'
import Banner2 from '../Banners/Banner2'
import Banner3 from '../Banners/Banner3';
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </main>
    </>
  )
}

export default Home
