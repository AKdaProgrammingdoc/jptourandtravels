import { useState, FormEvent } from "react";
import { MessageCircle, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WA_NUMBER = "917397397991";

export default function Feedback() {
  const { t } = useI18n();
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const stars = "⭐".repeat(rating);
    const msg = `*Feedback & Review - JP Tours and Travels*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Rating:* ${stars} (${rating}/5)%0A*Feedback:* ${form.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  const input =
    "w-full rounded-lg border border-gold/25 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all duration-300";

  return (
    <section id="feedback" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("feedback.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("feedback.title1")} <span className="gradient-gold-text">{t("feedback.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("feedback.desc")}</p>
        </div>

        <form
          onSubmit={submit}
          className="mt-12 grid gap-4 rounded-2xl bg-white p-6 shadow-card md:p-10 reveal border border-gold/15"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input className={input} required placeholder={t("book.name")} value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={100} />
            <input className={input} required type="tel" placeholder={t("book.phone")} value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={20} />
          </div>

          <div className="flex flex-col items-center gap-2 py-2">
            <span className="text-sm font-semibold text-muted-foreground">{t("feedback.rate")}</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  className="transition-transform hover:scale-110"
                  aria-label={`Rate ${i} stars`}
                >
                  <Star
                    className={`h-8 w-8 ${
                      i <= (hover || rating) ? "fill-gold text-gold" : "text-gold/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <textarea
            className={input}
            rows={4}
            required
            maxLength={1000}
            placeholder={t("feedback.placeholder")}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl gradient-gold-bg px-6 py-4 text-base font-bold text-primary-foreground shadow-gold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> {t("feedback.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
