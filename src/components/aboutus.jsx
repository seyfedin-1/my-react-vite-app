
import { FaLightbulb, FaPhoneAlt } from 'react-icons/fa';
import { BiBookmarkHeart } from 'react-icons/bi';
import aboutImage1 from '../assets/about-2.png';
import aboutImage2 from '../assets/about-3.png';
import aboutImage3 from '../assets/about-4.png';
import aboutImage4 from '../assets/about-5.jpg';

const AboutUs = () => {
    return (
        <div className="container mx-auto  py-8 space-x-4 md:mt-40" id="aboutus">
            <div className="">
                <div className="grid md:grid-cols-2 grid-cols-1 space-x-8">
                <div className="mt-20 fadeInLeft" data-wow-delay="0.2s">
  <div className="space-y-7">
    <h4 className="text-[#25E17A] text-4xl">About Us</h4>
    <h1 className="font-bold mb-4 text-5xl">Meet our company unless miss the opportunity</h1>
    <p className="text-sm font-[300px]">
      ShebaStocks is a secure stock trading platform designed for Ethiopia's emerging capital market. We enable individuals and institutions to easily buy, sell, and trade stocks of publicly listed companies, fostering financial inclusion and contributing to economic growth. Join us in shaping the future of investing in Ethiopia!
    </p>
    <div className="grid md:grid-cols-2 grid-cols-1 space-x-10">
      <div>
        <div className="flex items-start md:my-16">
          <FaLightbulb className="text-[#02f16e] text-6xl" />
          <div className="ml-4">
            <h4 className="font-semibold">Business Consulting</h4>
            <p>Our business consulting services provide expert guidance to help organizations navigate the complexities of the Ethiopian capital market.</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-start mt-16">
          <BiBookmarkHeart className="text-[#25E17A] text-6xl" />
          <div className="ml-4">
            <h4 className="font-semibold">Year Of Expertise</h4>
            <p>Our team brings over 5 years of combined experience in finance, investment, and business consulting.</p>
          </div>
        </div>
      </div>
      <div className="m-10 md:m-0">
        <a href="#" className="bg-[#25E17A] text-white hover:bg-black rounded-full py-3 px-5 flex-shrink-0">Discover Now</a>
      </div>
      <div className='mb-10 md:mb-0'>
        <div className="flex items-center">
          <FaPhoneAlt className="text-4xl text-[#25E17A] mr-4" />
          <div>
            <h4 className="font-semibold">Call Us</h4>
            <p className="mb-0 text-lg" style={{ letterSpacing: '1px' }}>+25193429773</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="animate-slideInRight">
  <div className="rounded h-[95%] bg-[#25E17A] relative overflow-hidden">
    <img src={aboutImage1} className="rounded w-full" alt="About Us 1" />
    <div className="absolute top-0 right-0">
      <img
        src={aboutImage2}
        className="img-fluid"
        style={{ width: '150px', height: '150px', opacity: 0.7 }}
        alt="About Us 2"
      />
    </div>
    <div className="absolute top-0 left-0 transform rotate-90">
      <img
        src={aboutImage3}
        className="img-fluid"
        style={{ width: '100px', height: '150px', opacity: 0.9 }}
        alt="About Us 3"
      />
    </div>
    <div className="rounded-b">
      <img src={aboutImage4} className="rounded-b w-full" alt="About Us 4" />
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
