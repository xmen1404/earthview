import {useState} from 'react'
import ReactHtmlParser from 'react-html-parser';
import '../../styles/layout/news.css'

const News = (props)=>{
    const {data} = props;
    const [loading, setLoading] = useState(false);

    return <div className = 'view-news'>
        <h1>View</h1>
        {!loading && <div className = "wrapper">
            <div className = 'background'>
                    {data.background ? ReactHtmlParser(data.background) : ""}
            </div>

            <div className = 'header'>
                <div className = 'category'>{data.category.name}</div>

                <div className = 'time'>Published on {data.date.day+'-'+data.date.month+'-'+data.date.year}</div>

                <div className = 'title'>
                    {data.title ? ReactHtmlParser(data.title) : ""}
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






{/* 
        <div className = 'category-time'>
            <div className = 'category'>{data.category}</div>
            <div className = 'time'>Published on {data.date.day+'-'+data.date.month+'-'+data.date.year}</div>
        </div>



        <div className = 'header'>
            <div className = 'title'>
                {data.title ? ReactHtmlParser(data.title) : ""}
            </div>

            <div className = 'background'>
                {data.background ? ReactHtmlParser(data.background) : ""}
            </div>

            <div className = 'author'>
                <div className = 'avatar'><img src = "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"></img></div>
                <div className = 'information'>
                    <div className = 'role'>Editor</div>
                    <div className = 'name'>Phuoc Trung</div>
                </div>
            </div>

        </div>

        <div className = 'body'>
            {data.content ? ReactHtmlParser(data.content) : ""}
        </div> */}
    </div>
}

export default News;