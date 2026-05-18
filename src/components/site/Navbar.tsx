import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const linkKeys = [
  { href: "#home", key: "nav.home" },
  { href: "#services", key: "nav.services" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#places", key: "nav.places" },
  { href: "#reviews", key: "nav.reviews" },
  { href: "#book", key: "nav.book" },
  { href: "#contact", key: "nav.contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langs: { code: "en" | "ta" | "hi"; label: string; short: string }[] = [
    { code: "en", label: "English", short: "EN" },
    { code: "ta", label: "தமிழ்", short: "த" },
    { code: "hi", label: "हिन्दी", short: "हि" },
  ];


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
          <img
            src="/media/logo.png"
            alt="JP Tours & Travels"
            className="h-11 w-11 rounded-full object-cover shadow-soft ring-1 ring-gold/30"
          />
          <span className="text-base font-semibold tracking-tight md:text-lg">
            <span className="gradient-gold-text">JP</span> Tours & Travels
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {linkKeys.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors duration-300 hover:text-gold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-white/70 p-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-label={`Switch to ${l.label}`}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  lang === l.code
                    ? "gradient-gold-bg text-primary-foreground shadow-gold"
                    : "text-gold hover:bg-gold/10"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/917397397991"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-gold-bg px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            {t("nav.whatsapp")}
          </a>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <div className="inline-flex items-center gap-0.5 rounded-full border border-gold/30 bg-white/70 p-0.5">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-label={`Switch to ${l.label}`}
                className={`rounded-full px-2 py-1 text-[10px] font-semibold transition-all ${
                  lang === l.code ? "gradient-gold-bg text-primary-foreground" : "text-gold"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border bg-white/70 p-2 text-gold transition-colors hover:bg-gold/10"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="glass-strong border-t border-border">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {linkKeys.map((l, i) => (
              <li key={l.href} style={{ animation: open ? `slide-in 0.4s ${i * 0.05}s both` : "none" }}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/917397397991"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full gradient-gold-bg px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> {t("nav.whatsapp")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
