/* import React from 'react'
 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Shop from './components/Shop/Shop'
import Contacts from './components/Contacts/Contacts'
import Carts from './components/Carts/Carts';
const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/cart" element={<Carts />} /> 
      </Routes>
    </div>
  </Router>
  )
}
export default App
