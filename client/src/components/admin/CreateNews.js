import React , {useState, useEffect} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from "./Header.js";
import Button from "../button/Button.js";
import "../../styles/admin/createnews.css";
import axios from 'axios';
import {apiUrl} from '../../constants';


// const createNews = () =>{
//     console.log("creating news");
// }

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
        open: "",
        body: "",
        end: "",
        categoryList: []
    })


    const createNews = () =>{
        const {category, title, description, open, body, end, categoryList} = state;

        console.log("creating news");
        console.log(category);
        console.log(title);
        console.log(description);
        console.log(open);
        console.log(body);
        console.log(end);
    }


    const handleReady = (editor) => {
        // You can store the "editor" and use when it is needed.
        console.log( 'Editor is ready to use!', editor );
    }

    const handleChange = ( event, editor , part) => {
        const data = editor.getData();
        console.log(data);

        setState({
            ...state,
            [part]: data
        })
    }

    const handleBlur = ( event, editor ) => {
        console.log( 'Blur.', editor );
    }

    const handleFocus = ( event, editor ) => {
        console.log( 'Focus.', editor );
    } 

    useEffect(()=>{
        getCategory();
    }, [])

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

            // console.log("check res", res.data.categories);

            setState({
                ...state,
                categoryList: res.data.categories
            })

        }catch(err){
            console.log(err);
        }
    }


    const {categoryList} = state;

    console.log("debug list", categoryList);


    return <div className = "create-news">
        <Header></Header>
        
        <div className = "wrapper">
            <h2>Create news</h2>

            {categoryList.map((category) => {
                // console.log("bên trong", category);
                return <div>{category.name}</div>
            })}

            <div className = "title">
                <CKEditor
                    className = "ckeditor"
                    editor={ ClassicEditor }
                    data="<p>Title</p>"
                    // onReady={editor => handleReady(editor)}
                    onChange={(event, editor) => handleChange(event, editor, "title")}
                    // onBlur={(event, editor) => handleBlur(event, editor)}
                    // onFocus={(event, editor) => handleFocus(event, editor)}
                />
            </div>

            <div className = "short-description">
                <CKEditor
                    className = "ckeditor"
                    editor={ ClassicEditor }
                    data="<p>Short description</p>"
                    // onReady={editor => handleReady(editor)}
                    onChange={(event, editor) => handleChange(event, editor, "description")}
                    // onBlur={(event, editor) => handleBlur(event, editor)}
                    // onFocus={(event, editor) => handleFocus(event, editor)}
                />
            </div>

            <div className = "open">
                <CKEditor
                    className = "ckeditor"
                    editor={ ClassicEditor }
                    data="<p>open</p>"
                    // onReady={editor => handleReady(editor)}
                    onChange={(event, editor) => handleChange(event, editor, "open")}
                    // onBlur={(event, editor) => handleBlur(event, editor)}
                    // onFocus={(event, editor) => handleFocus(event, editor)}
                />
            </div>

            <div className = "body">
                <CKEditor
                    className = "ckeditor"
                    editor={ ClassicEditor }
                    data="<p>body</p>"
                    // onReady={editor => handleReady(editor)}
                    onChange={(event, editor) => handleChange(event, editor, "body")}
                    // onBlur={(event, editor) => handleBlur(event, editor)}
                    // onFocus={(event, editor) => handleFocus(event, editor)}
                />
            </div>

            <div className = "end">
                <CKEditor
                    className = "ckeditor"
                    editor={ ClassicEditor }
                    data="<p>end</p>"
                    // onReady={editor => handleReady(editor)}
                    onChange={(event, editor) => handleChange(event, editor, "end")}
                    // onBlur={(event, editor) => handleBlur(event, editor)}
                    // onFocus={(event, editor) => handleFocus(event, editor)}
                />
            </div>

            <Button handleClick = {createNews}
                    bgcolor = "#3B5998" 
                    height = "2.3rem" 
                    width = "6rem" 
                    content = "Create" 
                    position = "right" 
                    color = "#ffffff"></Button>
        </div>
    </div>
}

export default CreateNews;