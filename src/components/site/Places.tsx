import { useState, useEffect } from "react";
import { MapPin, Sparkles, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Place = {
  en: string;
  ta: string;
  hi: string;
  image: string;
  subtitle: { en: string; ta: string; hi: string };
  spots?: Spot[];
};

type Spot = {
  name: string;
  desc: string;
  emoji?: string;
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
    spots: [
      { name: "Ramanathaswamy Temple", desc: "Sacred Jyotirlinga shrine with the longest temple corridor in India.", emoji: "🛕" },
      { name: "Dhanushkodi Beach", desc: "Ghost town at land's end where two oceans meet.", emoji: "🏝️" },
      { name: "Pamban Bridge", desc: "Iconic sea bridge connecting Rameshwaram to mainland.", emoji: "🌉" },
      { name: "Agnitheertham", desc: "Holy seashore for ritual bathing before temple visit.", emoji: "🌊" },
      { name: "APJ Abdul Kalam Memorial", desc: "Tribute to the Missile Man of India.", emoji: "🚀" },
      { name: "Gandhamadhana Parvatham", desc: "Hilltop shrine with panoramic island views.", emoji: "⛰️" },
    ],
  },
  {
    en: "Kodaikanal",
    ta: "கொடைக்கானல்",
    hi: "कोडाइकनाल",
    image: "/media/kodaikanal.jpg",
    subtitle: { en: "Princess of Hill Stations with misty lakes and valleys.", ta: "மூடுபனி ஏரிகள் கொண்ட மலைவாசஸ்தலங்களின் இளவரசி.", hi: "धुंध भरी झीलों और घाटियों वाली हिल स्टेशनों की राजकुमारी।" },
    spots: [
      { name: "Kodai Lake", desc: "Star-shaped lake perfect for boating and cycling.", emoji: "🚣" },
      { name: "Coaker's Walk", desc: "Cliffside promenade with valley views.", emoji: "🚶" },
      { name: "Pillar Rocks", desc: "Three giant granite pillars rising 400 ft tall.", emoji: "🪨" },
      { name: "Bryant Park", desc: "Botanical garden with rare flowers and hybrids.", emoji: "🌸" },
      { name: "Silver Cascade Falls", desc: "180 ft waterfall on the way up the hills.", emoji: "💧" },
      { name: "Berijam Lake", desc: "Pristine reserve forest lake with mirror waters.", emoji: "🌲" },
    ],
  },
  {
    en: "Kanyakumari",
    ta: "கன்னியாகுமரி",
    hi: "कन्याकुमारी",
    image: "/media/kanyakumari.webp",
    subtitle: { en: "Land's end with sunrise & sunset over three oceans.", ta: "மூன்று கடல்களின் சங்கமம், சூரிய உதயம் & மறைவு.", hi: "तीन महासागरों के संगम पर सूर्योदय और सूर्यास्त।" },
    spots: [
      { name: "Vivekananda Rock Memorial", desc: "Iconic memorial on a rocky island in the sea.", emoji: "🪨" },
      { name: "Thiruvalluvar Statue", desc: "133 ft tall statue of the Tamil poet-saint.", emoji: "🗿" },
      { name: "Kanyakumari Beach", desc: "Witness sunrise and sunset from the same shore.", emoji: "🌅" },
      { name: "Bhagavathy Amman Temple", desc: "Ancient temple of Goddess Kanya Kumari.", emoji: "🛕" },
      { name: "Gandhi Memorial Mandapam", desc: "Memorial designed so sun rays fall on Gandhi's ashes.", emoji: "🕊️" },
      { name: "Padmanabhapuram Palace", desc: "Largest wooden palace complex in Asia.", emoji: "🏛️" },
    ],
  },
  {
    en: "Ooty",
    ta: "ஊட்டி",
    hi: "ऊटी",
    image: "/media/ooty.webp",
    subtitle: { en: "Queen of Hill Stations with tea gardens & toy train.", ta: "தேயிலை தோட்டங்கள் கொண்ட மலைவாசஸ்தலங்களின் ராணி.", hi: "चाय बागानों और टॉय ट्रेन वाली हिल स्टेशनों की रानी।" },
    spots: [
      { name: "Nilgiri Mountain Railway", desc: "UNESCO heritage toy train through scenic hills.", emoji: "🚂" },
      { name: "Ooty Botanical Gardens", desc: "55-acre garden with 1000+ plant species.", emoji: "🌿" },
      { name: "Ooty Lake", desc: "Artificial lake perfect for boating.", emoji: "⛵" },
      { name: "Doddabetta Peak", desc: "Highest peak in Nilgiris with telescope house.", emoji: "🏔️" },
      { name: "Tea Museum & Factory", desc: "Learn the journey of tea from leaf to cup.", emoji: "🍵" },
      { name: "Pykara Falls", desc: "Cascading falls amid shola forests.", emoji: "💦" },
    ],
  },
  {
    en: "Munnar",
    ta: "முன்னார்",
    hi: "मुन्नार",
    image: "/media/munnar.jpg",
    subtitle: { en: "Lush green tea estates nestled in the Western Ghats.", ta: "மேற்கு தொடர்ச்சி மலையின் பசுமை தேயிலை தோட்டங்கள்.", hi: "पश्चिमी घाट में बसे हरे-भरे चाय बागान।" },
    spots: [
      { name: "Tea Gardens", desc: "Endless rolling carpets of emerald tea estates.", emoji: "🌱" },
      { name: "Eravikulam National Park", desc: "Home to the endangered Nilgiri Tahr.", emoji: "🦌" },
      { name: "Mattupetty Dam", desc: "Scenic reservoir for boating and views.", emoji: "🏞️" },
      { name: "Echo Point", desc: "Natural echo phenomenon by the lakeside.", emoji: "🔊" },
      { name: "Top Station", desc: "Highest viewpoint with breathtaking valley vistas.", emoji: "⛰️" },
      { name: "Attukal Waterfalls", desc: "Picturesque cascade between Munnar and Pallivasal.", emoji: "💧" },
    ],
  },
  {
    en: "Thekkady",
    ta: "தேக்கடி",
    hi: "थेक्कडी",
    image: "/media/thekkady.webp",
    subtitle: { en: "Wildlife sanctuary famed for elephants and spice trails.", ta: "யானைகள் & வாசனை திரவியங்களுக்கு பிரசித்தி பெற்ற காப்பகம்.", hi: "हाथियों और मसाला मार्गों के लिए प्रसिद्ध वन्यजीव अभयारण्य।" },
    spots: [
      { name: "Periyar Wildlife Sanctuary", desc: "Spot elephants, bisons and tigers in the wild.", emoji: "🐘" },
      { name: "Periyar Lake Cruise", desc: "Boat ride to view wildlife along the shoreline.", emoji: "🚤" },
      { name: "Spice Plantations", desc: "Guided walks through cardamom and pepper estates.", emoji: "🌶️" },
      { name: "Bamboo Rafting", desc: "Eco-adventure rafting through the reserve.", emoji: "🛶" },
      { name: "Kathakali Performance", desc: "Traditional Kerala classical dance shows.", emoji: "🎭" },
      { name: "Mangala Devi Temple", desc: "Ancient hilltop temple in the forest.", emoji: "🛕" },
    ],
  },
  {
    en: "Coimbatore",
    ta: "கோயம்புத்தூர்",
    hi: "कोयंबटूर",
    image: "/media/coimbatore.avif",
    subtitle: { en: "Manchester of South India, gateway to the Nilgiris.", ta: "தென்னிந்தியாவின் மான்செஸ்டர், நீலகிரியின் நுழைவாயில்.", hi: "दक्षिण भारत का मैनचेस्टर, नीलगिरि का प्रवेश द्वार।" },
    spots: [
      { name: "Marudhamalai Temple", desc: "Hilltop Murugan temple with panoramic views.", emoji: "🛕" },
      { name: "Adiyogi Shiva Statue", desc: "112 ft Shiva bust at Isha Yoga Center.", emoji: "🧘" },
      { name: "VOC Park & Zoo", desc: "Family park with a toy train and mini zoo.", emoji: "🎡" },
      { name: "Dhyanalinga", desc: "Powerful meditative space by Sadhguru.", emoji: "🕉️" },
      { name: "Siruvani Waterfalls", desc: "Sweetest water falls amid lush forests.", emoji: "💧" },
      { name: "Black Thunder", desc: "Asia's #1 themed water park.", emoji: "🎢" },
    ],
  },
  {
    en: "Alleppey",
    ta: "ஆலப்புழா",
    hi: "अलेप्पी",
    image: "/media/alleppey.jpg",
    subtitle: { en: "Serene backwaters of Kerala with houseboat cruises.", ta: "ஹவுஸ்போட் பயணங்கள் கொண்ட கேரளாவின் அமைதியான பின்னீர்கள்.", hi: "हाउसबोट क्रूज़ के साथ केरल के शांत बैकवॉटर्स।" },
    spots: [
      { name: "Houseboat Cruise", desc: "Overnight stay drifting through palm-fringed canals.", emoji: "🛥️" },
      { name: "Alleppey Beach", desc: "Golden sands with a 137-year-old pier.", emoji: "🏖️" },
      { name: "Vembanad Lake", desc: "Largest lake in Kerala — sunsets unmatched.", emoji: "🌅" },
      { name: "Marari Beach", desc: "Quiet fishing village with pristine shores.", emoji: "🐚" },
      { name: "Kumarakom Bird Sanctuary", desc: "Migratory birds along the backwaters.", emoji: "🦩" },
      { name: "Snake Boat Races", desc: "Legendary Nehru Trophy boat race spectacle.", emoji: "🚣" },
    ],
  },
  {
    en: "Chennai",
    ta: "சென்னை",
    hi: "चेन्नई",
    image: "/media/chennai.jpg",
    subtitle: { en: "Coastal capital of Tamil Nadu blending heritage, beaches and culture.", ta: "பாரம்பரியம், கடற்கரைகள் & கலாச்சாரம் கலந்த தமிழ்நாட்டின் கடலோர தலைநகர்.", hi: "विरासत, समुद्र तटों और संस्कृति का संगम — तमिलनाडु की तटीय राजधानी।" },
    spots: [
      { name: "Marina Beach", desc: "Second longest urban beach in the world.", emoji: "🏖️" },
      { name: "Kapaleeshwarar Temple", desc: "Iconic Dravidian temple in Mylapore.", emoji: "🛕" },
      { name: "Fort St. George", desc: "First English fortress in India, now a museum.", emoji: "🏰" },
      { name: "San Thome Basilica", desc: "Neo-Gothic church built over St. Thomas' tomb.", emoji: "⛪" },
      { name: "Mahabalipuram", desc: "UNESCO shore temples and rock-cut monuments nearby.", emoji: "🗿" },
      { name: "Government Museum", desc: "One of India's oldest museums with bronze gallery.", emoji: "🏛️" },
    ],
  },
  {
    en: "Tirupati",
    ta: "திருப்பதி",
    hi: "तिरुपति",
    image: "/media/tirupati.jpg",
    subtitle: { en: "Sacred hill town home to the revered Sri Venkateswara temple.", ta: "புனிதமான ஸ்ரீ வெங்கடேஸ்வரர் கோயில் அமைந்த மலை நகரம்.", hi: "पावन श्री वेंकटेश्वर मंदिर वाला पवित्र पहाड़ी नगर।" },
    spots: [
      { name: "Sri Venkateswara Temple", desc: "World's most visited Hindu pilgrimage site.", emoji: "🛕" },
      { name: "Tirumala Hills", desc: "Seven sacred hills with breathtaking views.", emoji: "⛰️" },
      { name: "Akasa Ganga Waterfall", desc: "Sacred waterfall used in temple rituals.", emoji: "💧" },
      { name: "Sri Padmavathi Temple", desc: "Temple of Lord Venkateswara's consort.", emoji: "🪔" },
      { name: "Silathoranam", desc: "Rare natural rock arch — geological wonder.", emoji: "🪨" },
      { name: "ISKCON Tirupati", desc: "Serene Krishna temple in the city.", emoji: "🕉️" },
    ],
  },
  {
    en: "Mysore",
    ta: "மைசூர்",
    hi: "मैसूर",
    image: "/media/mysore.jpg",
    subtitle: { en: "Royal city of palaces, silk, sandalwood and Dasara grandeur.", ta: "அரண்மனைகள், பட்டு & தசரா சிறப்பு கொண்ட அரச நகரம்.", hi: "महलों, रेशम, चंदन और दशहरा भव्यता का शाही शहर।" },
    spots: [
      { name: "Mysore Palace", desc: "Indo-Saracenic marvel lit by 100,000 bulbs.", emoji: "🏰" },
      { name: "Chamundi Hills", desc: "Sacred hilltop temple of Goddess Chamundeshwari.", emoji: "⛰️" },
      { name: "Brindavan Gardens", desc: "Musical fountains and terraced gardens.", emoji: "⛲" },
      { name: "Mysore Zoo", desc: "One of India's oldest and richest zoological parks.", emoji: "🦁" },
      { name: "St. Philomena's Cathedral", desc: "Neo-Gothic church with twin spires.", emoji: "⛪" },
      { name: "Jaganmohan Palace", desc: "Royal art gallery of paintings and artifacts.", emoji: "🖼️" },
    ],
  },
  {
    en: "Bangalore",
    ta: "பெங்களூரு",
    hi: "बैंगलोर",
    image: "/media/bangalore.jpg",
    subtitle: { en: "Garden city and tech capital with vibrant parks and skylines.", ta: "தோட்ட நகரம் & தொழில்நுட்ப தலைநகரம் — பசுமை & நவீனம் கலந்தது.", hi: "हरे-भरे बागानों और आधुनिक स्काईलाइन वाला उद्यान व तकनीक नगर।" },
    spots: [
      { name: "Lalbagh Botanical Garden", desc: "240-acre garden with a glass house.", emoji: "🌳" },
      { name: "Cubbon Park", desc: "Green heart of the city with heritage buildings.", emoji: "🌲" },
      { name: "Bangalore Palace", desc: "Tudor-style royal residence inspired by Windsor.", emoji: "🏰" },
      { name: "ISKCON Temple", desc: "Stunning Krishna temple on a hilltop.", emoji: "🕉️" },
      { name: "Vidhana Soudha", desc: "Majestic seat of Karnataka's state legislature.", emoji: "🏛️" },
      { name: "Nandi Hills", desc: "Sunrise point and weekend getaway hilltop.", emoji: "🌄" },
    ],
  },
  {
    en: "Coorg",
    ta: "கூர்க்",
    hi: "कूर्ग",
    image: "/media/coorg.jpg",
    subtitle: { en: "Misty hills of Karnataka famed for coffee estates and waterfalls.", ta: "காபி தோட்டங்கள் & நீர்வீழ்ச்சிகளுக்கு பெயர் பெற்ற கர்நாடகாவின் மலைகள்.", hi: "कॉफी बागानों और झरनों के लिए प्रसिद्ध कर्नाटक की धुंध भरी पहाड़ियाँ।" },
    spots: [
      { name: "Abbey Falls", desc: "Stunning falls amid coffee and spice estates.", emoji: "💧" },
      { name: "Raja's Seat", desc: "Sunset viewpoint loved by Coorg royalty.", emoji: "🌇" },
      { name: "Dubare Elephant Camp", desc: "Bathe and feed elephants by the river.", emoji: "🐘" },
      { name: "Namdroling Monastery", desc: "Golden Tibetan monastery with giant Buddha statues.", emoji: "🛕" },
      { name: "Talakaveri", desc: "Origin of the sacred River Kaveri.", emoji: "🌊" },
      { name: "Coffee Plantations", desc: "Aromatic estate walks and tastings.", emoji: "☕" },
    ],
  },
  {
    en: "Goa",
    ta: "கோவா",
    hi: "गोवा",
    image: "/media/goa.jpg",
    subtitle: { en: "Sun-kissed beaches, Portuguese charm and lively coastal vibes.", ta: "சூரிய ஒளி கடற்கரைகள் & போர்த்துகீசிய பாணி கலந்த கடலோர நகரம்.", hi: "धूप भरी बीचें, पुर्तगाली आकर्षण और जीवंत तटीय माहौल।" },
    spots: [
      { name: "Baga & Calangute Beach", desc: "Most vibrant beaches with water sports.", emoji: "🏖️" },
      { name: "Basilica of Bom Jesus", desc: "UNESCO site holding St. Francis Xavier's remains.", emoji: "⛪" },
      { name: "Fort Aguada", desc: "17th-century Portuguese fort with sea views.", emoji: "🏰" },
      { name: "Dudhsagar Falls", desc: "Four-tiered 'Sea of Milk' waterfall.", emoji: "💧" },
      { name: "Anjuna Flea Market", desc: "Bohemian market with crafts and food.", emoji: "🛍️" },
      { name: "Palolem Beach", desc: "Crescent-shaped paradise in South Goa.", emoji: "🌴" },
    ],
  },
  {
    en: "Varkala",
    ta: "வர்க்கலா",
    hi: "वर्कला",
    image: "/media/varkala.jpg",
    subtitle: { en: "Dramatic cliffside beach town with serene shores and seaside cafes.", ta: "செங்குத்து பாறை மீது அமைந்த அமைதியான கடற்கரை நகரம்.", hi: "नाटकीय चट्टानी तट और शांत समुद्र वाला सुंदर बीच नगर।" },
    spots: [
      { name: "Varkala Cliff", desc: "Dramatic red laterite cliffs over the Arabian Sea.", emoji: "🌅" },
      { name: "Papanasam Beach", desc: "Sacred beach said to wash away sins.", emoji: "🏖️" },
      { name: "Janardanaswamy Temple", desc: "2000-year-old temple overlooking the sea.", emoji: "🛕" },
      { name: "Sivagiri Mutt", desc: "Pilgrimage center of social reformer Sree Narayana Guru.", emoji: "🕉️" },
      { name: "Kappil Beach & Lake", desc: "Where the backwaters kiss the sea.", emoji: "🌊" },
      { name: "Anjengo Fort", desc: "Historic British East India Company fort.", emoji: "🏰" },
    ],
  },
  {
    en: "Thiruvananthapuram",
    ta: "திருவனந்தபுரம்",
    hi: "तिरुवनंतपुरम",
    image: "/media/thiruvananthapuram.jpg",
    subtitle: { en: "Kerala's regal capital of golden temples, palm shores and lagoons.", ta: "தங்கக் கோயில்கள் & கடற்கரைகள் கொண்ட கேரளாவின் தலைநகரம்.", hi: "स्वर्ण मंदिरों, ताड़ तटों और लैगून वाली केरल की भव्य राजधानी।" },
    spots: [
      { name: "Sree Padmanabhaswamy Temple", desc: "World's richest temple — a Dravidian architectural marvel.", emoji: "🛕" },
      { name: "Poovar Island", desc: "Serene estuary where river, sea and lake meet.", emoji: "🏝️" },
      { name: "Kovalam Beach", desc: "Crescent-shaped beach with the iconic lighthouse.", emoji: "🏖️" },
    ],
  },
];

