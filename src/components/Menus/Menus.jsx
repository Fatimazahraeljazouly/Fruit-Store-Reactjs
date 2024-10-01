/* import React from 'react'
 */
import apple from '../../assets/fruits/apple.png';
import banana from '../../assets/fruits/banana.png'
import grapes from '../../assets/fruits/graps.png'
import apricot from '../../assets/fruits/apricot.png'
import mango from '../../assets/fruits/mango.png'
import kiwi from '../../assets/fruits/kiwi.png'
import {motion} from 'framer-motion'
import {FadeLeft} from '../../utility/animation'
const MenusData=[
    {
        id:1,
        title:'Fresh Red Apples',
        link:'#',
        price:'8.00 MAD',
        img:apple,
        delay:0.3
    },
    {
        id:2,
        title:'Fresh Bananas',
        link:'#',
        price:'15.00 MAD',
        img:banana,
        delay:0.6
    },
    {
        id:3,
        title:'Fresh Grapes',
        link:'#',
        price:'7.50 MAD',
        img:grapes,
        delay:0.9
    },
    {
        id:4,
        title:'Fresh Apricot',
        link:'#',
        price:'13.40 MAD',
        img:apricot,
        delay:1.2

    },
    {
        id:5,
        title:'Fresh Mango',
        link:'#',
        price:'30.10 MAD',
        img:mango,
        delay:1.4

    },
    {
        id:6,
        title:'Fresh Kiwi',
        link:'#',
        price:'28.10 MAD',
        img:kiwi,
        delay:1.6
    },
]
const Menus = () => {
  return (
    <section>
        <div className="container pt-10 pb-20 ">
            <motion.h1 
           initial={{opacity:0,x:200}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:1,delay:0.3}}
            className='text-2xl font-bold
             md:text-left pb-10 uppercase sm:text-center text-center '>
             Our Menu</motion.h1>
            <div
             className='grid grid-cols-1
             sm:grid-cols-2 md:grid-cols-3 gap-6'>
                 {MenusData.map((menu) =>(
                    <motion.div 
                    variants={FadeLeft(menu.delay)}
            initial='hidden'
            whileInView={'visible'}
            whileHover={{scale:1.1}}
                    className='bg-white rounded-3xl px-4 
                    py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row
                    justify-around  items-center gap-3 cursor-pointer '
                    key={menu.id}>
                        <img  src={menu.img} alt=""  className='w-[60px] mb-4  
                        scale-125 transform -translate-y-6 '/>
                        <h1 className='text-lg font-semibold '> {menu.title}</h1>
                        <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                    </motion.div>
                    ))}
               
            </div>
        </div>
       
    </section>
  )
}

export default Menus
