import './Header.css'

function Header({ onContactClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          <img src="/logo.png" alt="KWM Consulting Logo" />
        </a>
        <p className="tagline">
          Strategic Advisory for Gas Detection & Industrial Safety Markets
        </p>
        <button onClick={onContactClick} className="header-cta">
          Contact Us
        </button>
      </div>
    </header>
  )
}

export default Header

