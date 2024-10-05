import {MdOutlinePhoneIphone} from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';
import { FaDesktop } from "react-icons/fa6";
import { GrStorage } from "react-icons/gr";

const features = [
  {
    icon: <MdOutlinePhoneIphone className="text-[#25E17A]  w-16 h-16" />,
    title: 'Phone',
    description: 'All the power of Shebasstock exchange, in the palm of your hand. Download the Tradee mobile crypto trading app today',
  },
  {
    icon: <FaDesktop className="text-[#25E17A]  w-16 h-16" />,
    title: 'Desktop',
    description: 'Powerful stock market trading platform for those who mean business. The Shebastock market trading experience, tailor-made for your Windows or MacOS device.',
  },
  {
    icon: <FaFileAlt className="text-[#25E17A] w-16 h-16" />,
    title: 'Asset Management',
    description: 'Keeping clients informed about portfolio performance, market conditions, and changes in investment strategy',
  },
  {
    icon: <GrStorage className="text-[#25E17A]  w-16 h-16" />,
    title: 'API',
    description: 'The Shebastock market API is designed to provide an easy and efficient way to integrate your trading application into our platform.',
  },
];

const Feature = () => {
  return (
    <div className="container mx-auto pb-20 mt-10">
      <div className="text-center mb-20 space-y-8">
        <h4 className="text-[#25E17A] text-3xl">Our Features</h4>
        {/* <h1 className="md:text-5xl text-3xl font-bold mb-4 md:mx-44">Connecting businesses, ideas, and people for greater impact.</h1> */}
        <p className="mb-0 text-lg md:mx-20">All of our products are ready to go, easy to use and offer great value to any kind of business</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-whit p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105  bg-gray-200   py-10">
            <div className="flex justify-center mb-4 ">{feature.icon}</div>
            <h4 className="text-xl font-semibold text-center">{feature.title}</h4>
            <p className=" text-center mb-10">{feature.description}</p>
            <a className="btn bg-[#25E17A]  text-white rounded-full py-2 px-4 hover:bg-black transition duration-300  " href="#">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
