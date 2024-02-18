import React, { useRef, useState } from 'react'
import { Input, Modal,Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSendMessage } from '../../api/contact';
import { toast } from 'react-toastify';
import { Field, Form, Formik } from "formik";
import { InitialValues, InitialValuess, validationSchema } from './ContactFromUtils';


const ContactForm = ({isModalOpen,setIsModalOpen}:any) => {
    const ref = useRef<any>()
    const {t} = useTranslation();
    const [Name , setName] = useState('') 
    const [Email , setEmail] = useState('') 
    const [Message , setMessage] = useState('') 


    const {mutate , isSuccess,isLoading} = useSendMessage()
    
    const handleSubmit = () =>{
      console.log("moaz");
      
      if(!Name || !Email || !Message  ){
        toast.error(t("please_fill_all_input"))
      }

      let value:InitialValuess = {
        name:Name,
        email:Email,
        message:Message
      }

    mutate({...value})
      if(isSuccess){
        toast.success(t("Send Data Successfully"))
        setMessage('')
        setName('')
        setEmail('')
        setIsModalOpen(false)
      }
    }

    const handleCancel = () => {
      setMessage('')
      setName('')
      setEmail('')
      setIsModalOpen(false)
    };

  return (
      <Modal  title={t("Leave your messages and your email.")} open={isModalOpen}  onCancel={handleCancel}>
          <Formik
          initialValues={InitialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema} >
          {({ errors, setFieldValue }) => (

          <Form className='ContactForm'>
            <Field  className='Input' required type='text' value={Name} onChange={(e:any) => setName(e.target.value)} placeholder={t('name')} name='name' />
            <Field  className='Input' required type='email' value={Email} onChange={(e:any) =>setEmail(e.target.value)} placeholder={t('email')} name='email'/>
            <textarea
            className='Input'
            ref={ref}
            value={Message}
            onChange={(e) =>setMessage(e.target.value)}            
            placeholder={t('message')} 
            />
            {isLoading  ? <button className='button'>{t("Loading")}...</button> :<button className='button' type='submit' >{t("send_message")}</button>}
          </Form>
          )}
        </Formik>
      </Modal>

  )
}

export default ContactForm