import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {authReducer} from '../reducers/authReducer'
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from './constants'

export const TypeContext = createContext();


// bắt đầu cái kho state
const TypeContextProvider = ({children}) => {
    const [typeList, setTypeList] = useState([]);
    // const [category, setCategory] = useState("");


    useEffect(async ()=>{
        await getType();
    }, [])


    const getType = async () => {
        try{
            const url = apiUrl + "/types";
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            
            const res = await axios.get(url,{
                headers:{
                    Authorization: header
                }
            })

            // console.log("check res", res.data.categories);

            let list = []

            for(let type of res.data.types){
                // console.log("debug in for", category);
                list.push({
                    name: type.name,
                    id: type._id
                })
            }

            await setTypeList(list);

            // console.log("debug type", list);

            // return(list);

        }catch(err){
            console.log(err);
        }
    }






    const addType = async (data) => {
        try{
            const url = apiUrl + "/types";
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


    const deleteType = async (id) => {
        try{
            const url = apiUrl + "/types/"+ id;
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


    const typeContextData = {
        typeList,
        getType,
        addType,
        deleteType
    }

    return (<TypeContext.Provider  value = {typeContextData}>{children}</TypeContext.Provider>)

}

export default TypeContextProvider;