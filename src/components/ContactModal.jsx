import { useState, useEffect, useRef } from 'react'
import { CloseIcon, SendIcon, CheckIcon } from './Icons'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})
  const modalRef = useRef(null)
  const firstInputRef = useRef(null)

  // Focus trap and escape key handling
  useEffect(() => {
    if (isOpen) {
      // Focus first input when modal opens
      setTimeout(() => firstInputRef.current?.focus(), 100)
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onClose])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('submitting')
    
    try {
      // Using Web3Forms - free form submission service
      // Replace YOUR_ACCESS_KEY with actual key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3d7046a9-3f7c-454c-a560-56a3c149801e', 
          subject: `New Inquiry from ${formData.name} - KWM Consulting`,
          from_name: 'KWM Consulting Website',
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          inquiry_type: formData.inquiryType || 'General Inquiry',
          message: formData.message,
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })
        }, 500)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      // Fallback to mailto if API fails
      console.log('Form API unavailable, falling back to mailto')
      const mailtoLink = `mailto:kwmconsultant@gmail.com?subject=${encodeURIComponent(`Inquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\nInquiry Type: ${formData.inquiryType || 'General'}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink
      setStatus('success')
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const resetAndClose = () => {
    setStatus('idle')
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={resetAndClose} aria-label="Close modal">
          <CloseIcon />
        </button>
        
        {status === 'success' ? (
          <div className="modal-success">
            <div className="success-icon">
              <CheckIcon />
            </div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. Kevin will get back to you within 1-2 business days.</p>
            <button className="modal-button" onClick={resetAndClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2 id="modal-title">Get in Touch</h2>
              <p>Fill out the form below and Kevin will respond within 1-2 business days.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name">Name *</label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Product Strategy">Product Strategy</option>
                    <option value="M&A Advisory">M&A Advisory</option>
                    <option value="Market Expansion">Market Expansion</option>
                    <option value="Operational Consulting">Operational Consulting</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows="4"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon />
                  </>
                )}
              </button>
              
              <p className="form-note">
                Or email directly: <a href="mailto:kwmconsultant@gmail.com">kwmconsultant@gmail.com</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactModal


