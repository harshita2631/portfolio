import Image from "next/image";
import p1 from "@/app/assets/p1.png";
import p2 from "@/app/assets/p2.png";
import p3 from "@/app/assets/p3.jpg";
import p4 from "@/app/assets/p4.jpg";
import p5 from "@/app/assets/p5.png";
import p6 from "@/app/assets/p6.png";
import p7 from "@/app/assets/p7.png";
import "./page.css";

export default function Skills() {
    return(
        <>
  {/* <h1 className="sub-title">
    My <span>Skills</span>
  </h1> */}

  <section>
  <div className="container1" id="Skills">
    <h1 className="headings1">Technical Skills</h1>

    <div className="Technical-bars">
      {/* HTML/CSS */}
      <div className="bar">
        <Image src={p1} alt="HTML/CSS Icon" style={{ width: '50px', height: 'auto', margin: 'auto' }} />
        <div className="info">
          <span>HTML/CSS</span>
        </div>
        <div className="progress-line">
          <span style={{ width: '90%' }} data-percent="90%"></span>
        </div>
      </div>

      {/* JavaScript */}
      <div className="bar">
        <Image src={p2} alt="JavaScript Icon" style={{ width: '30px', height: 'auto', margin: 'auto' }} />
        <div className="info">
          <span>JavaScript</span>
        </div>
        <div className="progress-line">
          <span style={{ width: '80%' }} data-percent="80%"></span>
        </div>
      </div>

      {/* React */}
      <div className="bar">
        <Image src={p3} alt="React Icon" style={{ width: '30px', height: 'auto', margin: 'auto' }} />
        <div className="info">
          <span>React.js</span>
        </div>
        <div className="progress-line">
          <span style={{ width: '75%' }} data-percent="75%"></span>
        </div>
      </div>

      {/* Node.js */}
      <div className="bar">
        <Image src={p4} alt="Node Icon" style={{ width: '30px', height: 'auto', margin: 'auto' }} />
        <div className="info">
          <span>Node.js</span>
        </div>
        <div className="progress-line">
          <span style={{ width: '70%' }} data-percent="70%"></span>
        </div>
      </div>

      {/* SQL */}
      <div className="bar">
        <Image src={p5} alt="SQL Icon" style={{ width: '40px', height: 'auto', margin: 'auto' }} />
        <div className="info">
          <span>SQL</span>
        </div>
        <div className="progress-line">
          <span style={{ width: '60%' }} data-percent="60%"></span>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="professional-skills">
  <h1 className="sub-title">Professional Skills</h1>
  <div className="radial-bars-container">
    <div className="radial-bar">
      <svg>
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" style={{ strokeDashoffset: 80 }}></circle>
      </svg>
      <div className="percentage">95%</div>
      <div className="skill-label">Communication</div>
    </div>

    <div className="radial-bar">
      <svg>
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" style={{ strokeDashoffset: 65 }}></circle>
      </svg>
      <div className="percentage">90%</div>
      <div className="skill-label">Teamwork</div>
    </div>

    <div className="radial-bar">
      <svg>
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" style={{ strokeDashoffset: 100 }}></circle>
      </svg>
      <div className="percentage">85%</div>
      <div className="skill-label">Time Management</div>
    </div>

    <div className="radial-bar">
      <svg>
        <circle cx="60" cy="60" r="50"></circle>
        <circle cx="60" cy="60" r="50" style={{ strokeDashoffset: 60 }}></circle>
      </svg>
      <div className="percentage">90%</div>
      <div className="skill-label">Problem Solving</div>
    </div>
  </div>
</section>

</>

    )
}
