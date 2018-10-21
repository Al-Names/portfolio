import React, { Component } from 'react';

const hashtag = {
    color: '#61dafb'
  };


class CircleY extends Component {

  render() {
    return (
        <div className= "container wasder-blurb">
            <div className= "wasder-heading">
                <h1>Circle Y</h1>
                <h5>2012 - 2018</h5>
            </div>
            <hr />
            <div className="wasder-blurb">
                <p>
                    Circle Y was the name of a "micro-firm" under which I carried out all my freelance media endeavours. From web and mobile development to graphic design, audio engineering and even video work.
                </p>
                <p>
                    Circle Y was a lot of work for a full time university student and took a lot of time but I am proud of the all the work I did and don't regret a single minute spent as it put my through University for my Master's
                </p>
            </div>
            <hr />

            <h3>My Work:</h3>
            <p>As mentioned, my work as Circle Y covered various areas; however it also covered various countries. As I travel and have lived in different countries, I have gotten the chance to work in places such as <span style={hashtag}>Cairo, Dubai, Lagos</span> & <span style={hashtag}>London</span>.</p>
            <p>These experiences have also provided me well developed <span style={hashtag}>communication</span> and <span style={hashtag}>language</span> skills which I am grateful for and quite proud off but will also be an asset to any team or organisation.</p>     
        </div>
    )
    }

}


export default CircleY;