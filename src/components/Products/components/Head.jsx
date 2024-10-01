/* import React from 'react';
 */
import { FaBasketShopping } from "react-icons/fa6";
import fruitPlat from '../../../assets/fruits/fruits.png';
import {motion} from 'framer-motion'
import { FadeUp,FadeRight } from '../../../utility/animation';
const Head = () => {
  return (
    <section className='bg-yellow-300'>
      <div className='container grid grid-cols-1 md:grid-cols-2 
            relative gap-10 lg:gap-[200px]'>
            {/* Description */}
            <div className='flex flex-col justify-around  
                    py-14 md:py-0 relative z-10 lg:max-w-[500px]
                    lg:justify-center'>
                <div className='text-clip md:text-left  space-y-6
                        lg:max-w-[400px]  '>
                        <motion.h1 
                        variants={FadeUp(0.4)}
                        initial="hidden"
                        animate="visible"
                      
                        className='font-bold text-5xl text-green-600 
                            text-start font-averia pt-10 lg:w-[500px] '>
                            Our Products
                        </motion.h1>
                        <motion.p 
                        variants={FadeRight(0.6)}
                        initial='hidden'
                        animate='visible'
                        className='font-semibold text- text-start
                            w-[350px] lg:w-[500px] mt-4'>
                            Discover our selection of the freshest and finest fruits, carefully sourced from trusted growers. Whether you are looking for seasonal favorites or exotic varieties, we offer a wide range of delicious, nutritious options to brighten your day.
                        </motion.p>
                        <div className='flex justify-start items-center mt-6'>
                            <motion.button
                            variants={FadeRight(0.8)}
                            initial='hidden'
                            animate='visible'
                             className='mb-4 secondary-btn flex  space-x-3'>
                                <span><FaBasketShopping /></span>Shop Now
                            </motion.button>
                        </div>
                </div>
            </div>
            {/* The Image */}
            <div className='flex md:justify-center items-center '>
                 <motion.img
                 initial={{opacity:0,rotate:75,x:200}}
                 animate={{opacity:1,rotate:0,x:0}}
                 transition={{duration:0.9,delay:1.4}}
                  className='rounded-full w-[350px]' src={fruitPlat} alt="Plate of fruits" />
            </div>
      </div>
    </section>
  );
}

export default Head;
