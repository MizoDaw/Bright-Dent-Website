import { Rate } from 'antd'
import React, { useState } from 'react'
import Visibale from '../../HighOrderComponent/withVisibale'

const Reviews = () => {
    const [main, setmain] = useState(1)
  return (
    <Visibale className='Reviews' id="Reviews">
        <h6>Our Service & Testimonial</h6>
        <h1>Service & Reviews</h1>
        <div>
            <img src="../Home/review.png" alt="" />
            <div className='Reviews_Info'>
                <div className='Reviews_Info_top'>
                    <div>
                        <img src="../Home/review1.png" className={main === 1 ? `ActiveImage` : ``} onClick={()=>setmain(1)} alt="" />
                        <img src="../Home/review2.png" className={main === 2 ? `ActiveImage` : ``}onClick={()=>setmain(2)} alt="" />
                        <img src="../Home/review3.png"className={main === 3 ? `ActiveImage` : ``} onClick={()=>setmain(3)} alt="" />
                        <img src="../Home/review4.png"className={main === 4 ? `ActiveImage` : ``} onClick={()=>setmain(4)} alt="" />
                    </div>
                    <div className='reviewSvg'>
                        <img src="../Home/review.svg" alt="" />
                    </div>
                </div>
                <div className='Reviews_Info_Mid'>
                        <p>
                        Intrinsicly monetize backend methods of empowerment and cutting-edge partnerships. Competently incentivize end-to-end content before premium applications. Enthusiastically foster multifunctional vortals and market-driven internal or "organic" sources. Completely extend superior materials whereas superior supply chains. Holisticly e-enable reliable manufactured products through turnkey services.

                        </p>
                        <Rate  defaultValue={5} />
                        <div>
                            <img src={`../Home/review${main}.png`} alt="" />
                            <span>
                                <h1>Ahmed Mouhsen</h1>
                                <p>Happy Patients</p>
                            </span>
                        </div>
                </div>
                <span className='Reviews_Info_Buttom'>

                </span>

            </div>
        </div>
    </Visibale>
   
  )
}

export default Reviews