import HeroVideo from "./HeroVideo";
import Particles from "./Particles";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <Particles />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-3 py-1 text-xs uppercase tracking-wider text-gold shadow-soft">
            <Sparkles className="h-3.5 w-3.5" /> {t("hero.badge")}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            {t("hero.title1")} <span className="gradient-gold-text">{t("hero.title2")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">{t("hero.desc")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full gradient-gold-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
            >
              {t("hero.bookNow")} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-6 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/10 hover:-translate-y-0.5"
            >
              {t("hero.viewPricing")}
            </a>
          </div>
        </div>

        <div className="relative h-[360px] w-full md:h-[460px] lg:h-[520px]">
          <div className="absolute -inset-2 rounded-3xl gold-ring" />
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
