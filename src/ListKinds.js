import React from "react";

function ListKinds(props) {

    return (
        <main>
      <div className="list-kinds">
       
        <h4>#종류 목록</h4>
        <label htmlFor="kinds_text">
        <span className="kinds_text">  &nbsp; &nbsp;
          종류검색 : <input className="text_ip" type="text" id="kinds_text" placeholder="검색할 종류 입력"/>
        </span>
        </label>
        <br />
       
        <div className="main-list-b">
  
          <div className="list">
            <span>{props.종류[0].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.종류[1].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.종류[2].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.종류[3].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.종류[4].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.종류[5].title}</span>
  
            <div className="list-plus-b">
              <br />
              <span>{props.종류[6].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.종류[7].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.종류[8].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.종류[9].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.종류[10].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.종류[11].title}</span>
            </div>
          </div>
        </div>
        <br />
      </div>
      </main>
    )
  };

  
  export default ListKinds;