import useGetQuery from "./helper/useGetQuery"

const API = {
    GET :"/api/category",
}

export const useGetAllCategories = (params:any={})=>useGetQuery("CATEGORY" , API.GET , params)
