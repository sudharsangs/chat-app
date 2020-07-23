import React from "react";
import close from "../../icons/closeIcon.png";
import online from "../../icons/onlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img alt="online" className="onlineIcon" src={online} />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img alt="close" src={close} />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
