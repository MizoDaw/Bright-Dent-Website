import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const Footer3 = () => {
  const {t} = useTranslation();
  const aboutUsData = {
    title: t('About us'),
    description: t('Provides services to the organization of international, medical tourism in leading hospitals and medical centers in Iraq.'),
 contactInfo: [
      { icon: <FaPhone />, title: t('HotLine'), content: ' +963 958 261 912' },
      { icon: <FaLocationDot />, title: t('Address'), content: 'Iraq - Erbiel ' },
      { icon: <FaClock />, title: t('Mon-Sat'), content: ' 9:00AM - 5:00PM' },
    ],
  };

  const exploreData = {
    title: t('Explore'),
    links: [
      { icon: <IoIosArrowForward />, text: t('Home'), href: '#NewHeroSection' },
      { icon: <IoIosArrowForward />, text: t('Services'), href: '#Services' },
      { icon: <IoIosArrowForward />, text: t('blog'), href: '#Update' },
      { icon: <IoIosArrowForward />, text: t('Reviews'), href: '#Reviews' },
    ],
  };

  const recentNewsData = [
    {
      image: '../Layout/Footer.jpg',
      date: 'November 7, 2018',
      comments: 6,
      title: 'Torem  facilisis enim sit amet placerat vestibulum.',
    },
    {
      image: '../Layout/Footer2.jpg',
      date: 'November 7, 2018',
      comments: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const footerText = t('Like-themes 2023 © All Rights reserved SDNone');

  return (
    <div className='Footer3'>
      <span className='TopFooter'>
        <div>
          <h1>{aboutUsData.title}</h1>
          <p className='About_descritpion'>{aboutUsData.description}</p>
          <span>
            {aboutUsData.contactInfo.map((info, index) => (
              <div key={index}>
                {info.icon} <h6 className='work_time_h'>{info.title}</h6> <p className='work_time_p'>{info.content}</p>
              </div>
            ))}
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
