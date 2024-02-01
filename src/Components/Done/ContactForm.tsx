import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { PhoneFilled, UserOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';

const ContactForm = ({isModalOpen,setIsModalOpen}:any) => {
    const {t} = useTranslation();

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
      <Modal  title={t("Leave your contact number and we call you back")} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     <div className="ContactForm">
     {/* <h6></h6> */}
        <Input prefix={<UserOutlined />}  className='Input'  size="large" placeholder={t("Inter Your Name")} />
        <Input prefix={<PhoneFilled />} className='Input'  size="large" placeholder={t("Inter Your Phone Number")} />
        <Input.TextArea  className='Input' placeholder={t("Comment Or Message")} size="large" />
        <Button onClick={handleOk} block type='primary'>{t("Order a consultation")}</Button>
     </div>
      </Modal>
        

  )
}

export default ContactForm