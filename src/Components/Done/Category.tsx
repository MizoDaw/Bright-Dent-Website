import React from 'react'
import { useTranslation } from 'react-i18next';
import { useGetAllCategories } from '../../api/category';
import { BaseURL } from '../../api/config';

const Category = () => {
  const {t} = useTranslation();
  const {data , isLoading} = useGetAllCategories();
    

  
  return (
      <div className='Category_Section'>
          <h1 className='header'>{t("Categories")}</h1>
          {
            isLoading
            ? t("loading")
            : <div className='image_container'>
            {data?.data.map((item:any)=>{
            return(
                <div className='data_container'>
                    <div key={item.id}>
                        <img src={BaseURL + item?.image} alt="" className='category_image' />
                    </div>
                    <h1 className='category_title'>{t(`${item.name}`)}</h1>
                  </div>
                )
            })}
        </div>
          }
          
      </div>
  )
} 



 export default Category 