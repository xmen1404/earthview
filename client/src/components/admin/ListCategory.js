import {useContext, useEffect, useState} from "react";
import "../../styles/admin/listCategory.css";
import Button from "../button/Button";
import {CategoryContext} from "../../contexts/CategoryContext";


const ListCategory = (props) => {
    const {categoryList, getCategory, deleteCategory} = useContext(CategoryContext);
    // console.log(categoryList);

    const [curCategory, setCurCategory] = useState("");
    // const [categoryList, setCategoryList] = useState([])
    // console.log(curCategory);
    // const [curCategoryValue, setCurCategoryValue] = useState(categoryList.length > 0 ? categoryList[0].value: "");

    const handleChange = (event)=>{
        console.log(event.target.value);
        setCurCategory(event.target.value);
    }

    const handleClick = async () => {
        try{
            let res;

            if(props.type === 1){
                res = await deleteCategory(curCategory);
            }
            else if(props.type === 2){
                res = await deleteBigCategory(curCategory);
            }

            
            if(res.success){
                // console.log("good");
                window.location.href = '/admin/categories'; 
                // history.push('/admin/categories');
            }
        }catch(err){
            console.log(err);
        }
    }

    return <div className="listcategory">
        <div className = "wrapper">
            <div className = "header">
                <div className = "switch-type">
                    <div className = {`type${props.type === 1 ? " active":""}`} onClick = {() => {props.setType(1)}}>Thể loại nhỏ</div>
                    <div className = {`type${props.type === 2 ? " active":""}`} onClick = {() => {props.setType(2)}}>Thể loại lớn</div>
                    <div className = {`type${props.type === 3 ? " active":""}`} onClick = {() => {props.setType(3)}}>Series</div>
                </div>
                <select onChange = {(event)=>{handleChange(event)}} >
                    <option value="default">Choose category</option>
                    {categoryList.map((category, idx)=>{
                        return <option value={category.id}>{category.label}</option>

                    })}
                </select>
            </div>

            <div className = "footer">
                <Button
                            handleClick = {handleClick}
                            margin =  "1.5rem 1rem 2rem 0"
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "Delete" 
                            color = "#ffffff"></Button>

                <Button
                            handleClick = {props.handleClick}
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

export default ListCategory;