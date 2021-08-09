import React , {useState, useEffect, useRef, useContext} from 'react';
import "../../styles/admin/ListNews.css";
import {NewsContext} from "../../contexts/NewsContext";
import Button from "../button/Button";

const ListNews = () => {
    const {getNews, deleteNews} = useContext(NewsContext);
    const [state, setState] = useState({
        isLoading: true,
        // newsList: []
    });



    useEffect(async ()=>{
        const res = await getNews();
        const newsList = res.news;
        console.log(newsList);

        const topNews = newsList.filter((news) => news.type ? news.type.name === "top" : false);
        console.log(topNews);

        const highlightedNews = newsList.filter((news) => news.type ? news.type.name === "highlighted" : false);
        console.log(highlightedNews);

        setState({
            ...state,
            newsList: newsList,
            highlightedNews: highlightedNews,
            topNews: topNews,
            // isLoading: false
        })
        // setNews();
    }, [])

    useEffect(() => {
        if(state.newsList){
            // console.log("đã có newsList", state.newsList)
            // console.log("debug xem", state.newsList[0].title.split(">")[1].split("<")[0]);
            setState({
                ...state,
                isLoading: false
            })
        }
    }, [state.newsList])


    const handleClick = async (id) => {
        try{
            // console.log("debug id", id);
            const res = await deleteNews(id);

            
            if(res.success){
                // console.log("good");
                window.location.href = '/admin/news'; 
                // history.push('/admin/categories');
            }
        }catch(err){
            console.log(err);
        }
    }


    return <div className="listnews">
        <table>
            <tr>
                <td colSpan="6" style={{color: "#C36"}}>Tổng số bài viết: {state.newsList ? state.newsList.length : "0"}</td>
                <td colSpan="4"><a href="/admin/news/create" style = {{color: "#C36"}}>Thêm bài viết</a></td>
                {/* <td colspan="1"></td> */}
            </tr>
            {/* <tr style={{background: "#0F6", color: "#fff"}}> */}
            <tr style={{background: "#00CC66", color: "#fff"}}>
                <th style={{width: "3%"}}>STT</th>
                <th style={{width: "20%"}}>Title</th>
                <th style={{width: "20%"}}>Description</th>
                <th style={{width: "12%"}}>Chuyên mục</th>
                <th style={{width: "9%"}}>Type</th>
                <th style={{width: "9%"}}>Series</th>
                <th style={{width: "9%"}}>Updated by</th>
                <th style={{width: "9%"}}>Date</th>
                <th></th>
                <th></th>
            </tr>

            {!state.isLoading &&
                // state.newsList.map((news, idx) => (
                    // <tr>
                    //     <td>{idx+1}</td>
                    //     <td>{news.title.split(">")[1].split("<")[0]}</td>
                    //     <td>choice</td>
                    //     <td>title</td>
                    //     <td>keyword</td>
                    //     <td>description</td>
                    //     <td>description</td>
                    //     <td><a href="#">Edit</a></td>
                    // </tr>
                // ))

                state.newsList.map((news, idx) => {
                    if(news.content){
                        // console.log("check news", news.content.split("</span>")[0].split(">").pop());
                    }
                    // console.log("check news", news.content.split("</span>"));
                    return(
                        <tr>
                            <td>{idx+1}</td>
                            <td>{news.title && news.title.includes("h1")? news.title.split(">")[1].split("<")[0] : "no title"}</td>
                            {news.content && 
                                <td>{news.description? news.description : "no description"}</td>
                            }   
                            {/* <td>{news.content ? news.content.split("</span>")[0].split(">").pop() : "no description"}</td> */}
                            {news.category && news.bigCategory ?
                                <td>{news.category.name + " " +news.bigCategory.name.toLowerCase()}</td>:
                                <td style = {{color: "red"}}>Không có chuyên mục</td>
                            }
                            {/* <td>{news.category && news.bigCategory ? news.category.name + " " +news.bigCategory.name.toLowerCase() : "Không có chuyên mục"}</td> */}
                            <td>{news.type ? news.type.name : "no type"}</td>
                            <td>{news.series ? news.series.name : "Không thuộc series nào"}</td>
                            <td>{news.user ? news.user.username : "no user"}</td>
                            <td>{news.date ? news.date : "no date"}</td>
                            <td><Button     
                                    handleClick = {()=>{window.location.href = "/admin/news/create/"+news._id}}
                                    // margin =  "1.5rem 1rem 2rem 0"
                                    margin = "0.3rem auto"
                                    padding = "0.3rem 0.3rem"
                                    bgcolor = "#3B5998" 
                                    height = "1.5rem" 
                                    width = "2.5rem" 
                                    content = "Edit" 
                                    color = "#ffffff"
                                    fontSize = "0.9rem"
                                ></Button></td>
                            <td>
                                <Button     
                                    handleClick = {()=>handleClick(news._id)}
                                    // margin =  "1.5rem 1rem 2rem 0"
                                    margin = "0.3rem auto"
                                    padding = "0.3rem 0.3rem"
                                    bgcolor = "#3B5998" 
                                    height = "1.5rem" 
                                    width = "2.5rem" 
                                    content = "Delete" 
                                    color = "#ffffff"
                                    fontSize = "0.9rem"
                                ></Button>
                            </td>
                        </tr>
                    )
                })
            }
     



        </table>
    </div>

}

export default ListNews;