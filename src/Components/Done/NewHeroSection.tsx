import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaUser } from 'react-icons/fa';
import ContactForm from './ContactForm';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'antd';



const NewHeroSection = () => {
  const {t} = useTranslation()

  const data = [
    {
      image: '1',
      h1: t('Medical'),
      h2: t('Laboratory'),
      info: '1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem',
    }
    ,
    {
      image: '2',
      h1: t('Diagnostic'),
      h2: t('Center'),
      info: '2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem',
    },
    {
      image: '3',
      h1: t('Computer'),
      h2: t('Diagram'),
      info: '3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem',
    },
  ];

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

  const stopAnimation =  900;


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
              {t("Find diagnostics")} <FaArrowAltCircleRight />
            </button>
            <a href='#Services'>
            <button className='Button2' >
              <FaUser /> {t("See Our Services")}
            </button>
            </a>
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
        <div><Tooltip title="Facebook.com" ><Link to={"https://facebook.com/"}><FaFacebook/></Link></Tooltip></div>
        <div><Tooltip title="Instagram.com" ><Link to={"https://instagram.com/"}><FaInstagram/></Link></Tooltip></div>
        <div><Tooltip title="Twitter.com" ><Link to={"https://twitter.com/"}><FaTwitter/></Link></Tooltip></div>
      </div>
    </>
  );
};

export default NewHeroSection;
