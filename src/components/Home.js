import React, { useState, useRef, useEffect } from 'react'
import { backIn, easeInOut, motion, cubicBezier, inertia } from "framer-motion"
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
import ReactSVG from '../assets/React.svg'
import JavaSVG from '../assets/Java.svg'
import JSsvg from '../assets/JavaScript.svg'
import Android from '../assets/Android.svg'
import Apache from '../assets/Apache Tomcat.svg'
import AWS from '../assets/AWS.svg'
import CSS from '../assets/CSS3.svg'
import FirebaseSVG from '../assets/Firebase.svg'
import JQuerySVG from '../assets/jQuery.svg'
import MySQL from '../assets/MySQL.svg'
import TensorFlow from '../assets/TensorFlow.svg'
import WooCommerce from '../assets/WooCommerce.svg'
import Tailwind from '../assets/Tailwind CSS.svg'
import HTML from '../assets/HTML5.svg'
import WP from '../assets/wordpress.png'
import nunuLogo from "../assets/nunusFamily.png"
import madeRich from "../assets/madeRich.png"
import lin from "../assets/mobile-lin.png"
import mapsImg from "../assets/Maps.png"
import chartSVG from "../assets/chart.svg"
import liftImg from "../assets/lift.jpg"
import laptopImg from "../assets/store.png"
import musicXMLImg from "../assets/music.jpg"
import covidImg from "../assets/covid.png"
import framerImg from "../assets/Framer-Motion.webp"
import material from "../assets/material-ui.png"

import { saveAs } from 'file-saver';
import animationData from '../assets/darklight.json';

