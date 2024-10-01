import React from 'react';
import { GiMonsteraLeaf } from 'react-icons/gi';
import { FaBasketShopping } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Products', link: '/products' },
  { id: 3, title: 'About', link: '/about' },
  { id: 4, title: 'Shop', link: '/shop' },
  { id: 5, title: 'Contacts', link: '/contacts' },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <motion.div
       initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5 ,delay:0.6}}
        
        className="container mx-auto flex justify-between items-center py-4">
          {/* Logo section */}
          <div className="text-2xl flex items-end gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <GiMonsteraLeaf className="text-green-500" />
          </div>
          {/* Menus section */}
          <div className="hidden md:flex">
        
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link 
                  className="inline-block py-1 px-3
                   hover:text-primary hover:shadow-[0_3px_0_-1px_#F75D59]
                    font-semibold" 
                    to={menu.link}>{menu.title}  
                  </Link>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                 <Link to='/cart'><FaBasketShopping /></Link>
              </button>
            </ul>
          </div>
          {/* Mobile hamburger menu */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <FiMenu className="text-4xl cursor-pointer" />
          </div>
        </motion.div>
      </nav>
      
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
