import React , {useState, useEffect, useRef} from 'react';
import "../../styles/newsSlider/newsSlider.css"

import p1 from "../../assets/p1.PNG";
import p2 from "../../assets/p2.PNG";
import p3 from "../../assets/p3.PNG";
import p4 from "../../assets/p4.PNG";
import Button from '../button/Button';
import RightArrow from "../../assets/rightArrow.png";


const NewsSlider = () => {
    // const src = "https://a0.muscache.com/im/pictures/5489a694-471c-43eb-b865-ba4c837e0540.jpg?im_q=highq&amp;im_w=720";
    const newsImage = [
        "https://a0.muscache.com/im/pictures/6dcea824-1228-4d91-b78f-6953cd1efed7.jpg?im_w=1920",
        p1,
        p2,
        p3,
        p4,
        p1,
        p2,
        p3,
        p4
    ];
    const delay = 3000;


    const [index, setIndex] = useState(0);
    const [lClass, setLClass] = useState("left")
    const [rClass, setRClass] = useState("right")
    
    const moveLeft = () => {
        setIndex(index === 0 ? newsImage.length - 4 : index - 1);
    }

    const moveRight = () => {
        setIndex(index === newsImage.length - 4 ? 0 : index + 1);
    }
  
    

    return <div className = "newsSlider">

        <div className="newsSlider-slideshow">
            <div
                className="newsSlider-slideshowSlider"
                style={{ transform: `translate3d(${-index * 20}%, 0, 0)` }}
            >
                {newsImage.map((imageUrl, index) => (
                    <div
                        className="newsSlider-slide"
                        key={index}
                    >
                        <div 
                            className = "background"
                            style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
                        ></div>

                        <div className = "information">
                            <div className = "category">
                                Category 1
                            </div>
                            <div className = "title">
                                title title title title title title title title title title title
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* {index !== newsImage.length -4 && <div className = {lClass}></div>}

            {index !== newsImage.length -4 && <div className = {rClass}></div>}
            
            {index !== newsImage.length -4 && <div className = "arrow-left">
                <img 
                    src = {RightArrow} onMouseOver = {()=>setLClass("left clear")} 
                    onMouseOut = {()=>setLClass("left")}  
                    onClick = {moveLeft}
                ></img>
            </div>}

            {index !== newsImage.length -4 && <div className = "arrow-right">
                <img 
                    src = {RightArrow} 
                    onMouseOver = {()=>setRClass("right clear")} 
                    onMouseOut = {()=>setRClass("right")}
                    onClick = {moveRight}
                ></img>
            </div>} */}



    <div className = {lClass}></div>
    <div className = {rClass}></div>

    <div className = "arrow-left">
        <img 
            src = {RightArrow} onMouseOver = {()=>setLClass("left clear")} 
            onMouseOut = {()=>setLClass("left")}  
            onClick = {moveLeft}
        ></img>
    </div>

    <div className = "arrow-right">
        <img 
            src = {RightArrow} 
            onMouseOver = {()=>setRClass("right clear")} 
            onMouseOut = {()=>setRClass("right")}
            onClick = {moveRight}
        ></img>
    </div>


    
            {/* <div className="newsSlider-right-arrow" onClick = {nextItem}>
                Click
            </div> */}
        </div>
    </div>
}

export default NewsSlider;