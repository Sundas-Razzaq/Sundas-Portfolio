export function Logo({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2 29 9v14L16 30 3 23V9z"
        stroke="#c778dd"
        strokeWidth="2"
        fill="none"
      />
      <path d="M16 2v28M3 9l13 7 13-7M3 23l13-7 13 7" stroke="#c778dd" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

export function Dots({ size = 84, className = '' }) {
  const cell = size / 5;
  const dots = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={cell * col + cell / 2}
          cy={cell * row + cell / 2}
          r={size / 42}
          fill="currentColor"
        />
      );
    }
  }
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ color: 'var(--color-gray)', opacity: 0.5 }}
    >
      {dots}
    </svg>
  );
}
