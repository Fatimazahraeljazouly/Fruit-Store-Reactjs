import { FaShippingFast } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  return (
    <div className='flex justify-center mt-16'>
     <div className="sm:w-[70%] w-[90%]" >
     <h2 className='text-center font-averia 
     font-semibold text-2xl'>Our Services</h2>
     <div className='grid lg:grid-cols-2  grid-cols-1 
     mt-7 sm:gap-2 gap-9 lg:gap-22 sm:w-[100%] '>
        <div className='bg-gray-200 text-center p-[10px] sm:w-[100%]'>
        <GiPlantSeed className='size-9 ' />
        <p className="font-averia">100% NATURAL</p>
        </div>
        <div className='bg-gray-200 text-center p-[10px] sm:w-[100%]'>
        <FaShippingFast className='size-9 '/>
        <p className="font-averia" >FAST SHIPPING</p>
        </div>
        
        <div className='bg-gray-200 text-center p-[10px]  sm:w-[100%]'>
        <TbTruckDelivery  className='size-9 '/>
        <p className="font-averia" > FREE DELIVERY</p>
        </div>
        <div className='bg-gray-200 text-center p-[10px]  sm:w-[100%]'>
        <GrValidate   className='size-9 '/>
        <p className="font-averia" >High Quality</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Services
