import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Head = () => {
  return (
    <div className='mt-10'>
      {/* Main container with a soft green background */}
      <div className='flex flex-col justify-between text-center bg-green-200'>
        <h1 className='p-14 text-4xl font-averia text-green-800'>
          Get in Touch
        </h1>

        <div className='grid grid-cols-3 gap-8 pb-16'>
          {/* WhatsApp Contact */}
          <div className='flex flex-col justify-center items-center text-center'>
            <a
              className='flex flex-col items-center font-poppins text-[17px] text-gray-600 font-medium'
              href='https://api.whatsapp.com/send?phone=+212633382112'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp className='text-3xl mb-2 text-green-700' />
              Reach Us on WhatsApp
            </a>
            <p className='text-sm  text-gray-600'>
              Quick support, Mon-Fri, 9 AM - 6 PM
            </p>
          </div>

          {/* Instagram Follow */}
          <div className='flex flex-col justify-center items-center text-center'>
            <a
              className='flex flex-col items-center font-poppins text-[17px] text-gray-600 font-medium'
              href='https://www.instagram.com/fatimzhra._.eljazouly/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-3xl mb-2 text-purple-600' />
              Follow Us on Instagram
            </a>
            <p className='text-sm  text-gray-600'>
              Stay updated with our latest posts and stories
            </p>
          </div>

          {/* Facebook Contact */}
          <div className='flex flex-col justify-center items-center text-center'>
            <a
              className='flex flex-col items-center font-poppins text-[17px] text-gray-600 font-medium'
              href='https://www.facebook.com/fatimzhra.eljazouly/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='text-3xl mb-2 text-blue-600' />
              Connect on Facebook
            </a>
            <p className='text-sm text-gray-600'>
              Join our community and stay informed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
