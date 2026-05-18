import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];
  return (
    <section id="faq" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("faq.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("faq.title1")} <span className="gradient-gold-text">{t("faq.title2")}</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal overflow-hidden rounded-xl bg-white shadow-soft border border-gold/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold md:text-base transition-colors hover:bg-gold/5"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
