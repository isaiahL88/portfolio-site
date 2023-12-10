import React, { useState, useRef, useEffect } from 'react'
import portrait from "../assets/portrait.jpg";
import lassonde from "../assets/lassonde.jpg"
import "../css/Home.css"
import Projects from "./Projects"
import WebProjects from './WebProjects';
import Footer from "./Footer"
import coding from "../assets/coding.svg"
import uiDesign from "../assets/ui-design.svg"



const Home = () => {
    const [showProj, setShowProj] = useState("none");
    const projRef = useRef(null);
    const eleRef = useRef(null);

    const handleShowProj = () => {
        if (showProj === "proj") {
            console.log("projects opened");
            projRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
        setShowProj("proj");
        setTimeout(scrollProj, 500);
    }

    const scrollProj = () => {
        projRef.current.scrollIntoView({
            behavior: 'smooth',
        });
    }


    const handleShowWeb = () => {
        if (showProj === "web") {

        }
        setShowProj("web");
    }

    return (
        <>
            <div id='home-page' className='home-div home-page'>
                <div className='home-child' id="intro">
                    <h1 id="title">Isaiah Linares</h1>
                    <p className="about">
                        A self-starter, who's passionate about creating applications that people enjoy using.
                    </p>
                </div>
                <div className='home-child'>
                    <img src={portrait} id='portrait' />
                </div>
            </div>
            <div id='about-page' className='home-page' ref={eleRef}>
                <h1 className='subject'>About Me</h1>
                <div className='home-div'>
                    <div className="home-child">
                        <img src={lassonde} id='lassonde' />
                        <h2>Education</h2>
                        <p>Specialized Honours BSc in Computer Science 2019 - 2023</p>
                        <p class="tiny">Lassonde School of Engineering, York University, Toronto, ON, Canada</p>

                    </div>
                    <div className="home-child" style={{ flex: 0 }}>
                        <h2 className="header2" >Languages / Tech</h2>
                        <ul className='list-1'>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>SQL</li>
                            <li>AWS</li>
                            <li>Gcloud</li>
                            <li>React</li>
                            <li>Firebase</li>
                        </ul>
                        <h2 className="header2" >Personal Interests</h2>
                        <ul classname='list-1'>
                            <li>Traveling</li>
                            <li>Bodybuilding</li>
                            <li>Enthusiast Cars</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='button-container'>
                <button className='main-button' id='web-button' onClick={handleShowWeb}>
                    <h1>Freelance Web Dev</h1>
                    <img src={uiDesign} />
                </button>
                <button className='main-button' id='proj-button' onClick={handleShowProj}>
                    <h1>Personal Projects / Competitions</h1>
                    <img src={coding} />
                </button>
            </div >
            {showProj === "proj" ? <Projects ref={projRef} /> : <></>}
            {showProj === "web" ? <WebProjects /> : <></>}
            <Footer />
        </>
    )
}

export default Home