const templeCities: Place[] = [
  {
    en: "Trichy",
    ta: "திருச்சி",
    hi: "त्रिची",
    image: "/media/trichy-rockfort.jpg",
    subtitle: { en: "Rockfort city of timeless temples on the Cauvery's banks.", ta: "காவிரிக் கரையின் காலம் கடந்த கோயில்களின் பாறைக்கோட்டை நகரம்.", hi: "कावेरी तट पर बसा रॉकफोर्ट और प्राचीन मंदिरों का नगर।" },
    spots: [
      { name: "Rockfort Temple", desc: "Hilltop Ganesha shrine reached by 437 rock-cut steps.", emoji: "🛕" },
      { name: "Sri Ranganathaswamy Temple", desc: "Largest functioning Hindu temple complex in the world.", emoji: "🕉️" },
      { name: "Jambukeswarar Temple", desc: "One of the Pancha Bhoota Sthalams — element of water.", emoji: "💧" },
      { name: "Kallanai Dam", desc: "2000-year-old Grand Anicut, still in use today.", emoji: "🌊" },
      { name: "St. Joseph's Church", desc: "Beautiful colonial-era Gothic-style cathedral.", emoji: "⛪" },
      { name: "Vekkali Amman Temple", desc: "Unique roofless temple of Goddess Vekkali.", emoji: "🪔" },
    ],
  },
  {
    en: "Tanjavur",
    ta: "தஞ்சாவூர்",
    hi: "तंजावुर",
    image: "/media/trichy.png",
    subtitle: { en: "Chola heartland of art, bronze and the towering Brihadeeswarar temple.", ta: "சோழர் கலை, வெண்கலம் & பெரிய கோயிலின் தாயகம்.", hi: "चोल कला, कांस्य और भव्य बृहदीश्वर मंदिर की भूमि।" },
    spots: [
      { name: "Brihadeeswarar Temple", desc: "UNESCO Chola masterpiece with a 216 ft vimana.", emoji: "🛕" },
      { name: "Thanjavur Palace", desc: "Royal Nayak-Maratha palace with art gallery.", emoji: "🏰" },
      { name: "Saraswathi Mahal Library", desc: "One of the oldest libraries in Asia.", emoji: "📚" },
      { name: "Schwartz Church", desc: "Historic 18th-century church built by Raja Serfoji.", emoji: "⛪" },
      { name: "Sangeetha Mahal", desc: "Acoustically engineered royal music hall.", emoji: "🎶" },
      { name: "Thanjavur Art Gallery", desc: "Stunning Chola-era bronze and stone sculptures.", emoji: "🖼️" },
    ],
  },
  {
    en: "Kumbakonam",
    ta: "கும்பகோணம்",
    hi: "कुंभकोणम",
    image: "/media/tanjavur.jpg",
    subtitle: { en: "Temple town of sacred tanks and the grand Mahamaham festival.", ta: "புனித குளங்கள் & மகாமக விழாவின் கோயில் நகரம்.", hi: "पवित्र कुंडों और महामहम उत्सव वाला मंदिर नगर।" },
    spots: [
      { name: "Adi Kumbeswarar Temple", desc: "Ancient Shiva temple at the city's spiritual core.", emoji: "🛕" },
      { name: "Sarangapani Temple", desc: "Towering Vaishnava shrine with chariot-shaped sanctum.", emoji: "🛕" },
      { name: "Airavatesvara Temple", desc: "UNESCO Chola gem at nearby Darasuram.", emoji: "🏛️" },
      { name: "Mahamaham Tank", desc: "Sacred tank where 9 holy rivers are believed to meet.", emoji: "💧" },
      { name: "Ramaswamy Temple", desc: "Mural-filled shrine telling the Ramayana story.", emoji: "🪔" },
      { name: "Swamimalai (nearby)", desc: "Famed Murugan temple just 8 km away.", emoji: "🕉️" },
    ],
  },
  {
    en: "Palani",
    ta: "பழனி",
    hi: "पलनी",
    image: "/media/kumbakonam.jpg",
    subtitle: { en: "Hilltop abode of Lord Murugan — one of the Arupadai Veedu.", ta: "முருகனின் ஆறுபடை வீடுகளில் ஒன்றான மலைக்கோயில்.", hi: "भगवान मुरुगन के छह पवित्र धामों में से एक पहाड़ी मंदिर।" },
    spots: [
      { name: "Palani Murugan Temple", desc: "Sacred hilltop shrine atop Sivagiri Hill.", emoji: "🛕" },
      { name: "Winch & Rope-car Ride", desc: "Scenic cable car ride up to the temple.", emoji: "🚠" },
      { name: "Idumban Hill", desc: "Smaller hill opposite the main temple — first stop for pilgrims.", emoji: "⛰️" },
      { name: "Thiru Avinankudi Temple", desc: "Foothill temple — the original abode of Murugan.", emoji: "🪔" },
      { name: "Palani Panchamirtham", desc: "World-famous GI-tagged sacred prasadam.", emoji: "🍯" },
      { name: "Periyanayaki Amman Temple", desc: "Ancient shrine to Lord Murugan's mother.", emoji: "🕉️" },
    ],
  },
  {
    en: "Tiruchendur",
    ta: "திருச்செந்தூர்",
    hi: "तिरुचेंदूर",
    image: "/media/palani.jpg",
    subtitle: { en: "Seaside Murugan temple where the shrine meets the Bay of Bengal.", ta: "வங்க கடலருகே அமைந்த முருகன் கடற்கரை கோயில்.", hi: "बंगाल की खाड़ी के तट पर बसा भव्य मुरुगन मंदिर।" },
    spots: [
      { name: "Subramanya Swamy Temple", desc: "Only seashore temple among the six Murugan Padaiveedus.", emoji: "🛕" },
      { name: "Tiruchendur Beach", desc: "Sacred shore for ritual bath before the temple visit.", emoji: "🏖️" },
      { name: "Nazhi Kinaru", desc: "Mysterious sweet-water well right beside the sea.", emoji: "💧" },
      { name: "Valli Cave", desc: "Cave where Lord Murugan is said to have met Valli.", emoji: "🕯️" },
      { name: "Manapad Beach", desc: "Pristine nearby beach famed for windsurfing.", emoji: "🌊" },
      { name: "Korkai", desc: "Ancient Pandya port town with archaeological roots.", emoji: "🏺" },
    ],
  },
  {
    en: "Pazhamudircholai",
    ta: "பழமுதிர்சோலை",
    hi: "पझमुदिरचोलाई",
    image: "/media/tiruchendur.jpg",
    subtitle: { en: "Lush forest-clad Murugan hill temple near Madurai.", ta: "மதுரை அருகே பசுமை சூழ்ந்த முருகன் மலைக்கோயில்.", hi: "मदुरै के पास हरे-भरे जंगल वाला मुरुगन पर्वत मंदिर।" },
    spots: [
      { name: "Pazhamudircholai Temple", desc: "Sixth and final Padaiveedu of Lord Murugan.", emoji: "🛕" },
      { name: "Noopura Gangai", desc: "Sacred spring believed to flow from Vishnu's anklet.", emoji: "💧" },
      { name: "Solaimalai Hill", desc: "Forested hill with breathtaking valley views.", emoji: "⛰️" },
      { name: "Rakkayee Amman Temple", desc: "Powerful goddess shrine within the forest.", emoji: "🪔" },
      { name: "Azhagar Hills Trek", desc: "Trails connecting to Kallazhagar temple below.", emoji: "🥾" },
      { name: "Silambar Falls", desc: "Hidden seasonal cascade near the temple.", emoji: "🌊" },
    ],
  },
  {
    en: "Srirangam",
    ta: "ஸ்ரீரங்கம்",
    hi: "श्रीरंगम",
    image: "/media/srirangam.jpg",
    subtitle: { en: "Sacred island home to the world's largest functioning Vishnu temple.", ta: "உலகின் மிகப்பெரிய விஷ்ணு கோயில் அமைந்த புனித தீவு.", hi: "विश्व के सबसे बड़े सक्रिय विष्णु मंदिर का पवित्र द्वीप।" },
    spots: [
      { name: "Ranganathaswamy Temple", desc: "156-acre temple with 21 gopurams and 7 prakarams.", emoji: "🛕" },
      { name: "Rajagopuram", desc: "Asia's tallest temple tower at 236 ft.", emoji: "🗼" },
      { name: "1000-Pillar Hall", desc: "Marvel of Vijayanagara stone craftsmanship.", emoji: "🏛️" },
      { name: "Amma Mandapam", desc: "Riverside ghat on the Cauvery for ritual bathing.", emoji: "🌊" },
      { name: "Jambukeswarar Temple", desc: "Water-element temple right next to Srirangam.", emoji: "💧" },
      { name: "Vellai Gopuram", desc: "Iconic pristine-white temple gateway.", emoji: "🕊️" },
    ],
  },
  {
    en: "Kanchipuram",
    ta: "காஞ்சிபுரம்",
    hi: "कांचीपुरम",
    image: "/media/kanchipuram.jpg",
    subtitle: { en: "City of a thousand temples and the legendary Kanjeevaram silk.", ta: "ஆயிரம் கோயில்கள் & பட்டுச் சேலைகளின் நகரம்.", hi: "हज़ार मंदिरों और प्रसिद्ध कांजीवरम रेशम का शहर।" },
    spots: [
      { name: "Ekambareswarar Temple", desc: "Vast Shiva temple with 3500-year-old mango tree.", emoji: "🛕" },
      { name: "Kamakshi Amman Temple", desc: "Ancient Shakti Peetha of Goddess Kamakshi.", emoji: "🪔" },
      { name: "Varadharaja Perumal Temple", desc: "Grand Vishnu temple of the Pallava era.", emoji: "🕉️" },
      { name: "Kailasanathar Temple", desc: "Oldest Pallava sandstone temple in the city.", emoji: "🏛️" },
      { name: "Kanchi Kudil", desc: "Heritage home preserving Tamil traditions.", emoji: "🏠" },
      { name: "Silk Weaving Centres", desc: "Watch master weavers craft pure Kanjeevaram silk.", emoji: "🧵" },
    ],
  },
  {
    en: "Swamimalai",
    ta: "சுவாமிமலை",
    hi: "स्वामीमलै",
    image: "/media/swamimalai.jpg",
    subtitle: { en: "Fourth Padaiveedu where Murugan taught the meaning of 'Om' to Shiva.", ta: "முருகன் சிவனுக்கு பிரணவம் உபதேசித்த நான்காவது படைவீடு.", hi: "जहाँ मुरुगन ने शिव को 'ॐ' का अर्थ सिखाया — चौथा पडैवीडु।" },
    spots: [
      { name: "Swaminathaswamy Temple", desc: "Atop a 60-step artificial hill on the Cauvery.", emoji: "🛕" },
      { name: "Bronze Icon Workshops", desc: "Home of the legendary Chola-style lost-wax bronzes.", emoji: "🗿" },
      { name: "Cauvery River Banks", desc: "Sacred ghats perfect for sunset visits.", emoji: "🌅" },
      { name: "Sakthi Vinayagar Temple", desc: "Famed Ganesha shrine within the main temple.", emoji: "🐘" },
      { name: "Kumbakonam (nearby)", desc: "Cluster of temple gems just 8 km away.", emoji: "🛕" },
      { name: "Darasuram (nearby)", desc: "UNESCO Airavatesvara Temple a short drive away.", emoji: "🏛️" },
    ],
  },
  {
    en: "Thiruthani",
    ta: "திருத்தணி",
    hi: "तिरुत्तनी",
    image: "/media/thiruthani.jpg",
    subtitle: { en: "Hilltop Murugan shrine of peace, the sixth Padaiveedu.", ta: "அமைதியின் முருகன் ஆலயம் — ஆறாவது படைவீடு.", hi: "शांति का मुरुगन पर्वत मंदिर — छठा पडैवीडु।" },
    spots: [
      { name: "Thiruthani Murugan Temple", desc: "Hilltop shrine reached by 365 steps.", emoji: "🛕" },
      { name: "Saravana Poigai", desc: "Sacred tank linked to Murugan's birth legend.", emoji: "💧" },
      { name: "Kandasamy Temple", desc: "Foothill shrine for Lord Subramanya.", emoji: "🪔" },
      { name: "Veerataneswarar Temple", desc: "Ancient Shiva temple of great Saiva heritage.", emoji: "🕉️" },
      { name: "Ettukai Amman Temple", desc: "Goddess shrine adored by locals.", emoji: "🌺" },
      { name: "Thiruvallur (nearby)", desc: "Famed Veeraraghava Perumal temple close by.", emoji: "🛕" },
    ],
  },
  {
    en: "Sabarimala",
    ta: "சபரிமலை",
    hi: "सबरीमाला",
    image: "/media/sabarimala.jpg",
    subtitle: { en: "Forest-clad Ayyappan shrine reached by the sacred 18 golden steps.", ta: "புனிதமான பதினெட்டு படிகள் கொண்ட ஐயப்பன் வன ஆலயம்.", hi: "पवित्र 18 स्वर्ण सीढ़ियों वाला अयप्पन का वन मंदिर।" },
    spots: [
      { name: "Sabarimala Ayyappan Temple", desc: "One of the world's largest annual pilgrimages.", emoji: "🛕" },
      { name: "Pathinettu Padi", desc: "The sacred 18 golden steps to the sanctum.", emoji: "🪜" },
      { name: "Pamba River", desc: "Holy river for ritual bath before the climb.", emoji: "🌊" },
      { name: "Makaravilakku", desc: "Celestial light festival witnessed by millions.", emoji: "✨" },
      { name: "Malikappuram Temple", desc: "Adjacent shrine of Goddess Malikappurathamma.", emoji: "🌺" },
      { name: "Neelimala Trek", desc: "Forest trail through the Periyar Tiger Reserve.", emoji: "🌲" },
    ],
  },
];

