import React, { Component } from 'react';

const hashtag = {
    color: '#61dafb'
  };

class Contact extends Component {

    render() {
        return (
            <div className= "container">
                <h1>Contact</h1>

                <p>I'm glad you want to reach out to me. The best way to do that would be via the email, Skype & Discord below. Feel free to try any of the social media too though!</p>
                <div className="via">
                    <div className="via-email">
                        <i className="far fa-envelope"> :</i>
                        <a style={hashtag} href="mailto:al.musty.saeed@gmail.com?Subject=Hello" target="_top">
                            <p className="gmail">al.musty.saeed@gmail.com</p>
                        </a>
                    </div>
                    <div className="via-skype">
                        <i className="fab fa-skype"> :</i>
                        <p className="skype">mustapha.saeed</p>
                    </div>
                    <div className="via-discord">
                        <i className="fab fa-discord"> :</i>
                        <p className="discord">mustyS <span style={hashtag}>#0800</span></p>
                    </div>
                </div>
                <div className="social-media grid-case">
                    <div className="row">

                        <div className="columns">
                            <a href="https://www.facebook.com/al.m.names" target="_blank">
                            <div className="social-grid-item col-md-4">

                                <i className="fab fa-2x fa-facebook-square"></i>
                            </div>
                            </a>
                            <a href="https://www.instagram.com/official_names/" target="_blank">
                            <div className="social-grid-item col-md-4">

                                <i className="fab fa-2x fa-instagram"></i>

                            </div>
                            </a>
                            <a href="https://twitter.com/robinbassey" target="_blank">
                            <div className="social-grid-item col-md-4">

                                <i className="fab fa-2x fa-twitter-square"></i>

                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Contact;