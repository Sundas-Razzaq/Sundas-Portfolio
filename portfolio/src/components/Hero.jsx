import { Dots } from './Decorative.jsx';

import { Link } from 'react-router-dom';

import useTypewriter from '../hooks/useTypewriter.js';

import './Hero.css';

const INTRO_SENTENCES = [
  'I build responsive and user-focused web applications with modern technologies.',
  'I turn ideas into clean, functional, and scalable full-stack applications.',
  'I enjoy writing clean code, building intuitive interfaces, and solving real-world problems.',
];

export default function Hero({ imageSrc = '/image.png', imageAlt = 'Sundas Razzaq' }) {
  const typedText = useTypewriter(INTRO_SENTENCES);

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Sundas is a <span className="hero__highlight">full-stack developer</span> and{' '}
            <span className="hero__highlight">Computer Science student</span>
          </h1>

          <p className="hero__subtitle hero__subtitle--typed">
            {typedText}
            <span className="hero__cursor" aria-hidden="true" />
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'nowrap',
            }}
          >
            <Link to="/contacts" className="btn btn-primary">
              Contact me!!
            </Link>

            <a
              href="/resume.pdf"
              download="Sundas-Razzaq-Resume.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__ring hero__ring--outer" aria-hidden="true" />
          <div className="hero__ring hero__ring--inner" aria-hidden="true" />

          <div className="hero__photo">
            {imageSrc ? (
              <img src={imageSrc} alt={imageAlt} />
            ) : (
              <div className="hero__photo-placeholder"></div>
            )}
          </div>

          <Dots size={72} className="hero__dots" />
        </div>
      </div>

      <div className="container">
        <div className="hero__status">
          <span className="hero__status-dot" />
          <p>
            Currently working on <strong>Full-Stack Projects</strong>
          </p>
        </div>
      </div>
    </section>
  );
}