import React from "react";
import "./Overlay.module.css";
import { AiOutlineClose, AiTwotoneStar } from "react-icons/ai";
const Overlay = ({ singleProject, setOverlayStatus }) => {
  const { title, text, src } = singleProject[0];

  document.body.style.overflow = "hidden";

  return (
    <section className="overlay position-fixed  left-0 w-100  p-2 ">
      <div className="container overlayContainer">
        <AiOutlineClose
          onClick={() => setOverlayStatus(false)}
          className=" cursor fs-2 d-block ms-auto text-white "
        />
        <div className="d-flex justify-content-center align-items-center text-center d-column">
          <div>
            <h2 className="text-white">{title}</h2>
            <div className="diver">
              <div className="line"></div>

              <AiTwotoneStar className="  fs-2 mx-3" />

              <div className="line "></div>
            </div>

            <img src={src} alt="" className="w-80" height={400} />

            <p className="my-3 text-white">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overlay;
