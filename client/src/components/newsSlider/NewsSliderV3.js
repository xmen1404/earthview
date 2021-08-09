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
    const [lClass, setLClass] = useState("left");
    const [rClass, setRClass] = useState("right");
    const [list, setList] = useState([]);
    // const [data, setData] = useState({})
    
    const moveLeft = () => {
        setIndex(index === 0 ? newsImage.length - 4 : index - 1);
    }

    const moveRight = () => {
        setIndex(index === newsImage.length - 4 ? 0 : index + 1);
    }
    

    useEffect(() => {
        if(props.list){
            setList(props.list);
        }
    }, [props]);
    

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
                style={{ transform: `translate3d(${-index * 25.35}%, 0, 0)` }}
            >
                {(props.type === "series") && list && list.map((item, index) => (
                    <div
                        className="newsSlider-slide"
                        key={index}
                    >
                        <div 
                            className = "newsSlider-background"
                            style={{ background: `url(${item.image}) no-repeat center center/cover` }}
                        ></div>

                        <div className = "newsSlider-information">
                            <div className = "title">
                                {item.title}
                            </div>
                            <div className = "keyword">
                                {item.keyword}
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



    {/* <div className = "next-item">
        <div className = {lClass}>
            <div className = "arrow-left">
                <img 
                    src = {RightArrow} onMouseOver = {()=>setLClass("left clear")} 
                    onMouseOut = {()=>setLClass("left")}  
                    onClick = {moveLeft}
                ></img>
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
    </div> */}




    {/* next item v2 */}
    {/* <div className = {lClass}>
        <div className = "arrow-left">
            <img 
                src = {RightArrow} onMouseOver = {()=>setLClass("left clear")} 
                onMouseOut = {()=>setLClass("left")}  
                onClick = {moveLeft}
            ></img>
        </div>
    </div> */}

    {/* <div className = {rClass}>
        <div className = "arrow-right">
            <img 
                src = {RightArrow} 
                onMouseOver = {()=>setRClass("right clear")} 
                onMouseOut = {()=>setRClass("right")}
                onClick = {moveRight}
            ></img>
        </div>
    </div> */}







    {/* <div className = "arrow-left">
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
    </div> */}


    
            {/* <div className="newsSlider-right-arrow" onClick = {nextItem}>
                Click
            </div> */}
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