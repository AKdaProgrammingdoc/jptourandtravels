import { MapPin, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Place = {
  en: string;
  ta: string;
  hi: string;
  image: string;
  subtitle: { en: string; ta: string; hi: string };
};

const maduraiPlaces: Place[] = [
  {
    en: "Meenakshi Amman Temple",
    ta: "மீனாட்சி அம்மன் கோயில்",
    hi: "मीनाक्षी अम्मन मंदिर",
    image: "/media/meenakshi.webp",
    subtitle: {
      en: "Iconic Dravidian temple with towering gopurams and 1000-pillar hall.",
      ta: "உயரமான கோபுரங்களும் ஆயிரம்கால் மண்டபமும் கொண்ட புகழ்பெற்ற கோயில்.",
      hi: "ऊँचे गोपुरम और 1000 स्तंभों वाला प्रसिद्ध द्रविड़ मंदिर।",
    },
  },
  {
    en: "Arulmigu Koodal Azhagar Temple",
    ta: "அருள்மிகு கூடல் அழகர் கோயில்",
    hi: "अरुलमिगु कूडल अलगर मंदिर",
    image: "/media/koodal-alagar.avif",
    subtitle: {
      en: "Ancient Vishnu temple known for its three-tiered sanctum architecture.",
      ta: "மூன்று அடுக்கு கருவறை கொண்ட பழமையான விஷ்ணு கோயில்.",
      hi: "तीन-स्तरीय गर्भगृह वाला प्राचीन विष्णु मंदिर।",
    },
  },
  {
    en: "Gandhi Memorial Museum",
    ta: "காந்தி நினைவு அருங்காட்சியகம்",
    hi: "गांधी स्मारक संग्रहालय",
    image: "/media/gandhi-museum.jpg",
    subtitle: {
      en: "Historic museum housing the blood-stained dhoti of Mahatma Gandhi.",
      ta: "மகாத்மா காந்தியின் வரலாற்று நினைவுகளை கொண்ட அருங்காட்சியகம்.",
      hi: "महात्मा गांधी की रक्त-रंजित धोती वाला ऐतिहासिक संग्रहालय।",
    },
  },
  {
    en: "Thirumalai Nayakkar Palace",
    ta: "திருமலை நாயக்கர் மஹால்",
    hi: "तिरुमलै नायक्कर महल",
    image: "/media/thirumalai-palace.jpg",
    subtitle: {
      en: "17th-century royal palace blending Dravidian and Islamic styles.",
      ta: "17ஆம் நூற்றாண்டு திராவிட - இஸ்லாமிய கட்டிடக்கலை அரண்மனை.",
      hi: "द्रविड़ और इस्लामी शैलियों का मेल, 17वीं सदी का शाही महल।",
    },
  },
  {
    en: "Vandiyur Mariamman Teppakulam",
    ta: "வண்டியூர் மாரியம்மன் தெப்பக்குளம்",
    hi: "वंडियूर मारियम्मन तेप्पकुलम",
    image: "/media/teppakulam.jpg",
    subtitle: {
      en: "Largest temple tank in Tamil Nadu, famed for the float festival.",
      ta: "மிதவை திருவிழாவிற்காக பிரசித்தமான தமிழ்நாட்டின் பெரிய தெப்பக்குளம்.",
      hi: "तमिलनाडु का सबसे बड़ा मंदिर तालाब, तैरंती उत्सव के लिए प्रसिद्ध।",
    },
  },
  {
    en: "Arulmigu Sri Kallazhagar Temple",
    ta: "அருள்மிகு ஸ்ரீ கள்ளழகர் கோயில்",
    hi: "अरुलमिगु श्री कल्लालगर मंदिर",
    image: "/media/kallazhagar.jpg",
    subtitle: {
      en: "Hilltop Vishnu shrine set amid the scenic Azhagar hills.",
      ta: "அழகர்மலையில் அமைந்த அழகான விஷ்ணு கோயில்.",
      hi: "मनोरम अलगर पहाड़ियों में बसा पहाड़ी विष्णु मंदिर।",
    },
  },
];

const otherPlaces: Place[] = [
  {
    en: "Rameshwaram",
    ta: "ராமேஸ்வரம்",
    hi: "रामेश्वरम",
    image: "/media/rameshwaram.jpg",
    subtitle: { en: "Sacred island town with Ramanathaswamy temple.", ta: "ராமநாதசுவாமி கோயில் உள்ள புனித தீவு.", hi: "रामनाथस्वामी मंदिर वाला पवित्र द्वीप नगर।" },
  },
  {
    en: "Kodaikanal",
    ta: "கொடைக்கானல்",
    hi: "कोडाइकनाल",
    image: "/media/kodaikanal.jpg",
    subtitle: { en: "Princess of Hill Stations with misty lakes and valleys.", ta: "மூடுபனி ஏரிகள் கொண்ட மலைவாசஸ்தலங்களின் இளவரசி.", hi: "धुंध भरी झीलों और घाटियों वाली हिल स्टेशनों की राजकुमारी।" },
  },
  {
    en: "Kanyakumari",
    ta: "கன்னியாகுமரி",
    hi: "कन्याकुमारी",
    image: "/media/kanyakumari.webp",
    subtitle: { en: "Land's end with sunrise & sunset over three oceans.", ta: "மூன்று கடல்களின் சங்கமம், சூரிய உதயம் & மறைவு.", hi: "तीन महासागरों के संगम पर सूर्योदय और सूर्यास्त।" },
  },
  {
    en: "Ooty",
    ta: "ஊட்டி",
    hi: "ऊटी",
    image: "/media/ooty.webp",
    subtitle: { en: "Queen of Hill Stations with tea gardens & toy train.", ta: "தேயிலை தோட்டங்கள் கொண்ட மலைவாசஸ்தலங்களின் ராணி.", hi: "चाय बागानों और टॉय ट्रेन वाली हिल स्टेशनों की रानी।" },
  },
  {
    en: "Munnar",
    ta: "முன்னார்",
    hi: "मुन्नार",
    image: "/media/munnar.jpg",
    subtitle: { en: "Lush green tea estates nestled in the Western Ghats.", ta: "மேற்கு தொடர்ச்சி மலையின் பசுமை தேயிலை தோட்டங்கள்.", hi: "पश्चिमी घाट में बसे हरे-भरे चाय बागान।" },
  },
  {
    en: "Thekkady",
    ta: "தேக்கடி",
    hi: "थेक्कडी",
    image: "/media/thekkady.webp",
    subtitle: { en: "Wildlife sanctuary famed for elephants and spice trails.", ta: "யானைகள் & வாசனை திரவியங்களுக்கு பிரசித்தி பெற்ற காப்பகம்.", hi: "हाथियों और मसाला मार्गों के लिए प्रसिद्ध वन्यजीव अभयारण्य।" },
  },
  {
    en: "Coimbatore",
    ta: "கோயம்புத்தூர்",
    hi: "कोयंबटूर",
    image: "/media/coimbatore.avif",
    subtitle: { en: "Manchester of South India, gateway to the Nilgiris.", ta: "தென்னிந்தியாவின் மான்செஸ்டர், நீலகிரியின் நுழைவாயில்.", hi: "दक्षिण भारत का मैनचेस्टर, नीलगिरि का प्रवेश द्वार।" },
  },
  {
    en: "Alleppey",
    ta: "ஆலப்புழா",
    hi: "अलेप्पी",
    image: "/media/alleppey.jpg",
    subtitle: { en: "Serene backwaters of Kerala with houseboat cruises.", ta: "ஹவுஸ்போட் பயணங்கள் கொண்ட கேரளாவின் அமைதியான பின்னீர்கள்.", hi: "हाउसबोट क्रूज़ के साथ केरल के शांत बैकवॉटर्स।" },
  },
];

function PlaceCard({ p, lang, idx }: { p: Place; lang: string; idx: number }) {
  const name = lang === "ta" ? p.ta : lang === "hi" ? p.hi : p.en;
  const sub = lang === "ta" ? p.subtitle.ta : lang === "hi" ? p.subtitle.hi : p.subtitle.en;
  return (
    <article
      className="reveal group relative overflow-hidden rounded-2xl bg-white shadow-soft hover-lift"
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.en}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 backdrop-blur transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-soft">
          <MapPin className="h-4 w-4 text-gold" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-lg font-semibold drop-shadow-md">{name}</h3>
          <p className="mt-1 text-xs leading-snug text-white/90 line-clamp-2">{sub}</p>
        </div>
      </div>
    </article>
  );
}

