import img from '../../../assets/fruits/qualityFruits.jpg'

const Mission = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1   relative gap-20 lg:gap-[200px] items-center mt-16'>
      {/* Image Section */}
      <div className='flex justify-center md:justify-end '>
        <img className='w-[360px] lg:w-[350px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out' src={img} alt="Quality Fruits" />
      </div>

      {/* Text Section */}
      <div className='text-center md:text-left'>
        <h1 className='font-bold text-4xl md:text-5xl font-averia tracking-wide text-orange-600'>
          Our Mission
        </h1>
        <p className='leading-relaxed tracking-wider font-medium text-gray-700 mt-6 w-[350px] lg:w-[500px] mx-auto md:mx-0'>
          Our mission is to provide the freshest and highest quality fruits directly from local farms to your home. <br /> We are committed to promoting healthy lifestyles by making nutritious, delicious fruits accessible to everyone, all while supporting sustainable farming practices.
        </p>
      </div>
    </div>
  );
}

export default Mission;
