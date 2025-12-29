import { ArrowIcon } from './Icons'
import './CTA.css'

function CTA({ onContactClick }) {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Partner With KWM Consulting</h2>
        <p>
          Looking for strategic insight, execution support, or an experienced
          operator in the gas detection and safety market?
        </p>
        <button onClick={onContactClick} className="cta-button">
          Contact KWM Consulting
          <ArrowIcon />
        </button>
      </div>
    </section>
  )
}

export default CTA

