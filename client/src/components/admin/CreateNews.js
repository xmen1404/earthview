import React , {useState, useEffect, useContext} from 'react';
import Header from "./Header.js";
import Button from "../button/Button.js";
import "../../styles/admin/createnews.css";
import axios from 'axios';
// import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from '../../contexts/constants';
import Ckeditor from '../ckeditor/Ckeditor';
import News from '../layout/News';

import {NewsContext} from "../../contexts/NewsContext";
import {TypeContext} from "../../contexts/TypeContext";
import {BigCategoryContext} from '../../contexts/BigCategoryContext';
import {CategoryContext} from "../../contexts/CategoryContext";
import {SeriesContext} from '../../contexts/SeriesContext';

const CreateNews = () => {
    const {createNews} = useContext(NewsContext);
    const {categoryList} = useContext(CategoryContext);
    const {typeList} = useContext(TypeContext);
    const {bigCategoryList} = useContext(BigCategoryContext);
    const {seriesList} = useContext(SeriesContext);


    // local state

    const [state, setState] = useState({
        bigCategory: {},
        category: {},
        type: {},
        series: {},
        title: "",
        background: "",
        content:"",
        result:""
    })

    // const [curCategory, setCurCategory] = useState("");

    // console.log(categoryList);
    

    const view = () => {
        const {bigCategory, category, title, background, content} = state;

        // console.log("debug", title, background, content);

        const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        // console.log(date);

        const result = {
            bigCategory, category, title, background: background.split("src=\"").pop().split("\"")[0], content,
            author: "admin", // still harsh code
            date:{
                day: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
        };

        // console.log(result);

        setState({
            ...state,
            result: result
        })

        console.log(state);
    }



    const handleClick = async () => {
        try{
            const {bigCategory, category, type, series, title, background, content} = state;

            const today = new Date();
            
            // console.log("check data ở bên create news", data);

            const data = {
                "bigCategory": bigCategory._id !== "default" ? bigCategory._id: null,
                "category": category._id !== "default" ? category._id:null,
                "type": type._id !== "default" ? type._id:null,
                "series": series._id !== "default" ? series._id:null,
                "title": title,
                "background": background,
                "content": content,
                "date": `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
            }

            console.log("check data ở bên create news", data);

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


        if(part === "category" || part === "type" || part === "bigCategory" || part === "series"){
            index = event.nativeEvent.target.selectedIndex;
            label = event.nativeEvent.target[index].text;
            value = event.target.value;
        }


        let data = part === "category" || part === "type" || part === "bigCategory" || part === "series"? {
            name: label,
            _id: value
        }: editor.getData();


        // if(part === "background"){
        //     console.log("setting background", data);
        //     data = data.split("src=\"").pop().split("\"")[0];
        //     // console.log("checking url", data.split("src=\"").pop().split("\"")[0]);
        // }

        // data = part === "background"? data.split("src=\"").pop().split("\"")[0] : data;

        console.log("handling", part);

        setState({
            ...state,
            [part]: data
        })


    }


    useEffect(()=>{
        // console.log("state change");
        view();
    }, [state.bigCategory, state.category, state.type, state.series, state.title, state.background, state.content])


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

                    <div className = "option">
                        <div className = "select-box">
                            <select onChange={(event)=>handleChange(event, "category")}>
                                <option value="default">Choose category</option>
                                {categoryList.map((cur_category)=>{
                                    return <option value={cur_category.id}>{cur_category.name}</option>
                                })}
                            </select>
                        </div>


                        <div className = "select-box">
                            <select onChange={(event)=>handleChange(event, "bigCategory")}>
                                <option value="default">Choose topic</option>
                                {bigCategoryList.map((cur_bigCategory)=>{
                                    return <option value={cur_bigCategory.id}>{cur_bigCategory.name}</option>
                                })}
                            </select>
                        </div>

                        <div className = "select-box">
                            <select onChange={(event)=>handleChange(event, "type")}>
                                <option value="default">Choose type</option>
                                {typeList.map((cur_type)=>{
                                    return <option value={cur_type.id}>{cur_type.name}</option>
                                })}
                            </select>
                        </div>

                        <div className = "select-box">
                            <select onChange={(event)=>handleChange(event, "series")}>
                                <option value="default">Choose series</option>
                                {seriesList.map((cur_series)=>{
                                    // console.log("test 2 thứ", cur_series, series)
                                    return <option value={cur_series.id}>{cur_series.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    
                    {/* <div className = "select-box">
                        <select onChange={(event)=>handleChange(event, "category")}>
                            <option value="default">Choose category</option>
                            {categoryList.map((category)=>{
                                return <option value={category.id}>{category.label}</option>
                            })}
                        </select>
                    </div>

                    <div className = "select-box">
                        <select onChange={(event)=>handleChange(event, "type")}>
                            <option value="default">Choose type</option>
                            {typeList.map((type)=>{
                                return <option value={type.id}>{type.name}</option>
                            })}
                        </select>
                    </div> */}

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