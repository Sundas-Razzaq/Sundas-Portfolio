import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Decorative.jsx';
import { BurgerIcon, CloseIcon, GithubIcon, EmailIcon, LinkedinIcon } from './Icons.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'home' },
  { to: '/works', label: 'works' },
  { to: '/about-me', label: 'about-me' },
  { to: '/contacts', label: 'contacts' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <Logo size={18} />
          <span>Sundas Razzaq</span>
        </NavLink>

        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              <span className="nav-link__hash">#</span>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <button
            className="site-header__burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`}
            >
              <span className="nav-link__hash">#</span>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="mobile-menu__social">
          <a href="https://github.com/Sundas-Razzaq" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/sundas-razzaq-00a865316/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="mailto:sundasr621@gmail.com" aria-label="Email"><EmailIcon /></a>
        </div>
      </div>
    </header>
  );
}
