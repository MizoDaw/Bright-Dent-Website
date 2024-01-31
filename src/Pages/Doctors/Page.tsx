import React from 'react'
import DoctorCard from '../../Components/Doctors/DoctorCard'
import { Select } from 'antd'

const Doctors = () => {
  return (
    <div className='Doctors'>
        <div className='Hero_Doctors'>
         <div>
         <h1>Doctors</h1>
          <div>
            <h6>Home {`>`} </h6>
            <h5>Doctors</h5>
          </div>
         </div>
        </div>
        <div className='Filter'>
            <h1>
              Our Doctors
            </h1>
            <div>
            <Select
            showSearch
            style={{ width: 250 }}
            placeholder="Search For Your Best Doctor"
            optionFilterProp="children"
            filterOption={(input:any, option:any) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:any, optionB:any) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              },
              {
                value: '3',
                label: 'Communicated',
              },
              {
                value: '4',
                label: 'Identified',
              },
              {
                value: '5',
                label: 'Resolved',
              },
              {
                value: '6',
                label: 'Cancelled',
              },
            ]}
          />
            </div>
        </div>
        <div className='Docor_Cards'>
        {  [1,2,3,,3,4,4,4,5,5,5,]?.map((item,index)=>{
            return(
              <DoctorCard/>
            )
          })}
        </div>
    </div>

  )
}

export default Doctors