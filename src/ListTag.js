import React from "react";

function ListTag(props, i) {

    return (
      <main>
      <div className="list-tag">
        <h4>#태그 목록</h4>
        <div className="main-list-a">
  
          <div className="list">
            <span>{props.태그[0].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.태그[1].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.태그[2].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.태그[3].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.태그[4].title}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.태그[5].title}</span>
  
            <div className="list-plus-a">
              <br />
              <span>{props.태그[6].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.태그[7].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.태그[8].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.태그[9].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.태그[10].title}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{props.태그[11].title}</span>
            </div>
          </div>
  
        </div>
        <br />
      </div>
      </main>
    )
  };

export default ListTag;