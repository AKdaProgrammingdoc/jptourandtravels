export default function HeroVideo() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-gold/25 shadow-card bg-cream">
      <video
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Soft gold vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, oklch(0.72 0.16 75 / 0.25) 0%, transparent 55%), linear-gradient(180deg, transparent 60%, oklch(0.18 0.04 260 / 0.25) 100%)",
        }}
      />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
        <span className="rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur">
          South India · Showreel
        </span>
        <span className="rounded-full gradient-gold-bg px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-gold">
          Live
        </span>
      </div>
    </div>
  );
}
