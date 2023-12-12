import React, { forwardRef } from 'react'
import javaScript from "../assets/javaScript.png"
import reactLogo from "../assets/react.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import lin from "../assets/mobile-lin.png"
import "../css/WebProjects.css"
import nunuLogo from "../assets/nunusLogo.png"


const WebProjects = forwardRef((props, ref) => {
  return (
    <div class='projects' ref={ref}>
      <div className='project'>
        <div className='descr'>
          <h1>Linares Upholstery</h1 >
          <p className='tiny'>Linares Upholstery, Scarborough, Ontario <a href="https://linaresupholstery.com"> | Site</a></p>
          <p>Designed, developed, and deployed a website for Linares Upholstery to showcase their services, portfolio of completed restorations, and quality of sourced materials. I also improved customer outreach by using good SEO practices and creating facebook adds for the company.</p>
          <div className='frameworks'>
            <img className="framework" src={reactLogo} />
            <img className="framework" src={javaScript} />
            <img className="framework" src={html} />
            <img className="framework" src={css} />
          </div>
        </div>

        <img id='lin-image' src={lin} />
      </div>
      <div className='project'>
        <div className='descr'>
          <h1>Nunus Family Cuts</h1 >
          <p className='tiny'>Nunu's Family Cuts, North York, Ontario <a href="https://nunusfamilycuts.com
          "> | Site</a></p>
          <p>Improved customer base and branding by designing a local hair salon's website, banner, flyers, and business cards. I also quickly increased customer outreach by advertising the website using good SEO practices and Facebook advertisements and using Canada Post services to mail out flyers.</p>
          <div className='frameworks'>
            <img className="framework" src={javaScript} />
            <img className="framework" src={html} />
            <img className="framework" src={css} />
          </div>
        </div>

        <img id='nunu-logo' src={nunuLogo} />
      </div>
    </div>

  )
});

export default WebProjects