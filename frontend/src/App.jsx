import { useState } from 'react'
import './App.css'

const stats = [
  { value: '2.5x', label: 'Faster triage decisions' },
  { value: '40%', label: 'Drop in manual paging' },
  { value: '24/7', label: 'Always-on coverage' },
]

const features = [
  {
    title: 'Context-aware routing',
    description:
      'Consolidate EMR, call schedules, and on-call preferences so every question reaches the right clinician instantly.',
  },
  {
    title: 'Multimodal notes',
    description:
      'Upload labs, PDFs, or voice dictations and let the bot summarize each encounter in seconds.',
  },
  {
    title: 'Enterprise guardrails',
    description:
      'Audit trails, PHI scrubbing, and SOC2-ready logging come standard to keep compliance teams happy.',
  },
]

const faqs = [
  {
    question: 'How do I deploy the chatbot?',
    answer:
      'Point the backend to your preferred EHR sandbox, configure intents in minutes, and the landing page will guide new teams through onboarding.',
  },
  {
    question: 'Is the data secure?',
    answer:
      'All traffic is encrypted, we never store PHI beyond your Postgres instance, and the backend ships with CORS + API key hooks.',
  },
  {
    question: 'Can I integrate paging tools?',
    answer:
      'Yes. The backend exposes REST hooks so you can ping existing call systems or messaging apps when escalation is required.',
  },
]

const testimonials = [
  {
    quote:
      'Our residents no longer need to guess which attending is on. The bot answers coverage questions and escalates the tough cases automatically.',
    author: 'Dr. Maya Patel',
    role: 'Chief Hospitalist, North Valley',
  },
  {
    quote:
      'Within two weeks of launch, hallway calls dropped by 38%. The chatbot became the single source of truth for our night teams.',
    author: 'Brandon Li',
    role: 'Director of Virtual Care, Kindred Partners',
  },
]

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? ''
const initialFormState = { email: '', organization: '', message: '' }

function App() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const backendConfigured = Boolean(API_BASE_URL)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status.state === 'loading') return

    if (!backendConfigured) {
      setStatus({
        state: 'error',
        message: 'Set VITE_API_BASE_URL before collecting submissions.',
      })
      return
    }

    setStatus({ state: 'loading', message: 'Sending your request...' })

    try {
      const response = await fetch(`${API_BASE_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload?.detail ?? 'Unable to submit right now.')
      }

      setFormData(initialFormState)
      setStatus({
        state: 'success',
        message: 'Thanks! We will be in touch shortly.',
      })
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message ?? 'Something went wrong. Try again later.',
      })
    }
  }

  return (
    <div className="app">
      <header className="hero" id="top">
        <div className="hero__eyebrow">Attending Physician Copilot</div>
        <h1 className="hero__title">
          Give every patient a responsive attending, even after hours.
        </h1>
        <p className="hero__subtitle">
          Spin up an always-on chatbot that triages requests, routes to the right physician, and
          captures every interaction for your care teams.
        </p>
        <div className="hero__buttons">
          <a className="btn primary" href="#contact">
            Book a walk-through
          </a>
          <a className="btn secondary" href="#story">
            See how it works
          </a>
        </div>
        <div className="hero__stats">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <div className="stat__value">{item.value}</div>
              <div className="stat__label">{item.label}</div>
            </div>
          ))}
        </div>
      </header>

      <section className="showcase" id="story">
        <div className="showcase__card">
          <p className="eyebrow">Why health systems choose us</p>
          <h2>All the guardrails you need, none of the waiting.</h2>
          <p>
            Launch in under a day with a landing page, backend, and Postgres schema purpose-built
            for capturing chat leads and routing every request to the right clinician.
          </p>
          <ul>
            <li>No custom DevOps — deploy the backend to Render in minutes.</li>
            <li>One `.env` file controls your database, API keys, and origins.</li>
            <li>GitHub Pages hosts the marketing layer, so updates land with a push.</li>
          </ul>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.author} className="testimonial">
            <p>“{testimonial.quote}”</p>
            <span>
              {testimonial.author} · {testimonial.role}
            </span>
          </blockquote>
        ))}
      </section>

      <section className="faq">
        <div className="faq__intro">
          <p className="eyebrow">FAQ</p>
          <h2>Everything you need to start</h2>
          <p>
            From hosting to forms, this starter handles the basics. Bring your brand, plug in your
            model, and start routing traffic to the chatbot in minutes.
          </p>
        </div>
        <div className="faq__items">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__copy">
          <p className="eyebrow">Launch checklist</p>
          <h2>Ready to meet the chatbot?</h2>
          <p>
            Drop your details and we’ll share the Render/Postgres template plus a guided tour of the
            backend endpoints.
          </p>
          {!backendConfigured && (
            <p className="contact__notice">
              Tip: set <code>VITE_API_BASE_URL</code> to the deployed backend URL so submissions are
              stored automatically.
            </p>
          )}
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Work email
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Organization
            <input
              type="text"
              name="organization"
              autoComplete="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            What should we cover?
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Integrations, compliance, pricing..."
              required
            />
          </label>
          <button className="btn primary" type="submit" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending...' : 'Request a walkthrough'}
          </button>
          {status.message && (
            <p className={`status status--${status.state}`}>{status.message}</p>
          )}
        </form>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Attending Physician Copilot</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
