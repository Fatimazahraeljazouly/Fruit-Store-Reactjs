import img from '../../../assets/fruits/qualityFruits.jpg'
import{motion} from 'framer-motion'
import { FadeLeft, FadeRight, FadeUp } from '../../../utility/animation';
const Mission = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1   relative gap-20 lg:gap-[200px] items-center mt-16'>
      {/* Image Section */}
      <motion.div 
       variants={FadeUp(0.7)}
        initial='hidden'
        animate='visible'
        transition={{duration:0.6}}
      className='flex justify-center md:justify-end '>
        <img
         className='w-[360px] lg:w-[350px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out' src={img} alt="Quality Fruits" />
      </motion.div>

      {/* Text Section */}
      <motion.div
      variants={FadeLeft(0.3)}
        initial='hidden'
        animate='visible'
        transition={{duration:0.3}}
       className='text-center md:text-left'>
        <motion.h1
        variants={FadeUp(0.1)}
        initial='hidden'
        animate='visible'
        transition={{duration:0.3}}
         className='font-bold text-4xl md:text-5xl font-averia tracking-wide text-orange-600'>
          Our Mission
        </motion.h1>
        <p className='leading-relaxed tracking-wider font-medium text-gray-700 mt-6 w-[350px] lg:w-[500px] mx-auto md:mx-0'>
          Our mission is to provide the freshest and highest quality fruits directly from local farms to your home. <br /> We are committed to promoting healthy lifestyles by making nutritious, delicious fruits accessible to everyone, all while supporting sustainable farming practices.
        </p>
      </motion.div>
    </div>
  );
}

export default Mission;
