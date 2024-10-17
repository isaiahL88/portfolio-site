import React, { useState, useRef, useEffect } from 'react'
import { backIn, easeInOut, motion, cubicBezier } from "framer-motion"
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
import Lottie from 'react-lottie'
import laptopAnimation from '../lotties/web_laptop.json'
import phoneAnim from '../lotties/newDesign.json'



import { saveAs } from 'file-saver';



const Home = () => {
    const [showProj, setShowProj] = useState("none");
    const [darkLight, setDarkLight] = useState("light");
    const [laptopPlay, setLaptopPlay] = useState(true);
    const [designPlay, setdesignPlay] = useState(true);
    const projRef = useRef(null);
    const webRef = useRef(null);
    const workRef = useRef(null);

    const laptopAnimOptions = {
        loop: true,
        autoplay: true,
        animationData: laptopAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const designAnimOptions = {
        loop: true,
        autoplay: true,
        animationData: phoneAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    // Types
    const project = [
        {
            name: 'Maps Rentals',
            type: 'Web Dev',

        }
    ]


    useEffect(() => {
        let deg = 360;

    }, [])


    //Handles scrolling for web
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
            <div className='flex-col absolute top-0 left-0'>
                <FontAwesomeIcon />
            </div>
            <div id='home-page' className='flex home-page flex-col justify-start'>
                <div className='flex-row flex items-start h-1/2 w-full justify-evenly mt-52'>
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
                                duration: 0.7,
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
                                delay: 0.5
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
                    <div className='w-0 h-5/6 border-solid border-2 border-black rounded'></div>
                    <div className='w-2/5'>

                        <div className='flex flex-row'>
                            <motion.div
                                className='z-10 buttonBox'
                                content=' '

                                whileHover={{
                                    scale: 1.2,
                                    color: '#4f46e5'
                                }}


                            >
                                <FontAwesomeIcon
                                    className="tech-button z-20"
                                    icon={faJava}
                                    size="10x"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    color: '#4f46e5'
                                }}

                            >
                                <FontAwesomeIcon
                                    className="tech-button"
                                    icon={faReact}
                                    size="7x"

                                />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    color: '#4f46e5'
                                }}>
                                <FontAwesomeIcon
                                    className="tech-button"
                                    icon={faJs}
                                    size="7x"
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#4f46e5'
                                    }}

                                />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    color: '#4f46e5'
                                }}>
                                <FontAwesomeIcon
                                    className="tech-button"
                                    icon={faNode}
                                    size="7x"
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#4f46e5'
                                    }}

                                />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    color: '#4f46e5'
                                }}>
                                <FontAwesomeIcon
                                    className="tech-button"
                                    icon={faAws}
                                    size="7x"
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#4f46e5'
                                    }}

                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.button className="font-NF size-14 z-10 w-auto h-auto text-5xl mt-6 border-black border-2 rounded-2xl p-2 text-black hover:text-indigo-600 hover:border-indigo-600" onClick={handleWork}
                    whileHover={{
                        scale: 1.2
                    }}
                >My Work</motion.button>

            </div >
            <div className="flex flex-row h-screen w-screen" ref={workRef}>
                <motion.div className='flex flex-col w-1/2 h-screen bg-sky-900 text-center justify-center items-center'
                    initial={{
                        transform: "translate(-75%, 0)"

                    }}
                    whileInView={{
                        transform: "translate(0%, 0)"
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeIn'
                    }}
                    whileHover={{
                        backgroundColor: "#38bdf8",
                        transition: {
                            duration: 0.3,
                            ease: 'easeIn'
                        }
                    }}

                    onMouseEnter={() => { setdesignPlay(false) }}
                    onMouseLeave={() => { setdesignPlay(true) }}
                >
                    <h1 className='text-7xl font-NFB'>Web Development</h1>
                    <Lottie
                        options={designAnimOptions}
                        height={600}
                        width={600}
                        isStopped={designPlay}
                    />
                </motion.div>
                <motion.div className='flex flex-col w-1/2 h-screen bg-[#17153c] text-center justify-center items-center'
                    whileHover={{
                        backgroundColor: "#6366f1"
                    }}
                    whileHoverTransition={{
                        duration: 0.3,
                        ease: 'ease'
                    }}
                    onMouseEnter={() => { setLaptopPlay(false) }}
                    onMouseLeave={() => { setLaptopPlay(true) }}
                >
                    <h1 className='text-6xl font-NFB'>Projects</h1>
                    <Lottie
                        options={laptopAnimOptions}
                        height={600}
                        width={600}
                        isStopped={laptopPlay}
                    />
                </motion.div>
            </div>
            <Footer />

        </div >
    )
}

export default Home