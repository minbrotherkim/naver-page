import React from "react";
import "./style/Header.css";

function Header() {
  return (
    <div className="headerGroup">
      <div className="header">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/naverlogo.png"} />
        </div>
        <div className="searchArea">
          <div className="searchBar">
            <div>검색창</div>
            <div>검색버튼</div>
          </div>
        </div>
        <div className="text">네이버를 시작페이지로, 쥬니어네이버, 해피빈</div>
      </div>
    </div>
  );
}

export default Header;
