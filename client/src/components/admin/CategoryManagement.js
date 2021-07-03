import {useState} from "react";
import Header from "./Header.js";
import ListCategory from "./ListCategory";
import AddCategory from "./AddCategory";

const NewsManagement = () => {
    const [isAdd, setIsAdd] = useState(false);

    const handleClick = () => {
        setIsAdd(!isAdd);
    }

    return <div>
        <Header></Header>
        {!isAdd && <ListCategory handleClick = {handleClick}></ListCategory>}
        {isAdd && <AddCategory handleClick = {handleClick}></AddCategory>}
    </div>
}

export default NewsManagement;