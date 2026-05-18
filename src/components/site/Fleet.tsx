import { Upload, MessageCircle, Users } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { useI18n } from "@/lib/i18n";

const waLink = (v: string) =>
  `https://wa.me/917397397991?text=${encodeURIComponent(
    `Hi JP Tours and Travels, I'd like to book the ${v}. Please share availability.`
  )}`;

export default function Fleet() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("fleet.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("fleet.title1")} <span className="gradient-gold-text">{t("fleet.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("fleet.desc")}</p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, idx) => (
            <article
              key={v.id}
              className="glass reveal group flex flex-col overflow-hidden rounded-2xl shadow-soft hover-lift hover:shadow-gold"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                {v.image ? (
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.97 0.02 85) 0%, oklch(0.93 0.03 80) 100%)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                      <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-white/80 shadow-soft">
                        <Upload className="h-5 w-5 text-gold" />
                      </div>
                      <span className="text-xs uppercase tracking-wider">{t("fleet.upload")}</span>
                    </div>
                  </>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full gradient-gold-bg px-3 py-1 text-xs font-semibold text-primary-foreground shadow-gold">
                  <Users className="h-3 w-3" /> {v.seats}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{v.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("fleet.seatCapacity")}: <span className="text-foreground">{v.seats}</span>
                </p>

                {!v.bus ? (
                  <div className="mt-5">
                    <div className="text-xs uppercase tracking-wider text-gold">{t("fleet.pricing")}</div>

                    {v.abovePerKm && v.aboveLimit && (
                      <div className="mt-2 flex items-center justify-between rounded-lg border border-gold/20 bg-cream px-3 py-2 text-sm">
                        <span className="text-muted-foreground">
                          {t("fleet.above")} {v.aboveLimit}km
                        </span>
                        <span className="font-semibold text-gold">₹{v.abovePerKm}/km</span>
                      </div>
                    )}

                    <div className="mt-3 overflow-hidden rounded-lg border border-gold/20">
                      <div className="grid grid-cols-2 bg-gold/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gold">
                        <span>{t("fleet.rent")}</span>
                        <span>{t("fleet.fuel")}</span>
                      </div>
                      <div className="grid grid-cols-2 px-3 py-2 text-sm">
                        <span className="text-foreground">₹{v.dayRent}/{t("fleet.day")}</span>
                        <span className="text-foreground">₹{v.perKm}/km</span>
                      </div>
                      <div className="px-3 pb-2 text-[11px] text-muted-foreground">
                        {t("fleet.below")} {v.aboveLimit ?? 300}km
                      </div>
                    </div>

                    {v.hourRent && (
                      <div className="mt-3 rounded-lg border border-gold/20 bg-cream px-3 py-2 text-sm">
                        <span className="font-semibold text-foreground">
                          {t("fleet.hourRent")}: ₹{v.hourRent.price}
                        </span>
                        <span className="ml-1 text-xs text-muted-foreground">
                          ({t("fleet.inclOf")} {v.hourRent.hours} {t("fleet.hours")} & {v.hourRent.km}km)
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mt-5 rounded-lg border border-gold/25 bg-cream p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-gold">
                      {t("fleet.tankToTank")}
                    </div>
                    <div className="mt-1 text-2xl font-bold gradient-gold-text">
                      ₹{v.dayRent?.toLocaleString("en-IN")}/{t("fleet.day")}
                    </div>
                  </div>
                )}

                <a
                  href={waLink(v.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl gradient-gold-bg px-5 py-3 text-sm font-bold text-primary-foreground shadow-gold transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("fleet.bookNow")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
