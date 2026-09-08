import { GithubIcon, EmailIcon, LinkedinIcon } from './Icons.jsx';
import './SideMedia.css';

export default function SideMedia() {
  return (
    <div className="side-media" aria-hidden="false">
      <span className="side-media__line" />
      <div className="side-media__icons">
        <a href="https://github.com/Sundas-Razzaq" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
        <a href="https://www.linkedin.com/in/sundas-razzaq-00a865316/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
        <a href="mailto:sundasr621@gmail.com" aria-label="Email"><EmailIcon /></a>
      </div>
    </div>
  );
}
