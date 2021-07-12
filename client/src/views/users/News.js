/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useParams, useContext, useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../styles/views/news.css';
import {NewsContext} from "../../contexts/NewsContext";

const News = (props)=>{
    const {getNewsById} = useContext(NewsContext);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    // const {id} = useParams();

    useEffect(async () => {
        const id = props.match.params.id;
        console.log(id);
        
        const res = await getNewsById(id);
        const data = res.news;

        // console.log(data);

        await setData(data);
        setLoading(false);
    }, [])


    console.log(data);

    return <div className = 'news'>
        {!loading && <div>
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
                    
                    <div className = 'time'>Last updated on {data.date}</div>
                </div>

                {/* <div className = 'author'>
                    <div className = 'avatar'><img src = "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"></img></div>
                    <div className = 'information'>
                        <div className = 'role'>Editor</div>
                        <div className = 'name'>Phuoc Trung</div>
                    </div>
                </div> */}

            </div>

            <div className = 'body'>
                {data.content ? ReactHtmlParser(data.content) : ""}
            </div>    


            {/* <div><p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello  Hello Hello Hello Hello Hello Hello Hello Hello </p></div> */}
        </div>}
    </div>
}

export default News;