/* import React from 'react'
 */
import { IoBagHandleSharp } from "react-icons/io5";
import Heropng from '../../assets/fruits/fruitplatter.jpeg'
import Leafpng from '../../assets/fruits/leaf-image.jpg'
import {motion } from 'framer-motion'
import {FadeRight, FadeUp} from '../../utility/animation'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <div className="container  grid grid-cols-1 md:grid-cols-2 min-h-[600px] 
      relative">
        {/* brand infos */}
        <div className="flex flex-col justify-center py-14
        md:py-0 relative z-10">
            <div className=" text-clip md:text-left  space-y-6
             lg:max-w-[400px]">
                <motion.h1 
                variants={FadeRight(0.2)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-5xl font-bold 
                leading-relaxed xl:leading-loose font-averia">Healthy <br />Fresh 
                <span className="text-secondary">  Fruits!</span>
                </motion.h1>
                <motion.p 
                variants={FadeUp(0.2)}
                initial='hidden'
                animate='visible'
                className="text-2xl tracking-wide "> Order Now For Fresh Healthy Life</motion.p>
                <motion.p 
                variants={FadeUp(0.2)}
                initial='hidden'
                animate='visible'
                className="text-gray-400">Healthy and yummy food for fresh morning breakfast Eat Daily for good health and mind Order now and get 37% OFF on your first order </motion.p>
                <div className="flex  md:justify-start">
                <motion.button  
                initial={{y:0,x:-500,opacity:0}} 
                animate={{x:50,y:-5,opacity:1, 
                transition:{duration:1,delay:0.2}}} 
                className="primary-btn flex items-center gap-2">
               <Link to='/products'> <span><IoBagHandleSharp/></span>Order Now</Link>
                </motion.button>
                </div>
            </div>
        </div>
        {/* hero infos */}
        <motion.div
      initial={{opacity:0, x:200, rotate:75}}
      animate={{x:0,opacity:1,rotate:0, transition:{duration:1,delay:0.4}}}
       className="flex justify-center items-center">      
            <img src={Heropng} alt=""
            className="rounded-full w-[300px]
             md:w-[400px] drop-shadow "/>
        </motion.div>
        {/* leaf image */}
        <div  className="absolute top-14 w-44
             md:top-0 right-1/2 blur-sm 
            opacity-80 rotate-[40deg]  " >
            <motion.img 
             initial={{opacity:0, x:-200, rotate:75}}
            animate={{x:0,y:0,opacity:1,rotate:0, transition:{duration:1,delay:1.5}}}
             src={Leafpng}  alt="" 
           className=" text-xs w-full md:max-w-[300px]"/>
        </div>
      </div>
    </section>
  );
}

export default Hero
