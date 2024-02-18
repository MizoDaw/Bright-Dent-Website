import React from "react";
import { useTranslation } from "react-i18next";

interface ReviewCardProps {
  activeIndex: number;
  index: number;
  name: string;
  role: string;
  imageSrc: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  activeIndex,
  index,
  name,
  role,
  imageSrc,
  review,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        activeIndex === index ? "ActiveReviewCard ReviewCard" : "ReviewCard"
      }
    >
      <div>
        <div>
          <img src={imageSrc} alt="" />
          <span>
            <h5>{name}</h5>
            <h6>{role}</h6>
          </span>
        </div>
        <img src="../Reviews/review.svg" alt="" />
      </div>
      <p>{t(review)}</p>
    </div>
  );
};

export default ReviewCard;