import React, { useState } from "react";
import Popup from "./Popup";

const Project = (props) => {
  let [hoverStatus, setHoverStatus] = useState(false);

  // const click = () => {
  //   $("#myModal").modal("show");
  // };

  return (
    <div className="col-sm">
      <div
        className="card text-center text-white project"
        onMouseEnter={() => setHoverStatus(true)}
        onMouseLeave={() => setHoverStatus(false)}
        data-toggle="modal"
        data-target={"#" + props.title}
      >
        {hoverStatus ? (
          <>
            <div>
              <p>
                <strong>{props.description}</strong>
              </p>
            </div>
          </>
        ) : (
          <h2>{props.title}</h2>
        )}
      </div>
      <Popup
        title={props.title}
        description={props.description}
        gitHubLink={props.gitHubLink}
        projectLink={props.projectLink}
        image1={props.image1}
        image2={props.image2}
      />
    </div>
  );
};

export default Project;
