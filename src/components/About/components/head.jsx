import img from '../../../assets/fruits/Store.jpg'
import {motion} from 'framer-motion'
import { FadeUp,FadeRight } from '../../../utility/animation';

const head = () => {
  return (
    <section className=' '>
    <div className='  container  bg-yellow-200  grid grid-cols-1 md:grid-cols-2 
          relative gap-10 lg:gap-[200px] mt-14 pb-8 '>
          {/* Description */}
          <div className='flex flex-col   md:justify-start justify-center items-center text-center  
                  py-14 md:py-0 relative z-10 lg:max-w-[500px]
                  lg:justify-center'>
              <div className='flex flex-col md:justify-start justify-center text-clip md:text-left  space-y-6
                      lg:max-w-[400px]  '>
                      <motion.h1 
                      variants={FadeUp(0.4)}
                      initial="hidden"
                      animate="visible"
                      className='font-bold text-5xl text-green-600 
                          md:text-start text-center font-averia pt-10  lg:w-[500px]  '>
                          About Us
                      </motion.h1>
                      <motion.p 
                      variants={FadeRight(0.6)}
                      initial='hidden'
                      animate='visible'
                      className='md:text-start font-semibold 
                          w-[350px] lg:w-[500px] mt-4'>
                            At Fruit Store, we deliver fresh, high-quality fruits
                straight from the farm to your door. We carefully select the best 
                seasonal and exotic fruits to ensure every bite is full of flavor
                and nutrition. <br /> <br />
                Shop with us and enjoy the taste
                of nature’s finest!            
     </motion.p>
                    
              </div>
          </div>
          {/* The Image */}
          <div className='flex md:justify-start justify-center items-center pt-5 '>
               <motion.img
               initial={{opacity:0,x:200}}
               animate={{opacity:1,x:0}}
               transition={{duration:0.9,delay:1.4}}
                className='rounded-full w-[350px]' src={img} alt="Plate of fruits" />
          </div>
    </div>

  </section>






/* 
    
    <div className='flex flex-col items-center text-center mt-16 '>
      <div>
      <h1 className=' font-averia font-semibold text-3xl text-secondary  ' >About Us</h1>

        <div className='grid sm:grid-cols-2 grid-cols-1  mt-10 align-middle mr-3 ml-3 sm:gap-3'>
            <img src={img} alt="Our Store Img" />
           <div className='flex flex-col items-center align-middle'>
            <p className='content-center   font-mono    text-center 
              leading-snug tracking-wider '>
                At Fruit Store, we deliver fresh, high-quality fruits
                straight from the farm to your door. We carefully select the best 
                seasonal and exotic fruits to ensure every bite is full of flavor
                and nutrition.  </p>
                <br/>
                <p className='content-center   font-mono    text-center 
              leading-snug tracking-wider ' >Shop with us and enjoy the taste
                  of nature’s finest!</p>
           </div>
        </div>
      </div>
    </div> */
  )
}

export default head
