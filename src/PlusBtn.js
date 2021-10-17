import React, { useState } from "react";
import $ from 'jquery';


function PlusBtn(params) {
    let [더보기, 더보기변경] = useState(false);
    return (
        <div className="plus-btn">
        <p onClick={function listOpenMenu() {
          더보기변경(더보기 != true)
          if (더보기 == true) {
            console.log("1")
            $('.list-plus-a').slideDown();
            $('.list-plus-b').slideDown();
          } else {
            $('.list-plus-a').slideUp();
            $('.list-plus-b').slideUp();
          }
        }}>
          더보기
        </p>
      </div>
    )
}

export default PlusBtn;