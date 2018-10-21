import React, { Component } from 'react';



class Wasder extends Component {

  render() {
    return (
        <div className="container wasder-blurb">
            <div className="wasder-heading">
                <h1>Wasder AB</h1>
                <h5>March - September 2018</h5>
                <hr/>
            </div>
            <div className= "wasder-blurb">
                <p>Wasder is a social platform for gamers,  streamers and content creators while developing digital solutions for the gaming industry. </p>
                <p>A mobile social fintech application content creators/streamers, esporters and gamers with focus on monetization, networking and growth written in React Native with Redux, utilizing Firebase and various other frameworks and libraries.</p>
            </div>

            <h3>My Role:</h3>
            <p>Wasder was the definition of a startup at the time of my joining. It was just the CEO, the product manager, an idea and two developers working for free- myself included; and as such there was so much to do to bring the idea to life</p>
            <p>In addition to being one of the primary developers and making various contributions towards functionality, I was the go-to developer for design and UI/UX as well and as such a created various unique components and developed the overall signature aesthetics of the company.</p>
            
            <div className="other-tasks">
                <p>Other important tasks I had included:
                    <ul>
                        <li>
                            quickly developingand deploying fixes and optimizations based on feedback given by testers with each patch release and update. As well as new features to get the app whereit needs to be as soon as possible.
                        </li>

                        <li>
                            Continuously improving the production stack performance; stability and scalability.
                        </li>

                        <li>
                            Providing performance insights across the server and application stack.
                        </li>
                    </ul>
                    
                </p>
            </div>
            <div className= "wasder-stack">
                <h3>Tech Stack</h3>
            
            <div className="tech-stack">
            <div className="row">

                    <div className="columns">

                            <div className="small-grid-item col-md-4">
                               
                                    <p>React</p>
                                
                            </div>
                            <div className="small-grid-item col-md-4">
                                
                                    <p>React Native</p>
                                

                            </div>
                            <div className="small-grid-item col-md-4">
                                
                                    <p>Redux</p>
                               
                            </div>
                    </div>
                </div>  
                </div> 
                </div>
        </div>
    )
    }

}


export default Wasder;