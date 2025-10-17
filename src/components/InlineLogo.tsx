export default function InlineLogo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ARAC logo">
      {/* white background with 6px padding */}
      <rect x="6" y="6" width="150" height="150" rx="6" fill="#ffffff" />
      {/* Left wreath strokes */}
      <g transform="translate(10,15)" fill="none" stroke="#23C1F0" strokeWidth={3} strokeLinecap="round">
        <path d="M10 55c6-6 18-18 28-22" />
        <path d="M8 48c5-5 14-14 22-18" strokeWidth={2} />
      </g>

      {/* Right wreath (mirror) */}
      <g transform="translate(140,15) scale(-1,1)" fill="none" stroke="#23C1F0" strokeWidth={3} strokeLinecap="round">
        <path d="M10 55c6-6 18-18 28-22" />
        <path d="M8 48c5-5 14-14 22-18" strokeWidth={2} />
      </g>

      {/* Droplet center */}
      <g transform="translate(45,10)">
        <path d="M30 5c8 10 18 22 18 32 0 14-12 28-28 28S-8 51-8 37C-8 27 6 15 30 5z" fill="#22BFF2" />
        <path d="M30 5c-7 5-14 10-18 14-4 4-6 8-6 14 0 12 10 26 26 26s26-14 26-26c0-6-2-10-6-14-4-4-11-9-18-14z" fill="#053B56" opacity="0.18" />
        <ellipse cx="18" cy="38" rx="3" ry="3" fill="#fff" />
        <ellipse cx="12" cy="30" rx="1.6" ry="1.6" fill="#fff" />
      </g>

      {/* ARAC text below droplet */}
      <text x="75" y="128" textAnchor="middle" fontFamily="Segoe UI, Roboto, Arial, sans-serif" fontWeight={700} fontSize={18} fill="#23C1F0">ARAC</text>
    </svg>
  )
}