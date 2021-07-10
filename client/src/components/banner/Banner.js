import React , {useState, useEffect, useRef, useContext} from 'react';
import "../../styles/banner/banner.css"
import logo from "../../assets/logo.png";
import "../../styles/button/button.css";
import Button from "../button/Button";
// import Carousel from "../carousel/Carousel";

import p1 from "../../assets/p1.PNG";
import p2 from "../../assets/p2.PNG";
import p3 from "../../assets/p3.PNG";
// import p4 from "../../assets/p4.PNG";
import tmpImage from "../../assets/upload-1625620573031";

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


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // document.getElementsByClassName("navbar").style.fontSize = "30px";
            // document.getElementsByClassName("navbar");
            document.getElementsByClassName("navbar")[0].style.height =  "4.3rem";
            document.getElementsByClassName("navbar")[0].style.boxShadow = "0px 0.2rem 0.5rem #ababab";
            // console.log(document.getElementsByClassName("navbar")[0].style);
        } else {
            // document.getElementsByClassName("navbar").style.fontSize = "90px";
            // console.log(document.getElementsByClassName("navbar").style);
            document.getElementsByClassName("navbar")[0].style.height =  "6.3rem";
            document.getElementsByClassName("navbar")[0].style.boxShadow = "none";
        }
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

        <div className = "tmpHeader"></div>
        <div className = "header">
            <div className = "navbar">
                <div class = "left">
                    earthview
                </div>

                <div class = "center">
                    <div class = "item relative">
                        <span>Original</span>
                        <div class = "border"></div>
                    </div>
                    <div class = "item relative" >
                        <span>Community</span>
                        {/* <div class = "border"></div> */}
                    </div>
                    {/* <div class = "item">
                        <span>Action</span>
                    </div> */}
                </div>

                <div class = "right">
                    {/* <Button 
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
                            // borderRadius = "0.5rem"
                            content = "Register" 
                    ></Button> */}
                    <div className = "right-button">
                        <div className = "hamburger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className = "avatar">
                            <svg 
                                viewBox="0 0 32 32" 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="presentation" 
                                focusable="false" 
                                style={{display: "block", height: "100%", width: "100%", fill: "#434343"}}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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