import {useState} from "react";
import Header from "./Header.js";
import ListCategory from "./ListCategory";
import AddCategory from "./AddCategory";

const NewsManagement = () => {
    const [isAdd, setIsAdd] = useState(false);
    const [type, setType] = useState(1);

    const handleClick = () => {
        setIsAdd(!isAdd);
    }

    return <div>
        <Header></Header>
        {!isAdd && <ListCategory setType = {setType} type = {type} handleClick = {handleClick}></ListCategory>}
        {isAdd && <AddCategory handleClick = {handleClick} type = {type}></AddCategory>}


    </div>
}

export default NewsManagement;