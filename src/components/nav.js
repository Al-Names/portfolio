import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class Nav extends Component {

  render() {
    return (
        <div>
          <nav className="navbar nav" id= "nav">
            <ul className="nav navbar-nav">
        
              <li><NavLink exact to="/">Home</NavLink></li>
              
              <li><NavLink exact to="/about">About</NavLink></li>
              
              <li><NavLink to="/resume">Resume/CV</NavLink></li>
              
              <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>

              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
          </nav>
        </div>
    )
    }

}


export default Nav;