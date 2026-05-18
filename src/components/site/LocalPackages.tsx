import { MapPin, Plane } from "lucide-react";

const local = [
  { name: "Innova", price: "3,300" },
  { name: "Crysta", price: "4,400" },
  { name: "Sedan", price: "3,100" },
  { name: "14+1 Tempo", price: "4,500" },
  { name: "18+1 Tempo", price: "5,760" },
  { name: "Urbania", price: "10,160" },
];

const airport = [
  { name: "Innova", price: "2,000" },
  { name: "Crysta", price: "2,500" },
  { name: "Tempo", price: "2,500" },
  { name: "18+1", price: "3,000" },
  { name: "Urbania", price: "4,000" },
  { name: "Sedan", price: "1,800" },
];

function Card({
  title,
  subtitle,
  icon,
  rows,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  rows: { name: string; price: string }[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft md:p-8 reveal">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/20" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-gold-bg text-primary-foreground shadow-soft">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{subtitle}</p>
          </div>
        </div>
        <ul className="mt-6 divide-y divide-gold/15">
          {rows.map((r) => (
            <li
              key={r.name}
              className="flex items-center justify-between py-3 transition-colors hover:bg-gold/5"
            >
              <span className="font-medium">{r.name}</span>
              <span className="font-semibold text-gold">₹ {r.price} /-</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function LocalPackages() {
  return (
    <section id="local-packages" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">Madurai Local</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Local <span className="gradient-gold-text">Packages</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Toll & parking extra. Transparent pricing for in-city and airport rides.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <Card
            title="Madurai Local Package"
            subtitle="8 Hours · Toll & Parking Extra"
            icon={<MapPin className="h-5 w-5" />}
            rows={local}
          />
          <Card
            title="Airport Transfers"
            subtitle="One-way · Madurai Airport"
            icon={<Plane className="h-5 w-5" />}
            rows={airport}
          />
        </div>
      </div>
    </section>
  );
}
