import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { PhoneFilled, UserOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const ContactForm = ({isModalOpen,setIsModalOpen}:any) => {

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
  return (
      <Modal  title="Leave your contact number and we call you back" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     <div className="ContactForm">
     {/* <h6></h6> */}
        <Input prefix={<UserOutlined />}  className='Input' size="large" placeholder="Inter Your Name" />
        <Input prefix={<PhoneFilled />} className='Input'  size="large" placeholder="Inter Your Phone Number" />
        <Input.TextArea  className='Input' placeholder="Comment Or Message"size="large" />
        <Button block type='primary'>Order a consultation</Button>
     </div>
      </Modal>
        

  )
}

export default ContactForm