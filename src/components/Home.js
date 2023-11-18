import React from 'react'
import portrait from "../assets/portrait.jpg";
import lassonde from "../assets/lassonde.jpg"
import "../css/Home.css"
import Projects from "./Projects"
import Footer from "./Footer"



const Home = () => {
    return (
        <>
            <div class='home-div home-page'>
                <div class='home-child' id="intro">
                    <h1 id="title">Isaiah Linares</h1>
                    <p class="about">
                        A self-starter, who's passionate about creating applications that people enjoy using.
                    </p>
                </div>
                <div class='home-child'>
                    <img src={portrait} id='portrait' />
                </div>
            </div>
            <div class='home-page'>
                <h1 class='subject'>About Me</h1>
                <div class='home-div'>
                    <div class="home-child">
                        <img src={lassonde} id='lassonde' />
                        <h2>Education</h2>
                        <p>Specialized Honours BSc in Computer Science 2019 - 2023</p>
                        <p class="tiny">Lassonde School of Engineering, York University, Toronto, ON, Canada</p>

                    </div>
                    <div class="home-child" style={{ flex: 0 }}>
                        <h2 class="header2" >Languages / Tech</h2>
                        <ul class='list-1'>
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
                        <h2 class="header2" >Personal Interests</h2>
                        <ul class='list-1'>
                            <li>Traveling</li>
                            <li>Bodybuilding</li>
                            <li>Enthusiast Cars</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Projects />
            <Footer />
        </>
    )
}

export default Home