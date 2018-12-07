import React, { Component } from "react";
import Favorites from "./favorites";

// import girls from '../public/assets/girls.png'

class Portfolio extends Component {
  render() {
    return (
      <div className=" container wasder-blurb ">
        <p>
          In addition to this simple little website- built on react with a few a
          other "simple" tricks; there are a lot more personal projects I have
          done over the years that I would love for you to see.
        </p>
        <p>
          Here are a few favorites, I'd greatly appreciate you taking the time
          to go over my CodePen and my GitHub if you're interested in the source
          code or others.
        </p>
        <div className="social-media grid-case">
          <div className="row">
            <div className="columns">
              <a href="https://github.com/Al-Names" target="_blank">
                <div className="social-grid-item col-md-4">
                  <i className="fab fa-3x fa-github" />
                </div>
              </a>
              <a href="https://codepen.io/Names/" target="_blank">
                <div className="social-grid-item col-md-4">
                  <i className="fab fa-3x fa-codepen" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <p>In the meantime... here are links to some of my favorites.</p>
        <p>Thank you!</p>
        <p>Hope you like them!</p>
        <hr />
        <Favorites />
      </div>
    );
  }
}

export default Portfolio;
