import React from "react";
import Project from "./Project";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h2>
            <span role="img" aria-label="wave">
              👋
            </span>
            Hi, I'm Michael Hammer
          </h2>
          <h2>I am a software engineer currently living in New Orleans</h2>
        </div>
      </div>

      <div className="panel">
        <div className="container about">
          <div class="row">
            <div class="col-sm-8 about-text">
              <p class="lead">
                I graduated from Fullstack Academy in May 2020 and am currently
                looking into new opportunities. Prior to software development, I
                worked in higher ed consulting and cannabis processing
                technology. I work in the NERDS stack (Node.js, Express, React,
                Databases using SQL) but am always interested in learning more.
              </p>
              <p class="lead">
                When I’m not coding, you can find me hammocking in the park,
                hanging around the climbing gym, or winning Settlers of Catan.
              </p>

              <div>
                <a href="mailto:mhammer708@gmail.com">
                  <button type="button" class="btn btn-outline-light contact">
                    CONNECT
                  </button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1PhWO2_bV0JodvFLrqpqv8ZA1W0cvNVtK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" class="btn btn-outline-dark resume">
                    RESUME
                  </button>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="headshot">
                <img
                  src="newHeadshot.png"
                  id="headshot"
                  class="img-fluid"
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
          <div class="row">
            <Project
              title="BOWER"
              description="Mobile app for Euchre players to find games in their area"
              gitHubLink="https://github.com/mhammer708/Bower"
            />
            <Project
              title="PLANT STORE"
              description="E-Commerce site for shoppers to browse items and checkout with
            Stripe"
              gitHubLink="https://github.com/argon-grace-shopper/grace-shopper"
              projectLink="https://grace-shopper-argon.herokuapp.com/"
            />
          </div>

          <div class="row">
            <Project
              title="EAR-BUDS"
              description="Interactive web app for friends to listen to podcasts together in
            real time"
              gitHubLink="https://github.com/Podcast-Party/Ear-Buds"
              projectLink="https://earbuds.web.app/"
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
              <button type="button" class="btn btn-outline-light social">
                <FaEnvelope class="fa-lg" />
              </button>
            </a>

            <a href="https://github.com/mhammer708">
              <button type="button" class="btn btn-outline-light social">
                <FaGithub class="fa-lg" />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/mhammer1/">
              <button type="button" class="btn btn-outline-light social">
                <FaLinkedinIn class="fa-lg" />
              </button>
            </a>
          </div>

          <div class="footer-row">
            <p>© 2020 Michael Hammer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
