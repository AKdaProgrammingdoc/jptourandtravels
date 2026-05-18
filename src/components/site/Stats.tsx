import { useI18n } from "@/lib/i18n";

export default function Stats() {
  const { t } = useI18n();
  const stats = [
    { v: "500+", l: t("stats.customers") },
    { v: "10+", l: t("stats.experience") },
    { v: "50+", l: t("stats.destinations") },
    { v: "24/7", l: t("stats.support") },
  ];
  return (
    <section className="relative border-y border-gold/15 bg-cream py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <div key={s.l} className="text-center reveal hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="text-3xl font-bold gradient-gold-text md:text-5xl">{s.v}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
