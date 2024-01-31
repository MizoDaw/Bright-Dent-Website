import { Image } from 'antd'
import React from 'react'

const OurPartners = () => {
    // Kings.jpeg
    // neuro.jpg
    return (
        <div className='OurPartners' id='OurPartners'>
            <h1>  We cooperate with </h1>
            <div>
                <div >
                    <img src="../Home/noroot.png" alt="" />
                    <h4>
                        American Hospital Dubai
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                    </p>
                    <button>
                        More Details
                    </button>

                </div>
                <div >
                    <img src="../Home/neuro.jpg" alt="" />
                    <h4>
                    Neuro Spinal Hospital Dubai
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                    </p>
                    <button>
                        More Details
                    </button>

                </div>
                <div >
                    <img src="../Home/Kings.jpeg" alt="" />
                    <h4>
                    King's College Hospital London - Dubai
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                    </p>
                    <button>
                        More Details
                    </button>

                </div>
            </div>

        </div>
    )
}

export default OurPartners