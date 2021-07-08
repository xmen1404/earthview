import React , {useState, useEffect, useRef, useContext} from 'react';
import Banner from "../../components/banner/Banner";
import CategoryList from "../../components/category/CategoryList";
import NewsSlider from "../../components/newsSlider/NewsSlider";
import {NewsContext} from "../../contexts/NewsContext";
import TopNews from "../../components/topNews/TopNews";
import "../../styles/views/users/home.css";


const Home = () => {
    const {getNews} = useContext(NewsContext);
    const [state, setState] = useState({});

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
            topNews: topNews
        })
        // setNews();
    }, [])

    return <div className = "home">
        <Banner 
                // newsList = {state.newsList}
                highlightedNews = {state.highlightedNews}
                // topNews = {state.topNews}
        ></Banner>
        <TopNews topNews = {state.topNews}></TopNews>
        <CategoryList></CategoryList>
        <NewsSlider></NewsSlider>
    </div>
}

export default Home;