/* import React from 'react'
 */
import img1 from '../../../assets/fruits/banana.png'
import img2 from '../../../assets/fruits/apple.png'
import img3 from '../../../assets/fruits/graps.png'
import img4 from '../../../assets/fruits/mango.png'
import {motion} from 'framer-motion'
import { FadeLeft } from '../../../utility/animation'

const listArrivals=[
    {
        id:1,
        title:"Banna",
        img:img1,
        price:'12DH',   
        delay:0.1   
    },
    {
        id:2,
        title:"Apples",
        img:img2,
        price:'10DH', 
        delay:0.3    
    },
    {
        id:3,
        title:"Grapes",
        img:img3,
        price:'29DH', 
        delay:0.5 
    },
    {
        id:4,
        title:"Mango",
        img:img4,
        price:'19DH',  
        delay:0.5

    },
    {
        id:5,
        title:"Grapes",
        img:img3,
        price:'29DH', 
        delay:0.6 
    },
    {
        id:6,
        title:"Mango",
        img:img4,
        price:'19DH', 
        delay:0.8 
    }, {
        id:7,
        title:"Grapes",
        img:img3,
        price:'29DH',
        delay:0.8  
    },
    {
        id:8,
        title:"Mango",
        img:img4,
        price:'19DH',  
        delay:1
    }, {
        id:9,
        title:"Grapes",
        img:img3,
        price:'29DH',  
        delay:1.3
    },
    {
        id:10,
        title:"Mango",
        img:img4,
        price:'19DH', 
        delay:1.4
    }, {
        id:11,
        title:"Grapes",
        img:img3,
        price:'29DH', 
        delay:1.6
    },
    {
        id:12,
        title:"Mango",
        img:img4,
        price:'19DH',  
        delay:1.8
    },
]
const Arrivals = () => {
  return (
   <section>
    <div className="mt-[50px]">
        <div className='flex  mb-4  justify-center ' >
            <h1 className="text-3xl font-averia text-gray-800">
                New Arrivals
            </h1>
        </div>
            {/* The list of fruits */}
        <div className="container mx-auto" >
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {listArrivals.map(menu =>(
            <motion.li 
            variants={FadeLeft(menu.delay)}
            initial='hidden'
            animate='visible'
            transition={{duration:0.8}}
            key={menu.id} className='border-2 border-black flex justify-center bg-gray-50'>
            <p  className='text-green-600 sm:text-2xl font-bold'>{menu.price}</p>
            <img className='w-[110px] md:w-[70px]' src={menu.img} alt={menu.title} />
            <p className='text-xl font-semibold text-orange-300'>{menu.title}</p>
            </motion.li>
            ))}
            </ul>
        </div>
    </div>
   </section>
  )
}

export default Arrivals
