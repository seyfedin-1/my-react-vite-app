import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';
import team4 from '../assets/team-4.jpg';
import team5 from '../assets/team-5.jpg';
import team6 from '../assets/team-6.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Team = () => {
  const teamData = [
    {
      name: 'Fira FIKADU',
      profession: 'BACKEND',
      image: team1,
      socials: [
        { platform: <FaFacebook />, link: '#' },
        { platform: <FaTwitter />, link: '#' },
        { platform: <FaLinkedin />, link: '#' },
        { platform: <FaInstagramSquare />, link: '#' },
      ],
    },
    {
      name: 'Tewelda',
      profession: 'Mobile App',
      image: team2,
      socials: [
        { platform: <FaFacebook />, link: '#' },
        { platform: <FaTwitter />, link: '#' },
        { platform: <FaLinkedin />, link: '#' },
        { platform: <FaInstagramSquare />, link: '#' },
      ],
    },
    {
      name: 'Eden',
      profession: 'Frontend',
      image: team3,
      socials: [
        { platform: <FaFacebook />, link: '#' },
        { platform: <FaTwitter />, link: '#' },
        { platform: <FaLinkedin />, link: '#' },
        { platform: <FaInstagramSquare />, link: '#' },
      ],
    },
    {
      name: 'Semueal',
      profession: 'Backend',
      image: team4,
      socials: [
        { platform: <FaFacebook />, link: '#' },
        { platform: <FaTwitter />, link: '#' },
        { platform: <FaLinkedin />, link: '#' },
        { platform: <FaInstagramSquare />, link: '#' },
      ],
    },
    {
      name: 'Seyfedin',
      profession: 'Frontend',
      image: team5,
      socials: [
        { platform: <FaFacebook />, link: '#' },
        { platform: <FaTwitter />, link: '#' },
        { platform: <FaLinkedin />, link: '#' },
        { platform: <FaInstagramSquare />, link: '#' },
      ],
    },
    {
      name: 'Beza',
      profession: 'Frontend',
      image: team6,
      socials: [
        { platform: <FaFacebook />, link: '#' },
        { platform: <FaTwitter />, link: '#' },
        { platform: <FaLinkedin />, link: '#' },
        { platform: <FaInstagramSquare />, link: '#' },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-10 mt-32">
      <div className="space-y-5">
        <div className="text-center mx-auto pb-5 space-y-5">
          <h4 className="text-[#25E17A] text-4xl">Our Team</h4>
        
          {/* <p className="mb-0">
           
Sure! Here’s a paragraph you can use to describe your team’s expertise:

Our dynamic team brings together experts in backend, frontend, and mobile app development, all dedicated to transforming your ideas into reality. With a strong foundation in cutting-edge technologies.
          </p> */}
        </div>
        <Slider {...settings}>
          {teamData.map((member, index) => (
            <div key={index} className="team-item">
              <div className="team-img">
                <img 
                  src={member.image} 
                  className="h-[400px] w-[350px] bg-black opacity-55 rounded-md" 
                  alt={member.name} 
                  
                  onError={(e) => { e.target.onerror = null; e.target.src='/assets/default-image.jpg'; }}
                />
              </div>
              <div className="">
                <h4 className="mb-0">{member.name}</h4>
                <p className="mb-0">{member.profession}</p>
              </div>
              <div className="flex">
                {member.socials.map((social, index) => (
                  <a 
                    className="me-3 text-2xl text-[#25E17A]" 
                    href={social.link} 
                    key={index} 
                    aria-label={`Follow ${member.name} on ${social.platform.type.displayName}`}
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
