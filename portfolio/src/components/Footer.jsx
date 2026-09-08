import { Logo } from './Decorative.jsx';
import { GithubIcon, EmailIcon, LinkedinIcon } from './Icons.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <div className="site-footer__brand">
              <Logo size={16} />
              <span>Sundas Razzaq</span>
              <a href="mailto:sundasr621@gmail.com" className="site-footer__email">
                sundasr621@gmail.com
              </a>
            </div>
            <p className="site-footer__tagline">MERN STACK DEVELOPER</p>
          </div>

          <div className="site-footer__media">
            <p className="site-footer__media-title">Media</p>
            <div className="site-footer__social">
              <a href="https://github.com/Sundas-Razzaq" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/sundas-razzaq-00a865316/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="mailto:sundasr621@gmail.com" aria-label="Email"><EmailIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
