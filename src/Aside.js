import React from "react";
import Ad1 from "./img/11.png";
import Ad2 from "./img/12.png";
import Ad3 from "./img/13.png";
import Ad4 from "./img/14.png";
import jquery from 'jquery';
import $ from 'jquery';
import './AsideSlide.css';

function Aside(params) {
  return (
    <div>
      <div className="fixd">
        <hr />
        <aside>
          <h3>#추천 음식</h3>
          
          <div className="slide">
        <div className="slide-container">
            <div className="slide-box">
                <img src={Ad1} alt="" />
            </div>

            <div className="slide-box">
            <img src={Ad2} alt="" />
            </div>

            <div className="slide-box">
            <img src={Ad3} alt="" />
            </div>

            <div className="slide-box">
            <img src={Ad4} alt="" />
            </div>

        </div>
        <button className="slide-next">Next</button>
        <button className="slide-Before">Before</button>
    </div>

    <div class="slide-btn">
        <input class="slide-1" type="button" value="1"/>
        <input class="slide-2" type="button" value="2"/>
        <input class="slide-3" type="button" value="3"/>
        <input class="slide-4" type="button" value="4"/>
    </div>

        </aside>
      </div>

    </div>

  )
}

{
  
  let 지금보이는사진 = 1;

  $('.slide-next').on('click', function () {
      $('.slide-container').css('transform', 'translateX(-' + 지금보이는사진 + '00vw)');
      if (지금보이는사진 < 3) {
          지금보이는사진 = 지금보이는사진 + 1;
      }
  });

  $('.slide-Before').on('click', function () {
      $('.slide-container').css('transform', 'translateX(-' + (지금보이는사진 - 1) + '00vw)');
      if (지금보이는사진 > 1) {
          지금보이는사진 = 지금보이는사진 - 1;
      }
  });;

  $('.slide-1').on('click', function () {
    $('.slide-container').css('transform', 'translateX(0vw)');
})

$('.slide-2').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-100vw)');
});

$('.slide-3').on('click', function () {
    $('.slide-container').css('transform', 'translateX(-200vw)');
});

$('.slide-4').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-300vw)');
});
      }

export default Aside;