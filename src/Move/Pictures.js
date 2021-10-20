import React, { useState } from "react";
import "./Pictures.css";
import imgs1 from "../img/1.jpg";
import imgs2 from "../img/2.jpg";
import imgs3 from "../img/3.jpg";
import imgs4 from "../img/4.jpg";
import imgs5 from "../img/5.jpg";
import imgs6 from "../img/6.jpg";
import imgs7 from "../img/7.jpg";
import imgs8 from "../img/8.jpg";
import imgs9 from "../img/9.jpg";

function Pictures() {

  let [사진음식,사진변경] = useState(
    [imgs1,imgs2,imgs3,imgs4,imgs5,imgs6,imgs7,imgs8,imgs9]);

  return(
 
  사진음식.map(function(i) {
    
    return (
      <div>
        <img src={ i } alt="" />
      </div>
    )

}
))
}

export default Pictures;