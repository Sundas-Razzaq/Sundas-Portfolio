import { useEffect, useState } from 'react';

export default function useTypewriter(
  sentences,
  { typingSpeed = 45, deletingSpeed = 25, pause = 1600 } = {}
) {
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = sentences[sentenceIndex % sentences.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, sentenceIndex, sentences, typingSpeed, deletingSpeed, pause]);

  return text;
}
