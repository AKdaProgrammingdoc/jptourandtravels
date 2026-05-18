import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Lang = "en" | "ta" | "hi";

type Dict = Record<string, { en: string; ta: string; hi: string }>;

export const dict: Dict = {
  // nav
  "nav.home": { en: "Home", ta: "முகப்பு", hi: "होम" },
  "nav.services": { en: "Services", ta: "சேவைகள்", hi: "सेवाएं" },
  "nav.pricing": { en: "Pricing", ta: "விலை", hi: "मूल्य" },
  "nav.places": { en: "Places", ta: "இடங்கள்", hi: "स्थान" },
  "nav.reviews": { en: "Reviews", ta: "மதிப்பீடுகள்", hi: "समीक्षाएं" },
  "nav.book": { en: "Book Now", ta: "பதிவு செய்க", hi: "बुक करें" },
  "nav.contact": { en: "Contact", ta: "தொடர்பு", hi: "संपर्क" },
  "nav.whatsapp": { en: "WhatsApp", ta: "வாட்ஸ்அப்", hi: "व्हाट्सएप" },

  // hero
  "hero.badge": { en: "Madurai · South India", ta: "மதுரை · தென் இந்தியா", hi: "मदुरै · दक्षिण भारत" },
  "hero.title1": { en: "Your Journey,", ta: "உங்கள் பயணம்,", hi: "आपकी यात्रा," },
  "hero.title2": { en: "Our Passion", ta: "எங்கள் ஆர்வம்", hi: "हमारा जुनून" },
  "hero.desc": {
    en: "Explore South India in unmatched comfort. From temple towns to hill stations, JP Tours and Travels delivers premium chauffeur-driven journeys across Tamil Nadu, Kerala & beyond — straight from Madurai.",
    ta: "தென் இந்தியாவை ஒப்பற்ற வசதியில் கண்டறியுங்கள். கோயில் நகரங்களிலிருந்து மலைப் பகுதிகள் வரை, JP Tours and Travels மதுரையிலிருந்து தமிழ்நாடு, கேரளா மற்றும் அதையும் தாண்டி தர பயணங்களை வழங்குகிறது.",
    hi: "बेजोड़ आराम के साथ दक्षिण भारत की खोज करें। मंदिर शहरों से लेकर हिल स्टेशनों तक, JP Tours and Travels मदुरै से तमिलनाडु, केरल और उससे आगे प्रीमियम चालक-चालित यात्राएं प्रदान करता है।",
  },
  "hero.bookNow": { en: "Book Now", ta: "பதிவு செய்க", hi: "अभी बुक करें" },
  "hero.viewPricing": { en: "View Pricing", ta: "விலையை காண்க", hi: "मूल्य देखें" },
  "hero.videoPlaceholder": { en: "Your Video Here", ta: "உங்கள் வீடியோ இங்கே", hi: "आपका वीडियो यहां" },
  "hero.videoHint": { en: "Add your travel video file or YouTube embed", ta: "உங்கள் பயண வீடியோ அல்லது YouTube இணைப்பை சேர்க்கவும்", hi: "अपनी यात्रा वीडियो फ़ाइल या YouTube एम्बेड जोड़ें" },

  // stats
  "stats.customers": { en: "Happy Customers", ta: "மகிழ்ச்சியான வாடிக்கையாளர்கள்", hi: "खुश ग्राहक" },
  "stats.experience": { en: "Years Experience", ta: "ஆண்டுகள் அனுபவம்", hi: "वर्षों का अनुभव" },
  "stats.destinations": { en: "Destinations", ta: "இடங்கள்", hi: "गंतव्य" },
  "stats.support": { en: "Support", ta: "ஆதரவு", hi: "सहायता" },

  // fleet
  "fleet.tag": { en: "Our Fleet", ta: "எங்கள் வாகனங்கள்", hi: "हमारा बेड़ा" },
  "fleet.title1": { en: "Vehicles built for", ta: "ஒவ்வொரு பயணத்திற்கும்", hi: "हर यात्रा के लिए" },
  "fleet.title2": { en: "every journey", ta: "சிறந்த வாகனங்கள்", hi: "बनी गाड़ियां" },
  "fleet.desc": {
    en: "From premium sedans to spacious tempos and buses — pick the perfect ride for your South India adventure.",
    ta: "பிரீமியம் செடான் முதல் விசாலமான டெம்போக்கள் மற்றும் பேருந்துகள் வரை — உங்கள் தென் இந்திய பயணத்திற்கான சிறந்த வாகனத்தை தேர்வு செய்யுங்கள்.",
    hi: "प्रीमियम सेडान से लेकर विशाल टेम्पो और बसों तक — अपनी दक्षिण भारत यात्रा के लिए सही वाहन चुनें।",
  },
  "fleet.seatCapacity": { en: "Seat Capacity", ta: "இருக்கை கொள்ளளவு", hi: "सीट क्षमता" },
  "fleet.pricing": { en: "Pricing", ta: "விலை விவரம்", hi: "मूल्य" },
  "fleet.above": { en: "Above", ta: "மேலே", hi: "ऊपर" },
  "fleet.below": { en: "Below", ta: "கீழே", hi: "नीचे" },
  "fleet.rent": { en: "Rent", ta: "வாடகை", hi: "किराया" },
  "fleet.fuel": { en: "Fuel Charge", ta: "எரிபொருள் கட்டணம்", hi: "ईंधन शुल्क" },
  "fleet.hourRent": { en: "Hour Rent", ta: "மணிநேர வாடகை", hi: "घंटा किराया" },
  "fleet.inclOf": { en: "Incl. of", ta: "உள்ளடக்கியது", hi: "सहित" },
  "fleet.hours": { en: "hours", ta: "மணிநேரம்", hi: "घंटे" },
  "fleet.bookNow": { en: "Book Now", ta: "பதிவு செய்க", hi: "अभी बुक करें" },
  "fleet.upload": { en: "Upload Vehicle Photo", ta: "வாகன புகைப்படம் பதிவேற்றவும்", hi: "वाहन फ़ोटो अपलोड करें" },
  "fleet.tankToTank": { en: "Tank to Tank", ta: "டேங்க் டு டேங்க்", hi: "टैंक टू टैंक" },
  "fleet.day": { en: "day", ta: "நாள்", hi: "दिन" },

  // tariff
  "tariff.tag": { en: "Tariff", ta: "கட்டண விவரம்", hi: "शुल्क" },
  "tariff.title1": { en: "Transparent", ta: "தெளிவான", hi: "पारदर्शी" },
  "tariff.title2": { en: "pricing", ta: "விலை", hi: "मूल्य" },
  "tariff.desc": { en: "No hidden charges. Pay only for what you ride.", ta: "மறைமுக கட்டணம் இல்லை. பயணித்ததற்கு மட்டுமே செலுத்துங்கள்.", hi: "कोई छिपा शुल्क नहीं। केवल अपनी यात्रा के लिए भुगतान करें।" },
  "tariff.vehicle": { en: "Vehicle", ta: "வாகனம்", hi: "वाहन" },
  "tariff.seats": { en: "Seats", ta: "இருக்கைகள்", hi: "सीटें" },
  "tariff.day": { en: "Day Rental", ta: "நாள் வாடகை", hi: "दिन का किराया" },
  "tariff.perKm": { en: "Per km", ta: "ஒரு கி.மீ.", hi: "प्रति किमी" },
  "tariff.above": { en: "Above Limit", ta: "வரம்புக்கு மேல்", hi: "सीमा से ऊपर" },

  // places
  "places.tag": { en: "Destinations", ta: "சுற்றுலா இடங்கள்", hi: "गंतव्य" },
  "places.title1": { en: "Places to", ta: "செல்லும்", hi: "घूमने के" },
  "places.title2": { en: "visit", ta: "இடங்கள்", hi: "स्थान" },
  "places.desc": { en: "Curated South India experiences — temples, hills, beaches & backwaters.", ta: "தேர்ந்தெடுக்கப்பட்ட தென் இந்திய அனுபவங்கள் — கோயில்கள், மலைகள், கடற்கரைகள் மற்றும் ஏரிகள்.", hi: "चुने हुए दक्षिण भारत अनुभव — मंदिर, पहाड़, समुद्र तट और बैकवॉटर्स।" },
  "places.upload": { en: "Upload Place Photo", ta: "இடப் புகைப்படம் பதிவேற்றவும்", hi: "स्थान की फ़ोटो अपलोड करें" },

  // reviews
  "reviews.tag": { en: "Reviews", ta: "மதிப்பீடுகள்", hi: "समीक्षाएं" },
  "reviews.title1": { en: "What our", ta: "எங்கள் பயணிகள்", hi: "हमारे यात्री" },
  "reviews.title2": { en: "travelers say", ta: "என்ன சொல்கிறார்கள்", hi: "क्या कहते हैं" },
  "reviews.verified": { en: "Verified Customer", ta: "சரிபார்க்கப்பட்ட வாடிக்கையாளர்", hi: "सत्यापित ग्राहक" },

  // book
  "book.tag": { en: "Reserve Your Ride", ta: "உங்கள் பயணத்தை பதிவு செய்யுங்கள்", hi: "अपनी सवारी आरक्षित करें" },
  "book.title1": { en: "Book your", ta: "உங்கள் பயணத்தை", hi: "अपनी यात्रा" },
  "book.title2": { en: "journey", ta: "பதிவு செய்க", hi: "बुक करें" },
  "book.desc": { en: "Fill in the details and we'll confirm instantly over WhatsApp.", ta: "விவரங்களை நிரப்பவும், நாங்கள் வாட்ஸ்அப்பில் உடனடியாக உறுதிப்படுத்துவோம்.", hi: "विवरण भरें और हम तुरंत व्हाट्सएप पर पुष्टि करेंगे।" },
  "book.name": { en: "Your Name", ta: "உங்கள் பெயர்", hi: "आपका नाम" },
  "book.phone": { en: "Phone Number", ta: "தொலைபேசி எண்", hi: "फ़ोन नंबर" },
  "book.passengers": { en: "Number of Passengers", ta: "பயணிகள் எண்ணிக்கை", hi: "यात्रियों की संख्या" },
  "book.from": { en: "From", ta: "எங்கிருந்து", hi: "कहाँ से" },
  "book.to": { en: "To", ta: "எங்கே", hi: "कहाँ तक" },
  "book.notes": { en: "Notes (optional)", ta: "குறிப்புகள் (விரும்பினால்)", hi: "टिप्पणियाँ (वैकल्पिक)" },
  "book.send": { en: "Send via WhatsApp", ta: "வாட்ஸ்அப் வழியாக அனுப்பவும்", hi: "व्हाट्सएप के माध्यम से भेजें" },

  // faq
  "faq.tag": { en: "FAQ", ta: "கேள்விகள்", hi: "सामान्य प्रश्न" },
  "faq.title1": { en: "Common", ta: "பொதுவான", hi: "सामान्य" },
  "faq.title2": { en: "questions", ta: "கேள்விகள்", hi: "प्रश्न" },
  "faq.q1": { en: "How is the pricing calculated?", ta: "விலை எவ்வாறு கணக்கிடப்படுகிறது?", hi: "मूल्य की गणना कैसे की जाती है?" },
  "faq.a1": { en: "Pricing is based on the vehicle type, distance traveled and day rentals. Below the limit (usually 300km), you pay the day rent plus a per-km fuel charge. Above the limit, a higher per-km rate applies.", ta: "வாகன வகை, பயணித்த தூரம் மற்றும் நாள் வாடகையின் அடிப்படையில் விலை கணக்கிடப்படுகிறது. வரம்புக்கு கீழே (பொதுவாக 300 கி.மீ.), நாள் வாடகை மற்றும் கி.மீ.க்கான எரிபொருள் கட்டணம் செலுத்த வேண்டும்.", hi: "मूल्य वाहन प्रकार, यात्रा की दूरी और दिन के किराए पर आधारित है। सीमा से नीचे (आमतौर पर 300 किमी), आप दिन का किराया और प्रति-किमी ईंधन शुल्क देते हैं। सीमा से ऊपर, उच्च प्रति-किमी दर लागू होती है।" },
  "faq.q2": { en: "How do I book a vehicle?", ta: "வாகனத்தை எவ்வாறு பதிவு செய்வது?", hi: "मैं वाहन कैसे बुक करूँ?" },
  "faq.a2": { en: "Use the booking form on this site or tap the WhatsApp button. Share your travel dates, route and vehicle preference — we'll confirm availability instantly.", ta: "இந்த தளத்தில் உள்ள படிவத்தை பயன்படுத்தவும் அல்லது வாட்ஸ்அப் பொத்தானை அழுத்தவும். உங்கள் தேதிகள் மற்றும் வழியை பகிர்ந்து கொள்ளுங்கள்.", hi: "इस साइट पर बुकिंग फॉर्म का उपयोग करें या व्हाट्सएप बटन दबाएं। अपनी यात्रा तिथियाँ, मार्ग और वाहन वरीयता साझा करें — हम तुरंत उपलब्धता की पुष्टि करेंगे।" },
  "faq.q3": { en: "What is your cancellation policy?", ta: "ரத்து கொள்கை என்ன?", hi: "आपकी रद्दीकरण नीति क्या है?" },
  "faq.a3": { en: "Cancellations made 24 hours before pickup are fully refundable. Within 24 hours, a nominal cancellation charge may apply.", ta: "புறப்படுவதற்கு 24 மணி நேரத்திற்கு முன் ரத்து செய்தால் முழுமையாக திருப்பித் தரப்படும். 24 மணி நேரத்திற்குள் ஒரு சிறிய கட்டணம் பொருந்தும்.", hi: "पिकअप से 24 घंटे पहले रद्द करने पर पूरा रिफंड मिलेगा। 24 घंटे के भीतर, मामूली रद्दीकरण शुल्क लागू हो सकता है।" },
  "faq.q4": { en: "Are your drivers experienced?", ta: "உங்கள் ஓட்டுநர்கள் அனுபவம் வாய்ந்தவர்களா?", hi: "क्या आपके चालक अनुभवी हैं?" },
  "faq.a4": { en: "All our chauffeurs are licensed, courteous, and have years of South India route experience.", ta: "எங்கள் ஓட்டுநர்கள் அனைவரும் உரிமம் பெற்றவர்கள், மரியாதையானவர்கள், தென் இந்திய பாதைகளில் பல ஆண்டு அனுபவம் கொண்டவர்கள்.", hi: "हमारे सभी चालक लाइसेंस प्राप्त, विनम्र हैं और उनके पास दक्षिण भारत मार्गों का वर्षों का अनुभव है।" },
  "faq.q5": { en: "Do you offer outstation and multi-day trips?", ta: "ஊருக்கு வெளியே மற்றும் பல நாள் பயணங்களை வழங்குகிறீர்களா?", hi: "क्या आप आउटस्टेशन और बहु-दिवसीय यात्राएं प्रदान करते हैं?" },
  "faq.a5": { en: "Yes — we cover Tamil Nadu, Kerala, Karnataka and Andhra Pradesh. Multi-day packages and pilgrimage circuits are our specialty.", ta: "ஆம் — தமிழ்நாடு, கேரளா, கர்நாடகா மற்றும் ஆந்திரா முழுவதும் சேவை செய்கிறோம். பல நாள் தொகுப்புகள் மற்றும் ஆலயச் சுற்றுகள் எங்கள் சிறப்பு.", hi: "हाँ — हम तमिलनाडु, केरल, कर्नाटक और आंध्र प्रदेश को कवर करते हैं। बहु-दिवसीय पैकेज और तीर्थयात्रा सर्किट हमारी विशेषता हैं।" },

  // footer
  "footer.desc": { en: "Premium chauffeur-driven travel across South India — straight from Madurai.", ta: "தென் இந்தியா முழுவதும் பிரீமியம் ஓட்டுநர் சேவை — மதுரையிலிருந்து நேரடியாக.", hi: "दक्षिण भारत भर में प्रीमियम चालक-चालित यात्रा — सीधे मदुरै से।" },
  "footer.contact": { en: "Contact", ta: "தொடர்பு", hi: "संपर्क" },
  "footer.find": { en: "Find Us", ta: "எங்களை கண்டறியுங்கள்", hi: "हमें ढूंढें" },
  "footer.wa": { en: "WhatsApp Us", ta: "வாட்ஸ்அப் செய்யுங்கள்", hi: "हमें व्हाट्सएप करें" },
  "footer.rights": { en: "© 2025 JP Tours and Travels. All Rights Reserved.", ta: "© 2025 JP Tours and Travels. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", hi: "© 2025 JP Tours and Travels. सर्वाधिकार सुरक्षित।" },

  // reviews text
  "rev.1": { en: "Booked an Innova Crysta with JP Tours and Travels for our Kodaikanal trip — spotless car, calm driver, fair pricing. Will book again.", ta: "எங்கள் கொடைக்கானல் பயணத்திற்காக JP Tours and Travels-ல் இன்னோவா கிரிஸ்டா பதிவு செய்தேன் — சுத்தமான கார், அமைதியான ஓட்டுநர், நியாயமான விலை.", hi: "हमारी कोडाइकनाल यात्रा के लिए JP Tours and Travels के साथ इनोवा क्रिस्टा बुक किया — साफ कार, शांत चालक, उचित मूल्य। फिर से बुक करूंगा।" },
  "rev.2": { en: "JP Tours and Travels made our Rameshwaram pilgrimage stress-free. On-time pickup and a very courteous chauffeur throughout.", ta: "JP Tours and Travels எங்கள் ராமேஸ்வரம் யாத்திரையை எளிதாக்கியது. சரியான நேரத்தில் வந்தார்கள், மரியாதையான ஓட்டுநர்.", hi: "JP Tours and Travels ने हमारी रामेश्वरम तीर्थयात्रा को तनाव-मुक्त बनाया। समय पर पिकअप और बहुत विनम्र चालक।" },
  "rev.3": { en: "Hired a Tempo Traveller for 14 family members. JP Tours and Travels gave us a clean vehicle and an excellent driver who knew every route.", ta: "14 குடும்ப உறுப்பினர்களுக்காக டெம்போ ட்ராவலர் வாடகைக்கு எடுத்தோம். சுத்தமான வாகனம் மற்றும் சிறந்த ஓட்டுநர்.", hi: "14 परिवार के सदस्यों के लिए टेम्पो ट्रैवलर किराए पर लिया। JP Tours and Travels ने हमें एक साफ वाहन और हर मार्ग जानने वाला उत्कृष्ट चालक दिया।" },
  "rev.4": { en: "Ooty and Munnar in one trip — JP Tours and Travels handled all the logistics beautifully. Comfortable ride, transparent billing.", ta: "ஒரே பயணத்தில் ஊட்டி மற்றும் முன்னார் — JP Tours and Travels அனைத்தையும் சிறப்பாக கையாண்டது.", hi: "एक यात्रा में ऊटी और मुन्नार — JP Tours and Travels ने सभी व्यवस्थाएं खूबसूरती से संभालीं। आरामदायक सवारी, पारदर्शी बिलिंग।" },
  "rev.5": { en: "The Urbania I booked through JP Tours and Travels was premium-class. Friendly team and zero hassles, highly recommended for group tours.", ta: "JP Tours and Travels மூலம் பதிவு செய்த உர்பானியா பிரீமியம் வகுப்பு. நட்பான குழு, குழு பயணங்களுக்கு பரிந்துரைக்கிறேன்.", hi: "JP Tours and Travels के माध्यम से बुक किया गया अर्बेनिया प्रीमियम-क्लास था। मित्रवत टीम और शून्य परेशानी, समूह यात्राओं के लिए अत्यधिक अनुशंसित।" },
  "rev.6": { en: "Punctual, polite, and professional. JP Tours and Travels is now my go-to whenever I travel out of Madurai for business or family trips.", ta: "சரியான நேரம், மரியாதை, தொழில்முறை. மதுரையிலிருந்து வெளியே செல்லும் போது JP Tours and Travels எனது விருப்பம்.", hi: "समयनिष्ठ, विनम्र और पेशेवर। मदुरै से बाहर व्यवसाय या पारिवारिक यात्राओं के लिए JP Tours and Travels अब मेरी पहली पसंद है।" },
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("jp-lang") as Lang | null;
    if (saved === "ta" || saved === "en" || saved === "hi") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("jp-lang", l);
  };

  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useI18n = () => useContext(LangContext);
