import React, { forwardRef } from 'react'
import { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import "../css/Projects.css"
import googlePlay from "../assets/google_play.png"
import android from "../assets/android.png"
import java from "../assets/java.png"
import tensor from "../assets/tensor_flow.png"
import store from "../assets/store.png"
import sql from "../assets/sqlpng.png"
import aws from "../assets/aws.png"
import tomcat from "../assets/tomcat.png"
import music from "../assets/music.jpg"
import javaFx from "../assets/javaFx.png"
import covid from "../assets/covid.png"
import leaflet from "../assets/leaflet.png"
import jquery from "../assets/jQuery.png"
import chart from "../assets/chart.svg"
import javaScript from "../assets/javaScript.png"
import wellDone from "../assets/well-done.jpg"
import lite from "../assets/lite.png"
import firebase from "../assets/firebase.png"
import lift from "../assets/lift.jpg"
import lift2 from "../assets/lift1.jpg"


// for splide slides

const mql = window.matchMedia('(max-width: 600px)');
let mobileView = mql.matches;

const options = {
    type: 'loop',
    width: '20em',
    height: '30em',
    gap: '1rem'
};

const optionsMobile = {
    type: 'loop',
    width: '15em',
    height: '25em',
    gap: '1rem'
};

const Projects = forwardRef((props, ref) => {
    return (
        <div id='main-page-projects' className='projects' ref={ref}>
            <div className='project'>
                <div className='descr'>
                    <h1>Lift App</h1>
                    <p className='tiny'>Android App, Personal Project<a href="https://play.google.com/store/apps/details?id=com.isaiah88&hl=en&gl=US"> | Google Play</a></p>
                    <p>Allows powerlifters, bodybuilders, and fitness enthusiasts to create and perfect their workout routines through an intuitive and fast user interface. Users can share their accumulated knowledge, learn from others by exchanging routines with friends, and discover new workouts through the app. Lift also allows users to log their sessions during every workout to see exactly how they performed each day. Another notable feature is the ability to track personal records for each Olympic lift, offering insights into one's progress over time. Users have the option to display this information on their personal profiles as well. I developed this app myself using Java / Material3 and utilized FirebaseAuth and FirebaseFirestore for the backend. I recently released the first production version on the Google Play Store, please download my app and try it out using the link above!</p>
                    <div className='frameworks'>
                        <img className="framework" src={java} />
                        <img className="framework" src={android} />
                        <img className="framework" src={firebase} />
                        <a href="https://play.google.com/store/apps/details?id=com.isaiah88&hl=en&gl=US" >
                            <img className="framework" id="googleLogo" src={googlePlay} />
                        </a>
                    </div>
                </div>
                <Splide id='splide-lift' className='splide'
                    options={mobileView ? optionsMobile : options}
                    aria-label='lift'>
                    <SplideSlide>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IYTIsCKQwFU?si=_Km10BT7ysp9bUXf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </SplideSlide>
                    <SplideSlide>
                        <img className='lift-img' src={lift} />

                    </SplideSlide>
                    <SplideSlide>
                        <img className='lift-img' src={lift2} />
                    </SplideSlide>

                </Splide>
            </div>
            <div className='project'>
                <div className='descr'>
                    <h1>Smart Checkout App</h1 >
                    <p className='tiny'>Android App, Thinking North, Smart Cities Hackathon 2023<a href="https://github.com/chunkitchung/Smart-Cities-Hackathon"> | Github</a></p>
                    <p>Streamlined grocery customer experience through no-cashier interaction shopping using computer vision.
                        We advanced into the finals and placed first runner-up in the Smart Business category.
                        I utilized the TensorFlowLite Computer Vision framework for our item classification and built
                        our inventory backend using the Firestore Realtime Database.</p>
                    <div className='frameworks'>
                        <img className="framework" src={android} />
                        <img className="framework" src={java} />
                        <img className="framework" src={tensor} />
                        <img className="framework" src={firebase} />
                    </div>
                </div>

                <iframe width="475" height="400"
                    id="smart-check-frame"
                    src="https://www.youtube.com/embed/lcolLWlyr20"
                    title="Smart  Cities Hackathon Coden Ramsey Submission (Read Description)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div className='project'>
                <div className='descr'>
                    <h1>JIL Eccomerce Store</h1>
                    <p classNames='tiny'>Intro to Eccomerce Systems, Team JIL <a href="https://github.com/Justinlaw1997/EECS_4413_Final_Project"> | Github</a><a href="http://jil2.us-east-2.elasticbeanstalk.com/"> | Site</a></p>
                    <p>For this project, our team designed, implemented, and deployed a fully functional
                        e-commerce system. Our service allows users to enter the site from any computer,
                        browse and add products to their cart, and simulate a checkout once they are
                        satisfied with their purchase. There is also a registration and login system,
                        as well as additional capabilities for administrators such as viewing and
                        filtering past orders. </p>
                    <p>My contribution was creating Servlet/JSP
                        pages, debugging SQL queries (DAOs), and creating an AWS Elastic
                        Beanstalk deployment using the TomcatV10.1/MySQL platform. The site is live at the link above, feel
                        free to create an account, complete an order, and checkout (don't worry it will not charge you 😄) </p>
                    <div class='frameworks'>
                        <img className="framework" src={java} />
                        <img className="framework" src={tomcat} />
                        <img className="framework" src={sql} />
                        <img className="framework" src={aws} />
                    </div>
                </div>
                <img id="store" src={store} />
            </div>

            <div className='project'>
                <div className='descr'>
                    <h1>Music Tab Parser</h1>
                    <p className='tiny'>Desktop Application, to convert music tablature into Music XML files<a href="https://github.com/alborzdev/TAB2XML"> | Github</a></p>
                    <p>A Java application that converts ASCII tablature (.txt) into MusicXML
                        (.xml) files using a simple and intuitive GUI. This application is compatible
                        with drums, guitar, and bass, and takes into account notation specific to each
                        instrument. The generated MusicXML files can then be used in other notation software
                        such as MuseScore.</p>
                    <div className='frameworks'>
                        <img className="framework" src={java} />
                        <img className="framework" src={javaFx} />
                    </div>
                </div>
                <img id='music' src={music} />
            </div>
            <div className='project'>
                <div className='descr'>
                    <h1>Covid-19 Ontario</h1>
                    <p className='tiny'>YU Hacks 2021<a href="https://github.com/isaiahL88/covid-19ontario"> | Github</a><a href="http://covid19ontario.com/"> | Site</a></p>
                    <p>Web app to give recent info on Covid-19 in Ontario,
                        originally submitted for the YU Hacks 2021 event by Isaiah
                        Linares, Leong Li, and Chun-Kit Chung. This app visualizes statistics on Cases, Tests, Vaccinations, Boosters, and Hospitalizations
                        with different types of charts. Also features a vaccination
                        center lookup for every region in Ontario. (uses depreciated APIs, but still live)</p>
                    <div className='frameworks'>
                        <img className="framework" src={javaScript} />
                        <img className="framework" src={jquery} />
                        <img className="framework" src={chart} />
                        <img id="leaflet" className="framework" src={leaflet} />
                    </div>
                </div>
                <img id='covid' src={covid} />
            </div>
            <div className='project'>
                <div className='descr'>
                    <h1>Well Done</h1>
                    <p className='tiny'>All In Hackathon 2023<a href="https://github.com/ishikaubc/ALLINhackathon"> | Github</a><a href="https://devpost.com/software/productivity-app-l47xj2"> | Demo</a></p>
                    <p>Fostered student productivity through a mobile app allowing students to organize their tasks with an intuitive user interface.</p>
                    <div class='frameworks'>
                        <img className="framework" src={java} />
                        <img className="framework" src={android} />
                        <img className="framework" src={lite} />
                    </div>
                </div>
                <img id="well-done" src={wellDone} />
            </div>
        </div>
    )
});

export default Projects