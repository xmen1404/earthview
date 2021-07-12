import {useContext, useEffect, useState} from "react";
import "../../styles/footer/footer.css";
import {CategoryContext} from "../../contexts/CategoryContext";
import {BigCategoryContext} from "../../contexts/BigCategoryContext";
import {SeriesContext} from "../../contexts/SeriesContext";

// import "../../assets/facebook.png"


const Footer = () => {
    const {categoryList} = useContext(CategoryContext);
    const {bigCategoryList} = useContext(BigCategoryContext);
    const {seriesList} = useContext(SeriesContext);
    
    return <div className = "footer">
        <div className = "top">
            <div className = "left">
                <div className = "wrapper"> 
                    <div className = "title"><h2>Hành động, hy vọng</h2></div>
                    <div className = "about">Đây là câu chuyện và xứ mệnh của earthview</div>
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <div className = "category">
                        <div className = "heading"><h3>Thể loại</h3></div>
                        <div className = "list">
                            {categoryList.map((category) => {
                                return <div className = "item">{category.name}</div>
                            })}
                        </div>
                    </div>
                    <div className = "topic">
                        <div className = "heading"><h3>Chủ đề</h3></div>
                        <div className = "list">
                            {bigCategoryList.map((topic) => {
                                return <div className = "item">{topic.name}</div>
                            })}
                        </div>
                    </div>
                    <div className = "series">
                        <div className = "heading"><h3>Series</h3></div>
                        <div className = "list">
                            {seriesList.map((series) => {
                                return <div className = "item">{series.name}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = "bottom">
            <div className = "wrapper">
                <div className = "left">&#169; <span style = {{fontWeight: "600"}}>earthview</span> 2021. All Rights Reserved.</div>
                <div className = "center">
                    <span>Về chúng tôi</span> - <span>Điều khoản sử dụng</span> - <span>Chính sách bảo mật</span>
                </div>
                <div className = "right">
                    <div className = "icon fb"></div>
                    <div className = "icon twitter"></div>
                    <div className = "icon instagram"></div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;