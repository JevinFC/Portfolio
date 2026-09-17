import "./axeIcon.scss";

const BLADE_PATH = "M88 50 L58 36 C40 28 24 44 24 62 C24 80 40 96 58 88 L88 74 Z";
const EDGE_PATH =
  "M58 36 C40 28 24 44 24 62 C24 80 40 96 58 88 C45 83 35 74 35 62 C35 50 45 41 58 36 Z";

function AxeIcon({ className = "" }) {
  return (
    <svg
      className={className ? `axe ${className}` : "axe"}
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="axe__handle" x="93" y="28" width="14" height="162" rx="7" />
      <rect className="axe__grip" x="90" y="150" width="20" height="6" rx="3" />
      <rect className="axe__grip" x="90" y="162" width="20" height="6" rx="3" />
      <rect className="axe__grip" x="90" y="174" width="20" height="6" rx="3" />
      <g>
        <path className="axe__blade" d={BLADE_PATH} />
        <path className="axe__edge" d={EDGE_PATH} />
      </g>
      <g transform="translate(200 0) scale(-1 1)">
        <path className="axe__blade" d={BLADE_PATH} />
        <path className="axe__edge" d={EDGE_PATH} />
      </g>
      <rect className="axe__head" x="83" y="45" width="34" height="34" rx="5" />
      <circle className="axe__rivet" cx="100" cy="62" r="5.5" />
    </svg>
  );
}

export default AxeIcon;
