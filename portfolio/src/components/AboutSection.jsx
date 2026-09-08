import { Link } from 'react-router-dom';

import { Dots } from './Decorative.jsx';

import './AboutSection.css';

export default function AboutSection({
  imageSrc = '/image.png',
  showReadMore = true,
  fullText = false,
}) {
  return (
    <section id="about-me" className="section about-section">
      <div className="container about-section__grid">
        <div className="about-section__copy">
          <div className="section-heading">
            <h2>
              <span className="hash">#</span>
              <span className="text">about-me</span>
            </h2>
            <span className="line" />
          </div>

          <p>Hello, I&rsquo;m Sundas!</p>

          <p>
            I&rsquo;m a Computer Science student and a Full-Stack Web Developer
            focused on building responsive, user-friendly, and practical web
            applications. I primarily work with the MERN stack and continue to
            expand my backend development skills with Django.
          </p>

          {fullText && (
            <>
              <p>
                I enjoy turning ideas into functional web experiences, from
                designing intuitive interfaces to building the backend logic
                and APIs that power them. Working on real-world projects has
                helped me strengthen my development skills and understand how
                different parts of a web application work together.
              </p>

              <p>
                I&rsquo;m continuously learning new technologies and improving
                my approach to writing clean, maintainable code. I also enjoy
                collaborating on projects, solving development challenges, and
                building applications that are both useful and reliable.
              </p>
            </>
          )}

          {showReadMore && (
            <Link to="/about-me" className="btn btn-primary about-section__btn">
              Read more {'->'}
            </Link>
          )}
        </div>

        <div className="about-section__media">
          <div className="about-section__photo">
            {imageSrc ? (
              <img src={imageSrc} alt="Sundas Razzaq" />
            ) : (
              <div className="about-section__placeholder">Add your photo here</div>
            )}
          </div>

          <Dots size={64} className="about-section__dots" />
        </div>
      </div>
    </section>
  );
}