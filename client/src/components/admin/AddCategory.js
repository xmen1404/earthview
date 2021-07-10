import {useContext, useState} from "react";
import "../../styles/admin/addCategory.css";
import Button from "../button/Button";
import {CategoryContext} from "../../contexts/CategoryContext";
import {BigCategoryContext} from "../../contexts/BigCategoryContext";
import { SeriesContext } from "../../contexts/SeriesContext";


const AddCategory = (props) => {
    const {addCategory} = useContext(CategoryContext);
    const {addBigCategory} = useContext(BigCategoryContext);
    const {addSeries} = useContext(SeriesContext);

    //local state
    const [state, setState] = useState({
        name: "",
        description: ""
    })

    

    const handleClick = async () => {
        try{
            const {name, description} = state

            const data = {
                "name": name,
                "description": description
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

            console.log("debug res", res);
            
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


            </div>

            <div className = "footer">

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