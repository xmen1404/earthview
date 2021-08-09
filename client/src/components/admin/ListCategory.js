import {useContext, useEffect, useState} from "react";
import "../../styles/admin/listCategory.css";
import Button from "../button/Button";
import {CategoryContext} from "../../contexts/CategoryContext";
import {BigCategoryContext} from "../../contexts/BigCategoryContext";
import {SeriesContext} from "../../contexts/SeriesContext";


const ListCategory = (props) => {
    const {categoryList, getCategory, deleteCategory} = useContext(CategoryContext);
    const {bigCategoryList, getBigCategory, deleteBigCategory} = useContext(BigCategoryContext);
    const {seriesList, getSeries, deleteSeries} = useContext(SeriesContext);
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
                res = await deleteBigCategory(curCategory);
            }
            else if(props.type === 2){
                res = await deleteCategory(curCategory);
            }
            else if(props.type === 3){
                res = await deleteSeries(curCategory);
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
                    <div className = {`type${props.type === 1 ? " active":""}`} onClick = {() => {props.setType(1)}}>Thể loại lớn</div>
                    <div className = {`type${props.type === 2 ? " active":""}`} onClick = {() => {props.setType(2)}}>Thể loại nhỏ</div>
                    <div className = {`type${props.type === 3 ? " active":""}`} onClick = {() => {props.setType(3)}}>Series</div>
                </div>
                <select onChange = {(event)=>{handleChange(event)}} >
                    {props.type === 1 && <option value="default">Choose big category</option>}
                    {props.type === 1 && bigCategoryList.map((category, idx)=>{
                        return <option value={category.id}>{category.name}</option>
                    })}

                    {props.type === 2 && <option value="default">Choose category</option>}
                    {props.type === 2 && categoryList.map((category, idx)=>{
                        return <option value={category.id}>{category.name}</option>
                    })}

                    {props.type === 3 && <option value="default">Choose series</option>}
                    {props.type === 3 && seriesList.map((category, idx)=>{
                        return <option value={category.id}>{category.name}</option>
                    })}
                </select>
            </div>

            <div className = "lc-footer">
                <Button
                            handleClick = {handleClick}
                            margin =  "1.5rem 1rem 2rem 0"
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "Delete" 
                            color = "#ffffff"></Button>

                <Button
                            // handleClick = {handleClick}
                            margin =  "1.5rem 1rem 2rem 0"
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "Edit" 
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