import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { Space, Rate } from 'antd';
import { PhoneFilled, UserOutlined } from '@ant-design/icons';



const HeroSection = () => {  
  


  return (
    <div className='HeroSection'>
      <div className='HeroSection_Left'>
        <h1>Medical</h1>
        <h1>Tourism</h1>
        <h1>Made Easy</h1>
        <p>
        Welcome to the world`s first end to end
Medical Tourism booking platform
        </p>
      </div>
      <div className='HeroSection_Right'>
        <h1>Sample Quotation</h1>
        <Input prefix={<UserOutlined />}  size="large" placeholder="Inter Your Name" />
        <Input prefix={<PhoneFilled />}  size="large" placeholder="Inter Your Phone Number" />
        <Input.TextArea  placeholder="Comment Or Message"size="large" />
        <Button block type='primary'>See Your Trip</Button>
      </div>
    </div>

  )
}

export default HeroSection