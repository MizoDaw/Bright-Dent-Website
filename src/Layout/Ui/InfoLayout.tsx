import React from 'react'
import { useGetAboutUs, useGetPrivacy } from '../../api/app_info'
import { useTranslation } from 'react-i18next';

interface InfoInterface{
    isAbout:boolean,
    InfoData:any,
    isLoading:any,
}

const About = ({isAbout,InfoData,isLoading}:InfoInterface) => {

    const [t] = useTranslation();

  return (
        <div className='container'>
            <h1 className='About_Header'>{isAbout? t("About us") : t("Privacy") }</h1>
            
            <div className='Description_title'>

                
                <h1 className='title'>{ isAbout ? t("Who are we"): t("Our Privacy") }</h1>

            </div>

            <div className='description text-center'>
            {isLoading ? <div className='center'>{t("Loading")}...</div> : ""}
                {InfoData?.data?.translations?.at(0)?.content}
            </div>
            
        </div>
  )
}

export default About