import React from 'react'
import {  useGetPrivacy } from '../../api/app_info'
import InfoLayout from '../../Layout/Ui/InfoLayout'

const Privacy = () => {

  const {data , isLoading} = useGetPrivacy({id:1})

  return (

    <InfoLayout 
    isAbout={false} 
    InfoData={data}
    isLoading={isLoading}/>

  )
}

export default Privacy