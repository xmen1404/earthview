import "../../styles/admin/ListNews.css";

const ListNews = () => {
    return <div className="listnews">
        <table>
            <tr>
                <td colspan="5" style={{color: "#C36"}}>Tổng số bài viết: 0</td>
                <td colspan="2"><a href="/admin/news/create" style = {{color: "#C36"}}>Thêm bài viết</a></td>
                {/* <td colspan="1"></td> */}
            </tr>
            {/* <tr style={{background: "#0F6", color: "#fff"}}> */}
            <tr style={{background: "#00CC66", color: "#fff"}}>
                <th style={{width: "1%"}}>STT</th>
                <th style={{width: "15%"}}>Chuyên mục</th>
                <th style={{width: "14%"}}>Choice</th>
                <th style={{width: "25%"}}>Tựa đề bài viết</th>
                <th style={{width: "8%"}}>Từ khóa</th>
                <th style={{width: "32%"}}>Mô tả</th>
                <th>Edit</th>
            </tr>

    
            <tr>
                <td>0</td>
                <td>title</td>
                <td>choice</td>
                <td>title</td>
                <td>keyword</td>
                <td>description</td>
                <td><a href="#">Edit</a></td>
            </tr>
     



        </table>
    </div>

}

export default ListNews;