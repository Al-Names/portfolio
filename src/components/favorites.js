import React, { Component } from "react";

class Favorites extends Component {
  state = {
    title: [
      "KonoSuba Live!",
      "React Contact Manager",
      "React Journal",
      "Palettes",
      "Onyx Hive"
    ],
    detail: [
      "Fictional KonoSuba Live event and ticket sales lading page!",
      "Contact manager using react",
      "A simple journal, diary or notepad built on react on a firebase back-end.",
      " Who doesnt love an RGB color game built purely on CSS and JavaScript?",
      "An innovative and beautiful landing page design."
    ],
    link: [
      "https://loving-shirley-5620b7.netlify.com",
      "https://github.com/Al-Names/react-contact-manager",
      "https://sleepy-bohr-8e5cae.netlify.com",
      "https://codepen.io/Names/pen/GvBryP",
      "https://codepen.io/Names/pen/PJZVBx"
    ],
    delay: [500, 0, 500]
  };

  showFavorites = () =>
    this.state.title.map((item, i) => (
      <div className="">
        <a href={this.state.link[i]} target="_blank" className="App-link ">
          <h3>{this.state.title[i]}</h3>
        </a>

        <p>{this.state.detail[i]}</p>
        <hr />
      </div>
    ));
  render() {
    return (
      <div>
        <div className="highlights">
          <h2 className="text-center">Favorites</h2>
          {this.showFavorites()}
        </div>
      </div>
    );
  }
}

export default Favorites;
