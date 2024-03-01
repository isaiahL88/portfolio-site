import React, { forwardRef } from 'react'
import javaScript from "../assets/javaScript.png"
import reactLogo from "../assets/react.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import lin from "../assets/mobile-lin.png"
import wp from "../assets/wordpress.png"
import wc from "../assets/wc.png"
import "../css/WebProjects.css"
import nunuLogo from "../assets/nunusLogo.png"
import madeRich from "../assets/madeRich.png"


const WebProjects = forwardRef((props, ref) => {
  return (
    <div class='projects' ref={ref}>
      <div className='project'>
        <div className='descr'>
          <h1>Shop Made Rich</h1 >
          <p className='tiny'>Made Rich T-Shirt Printing, Toronto, ON <a href="https://shopmaderich.com/"> | Site</a></p>
          <p>Developed an eccomere website and product designer for Made Rich T-Shirt Printing, giving this business a tool to generate additional income from their customers. This t-shirt designer allows users to upload designs, upload text, and select premade designs to create unique products uncluding hats, t-shirts, hoodies, tanktops, and more. I utilized the Wordpress Platform to create this site which allows my client to manage their eccomerce store and receive custom designs thoguh the Woo-Comerce Plugin CMS.</p>
          <div className='frameworks'>
            <img className="framework" src={html} />
            <img className="framework" src={css} />
            <img className="framework" src={wp} />
            <img className="framework" src={wc} />

          </div>
        </div>
        <a href="https://shopmaderich.com/">
          <img id='made-rich' src={madeRich} />
        </a>
      </div>
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
        <a href="https://linaresupholstery.com">
          <img id='lin-image' src={lin} />
        </a>
      </div>
      <div className='project'>
        <div className='descr'>
          <h1>Nunus Family Cuts</h1 >
          <p className='tiny'>Nunu's Family Cuts, North York, Ontario <a href="https://nunusfamilycuts.com"> | Site</a></p>
          <p>Improved customer base and branding by designing a local hair salon's website, banner, flyers, and business cards. I also quickly increased customer outreach by advertising the website using good SEO practices and Facebook advertisements and using Canada Post services to mail out flyers.</p>
          <div className='frameworks'>
            <img className="framework" src={javaScript} />
            <img className="framework" src={html} />
            <img className="framework" src={css} />
          </div>
        </div>
        <a href="https://nunusfamilycuts.com">
          <img id='nunu-logo' src={nunuLogo} />
        </a>
      </div>
    </div>

  )
});

export default WebProjects