function PlaceCard({ p, lang, idx, onClick }: { p: Place; lang: string; idx: number; onClick?: () => void }) {
  const name = lang === "ta" ? p.ta : lang === "hi" ? p.hi : p.en;
  const sub = lang === "ta" ? p.subtitle.ta : lang === "hi" ? p.subtitle.hi : p.subtitle.en;
  const clickable = !!onClick;
  return (
    <article
      onClick={onClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`reveal group relative overflow-hidden rounded-2xl bg-white shadow-soft hover-lift ${clickable ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/60" : ""}`}
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
        {clickable && (
          <span className="absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
            Explore
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-lg font-semibold drop-shadow-md">{name}</h3>
          <p className="mt-1 text-xs leading-snug text-white/90 line-clamp-2">{sub}</p>
        </div>
      </div>
    </article>
  );
}

function SpotsModal({ place, lang, onClose }: { place: Place; lang: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const name = lang === "ta" ? place.ta : lang === "hi" ? place.hi : place.en;
  const headingLabel =
    lang === "ta" ? "பார்க்க வேண்டிய இடங்கள்" : lang === "hi" ? "घूमने योग्य स्थान" : "Top spots to visit in";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop with animated gradient blobs */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gold/25 blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-rose-200/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in flex flex-col"
      >
        {/* Hero header */}
        <div className="relative h-44 md:h-56 overflow-hidden flex-shrink-0">
          <img src={place.image} alt={place.en} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-foreground hover:bg-white shadow-soft transition-transform hover:scale-110"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> {headingLabel}
            </span>
            <h3 className="mt-2 text-2xl md:text-4xl font-bold drop-shadow-md">{name}</h3>
          </div>
        </div>

        {/* Spots grid */}
        <div className="relative overflow-y-auto p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(place.spots ?? []).map((s, i) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-white to-amber-50/40 p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-gold/40"
                style={{
                  animation: `fade-in 0.5s ease-out ${i * 70}ms both`,
                }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
                <div className="relative">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{s.emoji ?? "📍"}</span>
                    <h4 className="text-base font-semibold leading-snug">{s.name}</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Places() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<Place | null>(null);

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
              <PlaceCard key={p.en} p={p} lang={lang} idx={idx} onClick={() => setActive(p)} />
            ))}
          </div>
        </div>

        {/* Temple Cities */}
        <div className="mt-20 reveal">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
                <Sparkles className="h-3.5 w-3.5" />{" "}
                {lang === "ta" ? "புனிதம்" : lang === "hi" ? "पवित्र" : "Sacred Trails"}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                {lang === "ta" ? "கோயில் நகரங்கள்" : lang === "hi" ? "मंदिर नगर" : "Temple Cities"}
              </h3>
            </div>
            <div className="hidden md:block h-px flex-1 ml-6 bg-gradient-to-r from-gold/40 to-transparent" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {templeCities.map((p, idx) => (
              <PlaceCard key={p.en} p={p} lang={lang} idx={idx} onClick={() => setActive(p)} />
            ))}
          </div>
        </div>
      </div>

      {active && <SpotsModal place={active} lang={lang} onClose={() => setActive(null)} />}
    </section>
  );
}
