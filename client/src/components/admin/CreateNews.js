import React , {useState, useEffect} from 'react';

import Header from "./Header.js";
import Button from "../button/Button.js";
import "../../styles/admin/createnews.css";
import axios from 'axios';
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from '../../contexts/constants';
import Ckeditor from '../ckeditor/Ckeditor';
import News from '../layout/News';

const CreateNews = () => {
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
            const header = "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
            
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
                    margin =  "1.5rem 1rem 2rem 0"
                    bgcolor = "#3B5998" 
                    height = "2.3rem" 
                    width = "6rem" 
                    content = "Create" 
                    position = "right" 
                    color = "#ffffff"></Button>
                    
                    {/* <Button handleClick = {toTop}
                            bgcolor = "#3B5998" 
                            height = "2.3rem" 
                            width = "6rem" 
                            content = "View" 
                            position = "right" 
                            color = "#ffffff"></Button> */}
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