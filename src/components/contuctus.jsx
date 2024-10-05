import  { useState } from 'react';
import aboutImage1 from '../assets/about-2.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto pb-20 md:mt-40 mt-28">
      <div className="text-center mb-10 space-y-5">
        <h1 className="text-4xl text-[#25E17A] font-bold">Contact Us</h1>
        <p className="mb-4">We’d love to hear from you!</p>
      </div>
    <div className='grid md:grid-cols-2 grid-cols-1'>
<div>
<form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#25E17A] text-white rounded-full py-2 hover:bg-black transition duration-300"
        >
          Send
        </button>
      </form> 
</div>

<div className='bg-[#25E17A]'>
<img src={aboutImage1} className=" rounded-md w-full" alt="About Us 1" />
</div>

    </div>
    </div>
  );
};

export default ContactUs;
