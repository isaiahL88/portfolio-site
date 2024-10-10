import React, { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import portrait from "../assets/portrait.jpg";
import lassonde from "../assets/lassonde.jpg";
import resume from "../assets/resume.png";
import "../css/Home.css";
import Projects from "./Projects"
import WebProjects from './WebProjects';
import Footer from "./Footer"
import coding from "../assets/coding.svg"
import uiDesign from "../assets/ui-design.svg"
import downArrow from "../assets/arrow_down.png"
import light from "../assets/light.png"
import dark from "../assets/dark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faReact, faJs, faNode } from '@fortawesome/free-brands-svg-icons'

import { saveAs } from 'file-saver';



const Home = () => {
    const [showProj, setShowProj] = useState("none");
    const [darkLight, setDarkLight] = useState("light");
    const projRef = useRef(null);
    const webRef = useRef(null);
    const aboutRef = useRef(null);

    //Handles the state variable representing wether web or project section is showing
    //Also handles the automatic crolling
    const handleShowProj = () => {
        if (showProj === "proj") {
            scrollProj();
        }
        setShowProj("proj");
        setTimeout(scrollProj, 200);
    }

    const scrollProj = () => {
        projRef.current.scrollIntoView({
            behavior: 'smooth',
        });
    }

    //Handles scrolling for web
    const handleShowWeb = () => {
        if (showProj === "web") {
            scrollWeb();
        } else {
            setShowProj("web");
            setTimeout(scrollWeb, 200);
        }
    }

    const scrollWeb = () => {
        webRef.current.scrollIntoView({
            behavior: 'smooth',
        });
    }

    const handleAbout = () => {
        aboutRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const handleDLClick = () => {
        if (darkLight === "light") {
            setDarkLight("dark");
        } else {
            setDarkLight("light");
        }
    }


    return (
        <div id='home-root' className={darkLight === "light" ? "lightHome" : "darkHome"}>
            <button id='dl-button' onClick={handleDLClick}><img id='dl-img' src={darkLight === "light" ? light : dark} /></button>
            <div id='home-page' className='home-div home-page'>
                <div className='flex-row flex items-center h-full w-full justify-evenly'>
                    <div className='flex-col flex items-center'>
                        <img src={portrait} className='rounded-full object-cover w-80 h-80' />
                        <h1 id="title">Isaiah Linares</h1>
                        <p id="intro-about" className="about font-NF">
                            A self-starter, who's passionate about creating<br></br> applications that people enjoy using.
                        </p>
                    </div>
                    <div className='w-0 h-1/2 border-solid border-2 border-black'></div>
                    <div className='w-2/5'>

                        <div id="rotator">
                            <FontAwesomeIcon id="java-button" className="tech-button" icon={faJava} size="10x" />
                            <FontAwesomeIcon id="react-button" className="tech-button" icon={faReact} size="7x" />
                            <FontAwesomeIcon id="js-button" className="tech-button" icon={faJs} size="7x" />
                            <FontAwesomeIcon id="node-button" className="tech-button" icon={faNode} size="7x" />
                        </div>

                    </div>
                </div>

            </div>
            <button id={darkLight === "light" ? "down-button" : "down-button-dark"} onClick={handleAbout}>My Work</button>
            <div id='about-page' ref={aboutRef} className='home-page'>
                <h1 className='subject'>About Me</h1>
                <div id='about-div' className='home-div'>
                    <div className="home-child">
                        <img src={lassonde} id='lassonde' />
                        <h2>Education</h2>
                        <p>Specialized Honours BSc in Computer Science 2019 - 2023</p>
                        <p class="tiny">Lassonde School of Engineering, York University, Toronto, ON, Canada</p>

                    </div>
                    <div id='about-exp' className="home-child" style={{ flex: 0 }}>
                        <div id='box-container'>
                            <div className='skill-box'>
                                <h2 className='skill-header'>Software Dev</h2>
                                <p className='skill-paragraph'>Experience in OOP using Java, full-stack applications, and Java EE stack (Tomcat, JSP, Servlets).</p>
                            </div>
                            <div className='skill-box'>
                                <h2 className='skill-header'>UX Design</h2>
                                <p className='skill-paragraph'>Experience designing intuitive and enjoyable user experiences in different platforms such as websites, desktop apps, and mobile apps.</p>
                            </div>
                            <div className='skill-box'>
                                <h2 className='skill-header'>Mobile Dev</h2>
                                <p className='skill-paragraph'>Experience utilizing my skills in Java to create mobile applications for Android.</p>
                            </div>
                        </div>
                        <h1 className='med-header'>Languages</h1>
                        <ul id='language-list' className='horizontal-list'>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                        <h1 className='med-header'>Frameworks / Tech</h1>
                        <ul id='framework-list' className='horizontal-list'>
                            <li>React</li>
                            <li>Java EE (Tomcat / Servlets) </li>
                            <li>AWS</li>
                            <li>Firebase</li>
                            <li>MySql</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
            {showProj === "proj" ? <Projects ref={projRef} /> : <></>}
            {showProj === "web" ? <WebProjects ref={webRef} /> : <></>}
            <Footer />

        </div >
    )
}

export default Home