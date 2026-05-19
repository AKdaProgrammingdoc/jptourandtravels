import { Crown, MessageCircle, Sparkles } from "lucide-react";

type VVIPVehicle = {
  id: string;
  name: string;
  image: string;
  badge: string;
  rows: { label: string; value: string }[];
};

const fortuner: VVIPVehicle = {
  id: "fortuner",
  name: "Toyota Fortuner",
  image: "/media/fortuner.webp",
  badge: "Luxury SUV",
  rows: [
    { label: "Day Rental", value: "₹ 7,000 /-" },
    { label: "Per Km", value: "₹ 25 /km" },
    { label: "Above 300 Km", value: "₹ 40 /km" },
    { label: "Driver Batta", value: "₹ 900 /-" },
  ],
};

const luxury: VVIPVehicle[] = [
  {
    id: "benz",
    name: "Mercedes-Benz",
    image: "/media/benz.jpg",
    badge: "Premium Sedan",
    rows: [{ label: "8 Hours Package", value: "₹ 25,000 /-" }],
  },
  {
    id: "audi",
    name: "Audi",
    image: "/media/audi.jpg",
    badge: "Premium SUV",
    rows: [{ label: "8 Hours Package", value: "₹ 23,000 /-" }],
  },
  {
    id: "jaguar",
    name: "Jaguar",
    image: "/media/jaguar.avif",
    badge: "Luxury Sedan",
    rows: [{ label: "8 Hours Package", value: "₹ 27,000 /-" }],
  },
  {
    id: "bmw",
    name: "BMW",
    image: "/media/bmw.jpg",
    badge: "Premium Sedan",
    rows: [{ label: "8 Hours Package", value: "₹ 24,000 /-" }],
  },
];

const wa = (name: string) =>
  `https://wa.me/917397397991?text=${encodeURIComponent(
    `Hi JP Tours and Travels, I'd like to book the VVIP ${name}. Please share availability.`
  )}`;

function VVIPCard({ v }: { v: VVIPVehicle }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] shadow-gold reveal hover-lift">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(201,168,76,0.35),_transparent_60%)]" />
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={v.image}
          alt={v.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur ring-1 ring-gold/40">
          <Crown className="h-3 w-3" /> VVIP
        </span>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold/90">{v.badge}</p>
          <h3 className="mt-1 text-2xl font-bold text-white">{v.name}</h3>
        </div>
      </div>

      <div className="relative p-6">
        <ul className="divide-y divide-gold/15">
          {v.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between py-3">
              <span className="text-sm text-white/70">{r.label}</span>
              <span className="font-semibold text-gold">{r.value}</span>
            </li>
          ))}
        </ul>
        <a
          href={wa(v.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-gold-bg px-5 py-3 text-sm font-bold text-primary-foreground shadow-gold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Book VVIP
        </a>
      </div>
    </article>
  );
}

export default function VVIP() {
  return (
    <section id="vvip" className="relative overflow-hidden py-20 md:py-28 bg-[#080808] text-white">
      {/* Animated luxury background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-blob" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-yellow-700/15 blur-3xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold backdrop-blur">
            <Sparkles className="h-3 w-3" /> Exclusive Fleet
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            VVIP <span className="gradient-gold-text">Transport</span>
          </h2>
          <p className="mt-4 text-white/70">
            Travel like royalty. Chauffeur-driven luxury vehicles for executives, weddings & special occasions.
          </p>
        </div>

        {/* Fortuner — featured */}
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          <VVIPCard v={fortuner} />
          <div className="reveal flex flex-col justify-center rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-8 md:p-10">
            <Crown className="h-10 w-10 text-gold" />
            <h3 className="mt-4 text-2xl font-bold md:text-3xl">
              Arrive in <span className="gradient-gold-text">Signature Style</span>
            </h3>
            <p className="mt-3 text-white/70">
              Our VVIP fleet pairs world-class vehicles with professional chauffeurs, immaculate interiors and absolute discretion.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Uniformed professional chauffeurs</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Complimentary water & mints</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Privacy & punctuality guaranteed</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Toll & parking extra</li>
            </ul>
          </div>
        </div>

        {/* Luxury 8-hour packages */}
        <div className="mt-12 text-center reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">8 Hours Packages</span>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">Luxury Marques</h3>
        </div>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {luxury.map((v) => (
            <VVIPCard key={v.id} v={v} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-white/50">
          Toll & Parking Extra · Advance Booking Recommended
        </p>
      </div>
    </section>
  );
}
