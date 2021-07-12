// import CategoryList from "../../components/category/CategoryList";
import React, {useState, useEffect, useContext} from "react";
import "../../styles/recentNews/recentNews.css";
import CategoryItem from "../category/CategoryItem";
import {CategoryContext} from "../../contexts/CategoryContext";
import Button from "../button/Button";

const backgroundUrl_1 = "http://localhost:5000/Icon_1.jpg"
const backgroundUrl_2 = "http://localhost:5000/Icon_2.jpg"
const backgroundUrl_3 = "http://localhost:5000/Icon_3.jpg"
const backgroundUrl_4 = "http://localhost:5000/Icon_4.jpg"
const backgroundUrl_5 = "http://localhost:5000/Icon_5.jpg"
const backgroundUrl_6 = "http://localhost:5000/Icon_6.jpg"
const backgroundUrl_7 = "http://localhost:5000/Icon_7.jpg"
const backgroundUrl_8 = "http://localhost:5000/Icon_8.jpg"

const backgroundUrl = [
    "http://localhost:5000/Icon_1.jpg",
    "http://localhost:5000/Icon_2.jpg",
    "http://localhost:5000/Icon_3.jpg",
    "http://localhost:5000/Icon_4.jpg",
    "http://localhost:5000/Icon_5.jpg",
    "http://localhost:5000/Icon_6.jpg",
    "http://localhost:5000/Icon_7.jpg",
    "http://localhost:5000/Icon_8.jpg"
]

