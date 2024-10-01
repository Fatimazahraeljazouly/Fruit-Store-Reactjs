/* import React from 'react';
 */
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Navbar=[
  {id:1,title:"home",link:"/"},
  {id:2,title:"Products",link:"/products"},
  {id:3,title:"About",link:"/about"},
  {id:4,title:"Shop",link:"/shop"},
  {id:5,title:"Contacts",link:"/contacts"},
];
const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className= " absolute top-20 left-0  w-full h-screen z-20">
           <div className='text-xl font-semibold   bg-primary
                 text-white py-10 m-6 rounded-3xl'>
            <ul className="flex flex-col items-center  gap-10">
                {Navbar.map((menu) =>(
                  <li key={menu.id}>
                  <Link 
                  className="hover:shadow-[0_3px_0_-1px_orange] font-semibold"
                  to={menu.link}>{menu.title}</Link>
                  </li>
                        ))}
                {/* <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li> */}
            </ul>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
