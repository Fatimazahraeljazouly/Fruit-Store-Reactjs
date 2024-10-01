import img1 from '../../../assets/fruits/watermelon.png'
import img2 from '../../../assets/fruits/avocado.png'
import img3 from '../../../assets/fruits/mango.png'
import {motion} from 'framer-motion'
import { FadeRight } from '../../../utility/animation'
const Presente = () => {
  return (
    <div className='container flex justify-center mt-16 sm-w-[100%] '>
      <div className=' grid md:grid-cols-3 sm:grid-cols-1
      sm:w-[100%] w-[90%] 
       md:gap-20 gap-7'>
            <motion.div 
                         variants={FadeRight(0.2)}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
            className=' flex justify-center border-2 rounded-sm border-none bg-green-200 w-[100%]  sm:w-[100%] lg:w-[350px]  text-center '>
                <p className=' font-averia font-semibold text-primary'>Fresh Juice</p>
                <img className=' lg:w-[117px] w-[100px]' src={img1} alt="" />
            </motion.div>
            <motion.div 
             variants={FadeRight(0.4)}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
            className='flex justify-center border-2 rounded-sm border-none bg-red-400 w-[100%]  sm:w-[100%] lg:w-[350px] text-center  '>
                <p className=' font-averia font-semibold text-green-100' >Fresh Health Fruits</p>
                <img className='w-[120px]' src={img2} alt="" />
            </motion.div>
            <motion.div
variants={FadeRight(0.6)}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
             className='flex justify-center border-2 rounded-sm border-none bg-orange-400 sm:w-[100%] w-[100%] lg:w-[350px] text-center  '>
                <p className=' font-averia font-semibold text-primary' >Summer Fruits</p>
                <img className='w-[90px]' src={img3} alt="" />
            </motion.div>
      </div>
    </div>
  )
}

export default Presente
