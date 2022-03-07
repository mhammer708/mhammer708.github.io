import React from "react";
import Project from "./Project";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="jumbotron hero">
        <div className="container">
          <h2>
            <span role="img" aria-label="wave">
              👋
            </span>
            {"  "} Hi, I'm Michael Hammer
          </h2>
          <h2>I'm a software engineer</h2>
        </div>
      </div>

      <div className="panel">
        <div className="container about">
          <div className="row">
            <div className="col-sm-8 about-text">
              <p className="lead">
                Currently in San Francisco working at <a href="https://www.twilio.com/">Twilio</a> 
                helping folks send Application-to-Person (A2P) messages. 
                Prior to software development, I worked in higher ed consulting 
                and cannabis processing technology.
              </p>
              <p className="lead">
                When I’m not coding, you can find me hammocking in the park,
                hanging around the climbing gym, or winning Settlers of Catan.
              </p>

              <div>
                <a href="mailto:mhammer708@gmail.com">
                  <button
                    type="button"
                    className="btn btn-outline-light contact"
                  >
                    CONNECT
                  </button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1PhWO2_bV0JodvFLrqpqv8ZA1W0cvNVtK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-dark resume">
                    RESUME
                  </button>
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="headshot">
                <img
                  src="newHeadshot.png"
                  id="headshot"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <h2 className="display-4">PROJECTS</h2>
        </div>
      </div>

      <div className="panel">
        <div className="container">
          <div className="row">
            <Project
              title="BOWER"
              description="Mobile app for Euchre players to find games in their area"
              gitHubLink="https://github.com/mhammer708/Bower"
            />
            <Project
              title="PLANT-STORE"
              description="E-Commerce site for shoppers to browse items and checkout with
            Stripe"
              gitHubLink="https://github.com/argon-grace-shopper/grace-shopper"
              projectLink="https://grace-shopper-argon.herokuapp.com/"
              image1={true}
              image2={true}
            />
          </div>

          <div className="row">
            <Project
              title="EAR-BUDS"
              description="Interactive web app for friends to listen to podcasts together in
            real time"
              gitHubLink="https://github.com/Podcast-Party/Ear-Buds"
              projectLink="https://earbuds.web.app/"
              image1={true}
              image2={true}
            />
            <Project
              title="+"
              description="Coming Soon"
              gitHubLink="https://github.com/mhammer708"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="footer-row">
            <a href="mailto:mhammer708@gmail.com">
              <button type="button" className="btn btn-outline-light social">
                <FaEnvelope className="fa-lg" />
              </button>
            </a>

            <a href="https://github.com/mhammer708">
              <button type="button" className="btn btn-outline-light social">
                <FaGithub className="fa-lg" />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/mhammer1/">
              <button type="button" className="btn btn-outline-light social">
                <FaLinkedinIn className="fa-lg" />
              </button>
            </a>
          </div>

          <div className="footer-row">
            <p>© 2020 Michael Hammer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
