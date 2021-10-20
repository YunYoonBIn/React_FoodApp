import React from "react";
import Ad1 from "./img/11.png";
import Ad2 from "./img/12.png";
import Ad3 from "./img/13.png";
import Ad4 from "./img/14.png";
import jquery from 'jquery';
import $ from 'jquery';
import './AsideSlide.css';

function Sugg(params) {
    return (
        <div className="suggestion">
        <p>#오늘의 추천 음식</p>
        <div className="suggestion-img">

            <div className="slide-box">
            <img src={Ad3} alt="" />
            </div>
            
        </div>
      <hr />
</div>
    )
}

export default Sugg;