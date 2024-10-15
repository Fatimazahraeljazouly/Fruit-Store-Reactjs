import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const head = () => {
  return (
    <div>
      <div className='flex flex-col justify-between text-center bg-green-200'>
        <h1 className='p-14 text-4xl font-averia text-green-800'>Get in Touch</h1>
        <div className='grid grid-cols-3 pb-16'>
          <div className='flex flex-col justify-center items-center text-center '>
            <FaWhatsapp className='text-3xl mb-2 ' /> {/* Ajoute `text-3xl` pour la taille et `mb-2` pour l'espacement */}
            <a href='https://api.whatsapp.com/send?phone=+212633382112'>
              Send Us On Whatsapp
            </a>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <FaInstagram className='text-3xl mb-2' />
            <a href='https://www.instagram.com/fatimzhra._.eljazouly/'>
              Follow Us On Instagram
            </a>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <FaFacebook className='text-3xl mb-2' />
            <a href='https://www.facebook.com/fatimzhra.eljazouly/'>
              Contact Us On Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default head;
