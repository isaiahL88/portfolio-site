import React, { useState, useRef, useEffect } from 'react'
import { backIn, easeInOut, motion, use } from "framer-motion"
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
import { faJava, faReact, faJs, faNode, faAws } from '@fortawesome/free-brands-svg-icons'


import { saveAs } from 'file-saver';



const Home = () => {
    const [showProj, setShowProj] = useState("none");
    const [darkLight, setDarkLight] = useState("light");
    const projRef = useRef(null);
    const webRef = useRef(null);
    const workRef = useRef(null);

    useEffect(() => {
        let deg = 360;

    }, [])

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

    const handleWork = () => {
        workRef.current.scrollIntoView({
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
                        <motion.img src={portrait} className='rounded-full object-cover w-80 h-80 border-2 border-black'
                            initial={{
                                x: 0,
                                scale: 0
                            }}
                            animate={{
                                scale: 1.3,
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                        />
                        <motion.h1 id="title"
                            initial={{
                                x: 0
                            }}
                            animate={{
                                x: [-1000, 20, 0]
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backIn',
                                times: [0, 0.8, 1],
                                delay: 1
                            }}
                        >Isaiah Linares</motion.h1>
                        <motion.p id="intro-about" className="about font-NF"
                            initial={{
                                x: 0
                            }}
                            animate={{
                                x: [-1000, 0]
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backIn',
                                times: [0, 1],
                                delay: 1.8
                            }}
                        >
                            A self-starter, who's passionate about creating<br></br> applications that people enjoy using.
                        </motion.p>
                    </div>
                    <div className='w-0 h-1/2 border-solid border-2 border-black'></div>
                    <div className='w-2/5' onH>

                        <div id="rotator">
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faJava}
                                size="10x"
                                style={{
                                    position: "absolute",
                                    top: "7rem", left: "18rem",

                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faReact}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "10.4rem", bottom: "17.46rem"
                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faJs}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "-1.9rem", bottom: "13.47rem"
                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faNode}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "-1.9rem", bottom: "0.53rem"
                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faAws}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "10.4rem", bottom: "-3.46rem"
                                }}
                            />

                        </div>
                        {/* <div id="rotator">
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faJava}
                                size="10x"
                                style={{
                                    position: "absolute",
                                    top: "7rem", left: "18rem",

                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faReact}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "10.4rem", bottom: "17.46rem"
                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faJs}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "-1.9rem", bottom: "13.47rem"
                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faNode}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "-1.9rem", bottom: "0.53rem"
                                }}
                            />
                            <FontAwesomeIcon
                                className="tech-button"
                                icon={faAws}
                                size="7x"
                                style={{
                                    position: "absolute",
                                    left: "10.4rem", bottom: "-3.46rem"
                                }}
                            />

                        </div> */}

                    </div>
                </div>

            </div>
            <button className="font-NF size-4" onClick={handleWork}>My Work</button>
            <div className="flex flex-row h-screen w-screen">
                <motion.div className='w-1/2 h-screen bg-amber-700'
                    initial={{
                        transform: "translate(-75%, 0)"

                    }}
                    whileInView={{
                        transform: "translate(0%, 0)"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: 'easeIn'
                    }}
                    whileHover={{
                        backgroundColor: "#441f03"
                    }}
                    whileHoverTransition={{
                        duration: 0.01,
                        ease: 'linear' // Adjust this to speed up the hover animation
                    }}
                >
                    <h1>Web Dev</h1>
                </motion.div>
                <motion.div className='w-1/2 h-screen bg-red-700'>
                    <h1></h1>
                </motion.div>
            </div>
            <Footer />

        </div >
    )
}

export default Home