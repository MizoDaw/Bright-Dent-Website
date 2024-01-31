import React from 'react'

const Partners = () => {

    const PartnersArray = ["2","2", "2","2","2", "2","2","2", "2","2","2", "2"];

    return (
        <div className='Partners'>
            <h1>Partners</h1>
            <div>
                {PartnersArray?.map((item,index)=>{
                return(
                    <div key={index}>
                        <img src={`../Partners/${item}.png`} alt="" />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Partners