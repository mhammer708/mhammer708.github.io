import React, { useState } from "react";

const Project = (props) => {
  let [hoverStatus, setHoverStatus] = useState(false);

  return (
    <div class="col-sm">
      <div
        class="card text-center text-white project"
        onMouseEnter={() => setHoverStatus(true)}
        onMouseLeave={() => setHoverStatus(false)}
      >
        {hoverStatus ? (
          <div>
            <p>
              <strong>{props.description} </strong>
            </p>
            <div>
              {props.projectLink && (
                <a href={props.projectLink}>
                  <button type="button" class="btn btn-outline-light projBtn">
                    Visit
                  </button>
                </a>
              )}
              {props.gitHubLink && (
                <a href={props.gitHubLink}>
                  <button type="button" class="btn btn-outline-light projBtn">
                    Explore
                  </button>
                </a>
              )}
            </div>
          </div>
        ) : (
          <h2>{props.title}</h2>
        )}
      </div>
    </div>
  );
};

export default Project;
