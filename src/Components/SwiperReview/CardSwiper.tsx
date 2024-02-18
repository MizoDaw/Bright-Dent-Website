import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { reviewsData } from "./ReviewData";

const CardSwiper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [slides, setSlides] = useState<any[]>([]);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    // Flip the order of slides for Arabic language
    const reversedSlides = [...reviewsData].reverse();
    setSlides(language === "ar" ? reversedSlides : reviewsData);
  }, [language]);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex + 1);
  };

  return (
    <div>
        <Swiper
          dir="ltr"
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
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
          className="Review_Cards"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                activeIndex={activeIndex}
                index={index}
                name={item.name}
                role={item.role}
                imageSrc={item.imageSrc}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default CardSwiper;
