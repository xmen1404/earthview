import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {authReducer} from '../reducers/authReducer'
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from './constants'

export const BigCategoryContext = createContext();


// bắt đầu cái kho state
const BigCategoryContextProvider = ({children}) => {
    const [bigCategoryList, setBigCategoryList] = useState([])
    // const [category, setCategory] = useState("");


    useEffect(async ()=>{
        await getBigCategory();
    }, [])


    const getBigCategory = async () => {
        try{
            const url = apiUrl + "/bigcategories";
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
                    id: category._id
                })
            }

            await setBigCategoryList(list);

            // return(list);

        }catch(err){
            console.log(err);
        }
    }






    const addBigCategory = async (data) => {
        try{
            const url = apiUrl + "/bigcategories";
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


    const deleteBigCategory = async (id) => {
        try{
            const url = apiUrl + "/bigcategories/"+ id;
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


    const bigCategoryContextData = {
        bigCategoryList,
        getBigCategory,
        addBigCategory,
        deleteBigCategory
    }

    return (<BigCategoryContext.Provider  value = {bigCategoryContextData}>{children}</BigCategoryContext.Provider>)

}

export default BigCategoryContextProvider;