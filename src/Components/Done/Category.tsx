import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const {t} = useTranslation();
  const CategoriesArray = [
    {title:"dent",image:"dentist"},
    {title:"dent",image:"dentist"},
    {title:"dental",image:"dentist"},
    {title:"dent",image:"dentist"},
    {title:"dent",image:"dentist"},
    {title:"dent",image:"dentist"},
    {title:"dent",image:"dentist"},
    {title:"dent",image:"dentist"},

    {title:"dental nskj",image:"dentist"},

  ];

  return (
      <div className='Category_Section'>
          <h1 className='header'>{t("Categories")}</h1>
          <div className='image_container'>
              {CategoriesArray?.map((item,index)=>{
              return(
                  <div key={index}>
                      <h1 className='category_title'>{t(`${item.title}`)}</h1>
                      <img src={`../Services2/${item.image}.jpeg`} alt="" className='category_image' />
                  </div>
                  )
              })}
          </div>
      </div>
  )
}



export default Category