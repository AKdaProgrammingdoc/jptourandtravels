import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const reviews = [
  { name: "Rajesh Kumar", key: "rev.1" },
  { name: "Priya Devi", key: "rev.2" },
  { name: "Murugan S", key: "rev.3" },
  { name: "Lakshmi R", key: "rev.4" },
  { name: "Arjun T", key: "rev.5" },
  { name: "Santhosh M", key: "rev.6" },
];

export default function Reviews() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("reviews.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("reviews.title1")} <span className="gradient-gold-text">{t("reviews.title2")}</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <article
              key={r.name}
              className="reveal relative rounded-2xl bg-white p-6 shadow-soft hover-lift"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/25" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t(r.key)}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-gold-bg font-bold text-primary-foreground shadow-gold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{t("reviews.verified")}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
