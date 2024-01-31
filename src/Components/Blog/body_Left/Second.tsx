import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const Second = () => {
    const Data = [
        {
            name: "Modern Dental Treatment",

        },
        {
            name: "Wermatology",

        },
        {
            name: "Low Pricing Package",

        }
        ,
        {
            name: "Surgery And Padiology",

        },
        {
            name: "Family Medicine",

        },
        {
            name: "20 Years Of Experience",

        }
    ]
    return (
        <div className='Second'>
            <img src="../Blog/Second.png" alt="" />
            <div>
                <h1>Health Service Is Will Provite.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy when an unknown scrambled.</p>
                <div>

                  <div>
                  {
                        Data?.slice(0,3).map((item, index) => {
                            return (
                                <span key={index}>
                                    <FaCheck />
                                    <h6>
                                        {item?.name}
                                    </h6>

                                </span>
                            )
                        })
                    }
                  </div>
                  <div>
                  {
                        Data?.slice(3,6).map((item, index) => {
                            return (
                                <span key={index}>
                                    <FaCheck />
                                    <h6>
                                        {item?.name}
                                    </h6>

                                </span>
                            )
                        })
                    }
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy when an unknown scrambled.</p>

            </div>

            
        </div>
    )
}

export default Second