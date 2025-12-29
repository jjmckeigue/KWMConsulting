import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/logo.png" alt="KWM Consulting" />
      </div>
      <p>&copy; {currentYear} KWM Consulting. All rights reserved.</p>
      <p className="footer-tagline">
        Gas Detection • Safety Instrumentation • Strategy • M&A
      </p>
    </footer>
  )
}

export default Footer

