import "../../styles/category/categoryItem.css";

const CategoryItem = (props) => {
    const {name, description, image} = props.data
    // console.log("check tên data", name);
    // const url = "http://localhost:5000/Icon_1.jpg";
    let style = {
        background: `url(${image}) no-repeat center center/cover`,
        // background: `${props.background} no-repeat center center/cover`
        // props.curCategory === name? 
    }

    if(props.curCategory === name){
        style.border = "3px solid red";
    }
    
    if(props.curCategory === "all" && name === "Tất cả"){
        // console.log("đang ở đây");
        style.border = "3px solid red";
    }

    return <div className = "categoryItem" onClick = {props.handleClick}>
        <div className = "icon" style = {style}>

        </div>
        <div className = "information">
            <div className = "name">
                {name}
            </div>
            {/* <div className = "number">
                3 bài viết mới
            </div> */}
        </div>
    </div>
} 

export default CategoryItem;