import React from 'react'
import Pricing from '../../Components/Services2/Pricing'
import Process from '../../Components/Services2/Process'
import OurDocrtrs from '../../Components/Done/OurDocrtrs'
import Partners from '../../Components/Done/Partners'

const Page2 = () => {
  return (
    <div className="Services2" >
        <Pricing/>
        <Process/>
        <div className='Services2_body'>
                    <OurDocrtrs/>

                </div>
                <Partners/>
    </div>
  )
}

export default Page2