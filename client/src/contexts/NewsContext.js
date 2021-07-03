import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {authReducer} from '../reducers/authReducer'
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from './constants'

export const NewsContext = createContext();


// bắt đầu cái kho state
const NewsContextProvider = ({children}) => {
    // const [categoryList, setCategoryList] = useState([])
    // const [category, setCategory] = useState("");


    // useEffect(async ()=>{
    //     // await getCategory();
    // }, [])


    const getCategory = async () => {
        // try{
        //     const url = apiUrl + "/categories";
        //     const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            
        //     const res = await axios.get(url,{
        //         headers:{
        //             Authorization: header
        //         }
        //     })

        //     // console.log("check res", res.data.categories);

        //     let list = []

        //     for(let category of res.data.categories){
        //         // console.log("debug in for", category);
        //         list.push({
        //             label: category.name,
        //             value: category.name,
        //             id: category._id
        //         })
        //     }

        //     await setCategoryList(list);

        //     // return(list);

        // }catch(err){
        //     console.log(err);
        // }
    }






    const createNews = async (data) => {
        try{
            const url = apiUrl + "/news";
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)

            const res = await axios.post(url, data, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': header
                },
            })
            
            // console.log(res.success);
            return res.data;

        }catch(err){
            if(err.response.data){
                // console.log(err.response.data)
                return err.response.data
            }
            else{  
                return {success: false, message: err.message}
            }
        }
    }


    const getNewsById = async (id) => {
        try{
            const url = apiUrl + "/news/"+ id;
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)

            const res = await axios.get(url, {
                headers:{
                    'Authorization': header
                },
            })
            
          
            return res.data;

        }catch(err){
            if(err.response.data){
                // console.log(err.response.data)
                return err.response.data
            }
            else{  
                return {success: false, message: err.message}
            }
        }
    }


    const newsContextData = {
        // categoryList,
        // getCategory,
        getNewsById,
        createNews
        // deleteNews
    }

    return (<NewsContext.Provider  value = {newsContextData}>{children}</NewsContext.Provider>)

}

export default NewsContextProvider;