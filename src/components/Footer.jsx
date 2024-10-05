
import {  FaAppleAlt, FaPlay, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFirefoxBrowser } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className=' bg-gray-800'>
      <div className="mt-24 py-10 bg-gray-800">
      <div className="container md:mx-44 py-12 border-t border-b border-gray-600">
        <div className=" space-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="space-y-10">
            <div className="mx-20 md:mx-0">
              <a href="" className="p-0">
                <img src={logo} alt="" className='w-32 ' />
                {/* <h4 className="text-white flex items-center ">
                  <FaSearchDollar className="text-3xl m-2" />
                  ShebaStocks
                </h4> */}
              </a>
              <p className="mb-8 grid-cols-1 text-gray-400">We enable individuals and institutions to easily buy, sell, and trade stocks of publicly listed companies, fostering financial inclusion and contributing to economic growth. Join us in shaping the future of investing in Ethiopia!</p>
              <div className="flex">
                <a href="#" className="bg-[#25E17A] flex rounded align-items-center py-2 px-3 me-2">
                  <FaAppleAlt className="text-white mt-4" />
                  <div className="ms-3">
                    <small className="text-white">Download on the</small>
                    <h6 className="text-white">App Store</h6>
                  </div>
                </a>
                <a href="#" className="bg-black flex rounded align-items-center py-2 px-3 ms-2">
                  <FaPlay className="text-[#25E17A] mt-4" />
                  <div className="ms-3">
                    <small className="text-white">Get it on</small>
                    <h6 className="text-white">Google Play</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="md:ml-10 mx-20 ">
            <div className="space-y-4">
              <h4 className="text-white mb-4">Quick Links</h4>
             <div className='flex text-gray-400 hover:text-[#25E17A]'> 
                <FaAngleRight className="m-1 " />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]"> About Us</a>
             </div>
             <div className='flex text-gray-400 hover:text-[#25E17A] '> 
                <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A] "> Contact Us</a>
             </div>
             <div className='flex text-gray-400 hover:text-[#25E17A] '>
                 <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]">Feature</a>
             </div>
            </div>
          </div>

          <div className="mx-20 md:mx-0">
            <div className="space-y-5">
              <h4 className="text-white mb-4">Support</h4>
              <div className='flex text-gray-400 hover:text-[#25E17A] '>
                 <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]">Privacy Policy</a>
             </div>
             <div className='flex text-gray-400 hover:text-[#25E17A] '>
                 <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]">Terms & Conditions</a>
             </div>
             <div className='flex text-gray-400 hover:text-[#25E17A] '>
                 <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]">Support</a>
             </div>
             <div className='flex text-gray-400 hover:text-[#25E17A] '>
                 <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]">FAQ</a>
             </div>
             <div className='flex text-gray-400 hover:text-[#25E17A] '>
                 <FaAngleRight className="m-1" />
             <a href="#" className="text-gray-400 hover:text-[#25E17A]"> Help</a>
             </div>
              
            </div>
          </div>

          <div className="mx-20 md:mx-0">
            <div className="space-y-4">
              <h4 className="text-white mb-4">Contact Info</h4>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-[#25E17A] me-3" />
                <p className="text-white mb-0">Addis Ababa, Ethiopia</p>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-[#25E17A] me-3" />
                <p className="text-white mb-0">shabastocks@gmail.com.com</p>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="text-[#25E17A] me-3" />
                <p className="text-white mb-0">(+251)934177253</p>
              </div>
              <div className="flex items-center mb-4">
                <FaFirefoxBrowser className="text-[#25E17A] me-3" />
                <p className="text-white mb-0">ShebaStocks@ex.com</p>
              </div>
              <div className="flex gap-3">
                <a className="bg-[#25E17A] rounded-full w-12 h-12 hover:bg-black" href="#"><i className="fab fa-facebook-f ml-1 px-4 mt-4 md:ml-5 md:px-0 text-white"></i></a>
                <a className="bg-[#25E17A] rounded-full w-12 h-12 hover:bg-black" href="#"><i className="fab fa-twitter ml-1 px-4 mt-4 md:ml-5 md:px-0 text-white"></i></a>
                <a className="bg-[#25E17A] rounded-full w-12 h-12 hover:bg-black" href="#"><i className="fab fa-instagram ml-1 px-4 mt-4 md:ml-5 md:px-0 text-white"></i></a>
                <a className="bg-[#25E17A] rounded-full w-12 h-12 hover:bg-black" href="#"><i className="fab fa-linkedin-in ml-1 px-4 mt-4 md:ml-5 md:px-0 text-white"></i></a>
   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className='text-lg text-white text-center pb-10'>© Copyright 2025 Shebastocks.  All rights reserved</h1>
    </div>
  );
};

export default Footer;
