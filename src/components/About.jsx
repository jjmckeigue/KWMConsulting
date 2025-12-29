import { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: 'Global', label: 'Market Reach' },
  { number: '100%', label: 'Client Focus' }
]

function About() {
  const statsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    statsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about">
      <div className="section-header">
        <h2>About KWM Consulting</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            KWM Consulting was founded to help companies in the
            gas detection and safety instrumentation markets navigate growth,
            innovation, and complexity.
          </p>
          <p>
            With deep experience spanning product strategy, M&A, global market
            expansion, and operational execution, KWM Consulting partners with
            executives, private equity firms, and industrial companies to drive
            measurable results.
          </p>
        </div>
        <div className="about-visual">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-item fade-in"
                ref={(el) => (statsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


