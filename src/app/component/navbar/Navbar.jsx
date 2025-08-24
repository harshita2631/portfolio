"use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Left Logo/Text */}
        <div className="navbar-left">HARSHITA'S PORTFOLIO</div>

        {/* Hamburger for mobile */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className="navbar-right">
          <ul className={isOpen ? "show" : ""}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/contact">Contact Me</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
