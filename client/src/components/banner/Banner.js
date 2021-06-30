import React , {useState, useEffect, useRef} from 'react';
import "../../styles/banner/banner.css"
import logo from "../../assets/logo.png";
import "../../styles/button/button.css";
import Button from "../button/Button";
// import Carousel from "../carousel/Carousel";

import p1 from "../../assets/p1.PNG";
import p2 from "../../assets/p2.PNG";
import p3 from "../../assets/p3.PNG";
import p4 from "../../assets/p4.PNG";

const Banner = () => {
    // const src = "https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_q=highq&amp;im_w=720";
    const newsImage = [
        "https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=1920",
        p1,
        p2,
        p3,
        p4
    ];
    const delay = 3000;


    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();

      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === newsImage.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);

    return <div className = "banner">
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {newsImage.map((imageUrl, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
                    >
                    </div>
                ))}
            </div>
    
            <div className="slideshowDots">
                {newsImage.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>


        {/* <picture>
            <source srcset="https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=2560 2x" media="(min-width: 1440px)"/>
            <source srcset="https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=1920 2x" media="(min-width: 950px)"/>
            <source srcset="https://a0.muscache.com/im/pictures/fea76ed2-a8c8-41eb-8a86-00faef1943ff.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/fea76ed2-a8c8-41eb-8a86-00faef1943ff.jpg?im_w=1440 2x" media="(min-width: 744px)"/>
            <source srcset="https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_w=720 2x"/>
            <img style={{position:"absolute", left:"0", right:"0", objectFit:"cover", objectPosition:"center bottom", verticalAlign:"bottom"}} aria-hidden="true" alt="" id="FMP-target" src={src}/>
        </picture> */}

        <div className = "header">
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
                        {/* <div class = "border"></div> */}
                    </div>
                    {/* <div class = "item">
                        <span>Action</span>
                    </div> */}
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
                            // borderRadius = "0.5rem"
                            content = "Register" 
                    ></Button>
                </div>
            </div>
        </div>

        {/* <Carousel></Carousel> */}
    </div>
}

export default Banner;