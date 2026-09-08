import facts from '../data/facts.js';
import './FactsSection.css';

export default function FactsSection() {
  return (
    <section className="section facts-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            <span className="hash">#</span>
            <span className="text">quick facts</span>
          </h2>
          <span className="line" />
        </div>

        <div className="facts-section__grid">
          {facts.map((fact) => (
            <div className="fact-row" key={fact.label}>
              <span className="fact-row__label">{fact.label}</span>
              <span className="fact-row__value">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
