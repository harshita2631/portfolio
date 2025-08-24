"use client";
import Image from "next/image";
import styles from "./page.module.css";
import p1 from "@/app/assets/p1.png";
import i1img from "@/app/assets/i1img.png";
import p2 from "@/app/assets/p2.png";
import p3 from "@/app/assets/p3.jpg";
import p4 from "@/app/assets/p4.jpg";
import p5 from "@/app/assets/p5.png";
import p6 from "@/app/assets/p6.png";
import p7 from "@/app/assets/p7.png";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ['Front-end Developer!', 'Web Developer!'],
            typeSpeed: 60,
            //   backSpeed: 30,
            loop: true,
        });

        return () => {
            // Destroy instance on unmounting to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <span>
            <span ref={el} />
        </span>
    );
}

export function HomePage() {
    return (
        <div>
            <span className="type"><TypedText /></span>
        </div>
    );
}
export default function Home() {
    return (
        <div className="an">

            <section className="firstSection">
                <div className="leftSection">
                    <div>Hi! My name is <span className="purple">Harshita</span></div>
                    <div>I am a passionate</div>
                    <div><HomePage /></div>
                    <span id="element"></span>
                    <div className="buttons">
                        <a className="btn" href="https://drive.google.com/file/d/1IUCU_me_WCKB1LX1kBUOYlVhCMBZanrY/view?usp=drivesdk ">Download Resume</a>
                        <a className="btn" href="https://www.linkedin.com/in/harshita-singh2631?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Visit LinkedIn</a>

                    </div>
                </div>

                <div className="rightSection">
                    <Image src={i1img} alt="Harshita's Image" style={{ width: '100%', height: 'auto', margin: 'auto' }} />
                </div>

            </section>
            <hr />
            <div className="secondSection">
                {/* <span className="text-gray">What I have done so far</span> */}
                <h1 className="sn">Work Experience</h1>
                <div className="box">
                    <div className="vertical">
                        <Image className="image-top" src={p1} alt="Work Experience Image" />

                        <div className="vertical-title">
                            HTML/CSS Developer (2022-2023)
                        </div>
                        <div className="vertical-desc"><span className="disc">"Designs the skeleton and style of the web."</span><br />
                            Designed and developed fully responsive websites using HTML5 and CSS3, ensuring compatibility across modern browsers and devices.
                            Created custom layouts using Flexbox and CSS Grid to maintain consistent design structures.
                            Implemented CSS animations and transitions for enhancing visual appeal.
                            Optimized websites for performance and SEO using semantic markup and best practices.</div>
                    </div>

                    <div className="vertical">
                        <Image className="image-top" src={p2} alt="Work Experience Image" />
                        <div className="vertical-title">
                            JavaScript Developer (2022-2023)
                        </div>
                        <div className="vertical-desc"><span className="disc">"Brings static pages to life with logic and interactions."</span><br />
                            Integrated JavaScript with HTML/CSS to create responsive, user-friendly front-end interfaces.
                            Developed interactive and dynamic web applications using core JavaScript (ES6+).
                            Built reusable components and functionality such as modals, sliders, tab systems, and form validation span
                        </div>
                    </div>
                    <div className="vertical">
                        <Image className="image-top" src={p3} alt="Work Experience Image" />
                        <div className="vertical-title">
                            React Developer (2022-2023)
                        </div>
                        <div className="vertical-desc"><span className="disc">"Builds dynamic, component-driven, modern UIs."</span><br />
                            Built modern, scalable, and responsive web applications using React.js and functional components.
                            Utilized React Hooks (useState, useEffect, useContext) to manage state and lifecycle in a clean, efficient way.
                            Implemented component-based architecture for reusability, readability, and maintainability.</div>
                    </div>
                    <div className="vertical">
                        <Image className="image-top" src={p4} alt="Work Experience Image" />
                        <div className="vertical-title">
                            Node Developer (2023-2024)
                        </div>
                        <div className="vertical-desc"><span className="disc">"Handles the server-side logic and API infrastructure."</span><br />
                            Developed RESTful APIs and backend services using Node.js and Express.js for scalable web applications.
                            Designed and implemented CRUD operations, user authentication, and role-based access control.
                            Deployed Node.js apps on platforms like Render, Vercel, and Railway with environment variables and .env files.</div>
                    </div>
                    <div className="vertical">
                        <Image className="image-top" src={p6} alt="Work Experience Image" />
                        <div className="vertical-title">
                            API/Database Developer (2023-2024)
                        </div>
                        <div className="vertical-desc"><span className="disc">"Manages structured data with relational schemas."</span><br />
                            Designed and developed RESTful APIs using Node.js and Express.js for seamless frontend-backend communication.
                            Built secure and scalable database schemas using MongoDB.
                            Handled error management, data validation, and input sanitization to ensure robustness and reliability.
                            </div>
                    </div>
                    <div className="vertical">
                        <Image className="image-top" src={p7} alt="Work Experience Image" />
                        <div className="vertical-title">
                            MERN Stack Developer (2024-2025)
                        </div>
                        <div className="vertical-desc"><span className="disc">"Builds complete client-server apps with integrated database."</span><br />
                            Handled error management, data validation, and input sanitization to ensure robustness and reliability.

                            Connected frontend interfaces with APIs to serve dynamic content using Axios and Fetch API.</div>
                    </div>


                </div>






            </div>


        </div>
    )
}