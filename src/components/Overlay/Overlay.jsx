import React from "react";
import "./Overlay.module.css";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";
const Overlay = ({ singleProject, setOverlayStatus }) => {
  const { title, text, src } = singleProject[0];

  document.body.style.overflow = "hidden";

  return (
    <section className="overlay position-fixed  left-0 w-100 bg-dark p-2 ">
      <div className="container">
        <AiOutlineClose
          onClick={() => setOverlayStatus(false)}
          className=" cursor fs-2 d-block ms-auto text-white "
        />
        <div className="d-flex justify-content-center align-items-center text-center">
          <h2 className="text-white">{title}</h2>
          <img src={src} alt="" className="w-100" height={200} />
          <div className="diver">
            <div className="line"></div>

            <AiTwotoneStar className="  fs-2 mx-3" />
            <div className="line "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overlay;
