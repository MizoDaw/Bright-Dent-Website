import { Divider } from 'antd'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

const Pricing = () => {
    const Data = [
        {
            title: "Implants",
            subTitle: "Your Gateway to a Lasting Smile",
            price: "2,000_",
            benefits: ["Free consultation (X-ray , 3D scans)", "10 Year guarantee", "Same day placement Don't wait 6 months", "Financing Options Available to Fit Your Budget", "Comprehensive Aftercare and Follow-Up Program"]
        }
        ,
        {
            title: "veneers",
            subTitle: "Your Gateway to a Hollywood Smile",
            price: "1,285_",
            benefits: ["Pain-Free Procedure", "Stain Resistance", "Longevity and Durability 10-15 Years", "Cover Damaged Teeth", "Natural Look and Feel"]
        }
         ,
         {
            title: "Other Dental Service",
            subTitle: "Complete Dental Excellence: All Services, One Destination",
            price: "500_",
            benefits: ["Oral & Maxillofacial Service ", "Radiological Services", "Aesthetic - Prosthodontic Services", "Endodontic Services ", "Other Dental Services"]
        }
    ]
    return (


        <div className='Pricing' id='Services'>
            <h6>Pricing Plan</h6>
            <h1> Get Started Now Pick A plan Later </h1>
            <div className='Pricing_Cards'>

                
            {Data?.map((item, index) => {
                            return (

                                <div key={index} className='Pricing_Card'>

                                <h4>
                                    {
                                        item?.title
                                    }
                                </h4>
                                <p>
                                    {item?.subTitle}
                                </p>
                                <h5>
                                    <strong>${item?.price}</strong> Starting price
                                </h5>
            
                                <Divider />
            
                                <h3>benefits</h3>
                                <div className='benefits'>
            
                                    {item?.benefits?.map((item, index) => {
                                        return (
                                            <span key={index} className='benefit'>
                                              <div>
                                              <FaRegCheckCircle />
                                                <h6>{item}</h6>
                                              </div>
                                                <Divider />
                                            </span>
            
                                        )
                                    })}
                                </div>
            
            
            
                                <button> Get Started </button>
            
                            </div>

                                )
                            })}

               

            </div>
        </div>
    )
}

export default Pricing