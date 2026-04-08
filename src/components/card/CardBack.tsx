export function CardBack() {
  return (
    <div
      className="card__back"
      style={{
        background: '#FF4F81',
        boxShadow: '0px 4px 40px rgba(0,0,0,0.1)',
      }}
    >
      {/* Lime green inner area matching Figma */}
      <div
        className="absolute inset-[1.4%] rounded-[20px] overflow-hidden flex items-center justify-center"
        style={{ background: '#F2FF6C' }}
      >
        {/* Repeating character pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #FF4F81 2px, transparent 2px),
              radial-gradient(circle at 75% 25%, #00AEEF 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, #F78E05 3px, transparent 3px),
              radial-gradient(circle at 25% 75%, #00AEEF 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #FF4F81 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Centre branding */}
        <div className="relative text-center z-10">
          <div
            className="text-5xl font-black tracking-tight"
            style={{ color: '#222222' }}
          >
            A11Y
          </div>
          <div
            className="text-sm font-bold uppercase tracking-[0.35em] mt-1"
            style={{ color: '#FF4F81' }}
          >
            Cards
          </div>
        </div>

        {/* Corner dots */}
        <div className="absolute top-4 left-4 w-3 h-3 rounded-full" style={{ background: '#FF4F81' }} />
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full" style={{ background: '#00AEEF' }} />
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full" style={{ background: '#00AEEF' }} />
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full" style={{ background: '#FF4F81' }} />
      </div>
    </div>
  );
}
