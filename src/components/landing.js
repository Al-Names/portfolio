import React, { Component } from 'react';
import Autism from './autism'
import Charity from './charity'

const spacer = {
    height: '180px'
};

class Landing extends Component {



    render() {
        return (
            <div>
                <div className="container container-fluid banner">
                    <div className="jumbotron " >
                        <div className="filter">
                            <h1 className="banner-text">AL-M</h1>
                            <p className="saeed">Saeed</p>
                        </div>
                    </div>
                    <div className="year">
                        <p>2018</p>
                    </div>
                </div>
                <hr/>
            </div>

        )
    }

}


export default Landing;