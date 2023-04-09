import React, { useState } from "react";
import SingleProject from "../SingleProject/SingleProject";
import { AiTwotoneStar } from "react-icons/ai";
import Overlay from "../Overlay/Overlay";
const projects = [
  {
    id: 0,
    title: "LOG CABIN",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    src: "https://routeegypt.com/start-react/assets/img/portfolio/cabin.png",
  },
  {
    id: 1,
    title: "TASTY CAKE",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    src: "https://routeegypt.com/start-react/assets/img/portfolio/cake.png",
  },
  {
    id: 2,
    title: "CIRCUS TENT",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    src: "https://routeegypt.com/start-react/assets/img/portfolio/circus.png",
  },
  {
    id: 3,
    title: "CONTROLLER",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    src: "https://routeegypt.com/start-react/assets/img/portfolio/game.png",
  },
  {
    id: 4,
    title: "LOCKED SAFE",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    src: "https://routeegypt.com/start-react/assets/img/portfolio/safe.png",
  },
  {
    id: 5,
    title: "SUBMARINE",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    src: "https://routeegypt.com/start-react/assets/img/portfolio/submarine.png",
  },
];

const Portfolio = () => {
  const [overlayStatus, setOverlayStatus] = useState(false);
  const [singleProject, setSingleProject] = useState(null);
  function getSingle(id) {
    let project = projects.filter((proj) => proj.id == id);
    setOverlayStatus(true);
    setSingleProject(project);
  }
  if (!overlayStatus) {
    document.body.style.overflow = "auto";
  }
  if (overlayStatus) {
    return (
      <Overlay
        setOverlayStatus={setOverlayStatus}
        singleProject={singleProject}
      />
    );
  }
  return (
    <section className=" portfolio container ">
      <h2>Portfolio</h2>
      <div className="diver">
        <div className="line "></div>

        <AiTwotoneStar className="  fs-2 mx-3" />
        <div className="line "></div>
      </div>
      <div className="project container my-3 ">
        <div className="row ">
          {projects.map((proj) => {
            return (
              <SingleProject proj={proj} key={proj.id} getSingle={getSingle} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
