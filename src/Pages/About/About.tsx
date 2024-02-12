import React from 'react'
import { useGetAboutUs } from '../../api/app_info'
import InfoLayout from '../../Layout/Ui/InfoLayout'

const About = () => {
  const {data , isLoading} = useGetAboutUs({id:1});

  return (

      <InfoLayout 
      isAbout={true} 
      InfoData={data}
      isLoading={isLoading}/>

  )
}

export default About