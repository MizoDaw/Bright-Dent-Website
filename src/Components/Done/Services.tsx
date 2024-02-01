import { SlChemistry } from "react-icons/sl";
import { IoMdColorPalette } from "react-icons/io";
import Visibale from '../../HighOrderComponent/withVisibale';
import { FaEye,FaTruckMedical } from 'react-icons/fa6';
import {  FaHeartbeat } from "react-icons/fa";
import { LiaToothSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";
import { useTranslation } from "react-i18next";


const Services = () => {
    const {t} = useTranslation();
        const Data: any = [
           { h1:t("Dental Care"),  title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <LiaToothSolid /> }
        , { h1:t("Heart Care"),  title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <FaHeartbeat />    }
        , { h1:t("Ambulance"),  title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <FaTruckMedical /> }
        , { h1:t("Laboratory"),  title: "Hospitals are equipped with advanced medical technologies and facilities.", icon:<SlChemistry />}
        , {  h1:t("Eye Care"), title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <FaEye /> }
        , {  h1:t("Neurology"), title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <IoMdColorPalette /> }
        , { h1:t("Heart Care"),  title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <LiaToothSolid /> }
        , {h1:t("Radiology"),   title: "Hospitals are equipped with advanced medical technologies and facilities.", icon: <FaHeartbeat /> }
    ]
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className="Services" id='Services'>
            <div className="in">
                <h1>{t("High Quality Services for You")}.</h1>
                <Visibale className='Features'>
                    {Data?.map((item: any, index: number) => {
                        return (
                            <div className="Feature" key={index}>
                               <div>
                                <span>
                                {item?.icon}
                                </span>
                                <h1>

                                {item?.h1}
                                </h1>
                                </div>

                                <p>
                                {item?.title}
                                </p>
                                <Link onClick={scrollToTop} className="Link" to="/">
                                <ImArrowUpRight2 />


                                </Link>


                            </div>

                        )
                    })}
                </Visibale>
            </div>
        </div>
    )
}

export default Services