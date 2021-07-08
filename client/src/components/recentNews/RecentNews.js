import CategoryList from "../../components/category/CategoryList";
import "../../styles/recentNews/recentNews.css";

const RecentNews = () => {
    return <div className = "recentNews">
        <div className = "header">
            <h2>Gần đây</h2>
        </div>
        <CategoryList></CategoryList>
    </div>
}

export default RecentNews;