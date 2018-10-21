import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Header extends Component {

  render() {
    return (
        <div>
        <h1 className="">AL-M<span className="x"> x</span> Names </h1>

        <p className="App-link"> 
          Web/Mobile Developer x Media Techonolgist
        </p>
        <hr/>                  
      </div>
    )
    }

}


export default Header;