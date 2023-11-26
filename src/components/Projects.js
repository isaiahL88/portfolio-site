import React from 'react'
import "../css/Projects.css"
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

export default function Projects() {
    return (
        <div class='projects'>
            <h1>Projects</h1>
            <div class='project'>
                <div class='descr'>
                    <h1>Smart Checkout</h1>
                    <p class='tiny'>Thinking North, Smart Cities Hackathon 2023<a href="https://github.com/chunkitchung/Smart-Cities-Hackathon"> | Github</a></p>
                    <p>Streamlined grocery customer experience through no-cashier interaction shopping using computer vision.
                        We advanced into the finals and placed first runner-up in the Smart Business category.
                        I utilized the TensorFlowLite Computer Vision framework for our item classification and built
                        our inventory backend using the Firestore Realtime Database.</p>
                    <div class='frameworks'>
                        <img class="framework" src={android} />
                        <img class="framework" src={java} />
                        <img class="framework" src={tensor} />
                        <img class="framework" src={firebase} />
                    </div>
                </div>

                <iframe width="475" height="400"
                    src="https://www.youtube.com/embed/lcolLWlyr20"
                    title="Smart  Cities Hackathon Coden Ramsey Submission (Read Description)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class='project'>
                <div class='descr'>
                    <h1>JIL Eccomerce Store</h1>
                    <p class='tiny'>Intro to Eccomerce Systems, Team JIL <a href="https://github.com/Justinlaw1997/EECS_4413_Final_Project"> | Github</a><a href="http://jil2.us-east-2.elasticbeanstalk.com/"> | Site</a></p>
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
                        <img class="framework" src={java} />
                        <img class="framework" src={tomcat} />
                        <img class="framework" src={sql} />
                        <img class="framework" src={aws} />
                    </div>
                </div>
                <img id="store" src={store} />
            </div>
            <div class='project'>
                <div class='descr'>
                    <h1>Lift</h1>
                    <p class='tiny'>Mobile Application, Personal Project</p>
                    <p>Allows gym and fitness enthusiasts to create, edit, and share
                        their personal workout plans and achievements. Almost a social media
                        for gym goers, a place for people to share knowledge built up
                        over time, to learn from others, and spread motivation.</p>
                    <div class='frameworks'>
                        <img class="framework" src={java} />
                        <img class="framework" src={android} />
                        <img class="framework" src={firebase} />
                    </div>
                </div>
                <img id="lift" src={lift} />
            </div>
            <div class='project'>
                <div class='descr'>
                    <h1>Music Tab Parser</h1>
                    <p class='tiny'>Desktop Application, to convert music tablature into Music XML files<a href="https://github.com/alborzdev/TAB2XML"> | Github</a></p>
                    <p>A Java application that converts ASCII tablature (.txt) into MusicXML
                        (.xml) files using a simple and intuitive GUI. This application is compatible
                        with drums, guitar, and bass, and takes into account notation specific to each
                        instrument. The generated MusicXML files can then be used in other notation software
                        such as MuseScore.</p>
                    <div class='frameworks'>
                        <img class="framework" src={java} />
                        <img class="framework" src={javaFx} />
                    </div>
                </div>
                <img id='music' src={music} />
            </div>
            <div class='project'>
                <div class='descr'>
                    <h1>Covid-19 Ontario</h1>
                    <p class='tiny'>YU Hacks 2021<a href="https://github.com/isaiahL88/covid-19ontario"> | Github</a><a href="http://covid19ontario.com/"> | Site</a></p>
                    <p>Web app to give recent info on Covid-19 in Ontario,
                        originally submitted for the YU Hacks 2021 event by Isaiah
                        Linares, Leong Li, and Chun-Kit Chung. This app visualizes statistics on Cases, Tests, Vaccinations, Boosters, and Hospitalizations
                        with different types of charts. Also features a vaccination
                        center lookup for every region in Ontario. (uses depreciated APIs, but still live)</p>
                    <div class='frameworks'>
                        <img class="framework" src={javaScript} />
                        <img class="framework" src={jquery} />
                        <img class="framework" src={chart} />
                        <img class="framework" src={leaflet} />
                    </div>
                </div>
                <img id='covid' src={covid} />
            </div>
            <div class='project'>
                <div class='descr'>
                    <h1>Well Done</h1>
                    <p class='tiny'>All In Hackathon 2023<a href="https://github.com/ishikaubc/ALLINhackathon"> | Github</a><a href="https://devpost.com/software/productivity-app-l47xj2"> | Demo</a></p>
                    <p>Fostered student productivity through a mobile app allowing students to organize their tasks with an intuitive user interface.</p>
                    <div class='frameworks'>
                        <img class="framework" src={java} />
                        <img class="framework" src={android} />
                        <img class="framework" src={lite} />
                    </div>
                </div>
                <img src={wellDone} />
            </div>
        </div>
    )
}