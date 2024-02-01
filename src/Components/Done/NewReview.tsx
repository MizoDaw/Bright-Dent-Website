import React from 'react'
import CardSwiper from '../SwiperReview/CardSwiper'
import { useTranslation } from 'react-i18next'

const Review = () => {
  const {t} = useTranslation();
  return (
    <div className='Review' id='Reviews'>
        <h6>- {t("Testimonial")}</h6>
        <h1>{t("What patients are saying")}!</h1>
        <CardSwiper/>

    </div>

  )
}

export default Review