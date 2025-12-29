import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/logo.png" alt="KWM Consulting Logo" />
        </div>
        <p className="tagline">
          Strategic Advisory for Gas Detection & Industrial Safety Markets
        </p>
      </div>
    </header>
  )
}

export default Header

