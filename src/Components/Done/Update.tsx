import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const updatesData = [
      
        { id: 1, date: 'Dec 1, 2023', title: t('Explore the essentials of Dental care'), description: t('Regular Dental Checkups: Recommended every six months. Includes examination of teeth, gums, and mouth. Early detection of dental issues such as cavities.'), reviewAuthor: 'Moaz Mouhsen', reviewText: t('Happy Patients'), image: '../Layout/Update.jpg', reviewImage: '../Home/Update/review1.png' },
        { id: 2, date: 'Jan 1, 2024', title: t('Explore the essentials of Dental care'), description: t('Daily Oral Hygiene Routine: Brushing teeth twice a day with fluoride toothpaste. Flossing daily to remove plaque and food particles between teeth.'), reviewAuthor: 'Lahleh Mouhsen', reviewText: t('Happy Patients'), image: '../Layout/Update2.jpg', reviewImage: '../Home/Update/review2.png' },
        { id: 3, date: 'Feb 1, 2024', title: t('Explore the essentials of Dental care'), description: t('Preventive Treatments: Application of dental sealants to protect molars from decay. Fluoride treatments to strengthen tooth enamel and prevent cavities.'), reviewAuthor: 'Mhamad Mouhsen', reviewText: t('Happy Patients'), image: '../Layout/Update3.jpg', reviewImage: '../Home/Update/review3.png' },
    ];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate("/")
      };
    return (
        <div className='Update' id="Update">
            <div className='Update_Header'>
                <div>
                    <p>{t("From The Blog")}</p>
                    <h1>{t("Latest Update")}</h1>
                </div>
            </div>
            <div className="Update_Cards">
                {updatesData.map((update, index) => (
                    <div key={index} className="Update_main">
                        <img src={update.image} alt="" />
                        <div>
                            <div> <p>{update.date}</p> </div>
                            <h1>{update.title}</h1>
                            <p>{update.description}</p>
                        </div>
                        <span className='Update_main_Buttom'>
                            <div className='Update_main_rev'>
                                <img src={update.reviewImage} alt="" />
                                <span>
                                    <h1>{update.reviewAuthor}</h1>
                                    <p>{update.reviewText}</p>
                                </span>
                            </div>
                            <span className='learn_more' onClick={scrollToTop}>
                                {t("Learn more")} &rarr;
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Update;
