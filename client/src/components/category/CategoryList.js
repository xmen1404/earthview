import "../../styles/category/categoryList.css";
import CategoryItem from "./CategoryItem";

// import p1 from "../../assets/Icon_1.jpg";

// const backgroundUrl = 

const backgroundUrl_1 = "http://localhost:5000/Icon_1.jpg"
const backgroundUrl_2 = "http://localhost:5000/Icon_2.jpg"
const backgroundUrl_3 = "http://localhost:5000/Icon_3.jpg"
const backgroundUrl_4 = "http://localhost:5000/Icon_4.jpg"
const backgroundUrl_5 = "http://localhost:5000/Icon_5.jpg"
const backgroundUrl_6 = "http://localhost:5000/Icon_6.jpg"
const backgroundUrl_7 = "http://localhost:5000/Icon_7.jpg"
const backgroundUrl_8 = "http://localhost:5000/Icon_8.jpg"

const CategoryList = () => {
    return <div className = "categoryList">
        <CategoryItem backgroundUrl = {backgroundUrl_1}></CategoryItem>
        <CategoryItem backgroundUrl = {backgroundUrl_2}></CategoryItem>
        <CategoryItem backgroundUrl = {backgroundUrl_3}></CategoryItem>
        <CategoryItem backgroundUrl = {backgroundUrl_4}></CategoryItem>

        <CategoryItem backgroundUrl = {backgroundUrl_5}></CategoryItem>
        <CategoryItem backgroundUrl = {backgroundUrl_6}></CategoryItem>
        <CategoryItem backgroundUrl = {backgroundUrl_7}></CategoryItem>
        <CategoryItem backgroundUrl = {backgroundUrl_8}></CategoryItem>
    </div>
}

export default CategoryList;