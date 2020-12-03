import React from "react";
import Strings from "../../../constants/constants";
/**
 * @description:JSX for rendering sub-navigation bar
 */
function SubHeader() {
  return (
    <div>
      <div className="navbar">
        <a href="#home">{Strings.LINK1}</a>
        <a href="#home">{Strings.LINK2}</a>
        <a href="#home">{Strings.LINK3}</a>
        <a href="#home">{Strings.LINK4}</a>
        <a href="#home">{Strings.LINK5}</a>
        <a href="#home">{Strings.LINK6}</a>
        <a href="#home">{Strings.LINK7}</a>
        <a href="#home">{Strings.LINK8}</a>
        <a href="#home">{Strings.LINK9}</a>
        <a href="#home">{Strings.LINK10}</a>
        <a href="#home">{Strings.LINK11}</a>
      </div>
    </div>
  );
}

export default SubHeader;
