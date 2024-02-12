import useGetQuery from "./helper/useGetQuery"




const API = {
    aboutus :"/api/about-us",
    privacy :"/api/privacy"

}


export const useGetAboutUs = (params:any={})=>useGetQuery("ABOUTUS" , API.aboutus , params)
export const useGetPrivacy = (params:any={})=>useGetQuery("PRIVACY" , API.privacy , params)
