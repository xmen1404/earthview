import { useState, useContextm, useEffect} from "react";
import "../../styles/topNews/topNews.css";
import Button from "../button/Button";



const TopNews = (props) => {

    // local state
    // const [index, setIndex] = useState(0);
    const [state, setState] = useState({
        isLoading: true,
        index: 0,
        topNews: [],
        topNewsBg: "",
        curNews: ""
    });

    // const handleMouse = (event) => {
    //     console.log("hovering");
    //     console.log(event.target)
    // }

    const moveToNews = () => {
        window.location.href = "/news/"+state.curNews;
    }

    useEffect(()=>{
        // const data = await props.highlightedNews;
        // console.log("debug here", props.highlightedNews);
        
        if(props.topNews){
            // console.log("debug title", props.topNews[0].title);
            setState({
                ...state,
                // newsList: props.newsList,
                topNews: props.topNews.slice(0,4),
                isLoading: false,
                topNewsBg: props.topNews[0].background.split("src=\"").pop().split("\"")[0],
                curNews: props.topNews[0]._id
            })
        }
    }, [props]);


    // const imgUrl = "http://localhost:5000/upload-1625655773126";
    return <div className = "topnews">
        <div className = "header">
            <h2>Nổi bật</h2>
        </div>

        {!state.isLoading &&
            <div className = "news-item">
                <div className = "left">
                    <img src = {state.topNewsBg} onClick = {()=>moveToNews()}></img>
                </div>
                <div className = "right">
                    {state.topNews.map((news, idx) => (
                        <div 
                            className = {`item${state.index === idx ? " onHover" : ""}`} 
                            onMouseEnter = {()=>{setState({
                                ...state,
                                index: idx,
                                topNewsBg: news.background.split("src=\"").pop().split("\"")[0],
                                curNews: news._id
                            })}}
                            onClick = {()=>moveToNews()}
                        >
                            <div className = "index">
                                {idx < 9 ? "0"+(idx+1) : (idx+1)}
                            </div>
                            <div className = "information">
                                <div className = "title">
                                    <h3>{news.title.split(">")[1].split("<")[0]}</h3>
                                </div>
                                <div className = {`detail${state.index === idx ? " display" : ""}`}>
                                    <div className = "description">
                                        Ngày còn đi học, cứ hôm nào có tiết trống là tôi lại trốn qua cứ hôm nào có tiết trống là tôi lại trốn qua
                                        Ngày còn đi học, cứ hôm nào có tiết trống là tôi lại trốn qua cứ hôm nào có tiết trống là tôi lại trốn qua
                                    </div>
                                    <div className = "author-date-cat">
                                        <div className = 'author'>
                                            <div className = 'avatar'><img src = "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"></img></div>
                                            <div className = 'author-information'>
                                                <div className = 'name'>Phuoc Trung</div>
                                            </div>
                                        </div>
                                        <div className = 'date'>({news.date})</div>
                                        <div className = 'category'> - {news.category.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }

        <Button
            // marginRight = "2rem" 
            padding = "0.5rem" 
            // bgcolor = "#3B5998"
            borderRadius = "1rem"
            content = "Xem thêm"
            border = "1px solid #000000"
            bgcolor = "#f1f1f1"
            margin = "3rem auto"
            width = "10%" 
        ></Button>
        

    </div>
}

export default TopNews;