import "../../styles/navbar/navbar.css";

const Navbar = () => {


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // document.getElementsByClassName("navbar").style.fontSize = "30px";
            // document.getElementsByClassName("navbar");
            document.getElementsByClassName("navbar")[0].style.height =  "4.3rem";
            document.getElementsByClassName("navbar")[0].style.boxShadow = "0px 0.2rem 0.5rem #ababab";
            // document.getElementsByClassName("left")[0].style.marginTop = "0";
            // console.log(document.getElementsByClassName("navbar")[0].style);
        } else {
            // document.getElementsByClassName("navbar").style.fontSize = "90px";
            // console.log(document.getElementsByClassName("navbar").style);
            document.getElementsByClassName("navbar")[0].style.height =  "6.3rem";
            document.getElementsByClassName("navbar")[0].style.boxShadow = "none";
            // document.getElementsByClassName("left")[0].style.marginTop = "2rem";
        }
    }

    return <div className = "navbar-container">
        <div className = "tmpnavbar-header"></div>
        <div className = "navbar-header">
            <div className = "navbar">
                <div className = "left">
                    earthview
                </div>

                <div className = "center">
                    <div className = "item relative">
                        <span>Original</span>
                        <div className = "border"></div>
                    </div>
                    <div className = "item relative" >
                        <span>Community</span>
                        {/* <div class = "border"></div> */}
                    </div>
                    {/* <div class = "item">
                        <span>Action</span>
                    </div> */}
                </div>

                <div className = "right">
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
    </div>
}


export default Navbar;