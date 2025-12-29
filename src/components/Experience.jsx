import { useEffect, useRef } from 'react'
import Card from './Card'
import { ShieldIcon, BuildingIcon, DollarIcon } from './Icons'
import './Experience.css'

const experiences = [
  {
    icon: ShieldIcon,
    title: 'Gas Detection & Safety Instrumentation',
    description: 'Fixed and portable gas detection systems, wireless technologies, industrial safety standards, and regulatory compliance.'
  },
  {
    icon: BuildingIcon,
    title: 'Industrial & Energy Markets',
    description: 'Oil & gas, refrigeration, marine, utilities, manufacturing, and environmental monitoring applications.'
  },
  {
    icon: DollarIcon,
    title: 'Private Equity & Portfolio Companies',
    description: 'Hands-on leadership supporting value creation, scalability, and exit readiness.'
  }
]

function Experience() {
  const cardsRef = useRef([])

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

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="experience">
      <div className="section-header">
        <h2>Industry Experience</h2>
      </div>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            key={exp.title}
            className="fade-in"
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

