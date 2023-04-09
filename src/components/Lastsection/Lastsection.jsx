import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
const LastSection = () => {
  return (
    <section class="container-fluid last">
      <div className="row text-white lastsection">
        <div className="col-md-4">
          <h3>location</h3>
          <p> 2215 John Daniel Drive Clark, MO 65243</p>
        </div>
        <div className="col-md-4  d-flex flex-column text-center">
          <h3>AROUND THE WEB</h3>
          <div className="lasticons d-flex  justify-content-center ">
            <div className="rounded-circle icon">
              <BsFacebook />
            </div>
            <div className="rounded-circle icon">
              <AiOutlineTwitter />
            </div>
            <div className="rounded-circle icon">
              <AiFillLinkedin />
            </div>
            <div className="rounded-circle icon">
              <AiFillDribbbleCircle />
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, MIT licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
