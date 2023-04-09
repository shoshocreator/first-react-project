import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
const Contact = () => {
  return (
    <section className="contact">
      <h2 className="">contact</h2>
      <div className="diver">
        <div className="line "></div>
        <AiTwotoneStar className="fs-2 mx-3" />

        <div className="line "></div>
      </div>
      <form className="my-5  contactform">
        <input type="text" placeholder="Name" />
        <div className="inputline"></div>
        <input type="email" placeholder="Email" />
        <div className="inputline"></div>
        <input type="number" placeholder="Phone Number" />
        <div className="inputline"></div>
        <textarea type="text" placeholder="Message" rows="5" />
        <div className="inputline"></div>
        <button type="send" className=" sendbtn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
