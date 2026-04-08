export function CardBack() {
  return (
    <div className="card__back" style={{ background: '#F0FAFF' }}>
      {/* Blue inner area */}
      <div className="absolute inset-[1.4%] rounded-[20px] overflow-hidden bg-[#0B75B7]">
        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 8px,
              rgba(255,255,255,0.15) 8px,
              rgba(255,255,255,0.15) 9px
            )`,
          }}
        />

        {/* Centre logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-black text-white/20 tracking-wider">A11Y</div>
            <div className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-white/15 mt-1">Cards</div>
          </div>
        </div>
      </div>
    </div>
  );
}
