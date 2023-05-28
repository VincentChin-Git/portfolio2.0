const LinesIcon = ({ color, size }: { color: string; size: string }) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path
        d="M11 20H29M11 14H29M11 26H29"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinesIcon;
