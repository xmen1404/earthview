import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {authReducer} from '../reducers/authReducer'
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from './constants'

export const SeriesContext = createContext();


// bắt đầu cái kho state
const SeriesContextProvider = ({children}) => {
    const [seriesList, setSeriesList] = useState([])
    // const [category, setCategory] = useState("");


    useEffect(async ()=>{
        await getSeries();
    }, [])


    const getSeries = async () => {
        try{
            const url = apiUrl + "/series";
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            
            const res = await axios.get(url,{
                headers:{
                    Authorization: header
                }
            })

            // console.log("check res", res.data.categories);

            let list = []

            const categories = res.data.categories;
            const count = res.data.count;

            for(let i = 0; i < categories.length; i++){
                // console.log("debug in for", category);
                const category = categories[i];
                list.push({
                    name: category.name,
                    id: category._id,
                    image: category.image,
                    count: count[i]
                })
            }

            await setSeriesList(list);

            // return(list);

        }catch(err){
            console.log(err);
        }
    }






    const addSeries = async (data) => {
        try{
            const url = apiUrl + "/series";
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


    const deleteSeries = async (id) => {
        try{
            const url = apiUrl + "/series/"+ id;
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


    const seriesContextData = {
        seriesList,
        getSeries,
        addSeries,
        deleteSeries
    }

    return (<SeriesContext.Provider  value = {seriesContextData}>{children}</SeriesContext.Provider>)

}

export default SeriesContextProvider;