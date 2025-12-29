import { useEffect, useRef } from 'react'
import Card from './Card'
import { ChartIcon, ExchangeIcon, GlobeIcon, GearIcon } from './Icons'
import './Services.css'

const services = [
  {
    icon: ChartIcon,
    title: 'Product Strategy & Portfolio Management',
    description: 'Product roadmap development, lifecycle management, product vitality analysis, and alignment of R&D investment with market demand.'
  },
  {
    icon: ExchangeIcon,
    title: 'M&A Advisory & Integration',
    description: 'Commercial and product diligence, acquisition integration, synergy realization, and post-close execution support.'
  },
  {
    icon: GlobeIcon,
    title: 'Market Expansion & Go-To-Market',
    description: 'Regional expansion strategies, channel development, pricing strategy, and competitive positioning across industrial markets.'
  },
  {
    icon: GearIcon,
    title: 'Operational & Organizational Effectiveness',
    description: 'KPI development, organizational design, process improvement, and cross-functional execution support.'
  }
]

function Services() {
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
    <section className="services">
      <div className="services-wrapper">
        <div className="section-header">
          <h2>Core Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="fade-in"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

