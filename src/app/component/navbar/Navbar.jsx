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

        {/* Desktop Links */}
        <div className="navbar-right">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/contact">Contact Me</Link></li>
          </ul>
        </div>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Drawer */}
        <div className={`drawer ${isOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => setIsOpen(false)}><Link href="/">Home</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/about">About</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/skills">Skills</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/project">Project</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/contact">Contact Me</Link></li>
          </ul>
        </div>

        {/* Overlay for closing drawer */}
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
      </nav>
    </header>
  );
}
