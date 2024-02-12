import { useTranslation } from "react-i18next"

const ReviewCard = ({activeIndex,index}:any) => {
  const {t} = useTranslation()
  return (
    <div className={activeIndex === index ? 'ActiveReviewCard ReviewCard' : 'ReviewCard' } >
           <div>
            <div>
              <img src="../Reviews/2.png" alt="" />
              <span>
                <h5>Carry Malan</h5>
                <h6>{t("Happy Partner")}</h6>
              </span>
            </div>
            <img src="../Reviews/review.svg" alt="" />
           </div>
           <p>
           {t("I used to dread going to the dentist, but Dr. Smith and her team changed that! They're so gentle and caring.")}
           </p>
    </div>
  )
}

export default ReviewCard
