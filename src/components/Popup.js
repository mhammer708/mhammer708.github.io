import React, { useState } from "react";

const Popup = (props) => {
  return (
    <div
      className="modal"
      id={props.title}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="projectPopup"
      aria-hidden="true"
    >
      <div className="modal-header projectPopupContainer">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="modal-body jumbotron projectPopup">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <p className="lead">
          {props.projectLink && (
            <span className="btn-container">
              <a href={props.projectLink}>
                <button type="button" className="btn btn-outline-light">
                  Project
                </button>
              </a>
            </span>
          )}
          {props.gitHubLink && (
            <span className="btn-container">
              <a href={props.gitHubLink}>
                <button type="button" className="btn btn-outline-light">
                  Github
                </button>
              </a>
            </span>
          )}
        </p>
        <div className="screenshot-container">
          {props.image1 && (
            <img
              src={"files/" + props.title + "1.gif"}
              class="screenshot img-fluid"
              alt={props.title + 1}
            ></img>
          )}
          {props.image2 && (
            <img
              src={"files/" + props.title + "2.gif"}
              class="screenshot img-fluid"
              alt={props.title + 2}
            ></img>
          )}
        </div>
      </div>

      {/* <div className="modal-body">{props.description}</div> */}
      {/* </div>
      </div> */}
    </div>
  );
};

export default Popup;
