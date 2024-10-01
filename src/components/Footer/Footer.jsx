/* import React from 'react'
 */
import { FaFacebook , FaTwitter, FaInstagram} from "react-icons/fa6"
import {motion} from 'framer-motion'

import { GiMonsteraLeaf } from 'react-icons/gi';

const Footer = () => {
  return (
   <footer className="bg-primary/10  mt-12 py-12">
    <div className="container flex justify-between items-center ">
       {/* Logo Section */}
       <motion.div 
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:1,delay:0.2}}
       className="text-2xl flex items-end gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <GiMonsteraLeaf className="text-green-500" />
          </motion.div>
       {/* Social icons section */}
        <div className=" text-3xl flex items-center gap-4 
        mt-6 text-gray-700">
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
        </div>
    </div>
   </footer>
  );
};

export default Footer;
