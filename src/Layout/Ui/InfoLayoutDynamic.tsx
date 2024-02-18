import React from 'react'
import { useGetAboutUs, useGetPrivacy } from '../../api/app_info'
import { useTranslation } from 'react-i18next';

interface InfoInterface{
    InfoTitle:string,
    InfoText:string,
    InfoData:any,
    isLoading:any,
}

const About = ({InfoTitle,InfoData,InfoText,isLoading}:InfoInterface) => {

    const [t] = useTranslation();

  return (
        <div className='container'>
            <h1 className='About_Header'>{t(InfoTitle)}</h1>
            <div className='Description_title'>
                <h1 className='title'>{t(InfoText)}</h1>
            </div>
            <div className='description text-center'>
            {isLoading ? <div className='center'>{t("Loading")}...</div> : ""}
                {InfoData?.data?.translations?.at(0)?.content}
            </div>
            
        </div>
  )
}

export default About