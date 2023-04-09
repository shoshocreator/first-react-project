import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
function Header() {
  return (
    <header className="vh-100">
      <img
        src="	https://routeegypt.com/start-react/assets/img/avataaars.svg"
        className="headerpic"
      ></img>
      <h1>START React</h1>
      <div className="diver">
        <div className="line "></div>
        <AiTwotoneStar className=" text-white fs-2 mx-3" />
        <div className="line "></div>
      </div>
      <h4>GraphicArtist-Web Designer-Illustrator</h4>
    </header>
  );
}

export default Header;
