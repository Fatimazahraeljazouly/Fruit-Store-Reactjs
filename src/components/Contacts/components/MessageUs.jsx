import React from 'react'

const MessageUs = () => {
    
const {formData,setFormData} = React.useState({
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
    message: 'Hello there!',
  }
);

const handlechange=(e)=>{
    const {name,value}=e.target
   
    setFormData({...formData,[name]:value})
}

const handleSubmit=(e)=>{
    alert('Message Sent')

}
  return (
    <div>
      <div  className='grid grid-cols-2 pt-12 gap-10'>
        <div>
            <h1>Message Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet eum sit culpa. Deleniti maxime et beatae vitae quod accusamus quos incidunt, minus aspernatur praesentium officiis. Nihil, pariatur cum. Unde, modi?</p>
        </div>
        <div>
            <form action="" method='post' className='flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='name'>First Name:</label><br/>
                <input type="text" name="fname" id="name" onChange={handlechange} required placeholder='Enter your first name'/>

                <label htmlFor='name'>Last Name:</label><br/>
                <input type="text" name="lname" id="name" onChange={handlechange} required placeholder='Enter your last name'/>

                <label htmlFor='email'>Email:</label><br/>
                <input type="text" name="email" id="email" onChange={handlechange} required placeholder='Enter your Email' />

                <label htmlFor='message'>Message:</label><br/>
                <textarea name="message" id="message" rows={4} onChange={handlechange} required placeholder='Enter your message '></textarea>
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default MessageUs


/* 

import React, { useState } from 'react';

const SimpleForm = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic to handle the submitted form data, e.g., send to a server
  };

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
       
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            placeholder='Enter your name'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            placeholder='Enter your message'
            rows='4'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
 */