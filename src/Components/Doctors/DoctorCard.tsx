import React from 'react'
import { Link } from 'react-router-dom'
import useImageError from '../../Hooks/useImageError'
import { MdArrowOutward } from "react-icons/md";

const DoctorCard = () => {
  return (
    <div className='DoctorCard'>
            <img src="../Doctors/Doctor1.png" onError={useImageError} alt="ss" />
            <h1>
            Dr. Daisy Bins
            </h1>
            <h5>
            Dentist surgeon
            </h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla
            </p>
            <Link to={'/'}>
                Read More <MdArrowOutward />
            </Link>
    </div>
  )
}

export default DoctorCard