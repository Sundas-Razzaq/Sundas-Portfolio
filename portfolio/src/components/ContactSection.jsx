import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { DiscordIcon, EmailIcon } from './Icons.jsx';
import './ContactSection.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = { name: '', email: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {

      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  }

  return (
    <section id="contacts" className="section contact-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            <span className="hash">#</span>
            <span className="text">contacts</span>
          </h2>
          <span className="line" />
        </div>

        <div className="contact-section__grid">
          <p className="contact-section__intro">
            I&rsquo;m interested in freelance opportunities. However, if you have other request or
            question, don&rsquo;t hesitate to contact me
          </p>

          <div className="contact-card">
            <p className="contact-card__title">Message me here</p>
            <div className="contact-card__links">

              <a href="mailto:sundasr621@gmail.com">
                <EmailIcon /> <span>sundasr621@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="contact-form__status contact-form__status--success">
              Thanks! Your message has been sent — I&rsquo;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__status contact-form__status--error">
              Something went wrong sending your message. Please try again, or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
