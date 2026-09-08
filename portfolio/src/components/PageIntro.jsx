import './PageIntro.css';

export default function PageIntro({ crumb, subtitle }) {
  return (
    <div className="page-intro">
      <p className="page-intro__crumb">
        <span className="page-intro__slash">/</span>
        {crumb}
      </p>
      <p className="page-intro__subtitle">{subtitle}</p>
    </div>
  );
}
