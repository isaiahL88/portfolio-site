import React from 'react'
import javaScript from "../assets/javaScript.png"
import reactLogo from "../assets/react.png"
import html from "../assets/html.png"
import css from "../assets/css.png"


const WebProjects = () => {
  return (
    <div class='projects'>
      <div className='project'>
        <div className='descr'>
          <h1>Linares Upholstery</h1 >
          <p className='tiny'>Linares Upholstery, Scarborough, Ontario <a href="https://github.com/chunkitchung/Smart-Cities-Hackathon"> | Site</a></p>
          <p>Designed, developed, and deployed a website for Linares Upholstery to showcase their services, portfolio of completed restorations, and quality of sourced materials. I also improved customer outreach by using good SEO practices and creating facebook adds for the company.</p>
          <div className='frameworks'>
            <img className="framework" src={reactLogo} />
            <img className="framework" src={javaScript} />
            <img className="framework" src={html} />
            <img className="framework" src={css} />
          </div>
        </div>

        <iframe width="475" height="400"
          src="https://www.youtube.com/embed/lcolLWlyr20"
          title="Smart  Cities Hackathon Coden Ramsey Submission (Read Description)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>

  )
}

export default WebProjects