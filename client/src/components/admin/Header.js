import "../../styles/admin/header.css";

const header = ()=>{
    return <div className = "header">
        <div className="top">
            <h3>Welcome Admin , <a href="#">Logout</a></h3>
        </div>

        <div className="menu">
            <ul>
                <li><a href="#">Quản lí thành viên</a> </li>
                <li><a href="/admin/categories">Quản lí chuyên mục</a> </li>
                <li><a href="/admin/news">Quản lí bài viết</a> </li>
                <li><a href="#">Quản lí bình luận</a> </li>
            </ul>
        </div>
    </div>
}

export default header;