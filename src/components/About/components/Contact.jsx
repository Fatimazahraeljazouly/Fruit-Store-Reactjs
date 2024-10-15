import img from '../../../assets/fruits/tropivcal-fruits.png'
import {motion} from 'framer-motion'
import { FadeLeft, FadeRight, FadeUp } from '../../../utility/animation'
const Contact = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center text-center">
        <motion.h1 
        variants={FadeLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{duration:0.4}}
        className="text-5xl  text-green-600 font-averia">
        Our Vision
        </motion.h1>
        <div 
       
        className="flex flex-1 justify-around bg-green-100 mt-8  p-14 font-averia tracking-normal	leading-8 text-gray-800 ">
          <motion.p
          variants={FadeUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{duration:0.4}}
          >
            Our vision is to become the leading provider of fresh, locally-sourced fruits, inspiring healthier communities by connecting people with nature's best produce. We aim to set a new standard for sustainability in the fruit industry, fostering a future where both people and the planet thrive through mindful consumption and eco-friendly farming.
          </motion.p>
        </div>
        <div className='flex flex-1  justify-center  bg-yellow-200 p-5 mt-11'> 
        <motion.img
        variants={FadeUp(0.4)}
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{duration:0.4}}
         className='w-[600px]  rounded-full' src={img} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Contact