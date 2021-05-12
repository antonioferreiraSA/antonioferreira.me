import React from 'react';
// import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                 <img src={about} alt=""/> 
            </div> */}

            <div className="about-info">
                <h4>I am<span> Antonio Ferreira</span></h4>
                <p className="about-text">
                   I'm a Web and moblie  developer based in South Africa
I enjoy building and designing mobile applications and websites, I love working with web technology JavaScript, React.Js,React Native, Expo, Firebase, Netlify, Linux, Mac OSX, UBUNTU, Kali Linux, Heroku. When I am not building moblie applications and  websites, I love learning about ethical hacking with kali-Linux, Metasploit, burpsuite etc.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: Antonio Ferreira</p>
                        <p>: portuguese, Code, English</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
