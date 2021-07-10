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
import {TypeContext} from "../../contexts/TypeContext";

const CreateNews = (props) => {
    const {updateNews} = useContext(NewsContext);
    const {categoryList} = useContext(CategoryContext);
    const {typeList} = useContext(TypeContext);


    // local state

    const [state, setState] = useState({
        category: {},
        type: {},
        title: "",
        background: "",
        content:"",
        result:"",
        // isLoading: true
    })

    const {getNewsById} = useContext(NewsContext);
    // const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    // const {id} = useParams();

    useEffect(async () => {
        const id = props.match.params.id;
        console.log(id);
        
        const res = await getNewsById(id);
        const data = res.news;

        console.log("check data", data);
        const {category, title, type, background, content} = data;

        // console.log("debug", title, background, content);

        const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        // console.log(date);

        const result = {
            category, title, background: background.split("src=\"").pop().split("\"")[0], content,
            author: "admin", // still harsh code
            date:{
                day: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            }
        };


        await setState({
            ...state,
            category: category,
            type: type,
            title: title,
            background: background,
            content: content,
            result: result
        })


        setLoading(false);
    }, [])

    // const [curCategory, setCurCategory] = useState("");

    // console.log(categoryList);
    

    const view = () => {
        const {category, title, background, content} = state;

        // console.log("debug", title, background, content);

        const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        // console.log(date);

        const result = {
            category, title, background: background.split("src=\"").pop().split("\"")[0], content,
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
            const {category, type, title, background, content} = state;
            const id = props.match.params.id;


            // console.log("check state final", state);

            const today = new Date();
            
            const data = {
                "category": category._id,
                "type": type._id,
                "title": title,
                "background": background,
                "content": content,
                "date": `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
            }

            // console.log("check final", data);

            const res = await updateNews(id, data);

            // console.log("debug res", res);
            
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

        if(part === "category" || part === "type"){
            index = event.nativeEvent.target.selectedIndex;
            label = event.nativeEvent.target[index].text;
            value = event.target.value;
        }


        let data = part === "category" || part === "type" ? {
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
    }, [state.category, state.type, state.title, state.background, state.content])


    const {category, type, title, background, content, result} = state;

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

                    <div className = "select-box">
                        <select onChange={(event)=>handleChange(event, "category")}>
                            <option value="default">Choose category</option>
                            {categoryList.map((cur_category)=>{
                                return cur_category.id === category._id ? <option value={cur_category.id} selected>{cur_category.label}</option>
                                                                    : <option value={cur_category.id}>{cur_category.label}</option>
                            })}
                        </select>
                    </div>

                    <div className = "select-box">
                        <select onChange={(event)=>handleChange(event, "type")}>
                            <option value="default">Choose type</option>
                            {typeList.map((cur_type)=>{
                                return cur_type.id === type._id ? <option value={cur_type.id} selected>{cur_type.name}</option>
                                                                : <option value={cur_type.id}>{cur_type.name}</option>
                            })}
                        </select>
                    </div>

                    <div className = "title">
                        <h2>Title</h2>
                        <Ckeditor 
                                    initialData = {title} 
                                    state = "title"
                                    handleChange = {handleChange}
                        ></Ckeditor>
                    </div>

                    <div className = "background">
                        <h2>Background image</h2>
                        <Ckeditor 
                                    initialData = {background} 
                                    state = "background"
                                    handleChange = {handleChange}
                        ></Ckeditor>
                    </div>

                    <div className = "content">
                        <h2>Content</h2>
                        <Ckeditor 
                                    initialData = {content} 
                                    state = "content"
                                    handleChange = {handleChange}
                        ></Ckeditor>
                    </div>

                    <Button handleClick = {handleClick}
                    margin =  "1.5rem 1rem 2rem 0"
                    bgcolor = "#3B5998" 
                    height = "2.3rem" 
                    width = "6rem" 
                    content = "Update" 
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