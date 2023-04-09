import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const About = () => {
  return (
    <section className="about ">
      <h2 className="text-white">About</h2>
      <div className="diver">
        <div className="line "></div>
        <AiTwotoneStar className="text-white fs-2 mx-3" />

        <div className="line "></div>
      </div>
      <div className="aboutcontent py-2">
        <div className="row ">
          <div className="col-md-3">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="col-md-3">
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
