/*  import React from 'react'
 */ import {motion} from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
import BannerImg from '../../assets/fruits/fruit-splash.jpg'
const bgStyle ={
backgroundImage: `url(${BannerImg})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat:'no-repeat',

}
const Banner3 = () => {
  return (
    <section className=' container mb-12
    '>
    <div 
    style={bgStyle}
    className="container  grid grid-cols-1 md:grid-cols-2
     md:space-y-0  py-14 p-9 rounded-3xl
    ">
        {/* blanck div  img */}
       <div>
       </div>
        {/* brand infos  */}
        <div className='flex flex-col  justify-center'>
            <div className=' text-center md:text-left font-semibold pl-[130px]
            space-y-4 lg:max-w-[450px]'>
                <motion.h1
                variants={FadeLeft(0.3)}
                initial="hidden"
                whileInView={'visible'}
                viewport={{once:true}}
                 className='text-3xl lg:text-5xl 
                font-bold uppercase '>
                {''}
                Brand Info
                </motion.h1>
                <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView={'visible'}
                    viewport={{once:true}}
                >
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptatum doloremque fugit
                    iure, velit autem obcaecati! Molestias animi 
                    odit eum aliquid voluptates eveniet natus. Ipsa,
                    in accusamus consectetur consequatur possimus nisi.
                </motion.p>

                <motion.div
                variants={FadeLeft(0.9)}
                initial='hidden'
                animate='visible'
                className="flex justify-center md:justify-start pt-4">
                    <button  
                    className="primary-btn">
                    Learn more
                    </button>
                </motion.div>
               
            </div>
        </div>
    </div>
    </section>
  )
}

export default Banner3
