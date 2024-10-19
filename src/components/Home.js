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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faJava, faReact, faJs, faNode, faAws, faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Lottie from 'react-lottie'
import laptopAnimation from '../lotties/web_laptop.json'
import phoneAnim from '../lotties/newDesign.json'
import isaiahRes from '../assets/Isaiah_Linares_Resume.pdf'



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
    const projects = [
        {
            name: 'Maps Rentals',
            type: 'Web Dev',
            text: 'Designed and deployed a website for Maps Rentals, a new and innovative real estate admin service that solves a common pain-point for landlords.',
            tech: ["react", "tailwind", "javascript", "css"]
        },
        {
            name: 'Shop Made Rich',
            type: 'Web Dev',
            text: '',
            tech: ['Word Press', 'WooCommerce']
        },
        {
            name: 'Linares Upholstery',
            type: 'Web Dev',
            text: 'Designed, developed, and deployed a website for Linares Upholstery to showcase their services, portfolio of completed restorations, and quality of sourced materials. I also improved customer outreach by using good SEO practices and creating facebook adds for the company.',
            tech: ['React', 'JavaScript', 'HMTL', 'CSS']
        },
        {
            name: "Nunu's Family Cuts",
            type: 'Web Dev',
            text: "Improved customer base and branding by designing a local hair salon's website, banner, flyers, and business cards. I also quickly increased customer outreach by advertising the website using good SEO practices and Facebook advertisements and using Canada Post services to mail out flyers.",
            tech: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: "Lift App",
            type: 'Project',
            text: "Allows powerlifters, bodybuilders, and fitness enthusiasts to create and perfect their workout routines through an intuitive and fast user interface. Users can share their accumulated knowledge, learn from others by exchanging routines with friends, and discover new workouts through the app. Lift also allows users to log their sessions during every workout to see exactly how they performed each day. Another notable feature is the ability to track personal records for each Olympic lift, offering insights into one's progress over time. Users have the option to display this information on their personal profiles as well. I developed this app myself using Java / Material3 and utilized FirebaseAuth and FirebaseFirestore for the backend. I recently released the first production version on the Google Play Store, please download my app and try it out using the link above!",
            tech: ['Java', 'Firebase', 'Android']
        },
        {
            name: "Smart Checkout App",
            type: 'Project',
            text: "Streamlined grocery customer experience through no-cashier interaction shopping using computer vision. We advanced into the finals and placed first runner-up in the Smart Business category. I utilized the TensorFlowLite Computer Vision framework for our item classification and built our inventory backend using the Firestore Realtime Database.",
            tech: ['Java', 'Android', 'Firebase', 'TensorFlow']
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
            <button id='dl-button' onClick={handleDLClick}><img className={darkLight === "light" ? 'dl-img' : 'dl-img-dark'} src={darkLight === "light" ? light : dark} /></button>
            <div className='flex flex-col absolute top-0 left-0'>
                <motion.a className='p-1' href={isaiahRes} download
                    whileHover={{
                        scale: 1.2,
                        color: '#4f46e5',
                        fill: '#4f46e5'
                    }}>
                    <svg className={darkLight === "light" ? '' : 'fill-[#fff]'} height="50" width="50" viewBox="0 0 392.533 392.533" ><path d="M292.396 324.849H99.879c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.849 10.925 10.925 10.925h192.582c6.012 0 10.925-4.849 10.925-10.925-.065-6.077-4.913-10.925-10.99-10.925zm0-47.839H99.879c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.849 10.925 10.925 10.925h192.582c6.012 0 10.925-4.849 10.925-10.925-.065-6.076-4.913-10.925-10.99-10.925zM196.137 45.834c-25.859 0-46.998 21.075-46.998 46.998 0 25.859 21.139 46.933 46.998 46.933s46.998-21.075 46.998-46.998-21.139-46.933-46.998-46.933zm0 72.017c-13.77 0-25.083-11.313-25.083-25.083s11.248-25.083 25.083-25.083 25.083 11.313 25.083 25.083-11.313 25.083-25.083 25.083zm62.384 45.511c-39.887-15.515-84.752-15.515-124.638 0-13.059 5.107-21.786 18.101-21.786 32.388v44.347c-.065 6.012 4.849 10.925 10.861 10.925h146.424c6.012 0 10.925-4.848 10.925-10.925V195.75c0-14.287-8.727-27.281-21.786-32.388zm0 65.874H133.883v-33.422c0-5.301 3.168-10.214 7.887-12.024 34.844-13.511 74.02-13.511 108.865 0 4.719 1.875 7.887 6.659 7.887 12.024v33.422z" /><path d="M313.083 0H131.491c-8.404 0-16.291 3.232-22.238 9.18L57.018 61.414c-5.947 5.948-9.18 13.834-9.18 22.238v277.333c0 17.39 14.158 31.547 31.547 31.547h233.762c17.39 0 31.547-14.158 31.547-31.547V31.547C344.501 14.158 330.343 0 313.083 0zM112.032 37.236v27.022H85.01l27.022-27.022zm210.683 79.58h-40.598c-6.012 0-10.925 4.849-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h40.598v19.394h-14.869c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.849 10.925 10.925 10.925h14.869v181.139c0 5.366-4.331 9.697-9.632 9.697H79.192a9.66 9.66 0 0 1-9.632-9.632V86.044h53.398c6.012 0 10.925-4.848 10.925-10.925V21.721h179.2a9.66 9.66 0 0 1 9.632 9.632v85.463z" /></svg>
                </motion.a>
                <motion.a href='https://github.com/isaiahL88'
                    whileHover={{
                        scale: 1.2
                    }}
                >
                    <FontAwesomeIcon
                        className="p-0"
                        icon={faSquareGithub}
                        size="2x" />
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/isaiah-linares/'
                    whileHover={{
                        scale: 1.2
                    }}>
                    <FontAwesomeIcon
                        className="p-0"
                        icon={faLinkedin}
                        size="2x" />
                </motion.a>
                <motion.a href='mailto: isaiahlin88@gmail.com'
                    whileHover={{
                        scale: 1.2
                    }}>
                    <FontAwesomeIcon
                        className="p-0"
                        icon={faEnvelope}
                        size="2x" />
                </motion.a>
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
            <div className='flex flex-row h-screen w-screen'>
                {projects.forEach(project => (
                    <motion.div className='flex=col border-solid border-2 border-black rounded-lg w-1/3 h-1/4'>
                        <div className='flex-row justify-between w-10'>
                            <h1>{project.name}</h1>
                        </div>
                        <div className='w-full h-0 border-solid border-2 border-black rounded' />
                        <p>{project.text}</p>
                        <div className='flex-row w-full w-14 justify-evenly'>

                        </div>
                    </motion.div>
                ))}
            </div>

        </div >
    )
}

export default Home