const RecentNews = (props) => {
    const {categoryList} = useContext(CategoryContext);
    const allCategory = {
        name: "Tất cả",
        description: "",
        image: "http://localhost:5000/Icon_1.jpg"
    }

    const [curList,setCurList] = useState();
    const [curCategory, setCurCategory] = useState("all");
    const [more,setMore] = useState(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(()=>{
        if(props.newsList){
            if(props.newsList.length <=12){
                setCurList(props.newsList);
                setIsFull(true);
                // document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "none");
                if(document.getElementsByClassName("recentNewsList")[0]){
                    document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "none");
                }
            }
            else{
                setCurList(props.newsList.slice(0,12+more));
            }
        }
    }, [props])

    const handleClick = async (categoryName) => {
        // console.log("debug 1");
        // setCurCategory(categoryName);
        // document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "block");
        if(document.getElementsByClassName("recentNewsList")[0]){
            document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "block");
        }
        await setIsFull(false);

        if(categoryName === "all"){
            // setCurList(props.newsList);
            if(props.newsList.length <=12){
                setCurList(props.newsList);
                setIsFull(true);
                if(document.getElementsByClassName("recentNewsList")[0]){
                    document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "none");
                }
            }
            else{
                setCurList(props.newsList.slice(0,12+more));
            }
            // console.log("debug 2");
        }
        else{
            // console.log("debug 3", categoryName);
            const listByCategory = props.newsList.filter((news) => news.type && news.category? news.category.name === categoryName : false);
            // console.log("test list mới", listByCategory);
            // setCurList(listByCategory);
            if(listByCategory.length <=12){
                setCurList(listByCategory);
                setIsFull(true);
                if(document.getElementsByClassName("recentNewsList")[0]){
                    document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "none");
                }
            }
            else{
                setCurList(listByCategory.slice(0,12+more));
            }
        }

        setCurCategory(categoryName);
    }

    const moveToNews = (id) => {
        window.location.href = "/news/"+id;
    }

    const seeMore = () => {
        // console.log("seeing more");

        if(curCategory === "all"){
            // setCurList(props.newsList);
            // console.log("đang TH này");
            if(props.newsList.length <= 12+more+6){
                setCurList(props.newsList);
                // console.log("đang TH này");
                setIsFull(true);
                if(document.getElementsByClassName("recentNewsList")[0]){
                    document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "none");
                }
                // console.log("debug chỗ nào", document.getElementsByClassName("recentNewsList")[0].style)
            }
            else{
                setCurList(props.newsList.slice(0,12+more+6));
            }
            // console.log("debug 2");
        }
        else{
            // console.log("debug 3", categoryName);
            const listByCategory = props.newsList.filter((news) => news.type && news.category? news.category.name === curCategory : false);
            // console.log("test list mới", listByCategory);
            // setCurList(listByCategory);
            if(listByCategory.length <= 12+more+6){
                setCurList(listByCategory);
                setIsFull(true);
                if(document.getElementsByClassName("recentNewsList")[0]){
                    document.getElementsByClassName("recentNewsList")[0].style.setProperty("--Display", "none");
                }
            }
            else{
                setCurList(listByCategory.slice(0,12+more+6));
            }
        }

        setMore(more + 6);
    }


    return <div className = "recentNews">
        <div className = "header">
            <h2>Gần đây</h2>
        </div>
        {/* <CategoryList></CategoryList> */}


        <div className = "categoryList">
            <CategoryItem data = {allCategory} handleClick = {() => handleClick("all")} curCategory = {curCategory}></CategoryItem>
            {categoryList.map((category, idx)=>{
                // console.log("check qua category", category)
                return <CategoryItem 
                                data = {category} 
                                backgroundUrl = {backgroundUrl[idx]}
                                handleClick = {() => handleClick(category.name)}
                                curCategory = {curCategory}
                        ></CategoryItem>
            })}

        </div>

        {(curList? curList.length > 0 : false) &&
            <div className = "recentNewsList">
                {curList.map(news => {
                    return (
                        <div
                            className = "item"
                            style = {{background: `url(${news.background.split("src=\"").pop().split("\"")[0]}) no-repeat center center/cover`}}
                            onClick = {()=>moveToNews(news._id)}
                        >
                            <div className = "information">
                                <div className = "title">
                                    {news.title && news.title.includes("h1")? news.title.split(">")[1].split("<")[0] : "no title"}
                                    {/* Đây là một tựa đề rất dài Đây là một tựa đề rất dài Đây là một tựa đề rất dài Đây là một */}
                                </div> 

                                <div className = "author-date">
                                    <div className = 'author'>
                                        <div className = 'avatar'><img src = "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"></img></div>
                                        <div className = 'author-information'>
                                            <div className = 'name'>Phuoc Trung</div>
                                        </div>
                                    </div>
                                    <div className = 'date'>({news.date})</div>
                                </div>
                            </div>

                            <div className = "hoverbackground">
                                <div className = "content">
                                    {news.content 
                                                ? (news.content.split("</span>")[0].split(">").pop() 
                                                                                            ? news.content.split("</span>")[0].split(">").pop()
                                                                                            : "No description") 
                                                : "No description"}
                                </div>

                                <div className = "category">
                                    #{news.category && news.bigCategory ? news.category.name + " " +news.bigCategory.name.toLowerCase():"No category"}
                                </div>
                            </div>
                        </div>
                    )
                })}


                {/* <div className = ""></div> */}

                {!isFull && 
                    <div className = "seeMore">
                        <Button
                            // marginRight = "2rem" 
                            // handleClick = {seeMore}
                            handleClick = {seeMore}
                            padding = "0.5rem" 
                            // bgcolor = "#3B5998"
                            borderRadius = "1rem"
                            content = "Xem thêm"
                            border = "1px solid #000000"
                            bgcolor = "#f1f1f1"
                            margin = "3rem auto"
                            marginTop = "3rem"
                            width = "10%" 
                        ></Button>
                    </div>
                }
            </div>
        }

        {/* <div className = "seeMore">
            <Button
                // marginRight = "2rem" 
                padding = "0.5rem" 
                // bgcolor = "#3B5998"
                borderRadius = "1rem"
                content = "Xem thêm"
                border = "1px solid #000000"
                bgcolor = "#f1f1f1"
                margin = "3rem auto"
                marginTop = "1.5rem"
                width = "10%" 
            ></Button>
        </div> */}
    </div>
}

export default RecentNews;