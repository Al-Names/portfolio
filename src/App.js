import React, { Component } from 'react';
import Routes from './routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header'
import Nav from './components/nav'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Landing from './components/landing'
import X from './components/x'

import Wasder from './components/details/wasder'
import CircleY from './components/details/circley'
import ESN from './components/details/esn'
import EHealth from './components/details/ehealth4everyone'

import './App.css';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">




        <BrowserRouter>
          <div>
            <div><Header />
              <Nav />
            </div>

            <Switch>
              <Route path='/' exact component={Landing} />
              <Route path='/about' exact component={About} />
              <Route path='/resume' exact component={Resume} />
              <Route path='/resume/wasder' exact component={Wasder} />
              {/* <Route path='/resume/circley' exact component={CircleY}/> */}
              <Route path='/resume/esn' exact component={ESN} />
              <Route path='/resume/eHealth4Everyone' component={EHealth} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
          
        </BrowserRouter>
        <X/>
      </div>
    );
  }
}

export default App;
