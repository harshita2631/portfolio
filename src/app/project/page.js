'use client'

import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import p8 from "@/app/assets/p8.png";
import p9 from "@/app/assets/p9.png";

// import crypto from '@/public/crypto.png'
// import portfolio from '@/public/portfolio.png'
// import chat from '@/public/chat.png'
import './page.css' 

const projects = [
    {
    img: p9,
    title: "Portfolio Website",
    description:
      "A personal portfolio site developed using React, Tailwind CSS, and Framer Motion for smooth UI transitions.",
    links: {
      site: "https://harshitsingh2631.vercel.app/",
      github: "https://github.com/harshita2631/portfolio",
    },
  },
   {
    img: p8,
    title: "Real-Time Chat App",
    description:
      "A responsive real-time chat app using the MERN stack and Socket.IO for live messaging.",
    links: {
      site: "https://chat-application-7cae.onrender.com",
      github: "https://github.com/Arsn1323/Chat-App",
    },
  },
  // {
  //   img: crypto,
  //   title: "Crypto Price Tracker",
  //   description:
  //     "A real-time crypto price tracker built using React, Framer Motion, and CoinGecko API.",
  //   links: {
  //     site: "https://crypto-tracker-ansn.netlify.app/",
  //     github: "https://github.com/Arsn1323/crypto-tracker",
  //   },
  // },
 
]

export default function Project() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Project Highlights</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`portfolio-card ${
            index % 2 !== 0 ? 'reverse' : ''
          }`}
        >
          <div className="portfolio-image">
            <Image
              src={project.img}
              alt={project.title}
              className="image"
            />
          </div>
          <div className="portfolio-content">
            <h3 className='pt'>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio-buttons">
              <a href={project.links.site} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
