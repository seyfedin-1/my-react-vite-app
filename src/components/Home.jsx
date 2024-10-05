
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../assets/carousel-1.jpg';
import carousel2 from '../assets/carousel-2.jpg';
import AboutUs from './Aboutus';
import Feature from './Feature';
import ContactUs from './contuctus';
import Footer from './Footer';
import Team from './Team';
// import StockChart from './news';
//import Footer2 from './footer1';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <div className="slick-arrow right-arrow">→</div>,
        prevArrow: <div className="slick-arrow left-arrow">←</div>,
    };

    return (
        <div className="mt-32 md:mt-0 ">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="relative">
                    <img src={carousel1} className="w-full h-auto bounce" alt="Carousel Image 1" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="text-center text-white space-y-10">
                            <h4 className="lg:text-7xl sm:text-5xl  text-[#2CE584] animate-fadeIn">Welcome To ShebaStocks</h4>
                            <h1 className="lg:text-9xl md:text-7xl sm:text-4xl font-bold mb-4 animate-fadeIn">Invest your money with higher return</h1>
                            <p className="md:pt-20 lg:text-3xl md:text-2xl text-sm animate-fadeIn">
                                Serves as a marketplace for individuals and institutions to buy, sell, and trade stocks of publicly listed companies within Ethiopia...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative">
                    <img src={carousel2} className="w-full h-auto bounce" alt="Carousel Image 2" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="text-center text-white space-y-10">
                            <h4 className="lg:text-7xl md:text-5xl sm:text-3xl text-[#2CE584]   animate-fadeIn">Welcome To ShebaStocks</h4>
                            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl font-bold mb-4 animate-fadeIn">Invest your money with higher return</h1>
                            <p className="md:pt-20 lg:text-3xl md:text-2xl  sm:text-lg text-sm animate-fadeIn">
                                Serves as a marketplace for individuals and institutions to buy, sell, and trade stocks of publicly listed companies within Ethiopia...
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
          <AboutUs />
          <Feature />
          <ContactUs />
          <Team />
          <Footer />
          
        </div>
        
    );
};

export default Home;
