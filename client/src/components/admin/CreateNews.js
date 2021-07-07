import React , {useState, useEffect, useContext} from 'react';
import {CategoryContext} from "../../contexts/CategoryContext";

import Header from "./Header.js";
import Button from "../button/Button.js";
import "../../styles/admin/createnews.css";
import axios from 'axios';
// import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from '../../contexts/constants';
import Ckeditor from '../ckeditor/Ckeditor';
import News from '../layout/News';
import {NewsContext} from "../../contexts/NewsContext";

const CreateNews = () => {
    const {createNews} = useContext(NewsContext);
    const {categoryList} = useContext(CategoryContext);


    // local state

    const [state, setState] = useState({
        category: {},
        title: "",
        background: "",
        content:"",
        result:""
    })

    // const [curCategory, setCurCategory] = useState("");

    // console.log(categoryList);
    

    const view = () => {
        const {category, title, background, content} = state;

        // console.log("debug", title, background, content);

        const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        // console.log(date);

        const result = {
            category, title, background, content,
            author: "admin", // still harsh code
            date:{
                day: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
        };

        console.log(result);

        setState({
            ...state,
            result: result
        })
    }



    const handleClick = async () => {
        try{
            const {category, title, background, content} = state;

            const today = new Date();
            
            const data = {
                "category": category.id,
                "title": title,
                "background": background,
                "content": content,
                "date": `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
            }

            const res = await createNews(data);

            console.log("debug res", res);
            
            if(res.success){
                console.log("good");
                window.location.href = '/admin/news'; 
                // history.push('/admin/categories');
            }
        }catch(err){
            console.log(err);
        }
    }


    const toTop = () => {

    }

    // const handleChange = ( event, editor , part) => {
    const handleChange = ( event , part, editor) => {
        console.log(event.target)
        let index;
        let label;
        let value;

        if(part === "category"){
            index = event.nativeEvent.target.selectedIndex;
            label = event.nativeEvent.target[index].text;
            value = event.target.value;
        }


        let data = part === "category" ? {
            name: label,
            id: value
        }: editor.getData();


        if(part === "background"){
            console.log("setting background", data);
            data = data.split("src=\"").pop().split("\"")[0];
            // console.log("checking url", data.split("src=\"").pop().split("\"")[0]);
        }

        // data = part === "background"? data.split("src=\"").pop().split("\"")[0] : data;

        // console.log("handling", part);

        setState({
            ...state,
            [part]: data
        })


    }


    useEffect(()=>{
        // console.log("state change");
        view();
    }, [state.category, state.title, state.background, state.content])


    const {result} = state;

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
                                return <option value={category.id}>{category.label}</option>
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

                    <div className = "background">
                        <h2>Background image</h2>
                        <Ckeditor 
                                    // initialData = "short-background" 
                                    state = "background"
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

                    <Button handleClick = {handleClick}
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