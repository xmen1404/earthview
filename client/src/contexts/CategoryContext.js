import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {authReducer} from '../reducers/authReducer'
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from './constants'

export const CategoryContext = createContext();


// bắt đầu cái kho state
const CategoryContextProvider = ({children}) => {
    const [categoryList, setCategoryList] = useState([])
    // const [category, setCategory] = useState("");


    useEffect(async ()=>{
        await getCategory();
    }, [])


    const getCategory = async () => {
        try{
            const url = apiUrl + "/categories";
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            
            const res = await axios.get(url,{
                headers:{
                    Authorization: header
                }
            })

            // console.log("check res", res.data.categories);

            let list = []

            for(let category of res.data.categories){
                // console.log("debug in for", category);
                list.push({
                    name: category.name,
                    id: category._id,
                    image: category.image
                })
            }

            await setCategoryList(list);

            // return(list);

        }catch(err){
            console.log(err);
        }
    }






    const addCategory = async (data) => {
        try{
            const url = apiUrl + "/categories";
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


    const deleteCategory = async (id) => {
        try{
            const url = apiUrl + "/categories/"+ id;
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)

            const res = await axios.delete(url, {
                headers:{
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


    const categoryContextData = {
        categoryList,
        getCategory,
        addCategory,
        deleteCategory
    }

    return (<CategoryContext.Provider  value = {categoryContextData}>{children}</CategoryContext.Provider>)

}

export default CategoryContextProvider;