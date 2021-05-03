import ImageSection from '../Components/ImageSection';
import React from 'react'
import ServicesSection from '../Components/ServicesSection';
import SkillsSection from '../Components/SkillsSection';
import Tittle from '../Components/Tittle'
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Bash scripting'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'88%'} width={'88%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web development'} 
                text={'I specialize in converting graphical interface projects to code that results as fast, responsive, and accessible website or web app.React, Vue.js, Next.js, JavaScript, TypeScript, Jest, GSAP'}
                />
                <ServicesSection image={intelligence} title={'UI Design'} 
                text={'I enjoy turning complex problems into simple, beautiful and intuitive designs.'}
                />
                <ServicesSection image={gamedev} title={'Front/Back-end Development'} 
                text={'There are many ways to create an application, I enjoy picking up new tech and am able to do frontend and backend, as well as mobile development.PWA, React Native, RWD, Node.js, Express, MongoDB'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
