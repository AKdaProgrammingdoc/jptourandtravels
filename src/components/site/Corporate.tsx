import { Briefcase, Building2, Users, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: { en: string; ta: string; hi: string };
  desc: { en: string; ta: string; hi: string };
};

const features: Feature[] = [
  {
    icon: Building2,
    title: { en: "Corporate Travel", ta: "கார்ப்பரேட் பயணம்", hi: "कॉर्पोरेट यात्रा" },
    desc: {
      en: "Executive sedans and SUVs for client meetings, airport transfers and city commutes.",
      ta: "வாடிக்கையாளர் சந்திப்பு, விமான மாற்றம் & நகர பயணங்களுக்கான எக்ஸிக்யூட்டிவ் கார்கள்.",
      hi: "क्लाइंट मीटिंग, एयरपोर्ट ट्रांसफर और शहरी सफर के लिए एग्ज़ीक्यूटिव सेडान व SUV।",
    },
  },
  {
    icon: Users,
    title: { en: "Employee Shuttles", ta: "ஊழியர் சட்டில்", hi: "कर्मचारी शटल" },
    desc: {
      en: "Daily pick-up & drop shuttles in tempo travellers and Urbania for teams of any size.",
      ta: "எந்த அளவிலான குழுவிற்கும் டெம்போ டிராவல்லர் & உர்பேனியா தினசரி பிக் & ட்ராப்.",
      hi: "किसी भी आकार की टीमों के लिए टेम्पो ट्रैवलर व अर्बेनिया में दैनिक पिक-ड्रॉप शटल।",
    },
  },
  {
    icon: Briefcase,
    title: { en: "Business Trips", ta: "வணிக பயணம்", hi: "बिज़नेस ट्रिप" },
    desc: {
      en: "Multi-city outstation packages with chauffeurs trained for corporate etiquette.",
      ta: "கார்ப்பரேட் ஒழுக்கத்தில் பயிற்சி பெற்ற ஓட்டுநர்களுடன் பல நகர வெளியூர் தொகுப்புகள்.",
      hi: "कॉर्पोरेट शिष्टाचार में प्रशिक्षित चालकों के साथ बहु-शहर आउटस्टेशन पैकेज।",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Safety First", ta: "பாதுகாப்பு முதலில்", hi: "सुरक्षा सर्वोपरि" },
    desc: {
      en: "GPS-tracked vehicles, verified drivers and complete insurance for peace of mind.",
      ta: "GPS கண்காணிப்பு, சரிபார்க்கப்பட்ட ஓட்டுநர்கள் & முழு காப்பீடு.",
      hi: "GPS-ट्रैक्ड वाहन, सत्यापित ड्राइवर और पूर्ण बीमा — पूरी निश्चिंतता।",
    },
  },
  {
    icon: Clock,
    title: { en: "24/7 On-Demand", ta: "24/7 சேவை", hi: "24/7 ऑन-डिमांड" },
    desc: {
      en: "Round-the-clock dispatch with SLA-backed response for urgent business needs.",
      ta: "அவசர வணிக தேவைகளுக்கு SLA-ஆதரவுடன் 24 மணி நேர அனுப்புதல்.",
      hi: "तत्काल व्यवसायिक ज़रूरतों के लिए SLA-समर्थित 24 घंटे डिस्पैच।",
    },
  },
  {
    icon: Sparkles,
    title: { en: "Tailored Billing", ta: "தனிப்பயன் பில்லிங்", hi: "अनुकूलित बिलिंग" },
    desc: {
      en: "Monthly invoicing, GST-compliant receipts and flexible contract pricing.",
      ta: "மாதாந்திர பில்லிங், GST ரசீதுகள் & நெகிழ்வான ஒப்பந்த விலை.",
      hi: "मासिक बिलिंग, GST-अनुपालित रसीदें और लचीली कॉन्ट्रैक्ट प्राइसिंग।",
    },
  },
];

export default function Corporate() {
  const { lang } = useI18n();
  const tag = lang === "ta" ? "வணிக சேவைகள்" : lang === "hi" ? "व्यवसाय सेवाएँ" : "Business & Corporate";
  const title1 = lang === "ta" ? "வணிக பயணங்களுக்கு" : lang === "hi" ? "व्यवसाय व कॉर्पोरेट" : "Transport for business &";
  const title2 = lang === "ta" ? "கார்ப்பரேட் போக்குவரத்து" : lang === "hi" ? "यात्रा समाधान" : "corporate trips";
  const desc =
    lang === "ta"
      ? "நிறுவனங்கள், குழுக்கள் & எக்ஸிக்யூட்டிவ்களுக்கு நம்பகமான, அமைதியான, பிராண்ட் தகுந்த போக்குவரத்து தீர்வுகள்."
      : lang === "hi"
      ? "कंपनियों, टीमों और एग्ज़ीक्यूटिव्स के लिए विश्वसनीय, सुगठित और ब्रांड-योग्य परिवहन समाधान।"
      : "Reliable, polished and brand-worthy transport solutions for companies, teams and executives.";
  const cta = lang === "ta" ? "கார்ப்பரேட் கோட் பெறுக" : lang === "hi" ? "कॉर्पोरेट कोट प्राप्त करें" : "Get a corporate quote";

  return (
    <section id="corporate" className="relative overflow-hidden py-20 md:py-28">
      {/* Same animated background language as Places */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl animate-blob" />
        <div className="absolute top-1/2 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-200/40 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{tag}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {title1} <span className="gradient-gold-text font-serif-italic">{title2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{desc}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const t = lang === "ta" ? f.title.ta : lang === "hi" ? f.title.hi : f.title.en;
            const d = lang === "ta" ? f.desc.ta : lang === "hi" ? f.desc.hi : f.desc.en;
            return (
              <article
                key={f.title.en}
                className="reveal group relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft hover-lift"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
          >
            <Briefcase className="h-4 w-4" />
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
