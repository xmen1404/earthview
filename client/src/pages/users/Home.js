import React , {useState, useEffect, useRef, useContext} from 'react';
import Navbar from "../../components/navbar/Navbar-v2";
import Banner from "../../components/banner/Banner";
// import CategoryList from "../../components/category/CategoryList";
// import NewsSlider from "../../components/newsSlider/NewsSlider";
import {NewsContext} from "../../contexts/NewsContext";
import TopNews from "../../components/topNews/TopNews";
import Series from '../../components/series/Series';
import RecentNews from '../../components/recentNews/RecentNews';
import Card from "../../components/home/card/Card";
import Footer from "../../components/footer/Footer";
import "../../styles/pages/users/home.css";


const Home = () => {
    const {getNews} = useContext(NewsContext);
    const [state, setState] = useState({});

    useEffect(async ()=>{
        const res = await getNews();
        const newsList = res.news;
        // console.log(newsList);

        const topNews = newsList.filter((news) => news.type && news.category? news.type.name === "top" : false);
        // console.log(topNews);

        const highlightedNews = newsList.filter((news) => news.type && news.category? news.type.name === "highlighted" : false);
        // console.log(highlightedNews);

        setState({
            ...state,
            newsList: newsList,
            highlightedNews: highlightedNews,
            topNews: topNews
        })
        // setNews();
    }, [])

    return <div className = "home">
        <Navbar></Navbar>
        <Banner 
                // newsList = {state.newsList}
                highlightedNews = {state.highlightedNews}
                // topNews = {state.topNews}
        ></Banner>
        <TopNews topNews = {state.topNews}></TopNews>
        <Series></Series>
        <RecentNews newsList = {state.newsList}></RecentNews>
        <Card></Card>
        <Footer></Footer>
    </div>
}

export default Home;