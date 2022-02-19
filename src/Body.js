import React from "react";
import "./style/Body.css"

function Body() {
  return (
    <div className="bodyGroup">
      <div className="body">
        <div className="left">
          <div className="advBig">큰 광고</div>
          <div className="news">헤드라인 뉴스</div>
          <div className="stand">뉴스 스탠드</div>
          <div className="article">오늘 읽을만한 글</div>
        </div>
        <div className="right">
          <div className="info">회원정보</div>
          <div className="advSmall">작은 뉴스들</div>
          <div className="advSmall2">작은 광고</div>
          <div className="shopping">쇼핑</div>
        </div>
      </div>
    </div>
  );
}

export default Body;
