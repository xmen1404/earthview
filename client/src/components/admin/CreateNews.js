import React , {useState, useEffect} from 'react';

import Header from "./Header.js";
import Button from "../button/Button.js";
import "../../styles/admin/createnews.css";
import axios from 'axios';
import {apiUrl} from '../../constants';
import Ckeditor from '../ckeditor/Ckeditor';
import News from '../view/News';

const CreateNews = () => {
    // const [category, setCategory] = useState("");
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [open, setOpen] = useState("");
    // const [body, setBody] = useState("");
    // const [end, setEnd] = useState("");
    // const [categoryList, setCategoryList] = useState([]);

    const [state, setState] = useState({
        category: "",
        title: "",
        description: "",
        content:"",
        categoryList: [],
        result:""
    })
    

    const view = () => {
        const {category, title, description, content} = state;

        console.log("debug", title, description, content);

        const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        // console.log(date);

        const result = {
            category, title, description, content,
            author: "admin", // still harsh code
            date:{
                day: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
        };

        setState({
            ...state,
            result: result
        })

        // console.log("creating news");
        // console.log(category);
        // console.log(title);
        // console.log(description);
        // console.log(content);
    }

    const createNews = () => {

    }

    const toTop = () => {
        
    }

    // const handleChange = ( event, editor , part) => {
    const handleChange = ( event , part, editor) => {
        const data = part === "category" ? event.target.value: editor.getData();

        console.log("handling", part);

        setState({
            ...state,
            [part]: data
        })


    }


    useEffect(()=>{
        getCategory();
    }, [])

    useEffect(()=>{
        console.log("state change");
        view();
    }, [state.category, state.title, state.description, state.content])

    const getCategory = async () => {
        try{
            const url = apiUrl + "/categories";
            // harsh code
            const header = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGFhMzc3M2U2OWJkYjdmZTg0MDA0MjEiLCJpYXQiOjE2MjE3NjgwNTd9.AH9MIN30O1BjKuNeT7PS_Pq32cfogQXPOLdaX3csyxA"
            
            const res = await axios.get(url,{
                headers:{
                    Authorization: header
                }
            })

            console.log("check res", res.data.categories);
            let list = []
            for(let category of res.data.categories){
                // console.log("debug in for", category);
                list.push({
                    label: category.name,
                    value: category.name
                })
            }

            setState({
                ...state,
                categoryList: list
            })

        }catch(err){
            console.log(err);
        }
    }


    const {categoryList, result} = state;

    // console.log("debug list", categoryList);


    return <div className = "create-news">
        <Header></Header>
        
        <div className = "wrapper">
            <div className = "design">
                <div className = "left">
                    <h1>Create news</h1>

                    {/* <div className = "select-container">
                        <Select options={categoryList} />   
                    </div> */}

                    <div className = "category">
                        <select onChange={(event)=>handleChange(event, "category")}>
                            <option value="default">Choose category</option>
                            {categoryList.map((category)=>{
                                return <option value={category.value}>{category.label}</option>
                            })}
                        </select>
                    </div>

                    <div className = "title">
                        <h2>Title</h2>
                        <Ckeditor 
                                    // initialData = "title" 
                                    state = "title"
                                    handleChange = {handleChange}
                        ></Ckeditor>
                    </div>

                    <div className = "description">
                        <h2>Short description</h2>
                        <Ckeditor 
                                    // initialData = "short-description" 
                                    state = "description"
                                    handleChange = {handleChange}
                        ></Ckeditor>
                    </div>

                    <div className = "content">
                        <h2>Content</h2>
                        <Ckeditor 
                                    // initialData = "open" 
                                    state = "content"
                                    handleChange = {handleChange}
                        ></Ckeditor>
                    </div>

                    <Button handleClick = {createNews}
                    bgcolor = "#3B5998" 
                    height = "2.3rem" 
                    width = "6rem" 
                    content = "Create" 
                    position = "right" 
                    color = "#ffffff"></Button>
                    
                    <Button handleClick = {toTop}
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "View" 
                            position = "right" 
                            color = "#ffffff"></Button>
                </div>

                <div className = "right">
                    {
                        result ? <News data = {result} ></News> : ""
                    }
                </div>
            </div>

            {/* <Button handleClick = {createNews}
                    bgcolor = "#3B5998" 
                    height = "2.3rem" 
                    width = "6rem" 
                    content = "Create" 
                    position = "right" 
                    color = "#ffffff"></Button>
                    
            <Button handleClick = {view}
                    bgcolor = "#3B5998" 
                    height = "2.3rem" 
                    width = "6rem" 
                    content = "View" 
                    position = "right" 
                    color = "#ffffff"></Button> */}

            <div style = {{clear: "right"}}></div>
            
            

            {/* <div className = "result">
                    {result ? ReactHtmlParser(result) : ""}
            </div> */}

            {/* {
                result ? <News data = {result} ></News> : ""
            } */}
        </div>
    </div>
}

export default CreateNews;