import React from 'react'
import { useNavigate } from 'react-router-dom';

const Services2 = () => {
    const navigate = useNavigate()
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate("/services")
    };
  
  return (
    <div className='Services2_Section'>
        <h1>Popular Packages</h1>
        <div className='Services2_images'>
      
       <div  onClick={scrollToTop}>
            <img src="../Services2/dentist.jpeg" alt="" />
            <h1>dentist</h1>
        </div>
        <span onClick={scrollToTop}>
            <img src="../Services2/physician.webp" alt="" />
            <h1>physician</h1>
        </span>
       <span onClick={scrollToTop}>
            <img src="../Services2/physician.webp" alt="" />
            <h1>physician</h1>
        </span>

        <div onClick={scrollToTop}>
            <img src="../Services2/dentist.jpeg" alt="" />
            <h1>dentist</h1>
        </div>
        </div>

    </div>
    
  )
}

export default Services2