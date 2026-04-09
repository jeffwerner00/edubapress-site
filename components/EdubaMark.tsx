export function EdubaMark({
  size = 28,
  color = '#F0E8D6',
  strokeWidth = 2.5,
}: {
  size?: number
  color?: string
  strokeWidth?: number
}) {
  const height = Math.round(size * (84 / 64))
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 64 84"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M8 3H56Q61 3 61 8V72Q61 81 52 81H12Q3 81 3 72V8Q3 3 8 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect x="13" y="22" width="26" height="3" fill={color} />
      <polygon points="39,20.5 39,26.5 47,23.5" fill={color} />
      <rect x="13" y="36" width="18" height="3" fill={color} />
      <polygon points="31,34.5 31,40.5 39,37.5" fill={color} />
      <rect x="20" y="50" width="19" height="3" fill={color} />
      <polygon points="39,48.5 39,54.5 47,51.5" fill={color} />
    </svg>
  )
}
