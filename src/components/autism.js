import React, { Component } from 'react';

class Autism extends Component {

    render() {
        return (
            <div className="matters">

                <div className="row ">
                    <div className="colums tabs">
                        <div className="col-md-6 article topic">
                            <a href="https://www.autism.org.uk/get-involved/tmi/employment.aspx" target="_blank" className="App-link"><h3>National Autistic Society</h3></a>
                            <hr />
                            <p>Their campaign to make the employment process better for people on the spectrum.</p>

                        </div>
                        <div className="col-md-6 article topic">
                            <a href="https://www.forbes.com/sites/karenhigginbottom/2018/05/31/the-benefits-of-employing-people-with-autism/#2750b78f772c" target="_blank" className="App-link"><h3>Forbes</h3></a>
                            <hr />
                            <p>An article on the benefits of employing people with autism!</p>

                        </div>

                    </div>
                </div>
            
            </div>

        )
    }

}


export default Autism;