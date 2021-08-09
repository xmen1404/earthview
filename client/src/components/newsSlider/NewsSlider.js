import React , {useState, useEffect, useRef} from 'react';
import "../../styles/newsSlider/newsSlider.css"

import p1 from "../../assets/p1.PNG";
import p2 from "../../assets/p2.PNG";
import p3 from "../../assets/p3.PNG";
import p4 from "../../assets/p4.PNG";
import Button from '../button/Button';
import RightArrow from "../../assets/right-arrow.png";
import LeftArrow from "../../assets/left-arrow.png";



const NewsSlider = (props) => {
    // const src = "https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_q=highq&amp;im_w=720";
    // const newsImage = [
    //     "https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=1920",
    //     p1,
    //     p2,
    //     p3,
    //     p4,
    //     p1,
    //     p2,
    //     p3,
    //     p4
    // ];
    // const delay = 3000;


    const [index, setIndex] = useState(0);
    const [lClass, setLClass] = useState("left");
    const [rClass, setRClass] = useState("right");
    const [list, setList] = useState([]);
    const [type, setType] = useState("");
    const [count, setCount] = useState();
    // const [data, setData] = useState({})
    
    const moveLeft = () => {
        // setIndex(index === 0 ? list.length - 4 : index - 1);

        // if(index < count){
        //     let newList = list;
        //     newList.unshift(newList.pop());
        //     setList(newList)
        // }
        // else{
        //     // console.log("TH này")
        //     let newList = list;
        //     newList.pop()
        //     setList(newList);
        //     // setIndex(index-1);
        // }

        setIndex(index-1)

        // let newList = list;
        // newList.pop()
        // setList(newList);


        // setIndex(index-1);
    }

    const moveRight = () => {
        // setIndex(index === list.length - 4 ? 0 : index + 1);
        // let newList = list;
        // newList.push(newList[index]);
        // setList(newList);

        setIndex(index+1);
    }
    

    useEffect(() => {
        if(props.list && props.type){
            let tmp = [];
            for(let i=0;i<30;i++){
                tmp = tmp.concat(props.list);
            }
            setList(tmp);
            // console.log("check list", props.list);
            setIndex(15*props.list.length);
            // if(props.list.length < 4)
            // setCount(props.list.length);
        }
    }, [props]);


    const moveToNews = (id) => {
        window.location.href = "/news/"+id;
    }
    

    return <div className = "newsSlider">
        <div className = {lClass}>
            <div className = "arrow-left">
                <img 
                    src = {LeftArrow} onMouseOver = {()=>setLClass("left clear")} 
                    onMouseOut = {()=>setLClass("left")}  
                    onClick = {moveLeft}
                ></img>
            </div>
        </div>

        <div className="newsSlider-slideshow">
            <div
                className="newsSlider-slideshowSlider"
                style={{ transform: `translate3d(${-index * 25.266}%, 0, 0)` }}
            >

                {(props.type === 0) && list && list.map((item, index) => (
                    <div
                        className="newsSlider-slide"
                        // key={index}
                        onClick = {()=>moveToNews(item._id)}
                    >
                        <div 
                            className = "newsSlider-background"
                            style={{ background: `url(${item.background.split("src=\"").pop().split("\"")[0]}) no-repeat center center/cover` }}
                        ></div>

                        <div className = "newsSlider-information">
                            <div className = "title">
                                {item.title && item.title.includes("h1")? item.title.split(">")[1].split("<")[0] : "no title"}
                            </div>
                            <div className = "keyword">
                                {item.user.username}
                            </div>
                        </div>
                    </div>
                ))}


                {(props.type === 1) && list && list.map((item, index) => (
                    <div
                        className="newsSlider-slide"
                        // key={index}
                        onClick = {()=>moveToNews(item._id)}
                    >
                        <div 
                            className = "newsSlider-background"
                            style={{ background: `url(${item.background.split("src=\"").pop().split("\"")[0]}) no-repeat center center/cover` }}
                        ></div>

                        <div className = "newsSlider-information">
                            <div className = "title">
                                {item.title && item.title.includes("h1")? item.title.split(">")[1].split("<")[0] : "no title"}
                            </div>
                            <div className = "keyword">
                            {item.category? item.category.name: ""} {item.bigCategory? item.bigCategory.name? item.bigCategory.name.toLowerCase():"":""}
                            </div>
                        </div>
                    </div>
                ))}


                {(props.type === 2) && list && list.map((item, index) => (
                    <div
                        className="newsSlider-slide"
                        // key={index}
                        onClick = {()=>moveToNews(item._id)}
                    >
                        <div 
                            className = "newsSlider-background"
                            style={{ background: `url(${item.background.split("src=\"").pop().split("\"")[0]}) no-repeat center center/cover` }}
                        ></div>

                        <div className = "newsSlider-information">
                            <div className = "title">
                                {item.title && item.title.includes("h1")? item.title.split(">")[1].split("<")[0] : "no title"}
                            </div>
                            <div className = "keyword">
                                {item.keyword}
                            </div>
                        </div>
                    </div>
                ))}
                


                {(props.type === "series") && list && list.map((item, index) => (
                    <div
                        className="newsSlider-slide"
                        // key={index}
                        onClick = {()=>moveToNews(item._id)}
                    >
                        <div 
                            className = "newsSlider-background"
                            style={{ background: `url(${item.image.split("src=\"").pop().split("\"")[0]}) no-repeat center center/cover` }}
                        ></div>

                        <div className = "newsSlider-information">
                            <div className = "title">
                                {item.name ? item.name : "no title"}
                            </div>
                            <div className = "keyword">
                                {item.count} bài viết
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>


        <div className = {rClass}>
            <div className = "arrow-right">
                <img 
                    src = {RightArrow} 
                    onMouseOver = {()=>setRClass("right clear")} 
                    onMouseOut = {()=>setRClass("right")}
                    onClick = {moveRight}
                ></img>
            </div>
        </div>
    
    </div>
}

export default NewsSlider;