import React from 'react'
import { useNavigate } from 'react-router-dom';

const Services2 = () => {

    const navigate = useNavigate()
    const scrollToTop = () => {
      window.scrollTo({ top: 650, behavior: 'smooth' });
      navigate("/")
    };

  return (
    <div className='Services2_Section'>
        <h1>Popular Packages</h1>
        <div className='Services2_images'>

       <div  onClick={scrollToTop}>
            <img src="../Services2/dentist.jpeg" alt="" />
            <h1>Dentist</h1>
        </div>
        <span onClick={scrollToTop}>
            <img src="../Services2/dentist.jpeg" alt="" />
            <h1>Dentist</h1>
        </span>
       <span onClick={scrollToTop}>
            <img src="../Services2/dentist.jpeg" alt="" />
            <h1>Dentist</h1>
        </span>

        <div onClick={scrollToTop}>
            <img src="../Services2/dentist.jpeg" alt="" />
            <h1>Dentist</h1>
        </div>
        </div>

    </div>
    
  )
}

export default Services2