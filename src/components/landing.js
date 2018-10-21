import React, { Component } from 'react';



// const quote = [

//     'sadfg', 'sdfghgj'

// ]
// const person = [
//     "zdfghbj", "sdfghgjh"
// ]


//     var random = Math.floor((Math.random()*quote.length)); 
//     var randomQuote = quote[random];

//     var randomPerson = person[random];  



class Landing extends Component {



    render() {
        return (
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

        )
    }

}


export default Landing;