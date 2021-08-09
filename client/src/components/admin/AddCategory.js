import {useContext, useState} from "react";
import "../../styles/admin/addCategory.css";
import Button from "../button/Button";
import {CategoryContext} from "../../contexts/CategoryContext";
import {BigCategoryContext} from "../../contexts/BigCategoryContext";
import { SeriesContext } from "../../contexts/SeriesContext";
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from '../../contexts/constants';
import axios from 'axios';


const AddCategory = (props) => {
    const {addCategory} = useContext(CategoryContext);
    const {addBigCategory} = useContext(BigCategoryContext);
    const {addSeries} = useContext(SeriesContext);

    //local state
    const [state, setState] = useState({
        name: "",
        description: "",
        image: ""
    })

    // const [selectedFile, setSelectedFile] = useState();

    

    const handleClick = async () => {
        try{
            const {name, description, image} = state

            // console.log("xem file", selectedFile);

            const data = {
                "name": name,
                "description": description,
                "image": image
            }

            let res;

            // const res = await addCategory(data);

            if(props.type === 1){
                res = await addBigCategory(data);
            }
            else if(props.type === 2){
                res = await addCategory(data);
            }
            else if(props.type === 3){
                res = await addSeries(data);
            }

            // console.log("debug res", res);
            
            if(res.success){
                console.log("good");
                window.location.href = '/admin/categories'; 
                // history.push('/admin/categories');
            }
        }catch(err){
            console.log(err);
        }
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const changeHandler = async (event) => {
		// setSelectedFile(event.target.files[0]);
        // console.log("upload ảnh...", event.target.files[0]);



        try{
            const url = apiUrl + '/uploads';
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            // uploadUrl: apiUrl + '/uploads',
            // headers: {
            //     // 'X-CSRF-TOKEN': 'CSRF-Token',
            //     Authorization: "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            // }
            const formData = new FormData();

            formData.append("file", event.target.files[0]);

            const res = await axios.post(url, formData, {
                headers:{
                    Authorization: header
                }
            })

            console.log("check res", res.data.url);

            setState({
                ...state,
                "image": res.data.url
            })

            // return(list);

        }catch(err){
            console.log(err);
        }

		// setIsSelected(true);
	};

    return <div className = "addCategory">
        <div className = "wrapper">
            <div className = "header">
                <input 
                    type = "text" 
                    name = "name" 
                    placeholder = "Enter name" 
                    onChange = {(event)=>{handleChange(event)}}>    
                </input>

                <input 
                    type = "text" 
                    name = "description" 
                    placeholder = "Enter description" 
                    onChange = {(event)=>{handleChange(event)}}>
                </input>
{/* 
                <input type="file" name="file" onChange={changeHandler} />


                {props.type !== 2 &&
                    <input 
                        type = "text" 
                        name = "description" 
                        placeholder = "Enter description" 
                        onChange = {(event)=>{handleChange(event)}}>
                    </input>
                } */}

                {props.type !== 1 &&
                    <input type="file" name="file" onChange={changeHandler} />
                }


            </div>

            <div className = "category-footer">

                <Button     
                            handleClick = {props.handleClick}
                            margin =  "1.5rem 1rem 2rem 0"
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "Back" 
                            color = "#ffffff"></Button>

                <Button     
                            handleClick = {handleClick}
                            margin =  "1.5rem 1rem 2rem 0"
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "Add" 
                            color = "#ffffff"></Button>
            </div>
        </div>
    </div>
}

export default AddCategory;