/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, createRef, useContext, useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../styles/pages/news.css';
import {NewsContext} from "../../contexts/NewsContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ReadingProgress from '../../components/readingProgress/ReadingProgress';
import NewsSlider from '../../components/newsSlider/NewsSlider';

const News = (props)=>{
    const {getNews, getNewsById} = useContext(NewsContext);
    // const {getNews} = useContext(NewsContext);

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    // const {id} = useParams();
    const target = createRef();
    const [type, setType] = useState();

    // type = 0: hiển thị bài viết cùng thể loại
    // type = 1: hiển thị bài viết cùng tác giả
    // type = 2: hiển thị bài viết cùng series

    useEffect(async () => {
        const id = props.match.params.id;
        console.log(id);


        let res;

        res = await getNews();
        const newsList = res.news;
        
        res = await getNewsById(id);
        const data = res.news;

        console.log(data);

        if(data.series){
            console.log("có series");
            const sameSeries = newsList.filter((news) => news.series && (news.series? (news.series.name === data.series) : false) && news._id !== data._id);
            setList(sameSeries);
            setType(2);
        }
        else{
            const sameAuthor = newsList.filter((news) => news.user && (news.user? (news.user._id === data.user._id) : false) && news._id !== data._id);
            if(sameAuthor.length < 4){
                const sameCat = newsList.filter((news) => news.category && (news.category? (news.category._id === data.category._id) : false) && news._id !== data._id);
                setList(sameCat);
                setType(0)
            }
            else{
                setList(sameAuthor);
                setType(1);
            }
        }

        await setData(data);
        setLoading(false);
    }, [])


    console.log(data);

    return <div className = 'news'>
        <Navbar></Navbar>
        <ReadingProgress target={target} />
        {!loading && <div ref={target}>
            <div className = 'background'>
                    {/* {data.background ? ReactHtmlParser(data.background) : ""} */}
                    {data.background ? 
                    <figure class = "image">
                        <img src = {data.background.split("src=\"").pop().split("\"")[0]}></img>
                    </figure>: ""
                    }
            </div>

            <div className = 'header'>
                <div className ="information">
                    <div className = 'category'>{data.category? data.category.name: ""} {data.bigCategory? data.bigCategory.name? data.bigCategory.name.toLowerCase():"":""}</div>
                    
                    <div className = 'title'>
                        {data.title ? ReactHtmlParser(data.title) : ""}
                    </div>
                    
                    <div className = 'time'>{data.user.username} | {data.date} | 4 phút đọc</div>
                </div>

                {/* <div className = 'author'>
                    <div className = 'avatar'><img src = "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"></img></div>
                    <div className = 'information'>
                        <div className = 'role'>Editor</div>
                        <div className = 'name'>Phuoc Trung</div>
                    </div>
                </div> */}

            </div>

            <div className = 'description'>
                {data.description ? ReactHtmlParser(data.description) : ""}
            </div>

            <div className = 'body'>
                {data.content ? ReactHtmlParser(data.content) : ""}
            </div>    


            {/* <div><p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello  Hello Hello Hello Hello Hello Hello Hello Hello </p></div> */}
        </div>}

        <div className = "recommend">
            <NewsSlider type = {type} list = {list}></NewsSlider>
        </div>
        <Footer></Footer>
    </div>
}

export default News;