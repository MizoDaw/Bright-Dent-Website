import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useGetContactInfo } from '../../api/contact';
import { IoMdInformationCircle } from "react-icons/io";

const Footer3 = () => {
  const {t} = useTranslation();
  const {data,isLoading} = useGetContactInfo();  

  const exploreData = {
    title: t('Explore'),
    links: [
      { icon: <IoIosArrowForward />, text: t('Home'), href: '#NewHeroSection' },
      { icon: <IoIosArrowForward />, text: t('Services'), href: '#Services' },
      { icon: <IoIosArrowForward />, text: t('About'), href: 'about' },
      { icon: <IoIosArrowForward />, text: t('Privacy'), href: 'privacy' },
    ],
  };

  const recentNewsData = [
    {
      image: '../Layout/Footer.jpeg',
      date: 'November 7, 2018',
      comments: 6,
      title: t('Teeth Whitening ,Porcelain Veneers ,Dental Bonding, Smile Makeovers.'),
    },
    {
      image: '../Layout/Update.jpg',
      date: 'November 7, 2018',
      comments: 1,
      title: t('Tooth Extraction ,Wisdom Teeth Removal ,Dental Implant Surgery ,Bone Grafting.'),
    },
  ];

  const footerText = t('Like-themes 2023 © All Rights reserved SDNone');

  return (
    <div className='Footer3'>
      <span className='TopFooter'>
        <div>
          <h1>{t('Contact Info')}</h1>
          <span>
            {isLoading ? t("loading")
            : data?.data.map((e:any) => (
              <div>
                <IoMdInformationCircle/> <h6 className='work_time_h'>{e.key}: </h6> <p className='work_time_p'> {e.value}</p>
              </div>
            ))
            }
          </span>
        </div>

        <span>
          <h1>{exploreData.title}</h1>
          <ul className='Links'>
            {exploreData.links.map((link, index) => (
              <li key={index}> {link.icon}  <a href={link.href}>{link.text}</a> </li>
            ))}
          </ul>
        </span>

        <article>
          <h1>{t("Recent news")}</h1>
          <div>
            {recentNewsData.map((news, index) => (
              <span className='Recent_news' key={index}>
                <img src={news.image} alt="" />
                <div>
                  <div>
                    <span><FaClock /> {news.date}</span><span> <IoChatbubble /> {news.comments} </span>
                  </div>
                  <h6>{news.title}</h6>
                </div>
              </span>
            ))}
          </div>
        </article>
      </span>

      <div className='bottom_footer'>
        <span>{footerText}</span>
      </div>
    </div>
  );
}

export default Footer3;
