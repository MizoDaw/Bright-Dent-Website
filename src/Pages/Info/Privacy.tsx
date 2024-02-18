import React from 'react'
import {  useGetPrivacy } from '../../api/app_info'
import InfoLayoutDynamic from '../../Layout/Ui/InfoLayoutDynamic'

const Privacy = () => {
  const {data , isLoading} = useGetPrivacy({id:1})

  return (
      <InfoLayoutDynamic 
        InfoTitle={"Privacy"}
        InfoText={"Our Privacy"} 
        InfoData={data}
        isLoading={isLoading}/>
  )
}

export default Privacy