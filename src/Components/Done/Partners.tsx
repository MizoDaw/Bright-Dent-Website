import React from 'react'
import { useTranslation } from 'react-i18next';

const Partners = () => {
    const {t} = useTranslation();
    const PartnersArray = ["2", "2","2","2", "2","2","2", "2"];

    return (
        <div className='Partners'>
            <h1>{t("Partners")}</h1>
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