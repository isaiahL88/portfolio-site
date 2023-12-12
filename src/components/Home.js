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
    const webRef = useRef(null);

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
            <div id='about-page' className='home-page'>
                <h1 className='subject'>About Me</h1>
                <div className='home-div'>
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
                                <p className='skill-paragraph'>Experience utilizing my skills to create mobile applications for Android using Java.</p>
                            </div>
                        </div>
                        <h1 className='med-header'>Languages</h1>
                        <ul id='language-list' className='horizontal-list'>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C</li>
                        </ul>
                        <h1 className='med-header'>Frameworks / Tech</h1>
                        <ul id='framework-list' className='horizontal-list'>
                            <li>React</li>
                            <li>Java EE (Tomcat / Servlets) </li>
                            <li>AWS</li>
                            <li>Firebase</li>
                            <li>MySql</li>
                        </ul>
                        {/* <h2 className="header2" >Languages / Tech</h2>
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
                        <h2 className="header2" >Expertise</h2>
                        <ul classname='list-1'>
                            <li>OOP Development</li>
                            <li>Web Development</li>
                            <li>Mobile Development</li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div id='button-container'>
                <button className='main-button' id='proj-button' onClick={handleShowProj}>
                    <h1>Personal Projects / Competitions</h1>
                    <img src={coding} />
                </button>
                <button className='main-button' id='web-button' onClick={handleShowWeb}>
                    <h1>Freelance Web Dev</h1>
                    <img src={uiDesign} />
                </button>
            </div >
            {showProj === "proj" ? <Projects ref={projRef} /> : <></>}
            {showProj === "web" ? <WebProjects ref={webRef} /> : <></>}
            <Footer />
        </>
    )
}

export default Home