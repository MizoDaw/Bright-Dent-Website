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
      h1: t('Dental'),
      h2: t('Care'),
      info: t('Dental care encompasses practices aimed at maintaining oral hygiene and preventing/treating oral diseases, including regular checkups, cleanings, and treatments like fillings and implants. It plays a crucial role in promoting oral health, preventing dental issues, and enhancing overall well-being.'),
    }
    ,
    {
      image: '2',
      h1: t('Cosmetic'),
      h2: t('Dentistry'),
      info: t('Cosmetic dentistry focuses on improving the appearance of teeth, gums, and smile. It includes procedures like teeth whitening, veneers, bonding, and orthodontic treatments aimed at enhancing the aesthetic appeal of the teeth and overall smile.'),
    },
    {
      image: '4',
      h1: t('General'),
      h2: t('Dentistry'),
      info: t('General dentistry involves the diagnosis, prevention, and treatment of common dental issues affecting the teeth, gums, and oral cavity. It encompasses routine dental care such as checkups, cleanings, fillings, and extractions, aimed at maintaining optimal oral health and preventing dental problems.'),
    },
  ];

  const [infoData, setInfoData] = useState(data[0]);
  const [key, setKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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