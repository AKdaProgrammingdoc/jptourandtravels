import { useState, FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { useI18n } from "@/lib/i18n";

const WA_NUMBER = "917397397991";

export default function BookForm() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: vehicles[0].name,
    passengers: "",
    from: "Madurai",
    to: "",
    date: "",
    notes: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `*New Booking - JP Tours and Travels*%0A
*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Vehicle:* ${form.vehicle}%0A*Passengers:* ${form.passengers}%0A*From:* ${form.from}%0A*To:* ${form.to}%0A*Date:* ${form.date}%0A*Notes:* ${form.notes || "-"}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  const input =
    "w-full rounded-lg border border-gold/25 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all duration-300";

  return (
    <section id="book" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("book.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("book.title1")} <span className="gradient-gold-text">{t("book.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("book.desc")}</p>
        </div>

        <form
          onSubmit={submit}
          className="mt-12 grid gap-4 rounded-2xl bg-white p-6 shadow-card md:p-10 reveal border border-gold/15"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input className={input} required placeholder={t("book.name")} value={form.name} onChange={(e) => set("name", e.target.value)} />
            <input className={input} required type="tel" placeholder={t("book.phone")} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            <select className={input} value={form.vehicle} onChange={(e) => set("vehicle", e.target.value)}>
              {vehicles.map((v) => (
                <option key={v.id} value={v.name}>
                  {v.name} ({v.seats})
                </option>
              ))}
            </select>
            <input className={input} type="number" min="1" placeholder={t("book.passengers")} value={form.passengers} onChange={(e) => set("passengers", e.target.value)} />
            <input className={input} required placeholder={t("book.from")} value={form.from} onChange={(e) => set("from", e.target.value)} />
            <input className={input} required placeholder={t("book.to")} value={form.to} onChange={(e) => set("to", e.target.value)} />
            <input className={`${input} md:col-span-2`} required type="date" value={form.date} onChange={(e) => set("date", e.target.value)} />
          </div>
          <textarea className={input} rows={3} placeholder={t("book.notes")} value={form.notes} onChange={(e) => set("notes", e.target.value)} />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl gradient-gold-bg px-6 py-4 text-base font-bold text-primary-foreground shadow-gold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> {t("book.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
