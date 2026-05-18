import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer id="contact" className="relative border-t border-gold/20 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div className="reveal">
          <div className="flex items-center gap-3">
            <img
              src="/media/logo.png"
              alt="JP Tours & Travels"
              className="h-14 w-14 rounded-full object-cover shadow-soft ring-1 ring-gold/30"
            />
            <span className="text-lg font-semibold">
              <span className="gradient-gold-text">JP</span> Tours & Travels
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.desc")}</p>
        </div>

        <div className="space-y-3 text-sm reveal">
          <h4 className="text-base font-semibold text-gold">{t("footer.contact")}</h4>
          <p className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>36 New Extension, Khasanpuram, Goripalayam, Madurai – 625002</span>
          </p>
          <p className="flex items-center gap-3 text-muted-foreground">
            <Phone className="h-4 w-4 text-gold" />
            <span>+91 73973 97991</span>
          </p>
          <p className="flex items-center gap-3 text-muted-foreground">
            <Mail className="h-4 w-4 text-gold" />
            <span>info@jptoursandtravels.in</span>
          </p>
          <a
            href="https://wa.me/917397397991"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full gradient-gold-bg px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> {t("footer.wa")}
          </a>
        </div>

        <div className="reveal">
          <h4 className="text-base font-semibold text-gold">{t("footer.find")}</h4>
          <div className="mt-3 aspect-video overflow-hidden rounded-xl border border-gold/25 bg-cream">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Goripalayam,Madurai&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15 py-5 text-center text-xs text-muted-foreground">
        {t("footer.rights")}
      </div>
    </footer>
  );
}
