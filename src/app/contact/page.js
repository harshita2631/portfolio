import './page.css'

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
              <h2 className="portfolio-title">Get In Touch</h2>

      <div className="contact-container">
        {/* Left - About */}
        <div className="contact-info">
          <h3>About <span>Me</span></h3>
          <p>
            An aspiring Web Developer with a solid understanding of HTML, CSS, and JavaScript, along with foundational
            knowledge of React and Node.js. Recently completed academic projects, including building a responsive portfolio
            website and an e-commerce mockup with real-time features. Passionate about creating visually appealing and
            efficient web applications while continuously improving my technical expertise.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h4>2+</h4>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h4>Fresher</h4>
              <p>Experience</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form
          className="contact-form"
          method="POST"
          action="https://getform.io/f/bxoymgja"
        >
          <h4>Let’s Connect</h4>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
