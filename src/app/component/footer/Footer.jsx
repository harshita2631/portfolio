"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./Footer.css"; // Optional CSS file
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Harshita Singh</h3>
        <p>Passionate Web Developer | MERN Stack | Open to Opportunities</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/harshita-singh2631" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/harshita2631" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:hs8031703@gmail.com">
 <SiGmail />          </a>
        </div>

        <p className="footer-note">© 2025 Harshita Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
