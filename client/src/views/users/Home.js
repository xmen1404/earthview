import Banner from "../../components/banner/Banner";
import CategoryList from "../../components/category/CategoryList";
import NewsSlider from "../../components/newsSlider/NewsSlider";

const Home = () => {
    return <div className = "home">
        <Banner></Banner>
        <CategoryList></CategoryList>
        <NewsSlider></NewsSlider>
    </div>
}

export default Home;