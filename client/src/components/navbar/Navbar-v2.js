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

    return (
        <div className = "navbar-container">
            <div className = "tmpnavbar-header"></div>
            <div className = "navbar-header">
                <div className = "navbar">
                    <div className = "left">
                        earthview
                    </div>

                    <div className = "center">

                    </div>

                    <div className = "right">
                        <span>Button</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;