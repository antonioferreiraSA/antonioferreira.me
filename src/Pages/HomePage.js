import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Antonio Ferreira.</span>
                </h1>
                <p className="h-sub-text">
                    I'm a Web and moblie  developer based in South Africa
I enjoy building and designing mobile applications and websites, I love working with web technology JavaScript, React.Js,React Native, Expo, Firebase, Netlify, Linux, Mac OSX, UBUNTU, Kali Linux, Heroku. When I am not building moblie applications and  websites, I love learning about ethical hacking with kali-Linux, Metasploit, burpsuite etc.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="/https://github.com/antonioferreiraSA" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
