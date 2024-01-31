import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaUser } from 'react-icons/fa';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const data = [
  {
    image: '1',
    h1: 'Medical',
    h2: 'Laboratory',
    info: '1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem',
  }
  ,
  {
    image: '2',
    h1: 'Diagnostic',
    h2: 'Center',
    info: '2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem',
  },
  {
    image: '3',
    h1: 'Computer',
    h2: 'Diagram',
    info: '3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem',
  },
];

const NewHeroSection = () => {
  const [infoData, setInfoData] = useState(data[0]);
  const [key, setKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
 
    const maxIterations = data.length;
    let iteration = key;

    const intervalId = setInterval(() => {
      setInfoData(data[iteration]);
      setKey(iteration);

      iteration = (iteration + 1) % maxIterations;
    }, 6000);

    return () => clearInterval(intervalId);
  }, [key]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleImageClick = (index:number) => {
    setInfoData(data[index]);
    setKey(index);
  };
  const moaz = (window.innerWidth = 500);

  return (
    <>
      <div className='NewHeroSection' id='NewHeroSection' style={{ backgroundImage: `url(../Home/Hero/${infoData.image}.webp)` }} key={key}>
        <div className='imNewHeroSection' key={key}>
          <div>
            <h1>{infoData?.h1}</h1> <h2>{infoData?.h2}</h2>
          </div>
          <p> {infoData?.info} </p>
          <div>
            <button className='Button1' onClick={showModal}>
              Find diagnostics <FaArrowAltCircleRight />
            </button>
            <button className='Button2' onClick={() => navigate("/doctors")}>
              <FaUser /> See Our Doctors
            </button>
          </div>
        </div>
      </div>
      <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className='Image_Controller'>
        {data.map((item, index) => (
          <div key={index} onClick={() => handleImageClick(index)} className={infoData.image === item.image ? 'active_Image' : ''}></div>
        ))}
      </div>
      <div className='Social_Controller'>
        <div><FaFacebook/></div>
        <div><FaInstagram/></div>
        <div><FaTwitter/></div>

      </div>
    </>
  );
};

export default NewHeroSection;
