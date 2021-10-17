import React from "react";

function NavBar(params) {

    return (
    <nav className="navber">
    <div className="navber_name">
      <a href="#">#음식 추천 사이트</a>
    </div>

    <ul className="navber_menu">
      <li><a href="#">홈</a></li>
      <li><a href="#">갤러리</a></li>
      <li><a href="#">글쓰기</a></li>
      <li><a href="#">글목록</a></li>
      <li><a href="#">옵션</a></li>
    </ul>

    <ul className="login">
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
    )
}

export default NavBar;