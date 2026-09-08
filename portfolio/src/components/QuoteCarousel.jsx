import { useEffect, useState } from 'react';
import quotes from '../data/quotes.js';
import './Quote.css';

const INTERVAL = 5000;
const FADE_DURATION = 400;

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setVisible(true);
      }, FADE_DURATION);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const current = quotes[index];

  return (
    <div className="quote-block">
      <span className="quote-block__mark quote-block__mark--open">“</span>

      <div className={`quote-block__fade${visible ? ' quote-block__fade--visible' : ''}`}>
        <p className="quote-block__text">{current.text}</p>
        <div className="quote-block__author">
          <span className="quote-block__mark">“</span>
          <p>- {current.author}</p>
        </div>
      </div>
    </div>
  );
}
