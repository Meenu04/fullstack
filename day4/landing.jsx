import { useState, useEffect } from 'react';
import icon from '../../assets/images/bg.jpg';
import '../../assets/css/landing.css';
import Footer from './footer';
import LandingNavbar from './landingnavbar';

function UserHome() {
  const [index, setIndex] = useState(0);
  const images = ['https://telecomtalk.info/wp-content/uploads/2020/11/best-prepaid-plans-under-500.png', icon];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <LandingNavbar />
      <div>
        {/* Adjusted height to consider navbar height (64px) */}
        <img
          src={images[index]}
          className='imgh'
          alt='Slide'
        />
        <div
          style={{
            position: 'absolute',
            top: '400px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '4px',
            width: '70%',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h1>
            GET TO KNOW YOUR EXCITING PLANS!!!!
          </h1>
        </div>
      </div>
        <Footer/>
    </>
  );
}

export default UserHome;



