import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";

const Footer3 = () => {
  const aboutUsData = {
    title: 'About us',
    description: 'provides services to the organization of international, medical tourism in leading hospitals and medical centers in the UAE Dubai..',
 contactInfo: [
      { icon: <FaPhone />, title: 'HotLine: ', content: ' +963 958 261 912' },
      { icon: <FaLocationDot />, title: 'Address: ', content: 'Damascus - Mazzeh ' },
      { icon: <FaClock />, title: 'Mon-Sat: ', content: ' 9:00AM - 5:00PM' },
    ],
  };

  const exploreData = {
    title: 'Explore',
    links: [
      { icon: <IoIosArrowForward />, text: 'Home', href: '#NewHeroSection' },
      { icon: <IoIosArrowForward />, text: 'Services', href: '#Services' },
      { icon: <IoIosArrowForward />, text: 'Blog', href: '#Update' },
      { icon: <IoIosArrowForward />, text: 'Reviews', href: '#Reviews' },
    ],
  };

  const recentNewsData = [
    {
      image: '../Layout/Footer.jpg',
      date: 'November 7, 2018',
      comments: 6,
      title: 'The best recreation areas for general immunity',
    },
    {
      image: '../Layout/Footer2.jpg',
      date: 'November 7, 2018',
      comments: 1,
      title: 'How can women protect themselves from breast cancer',
    },
  ];

  const footerText = 'Like-themes 2023 © All Rights reserved Bright Dent';

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
          <h1>Recent news</h1>
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
