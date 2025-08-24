import about from "@/app/assets/hs.jpg";
import Image from "next/image";
import "./page.css";

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
               <div className="about-img">
      <Image src={about} alt="About Me" className="about-image" />
    </div>
                <div className="about-text">
                    <div className="about-heading">
                         <h2><span>About</span> Me</h2>
                    <h4>Web Developer!</h4>
                    </div>
                   
                    <p className="hs">
                        Hi, I’m Harshita — a frontend-focused web developer who’s passionate about crafting beautiful,
                        accessible, and functional digital experiences. I believe that great websites don’t just look
                        good — they feel good to use. That’s why I focus on writing clean HTML, modular CSS, and
                        interactive JavaScript to bring ideas to life on the web. I specialize in building responsive user interfaces using technologies like HTML5, CSS3,
                        JavaScript, React.js, and modern frameworks.
                        <br /><br />
                        <strong>What Sets Me Apart:</strong>
                        <ul>
                            <li>I blend aesthetic sense with technical precision, creating designs that aren't just functional but visually appealing.</li>
                            <li>I'm constantly evolving — learning new frameworks, tools, and design principles to stay on the cutting edge of frontend development.</li>
                            <li>I thrive on collaboration, whether it’s with designers, backend developers, or product managers to create cohesive web experiences.</li>
                        </ul>
                        "From sleek landing pages to full-stack web apps, I bring design and logic together to build
                        modern web experiences that work seamlessly across devices."<br></br>
                        <bold>Code that looks good and works even better.</bold> 
                    </p>
                </div>
            </div>
        </section>
    );
}
