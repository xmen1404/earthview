import React , {useState, useEffect, useRef, useContext} from 'react';
import "../../styles/banner/banner.css"
import logo from "../../assets/logo.png";
import "../../styles/button/button.css";
import Button from "../button/Button";
// import Carousel from "../carousel/Carousel";

const Banner = (props) => {
    // const src = "https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_q=highq&amp;im_w=720";
    // const newsImage = [
    //     "https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=1920",
    //     p1,
    //     p2,
    //     tmpImage,
    // ];

    // const [newsImage, getNewsImage] = useState([]);
    // const [isLoading, setLoading] = useState(true);
    const [state, setState] = useState({
        isLoading: true,
        highlightedNews: []
    });

    const [index, setIndex] = useState(-1);
    const delay = index < 0? 50 : 7000;
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(()=>{
        // const data = await props.highlightedNews;
        // console.log("debug here", props.highlightedNews);
        
        if(props.highlightedNews){
            setState({
                ...state,
                // newsList: props.newsList,
                highlightedNews: props.highlightedNews.slice(0,4),
                isLoading: false
            })
        }
    }, [props]);

  
    useEffect(() => {
      resetTimeout();

      if(props.highlightedNews){
        // console.log("debug 2", props.highlightedNews)
        timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === state.highlightedNews.length - 1 ? 0 : prevIndex + 1
              ),
            delay
          );
      }
  
      return () => {
        resetTimeout();
      };
    }, [index, props]);


    const moveToNews = (id) => {
        window.location.href = "/news/"+id;
    }


    return <div className = "banner">
        {/* <picture>
            <source srcset="https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=2560 2x" media="(min-width: 1440px)"/>
            <source srcset="https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=1920 2x" media="(min-width: 950px)"/>
            <source srcset="https://a0.muscache.com/im/pictures/fea76ed2-a8c8-41eb-8a86-00faef1943ff.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/fea76ed2-a8c8-41eb-8a86-00faef1943ff.jpg?im_w=1440 2x" media="(min-width: 744px)"/>
            <source srcset="https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_w=720 2x"/>
            <img style={{position:"absolute", left:"0", right:"0", objectFit:"cover", objectPosition:"center bottom", verticalAlign:"bottom"}} aria-hidden="true" alt="" id="FMP-target" src={src}/>
        </picture> */}

        {/* <div className = "header">
            <div className = "navbar">
                <div class = "left">
                    <img src = {logo}/>
                </div>

                <div class = "center">
                    <div class = "item relative">
                        <span>Original</span>
                        <div class = "border"></div>
                    </div>
                    <div class = "item relative" >
                        <span>Community</span>
                        <div class = "border"></div>
                    </div>
                </div>

                <div class = "right">
                    <Button 
                            marginRight = "2rem" 
                            padding = "0.5rem" 
                            bgcolor = "#3B5998"
                            borderRadius = "0.5rem"
                            content = "Login" 
                    ></Button>

                    <Button 
                            marginRight = "2rem" 
                            padding = "0.5rem" 
                            bgcolor = "#3B5998"
                            content = "Register" 
                    ></Button>
                </div>
            </div>
        </div> */}





        {/* 2nd version */}

        {/* <Navbar></Navbar> */}

        {!state.isLoading && 
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {state.highlightedNews.map((news, index) => (
                        <div
                            className="slide"
                            key={index}
                            style={{ background: `url(${news.background.split("src=\"").pop().split("\"")[0]}) no-repeat center center/cover` }}
                            onClick = {()=>moveToNews(news._id)}
                        >
                        </div>
                    ))}
                </div>
        
                <div className="slideshowDots">
                    {state.highlightedNews.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        >
                            <div className = "after"></div>
                        </div>
                    ))}
                </div>
            </div>
        }


        {/* <Carousel></Carousel> */}
    </div>
}

export default Banner;