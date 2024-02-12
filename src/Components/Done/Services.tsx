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
           { h1:t("Orthodontic Treatment"),  title: t("It involves the use of braces, aligners, and other orthodontic appliances to straighten teeth and correct bite issues."), icon: <LiaToothSolid /> }
        , { h1:t("Cosmetic Dentistry"),  title: t("Teeth Whitening ,Porcelain Veneers ,Dental Bonding, Smile Makeovers."), icon: <LiaToothSolid />    }
        , { h1:t("Restorative Dentistry"),  title: t("Dental Fillings (Composite, Amalgam) ,Dental Crowns and Bridges ,Dental Implants ,Dentures and Partial Dentures."), icon: <LiaToothSolid /> }
        , { h1:t("Orthodontics"),  title: t("Traditional Braces ,Invisalign ,Retainers and Orthodontic Appliances."), icon:<LiaToothSolid />}
        , {  h1:t("Oral Surgery"), title: t("Tooth Extraction ,Wisdom Teeth Removal ,Dental Implant Surgery ,Bone Grafting."), icon: <LiaToothSolid /> }
        , {  h1:t("Periodontal Services"), title: t("Gum Disease Treatment ,Scaling and Root Planing ,Gum Recession Treatment ,Periodontal Surgery."), icon: <LiaToothSolid /> }
        , { h1:t("Emergency Dental Care"),  title: t("Emergency Exams ,Toothache Relief ,Emergency Tooth Repair ,Dental Trauma Treatment."), icon: <LiaToothSolid /> }
        , {h1:t("Preventive Care"),   title: t("Regular Dental Checkups and Cleanings, Dental Exams and X-Rays, Fluoride Treatments, Dental Sealants."), icon: <LiaToothSolid /> }
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