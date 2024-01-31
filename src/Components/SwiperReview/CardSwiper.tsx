import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import ReviewCard from './ReviewCard';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardSwiper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex + 1);
  };

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        breakpoints={{
          300: { slidesPerView: 1, spaceBetween: 20 },
          500: { slidesPerView: 1, spaceBetween: 20 },
          650: { slidesPerView: 1, spaceBetween: 20 },
          900: { slidesPerView: 1, spaceBetween: 10 },
          1200: { slidesPerView: 3, spaceBetween: 10 },
          1500: { slidesPerView: 3, spaceBetween: 10 },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 6000 }}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={handleSlideChange}
        className='Review_Cards'
      >
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <ReviewCard activeIndex={activeIndex} index={index}  />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
