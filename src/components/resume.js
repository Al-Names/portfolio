import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const hashtag = {
    color: '#61dafb'
};


class Resume extends Component {

    render() {
        return (
            <div>
                <div>
                  
                    <p>
                        A few key positions I have had the honor of having over the years.
                    </p>

                </div>
                <div className="container-fluid grid-case">
                    <div className="row">

                        <div className="columns">

                            <div className="grid-item col-md-4">

                                <Link to="/resume/wasder" className="portfolio-links">
                                    <p>Wasder AB</p>
                                </Link>
                            </div>
                            <div className="grid-item col-md-4" style={hashtag}>
                                {/* <Link to="/resume/circley" className="portfolio-links">   */}
                                <p>Circle Y</p>
                                {/* </Link> */}
                            </div>
                            <div className="grid-item col-md-4">
                                <Link to="/resume/eHealth4everyone" className="portfolio-links">
                                    <p>eHealth4Everyone</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">

                        <div className="columns">

                            <div className="grid-item col-md-4">
                                <Link to="/resume/esn" className="portfolio-links">
                                    <p>Erasmus Student Network</p>
                                </Link>
                            </div>
                            <div className="grid-item col-md-4" style={hashtag}>

                                <p>...</p>


                            </div>
                            <div className="grid-item col-md-4" style={hashtag}>

                                <p>...</p>

                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div>
                    <p>Click anything of interest for more information.</p>
                </div>
                <div className="references">
                    <h2>References</h2>
                    <hr />
                    <div className="row refs">
                        <div className="columns">

                            <div className="ref-grid-item col-md-4">
                                <h1>T.H</h1>

                                <p>Thomas Grønnevik</p>
                                <p>CEO @ Wasder AB</p>
                                <a style={hashtag} href="mailto:thomas@wasder.co?Subject=RE: Mustapha" target="_top">
                                    <p className="email">thomas@wasder.co</p>
                                </a>

                            </div>
                            <div className="ref-grid-item col-md-4">
                                <h1>L.M</h1>

                                <p>Lion Martinez</p>
                                <a style={hashtag} href="mailto:lion@wasder.co?Subject=RE: Mustapha" target="_top">
                                    <p className="email">lion@wasder.co</p>
                                </a>

                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>


        )
    }

}


export default Resume;