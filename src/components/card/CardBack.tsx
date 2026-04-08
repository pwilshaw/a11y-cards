export function CardBack() {
  return (
    <div className="card__back bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Decorative pattern */}
          <div className="w-32 h-32 rounded-full border-2 border-slate-600 opacity-40" />
          <div className="absolute inset-4 rounded-full border-2 border-slate-500 opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-slate-500 tracking-wider">A11Y</span>
          </div>
        </div>
      </div>
      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-slate-600 rounded-tl-md opacity-40" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-slate-600 rounded-tr-md opacity-40" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-slate-600 rounded-bl-md opacity-40" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-slate-600 rounded-br-md opacity-40" />
    </div>
  );
}