export default function Places() {
  const { t, lang } = useI18n();
  const inLabel = lang === "ta" ? "மதுரை" : lang === "hi" ? "मदुरै में" : "In Madurai";
  const inTitle = lang === "ta" ? "மதுரையில் பார்க்க வேண்டிய இடங்கள்" : lang === "hi" ? "मदुरै में घूमने के स्थान" : "Places to visit in Madurai";
  const beyondLabel = lang === "ta" ? "அதிகம்" : lang === "hi" ? "मदुरै से परे" : "Beyond Madurai";
  const beyondTitle = lang === "ta" ? "மற்ற சுற்றுலா இடங்கள்" : lang === "hi" ? "अन्य पर्यटन स्थल" : "Other tourist places";

  return (
    <section id="places" className="relative overflow-hidden py-20 md:py-28">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-200/40 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">{t("places.tag")}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {t("places.title1")} <span className="gradient-gold-text font-serif-italic">{t("places.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("places.desc")}</p>
        </div>

        {/* Madurai */}
        <div className="mt-16 reveal">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                <Sparkles className="h-3.5 w-3.5" /> {inLabel}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">{inTitle}</h3>
            </div>
            <div className="hidden md:block h-px flex-1 ml-6 bg-gradient-to-r from-gold/40 to-transparent" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {maduraiPlaces.map((p, idx) => (
              <PlaceCard key={p.en} p={p} lang={lang} idx={idx} />
            ))}
          </div>
        </div>

        {/* Other */}
        <div className="mt-20 reveal">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                <Sparkles className="h-3.5 w-3.5" /> {beyondLabel}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">{beyondTitle}</h3>
            </div>
            <div className="hidden md:block h-px flex-1 ml-6 bg-gradient-to-r from-gold/40 to-transparent" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherPlaces.map((p, idx) => (
              <PlaceCard key={p.en} p={p} lang={lang} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