const Home = () => {
    const [showProj, setShowProj] = useState("none");
    const [darkLight, setDarkLight] = useState("light");
    const [laptopPlay, setLaptopPlay] = useState(true);
    const [designPlay, setdesignPlay] = useState(true);
    const projRef = useRef(null);
    const webRef = useRef(null);
    const workRef = useRef(null);
    const workQueryRef = useRef(null);

    const isSmallViewport = useIsSmallViewport();

    //Either, "", "Project", or "Web Dev"
    const [workQuery, setworkQuery] = useState("");

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
            text: 'I am currently partnering with MAPS Rentals Inc., a boutique property leasing firm in Ontario, to redefine the leasing experience through innovative digital solutions. By leveraging cutting-edge web development practices and creative brand-building strategies, I am helping position MAPS Rentals as a leader in modern property management.',
            tech: ['TW', 'React', 'HTML', 'CSS', 'FM', 'Material'],
            image: mapsImg,
            link: <a href='https://www.mapsrentals.ca/' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Web App</a>
        },
        {
            name: 'Shop Made Rich',
            type: 'Web Dev',
            text: 'Developed an eccomere website and product designer for Made Rich T-Shirt Printing. This t-shirt designer allows users to upload designs, upload text, and select premade designs to create unique products uncluding hats, t-shirts, hoodies, tanktops, and more. I utilized the Wordpress Platform to create this site which allows my client to manage their eccomerce store and receive custom designs through the Woo-Comerce Plugin CMS.',
            tech: ['WP', 'WooCommerce'],
            image: madeRich,
            link: <p className='font-NF text-sm'>Currently Closed</p>

        },
        {
            name: 'Linares Upholstery',
            type: 'Web Dev',
            text: 'Designed, developed, and deployed a website for Linares Upholstery to showcase their services, portfolio of completed restorations, and quality of sourced materials. I also improved customer outreach by using good SEO practices and creating facebook adds for the company.',
            tech: ['React', 'JS', 'Java'],
            image: lin,
            link: <a href='https://upholstery-site.vercel.app/' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Web App</a>
        },
        {
            name: "Nunu's Family Cuts",
            type: 'Web Dev',
            text: "Improved customer base and branding by designing a local hair salon's website, banner, flyers, and business cards. I also quickly increased customer outreach by advertising the website using good SEO practices and Facebook advertisements and using Canada Post services to mail out flyers.",
            tech: ['JS', 'HTML', 'CSS'],
            image: nunuLogo,
            link: <a href='https://nunusfamilycuts.com/' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Web App</a>

        },
        {
            name: "Lift App",
            type: 'Project',
            text: "Allows powerlifters, bodybuilders, and fitness enthusiasts to create and perfect their workout routines through an intuitive and fast user interface. Users can share their accumulated knowledge, learn from others by exchanging routines with friends, and discover new workouts through the app. Lift also allows users to log their sessions during every workout to see exactly how they performed each day. Another notable feature is the ability to track personal records for each Olympic lift, offering insights into one's progress over time. Users have the option to display this information on their personal profiles as well. I developed this app myself using Java / Material3 and utilized FirebaseAuth and FirebaseFirestore for the backend. I recently released the first production version on the Google Play Store, please download my app and try it out using the link above!",
            tech: ['Java', 'Firebase', 'Android'],
            video: 'https://www.youtube.com/embed/IYTIsCKQwFU?si=_Km10BT7ysp9bUXf',
            link: <a href='https://play.google.com/store/apps/details?id=com.isaiah88&pcampaignid=web_share' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Google Play Store</a>

        },
        {
            name: "Smart Checkout App",
            type: 'Project',
            text: "Streamlined grocery customer experience through no-cashier interaction shopping using computer vision. We advanced into the finals and placed first runner-up in the Smart Business category. I utilized the TensorFlowLite Computer Vision framework for our item classification and built our inventory backend using the Firestore Realtime Database.",
            tech: ['Java', 'Android', 'Firebase', 'TensorFlow'],
            video: 'https://www.youtube.com/embed/lcolLWlyr20',
            link: <a href='https://www.linkedin.com/posts/isaiah-linares_over-the-past-few-days-me-and-my-team-coden-activity-7061063369469923328--7Cp?utm_source=share&utm_medium=member_desktop' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>More Info</a>

        },
        {
            name: "JIL E-Commerce Store",
            type: 'Project',
            text: "For this project, our team designed, implemented, and deployed a fully functional e-commerce system. Our service allows users to enter the site from any computer, browse and add products to their cart, and simulate a checkout once they are satisfied with their purchase. There is also a registration and login system, as well as additional capabilities for administrators such as viewing and filtering past orders.\nMy contribution was creating Servlet/JSP pages, debugging SQL queries (DAOs), and creating an AWS Elastic Beanstalk deployment using the TomcatV10.1/MySQL platform. The site is live at the link above, feel free to create an account, complete an order, and checkout (don't worry it will not charge you 😄).",
            tech: ['Java', 'Apache', 'MySQL', 'AWS'],
            image: laptopImg,
            link: <a href='http://jil2.us-east-2.elasticbeanstalk.com/' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Web App</a>

        },
        {
            name: "MusicXML Parser",
            type: 'Project',
            text: "A Java application that converts ASCII tablature (.txt) into MusicXML (.xml) files using a simple and intuitive GUI. This application is compatible with drums, guitar, and bass, and takes into account notation specific to each instrument. The generated MusicXML files can then be used in other notation software such as MuseScore.",
            tech: ['Java'],
            image: musicXMLImg,
            link: <a href='https://github.com/alborzdev/TAB2XML' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Git Hub Repo</a>

        },
        {
            name: "Covid-19 Ontario",
            type: 'Project',
            text: "Web app to give recent info on Covid-19 in Ontario, originally submitted for the YU Hacks 2021 event by Isaiah Linares, Leong Li, and Chun-Kit Chung. This app visualizes statistics on Cases, Tests, Vaccinations, Boosters, and Hospitalizations with different types of charts. Also features a vaccination center lookup for every region in Ontario. (uses depreciated APIs, but still live).",
            tech: ['JS', 'jQuery', 'ChartJS'],
            image: covidImg,
            link: <a href='https://covid-19ontario.vercel.app/' target="_blank" className='font-NF text-sm font-black text-[#5D3FD3]'>Web App</a>
        }
    ]

    const techImages = {
        'Material': <img width={50} height={50} src={material} />,
        'FM': <img width={50} height={50} src={framerImg} />,
        'React': <img width={50} height={50} src={ReactSVG} />,
        'Java': <img width={50} height={50} src={JavaSVG} />,
        'JS': <img width={50} height={50} src={JSsvg} />,
        'Android': <img width={50} height={50} src={Android} />,
        'Apache': <img width={50} height={50} src={Apache} />,
        'AWS': <img width={50} height={50} src={AWS} />,
        'CSS': <img width={50} height={50} src={CSS} />,
        'Firebase': <img width={50} height={50} src={FirebaseSVG} />,
        'jQuery': <img width={50} height={50} src={JQuerySVG} />,
        'MySQL': <img width={50} height={50} src={MySQL} />,
        'TensorFlow': <img width={50} height={50} src={TensorFlow} />,
        'WooCommerce': <img width={50} height={50} src={WooCommerce} />,
        'TW': <img width={50} height={50} src={Tailwind} />,
        'HTML': <img width={50} height={50} src={HTML} />,
        'WP': <img width={50} height={50} src={WP} />,
        'ChartJS': <img width={50} height={50} src={chartSVG} />
    };

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
            {
                isSmallViewport ?
                    <div className='flex flex-col justify-center items-center h-screen w-screen'><p>Mobile Coming Soon</p></div>
                    :
                    <>
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
                                <div className='w-2/5 h-full flex flex-col justify-center'>
                                    <h1 className='text-5xl underline font-NFB mb-2'>My Tech Stack</h1>
                                    <div className='flex flex-row [&_div]:p-1'>
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
                            <motion.button className="font-NF size-14 z-10 w-auto h-auto text-5xl mt-6 border-black border-2 rounded-2xl p-2 text-black hover:text-indigo-600 hover:border-indigo-600 select-none" onClick={handleWork}
                                whileHover={{
                                    scale: 1.2
                                }}

                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut'

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
                                onClick={() => {
                                    setworkQuery("Web Dev");
                                    setTimeout(() => workQueryRef.current.scrollIntoView({
                                        behavior: 'smooth'
                                    }));
                                }}
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
                                onClick={() => {
                                    setworkQuery("Project");
                                    setTimeout(() => workQueryRef.current.scrollIntoView({
                                        behavior: 'smooth'
                                    }));
                                }}
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
                        {
                            workQuery != "" ?
                                <div className='flex flex-col h-auto w-screen items-center mt-10' ref={workQueryRef}>
                                    {projects.filter((project) => project.type === workQuery).map((project, i) => (
                                        <motion.div className='flex flex-row justify-center w-3/5 items-center m-24'>
                                            <motion.div className={'flex=col border-solid border-2 border-black rounded-lg w-1/2 h-1/4 m-4' + (i % 2 == 0 ? ' order-first' : ' order-last')}
                                            // whileInView={i % 2 === 0 ?

                                            // }
                                            >
                                                <div className='flex flex-row justify-between w-full text-left ml-2 pr-4 text-center items-center'>
                                                    <h1>{project.name}</h1>
                                                    {project?.link}
                                                </div>
                                                <div className='w-full h-0 border-solid border-2 border-black' />
                                                <p className='p-3 text-base'>{project.text}</p>
                                                <div className='flex flex-row w-full p-2'>
                                                    {Array.isArray(project.tech) && project.tech.map(tech => (
                                                        techImages[tech]
                                                    ))}
                                                </div>
                                            </motion.div>
                                            {project.image ? <motion.img className='w-[30rem] m-4 bg-white h-96 object-contain order-3 border-[1px] border-black rounded-lg' src={project.image} />
                                                :

                                                project.video ? <iframe width="475" height="400"
                                                    id={project.name + " video"}
                                                    src={project.video}
                                                    title={project.name}
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen />
                                                    : <></>}
                                        </motion.div>

                                    ))}
                                </div>
                                :
                                <></>
                        }
                    </>
            }

        </div >
    )
}


const useIsSmallViewport = () => {
    // Define the state variable to track if the viewport is small
    const [isSmallViewport, setIsSmallViewport] = useState(window.innerWidth < 768);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // Handler to update the state based on the viewport size
        const handleViewportChange = (e) => {
            setIsSmallViewport(e.matches);
        };

        // Attach the listener to respond to media query changes
        mediaQuery.addEventListener("change", handleViewportChange);

        // Cleanup the listener when the component unmounts
        return () => mediaQuery.removeEventListener("change", handleViewportChange);
    }, []);

    return isSmallViewport;
};

export default Home