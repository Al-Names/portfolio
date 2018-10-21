import React, { Component } from 'react';

const hashtag = {
    color: '#61dafb'
};



class About extends Component {

    render() {
        return (
            <div className="container-fluid wasder-blurb">
                <h1>Welcome</h1>
                <hr />
                <p>Hello there!</p>
                <p>As you probably know my name  is (Al) Mustpha; Al-M or Musty if you prefer and this is my little website. Do bear with me, there is a lot left to do hidden. For both this and the other half Names. But I am indeed working as fast as I can to complete this awesome project. </p>
                <p>Now...</p>

                <h2>About Me</h2>

                <p>I'm a 23-year-old developer with my time split between Abuja, Nigeria and Glasgow, UK. Though I tend to focus a lot on design and aesthetics, I think of myself as a fullstack developer. I'm one of the few who realise that design is just as important as functionality.</p>

                <p>My favorite projects to work on usually involve one or two technologies that I don't have that much knowledge of, as I love to learn new things and a challenge. However, my main technologies are <span style={hashtag}>React, React-Native, Angular</span> and <span style={hashtag}>Ruby on Rails</span> among others. Though I do love good ol' <span style={hashtag}>HTML, CSS, jQuery</span> and of course plain old <span style={hashtag}>vanilla Javascript</span></p>
                <hr />
                <br />

                <div className="looking">
                    <p>
                        Right now, I am currently in the market for an adventure... as well as junior to mid development roles that will let me learn and grow as well as provide opportunities to prove myself. Ideally with a relocation package or remote option thrown in.
                </p>
                    <p>
                        As I am always up for a challenge and learning new things, an ideal company would be one that would push me further while letting me build on what I know and can do now as well as one with the chance to be creative.
                </p>
                    <p>
                        Please, feel free to reach out if you have anything for me... including questions.
                </p>
                    <p>
                        Sincerely,
                </p>
                    <h4>Al-M</h4>
                </div>

            </div>
        )
    }

}


export default About;