import { vehicles } from "@/data/vehicles";
import { useI18n } from "@/lib/i18n";

export default function Tariff() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("tariff.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("tariff.title1")} <span className="gradient-gold-text">{t("tariff.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("tariff.desc")}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-card reveal">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="gradient-gold-bg text-primary-foreground">
                <tr>
                  <th className="px-5 py-4 font-bold">{t("tariff.vehicle")}</th>
                  <th className="px-5 py-4 font-bold">{t("tariff.seats")}</th>
                  <th className="px-5 py-4 font-bold">{t("tariff.day")}</th>
                  <th className="px-5 py-4 font-bold">{t("tariff.perKm")}</th>
                  <th className="px-5 py-4 font-bold">{t("tariff.above")}</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v, i) => (
                  <tr
                    key={v.id}
                    className={`border-t border-gold/10 transition-colors hover:bg-gold/5 ${i % 2 ? "bg-cream" : ""}`}
                  >
                    <td className="px-5 py-4 font-medium">{v.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{v.seats}</td>
                    <td className="px-5 py-4 text-gold font-semibold">
                      ₹{v.dayRent?.toLocaleString("en-IN")}/{t("fleet.day")}
                    </td>
                    <td className="px-5 py-4">{v.perKm ? `₹${v.perKm}/km` : "—"}</td>
                    <td className="px-5 py-4">
                      {v.abovePerKm
                        ? `₹${v.abovePerKm}/km (${t("fleet.above")} ${v.aboveLimit}km)`
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
