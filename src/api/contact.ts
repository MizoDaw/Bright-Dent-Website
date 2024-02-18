import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
    Send: "/api/contact-us/send_message",
    ContactInfo: "/api/contact-us",
}

const Key = 'MESSAGE';
const Key2 = 'CONTACT_INFO';


export const useSendMessage = () => useAddMutation(Key, API.Send);

export const useGetContactInfo = (params:any={})=>useGetQuery("CONTACT_INFO" , API.ContactInfo , params)