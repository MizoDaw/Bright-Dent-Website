import React from 'react'
import { useGetAboutUs } from '../../api/app_info'
import InfoLayout from '../../Layout/Ui/InfoLayout'

const About = () => {
  const {data , isLoading} = useGetAboutUs();

  return (
      <InfoLayout 
      isAbout={true} 
      InfoData={data}
      isLoading={isLoading}/>
  )
}

export default About