import React, { Component } from 'react';



class Favorites extends Component {

    render() {
        return (
            <div>
                <div className="highlights">
                    <h2 className="text-center">Favorites</h2>
                    <div className="row tabs">
                        <div className="col-md-6 article">
                            <a href="https://sleepy-bohr-8e5cae.netlify.com" target="_blank" className="App-link text-center" ><h3>React Journal</h3></a>
                            <hr />
                            <p>A simple journal, diary or notepad built on react on a firebase back-end.</p>
    
                        </div>
                        <div className="col-md-6 article">
                            <a href="https://codepen.io/Names/pen/PJZVBx" target="_blank" className="App-link text-center"><h3>Onyx Hive</h3></a>
                            <hr />
                            <p>An innovative and beautiful landing page design.</p>
                          
                        </div>
                        <div className="col-md-6 article" >
                            <a href="https://codepen.io/Names/pen/GvBryP" target="_blank" className="App-link text-center"><h3>Palettes</h3></a>
                            <hr />
                            <p>Who doesn't love an RGB color game built purely on CSS and JavaScript?</p>
                      
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}


export default Favorites;