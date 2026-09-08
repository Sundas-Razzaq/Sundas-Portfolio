import skills from '../data/skills.js';
import './SkillsSection.css';

export default function SkillsSection() {
  return (
    <section className="section skills-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            <span className="hash">#</span>
            <span className="text">skills</span>
          </h2>
          <span className="line" />
        </div>

        <div className="skills-section__grid">
          {skills.map((group) => (
            <div className="skill-block" key={group.category}>
              <p className="skill-block__title">{group.category}</p>
              <div className="skill-block__divider" />
              <ul className="skill-block__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
