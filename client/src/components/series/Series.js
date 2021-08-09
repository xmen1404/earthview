import { useContext } from "react";
import NewsSlider from "../../components/newsSlider/NewsSlider";
import "../../styles/series/series.css"
import {SeriesContext} from "../../contexts/SeriesContext";

const Series = () => {
    const {seriesList, getSeries, deleteSeries} = useContext(SeriesContext);
    console.log(seriesList);
    return <div className = "series">
        <div className = "header">
            <h2>Series</h2>
        </div>
        <NewsSlider type = {"series"} list = {seriesList}></NewsSlider>
    </div>
}

export default Series;