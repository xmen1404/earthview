import "../../styles/category/categoryItem.css";

const CategoryItem = () => {

    const style = {
        background: "url('https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240') no-repeat center center/cover"
    }
    return <div className = "categoryItem">
        <div className = "icon" style = {style}>

        </div>
        <div className = "information">
            <div className = "name">
                Earth Quake
            </div>
            <div className = "number">
                3 bài viết mới
            </div>
        </div>
    </div>
} 

export default CategoryItem;