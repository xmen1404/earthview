import {useContext, useState} from "react";
import "../../styles/admin/addCategory.css";
import Button from "../button/Button";
import {CategoryContext} from "../../contexts/CategoryContext";


const AddCategory = (props) => {
    const {addCategory} = useContext(CategoryContext);

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

            const res = await addCategory(data);

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
                    placeholder = "Enter a new category" 
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