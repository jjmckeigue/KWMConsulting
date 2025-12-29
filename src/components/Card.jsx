import './Card.css'

function Card({ icon: Icon, title, description }) {
  return (
    <div className="card">
      <div className="card-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card


