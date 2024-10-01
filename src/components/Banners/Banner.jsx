/* import React from 'react'
 */
import {motion, spring} from 'framer-motion'
import BannerImg from '../../assets/fruits/banner.png'
import { FadeUp } from "../../utility/animation";
const Banner = () => {
  return (
    <section className='bg-secondary/15'>
    <div className="container rounded-xl grid grid-cols-1 md:grid-cols-2
    space-y-6 md:space-y-0  py-14 p-9
    ">
        {/* banner img */}
        <div className='flex justify-center items-center '>
            <motion.img
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5, type:spring,delay:0.2,stiffness:100}}
             viewport={{once:true}}
             src={BannerImg}
            className=' w-[300px] md:max-w-[400px] 
            h-full object-cover drop-shadow'
             alt="" />
        </div>
        {/* brand infos  */}
        <div className='flex flex-col  justify-center'>
            <div className=' text-center md:text-left 
            space-y-4 lg:max-w-[400px]'  >
                <motion.h1
                variants={FadeUp(0.3)}
                initial="hidden"
                whileInView={'visible'}
                viewport={{once:true}}
                 className='text-3xl lg:text-5xl 
                font-bold uppercase '>
                {''}
                Brand Info
                </motion.h1>
                <motion.p
                    variants={FadeUp(0.7)}
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
                <motion.p
                    variants={FadeUp(0.9)}
                    initial="hidden"
                    whileInView={'visible'}
                    viewport={{once:true}}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Rerum nulla repellendus optio at aliquid nobis
                    inventore
                    culpa recusandae. Exercitationem nostrum numquam,
                    eum ipsa labore facilis iusto id optio enim possimus?
                </motion.p>
                <motion.div
                variants={FadeUp(1.1)}
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

export default Banner
