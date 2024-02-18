import React from 'react'
import { useGetAboutUs } from '../../api/app_info'
import InfoLayoutDynamic from '../../Layout/Ui/InfoLayoutDynamic'

const About = () => {
  const {data , isLoading} = useGetAboutUs();

  return (
      <InfoLayoutDynamic 
      InfoTitle={"About us"}
      InfoText={"Who are we"} 
      InfoData={data}
      isLoading={isLoading}/>
  )
}

export default About