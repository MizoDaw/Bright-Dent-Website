import { useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();

    const updatesData = [
      
        { id: 1, date: 'Dec 1, 2023', title: 'Explore the essentials of heart care', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.', reviewAuthor: 'Ahmed Mouhsen', reviewText: 'Happy Patients', image: '../Home/Update/Update1.png', reviewImage: '../Home/Update/review1.png' },
        { id: 2, date: 'Dec 1, 2023', title: 'Explore the essentials of heart care', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.', reviewAuthor: 'Ahmed Mouhsen', reviewText: 'Happy Patients', image: '../Home/Update/Update2.png', reviewImage: '../Home/Update/review2.png' },
        { id: 3, date: 'Dec 1, 2023', title: 'Explore the essentials of heart care', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.', reviewAuthor: 'Ahmed Mouhsen', reviewText: 'Happy Patients', image: '../Home/Update/Update3.png', reviewImage: '../Home/Update/review3.png' },
    ];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate("/blog")
      };
    return (
        <div className='Update' id="Update">
            <div className='Update_Header'>
                <div>
                    <p>From The Blog</p>
                    <h1>Latest Update</h1>
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
                                Learn more &rarr;
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Update;
