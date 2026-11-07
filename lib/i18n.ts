export type Language = "en" | "gu" | "hi";

export interface I18nLabels {
  brandName: string;
  merchantSubtitle: string;
  catalog: string;
  findThan: string;
  aboutUs: string;
  searchPlaceholder: string;
  all: string;
  filters: string;
  clearAll: string;
  inquireWhatsApp: string;
  callMerchant: string;
  call: string;
  inStock: string;
  lowStock: string;
  outOfStock: string;
  moq: string;
  perMeter: string;
  width: string;
  gsm: string;
  weave: string;
  composition: string;
  buyType: string;
  than: string;
  cutMeter: string;
  bothThanCut: string;
  wholesaleRate: string;
  retailRate: string;
  specifications: string;
  dispatchTitle: string;
  dispatchNotice: string;
  qualityGuaranteeTitle: string;
  qualityGuaranteeDesc: string;
  emptyTitle: string;
  emptySubtitle: string;
  emptyWhatsAppCta: string;
  dailyUpdates: string;
  instagramNotice: string;
  viewInstagram: string;
  b2bBadge: string;
  wholesaleNotice: string;
  wholesaleNoticeSub: string;
  filterSheetTitle: string;
  reset: string;
  applyFilters: string;
  stockFilterLabel: string;
  buyTypeFilterLabel: string;
  fabricTypeFilterLabel: string;
  tapToZoom: string;
  back: string;
  copyAddress: string;
  copied: string;
  businessHours: string;
  marketHub: string;
  transportTitle: string;
  transportNotice: string;
  tradingExp: string;
  godownStock: string;
  directDial: string;
  chatWhatsApp: string;
}

export const translations: Record<Language, I18nLabels> = {
  en: {
    brandName: "MM Fashion",
    merchantSubtitle: " ",
    catalog: "Catalog",
    findThan: "Find Than",
    aboutUs: "About Us",
    searchPlaceholder: "Search cotton, georgette, 60s, GSM...",
    all: "All",
    filters: "Filters",
    clearAll: "Clear All",
    inquireWhatsApp: "Inquire on WhatsApp",
    callMerchant: "Direct Call",
    call: "Call",
    inStock: "In Stock",
    lowStock: "Low Stock",
    outOfStock: "Out of Stock",
    moq: "MOQ",
    perMeter: "/ meter",
    width: "Width",
    gsm: "GSM",
    weave: "Weave",
    composition: "Composition",
    buyType: "Buy Type",
    than: "Than Only (~90m)",
    cutMeter: "Cut Meters",
    bothThanCut: "Than & Cut Meters",
    wholesaleRate: "Wholesale Rate",
    retailRate: "Retail Rate",
    specifications: "Technical Mill Specifications",
    dispatchTitle: "Dispatch & Logistics",
    dispatchNotice:
      "Daily pan-India transport dispatch via Surat Ring Road parcel brokers, V-Trans and SafeXpress.",
    qualityGuaranteeTitle: "Original Than Quality Guarantee",
    qualityGuaranteeDesc:
      "Every than roll carries verified meterage and inspected fabric grade. Sample cuttings available on request.",
    emptyTitle: "No direct fabric match found",
    emptySubtitle:
      "We source hundreds of raw than varieties daily from Ring Road weaving mills. Ask us on WhatsApp, we may have it in godown stock.",
    emptyWhatsAppCta: "Ask Us on WhatsApp",
    dailyUpdates: "Daily Lot Updates & Loom Stories",
    instagramNotice: "Watch fresh arrival videos and ready stock lots",
    viewInstagram: "View on Instagram",
    b2bBadge: "B2B Trade",
    wholesaleNotice: "Direct Mill Wholesale Rates",
    wholesaleNoticeSub: "Sample cuttings dispatched across India",
    filterSheetTitle: "Filter Than Catalog",
    reset: "Reset",
    applyFilters: "Apply Filters",
    stockFilterLabel: "Stock Status",
    buyTypeFilterLabel: "Order Type",
    fabricTypeFilterLabel: "Fabric Type",
    tapToZoom: "Pinch / Tap to Inspect Weave",
    back: "Back",
    copyAddress: "Copy Address",
    copied: "Copied!",
    businessHours: "Mon–Sat: 9:00 AM – 8:30 PM",
    marketHub: "Surat Hub",
    transportTitle: "Daily Transport Parcel Tie-ups",
    transportNotice:
      "Daily LR generation with transport delivery to Delhi, Mumbai, Kolkata, Jaipur, Ahmedabad and pan-India.",
    tradingExp: "Trading Exp.",
    godownStock: "Godown Stock",
    directDial: "Direct Dial",
    chatWhatsApp: "Chat with Merchant on WhatsApp",
  },
  gu: {
    brandName: "એમ એમ ફેશન",
    merchantSubtitle: "કાપડના વેપારી",
    catalog: "કેટાલોગ",
    findThan: "થાન શોધો",
    aboutUs: "અમારા વિશે",
    searchPlaceholder: "કોટન, જોર્જેટ, 60s, જીએસએમ શોધો...",
    all: "બધા",
    filters: "ફિલ્ટર્સ",
    clearAll: "બધું સાફ કરો",
    inquireWhatsApp: "વોટ્સએપ પર પૂછપરછ કરો",
    callMerchant: "કોલ કરો",
    call: "કોલ",
    inStock: "સ્ટોક ઉપલબ્ધ",
    lowStock: "મર્યાદિત સ્ટોક",
    outOfStock: "સ્ટોક ખાલી",
    moq: "ઓછામાં ઓછું (MOQ)",
    perMeter: "/ મીટર",
    width: "પન્નો",
    gsm: "જીએસએમ",
    weave: "વણાટ",
    composition: "કાપડ મિશ્રણ",
    buyType: "ખરીદી પ્રકાર",
    than: "માત્ર થાન (~90મી)",
    cutMeter: "કટ મીટર",
    bothThanCut: "થાન અને કટ બંને",
    wholesaleRate: "જથ્થાબંધ ભાવ",
    retailRate: "છૂટક ભાવ",
    specifications: "ટેકનિકલ મિલ વિગતો",
    dispatchTitle: "ટ્રાન્સપોર્ટ અને ડિસ્પેચ",
    dispatchNotice:
      "સુરત રીંગ રોડ ટ્રાન્સપોર્ટ, વી-ટ્રાન્સ અને સેફએક્સપ્રેસ દ્વારા ભારતભરમાં દૈનિક પાર્સલ રવાના.",
    qualityGuaranteeTitle: "અસલ થાન ગુણવત્તા ગેરંટી",
    qualityGuaranteeDesc:
      "દરેક થાન રોલ પર ચકાસાયેલ મીટર અને ગુણવત્તા મહોર હોય છે. સેમ્પલ કટીંગ ઉપલબ્ધ.",
    emptyTitle: "કોઈ કાપડ મળ્યું નથી",
    emptySubtitle:
      "અમારા ગોડાઉનમાં ઉપલબ્ધ હોઈ શકે છે. સુરત રીંગ રોડ મિલોમાંથી રોજે નવી વેરાયટી આવે છે. વોટ્સએપ પર પૂછો.",
    emptyWhatsAppCta: "વોટ્સએપ પર પૂછો",
    dailyUpdates: "દૈનિક લોટ અને લૂમ અપડેટ્સ",
    instagramNotice: "નવા થાન આગમન અને સ્ટોકના વિડીયો જુઓ",
    viewInstagram: "ઇન્સ્ટાગ્રામ પર જુઓ",
    b2bBadge: "B2B વેપાર",
    wholesaleNotice: "સીધા મિલ જથ્થાબંધ ભાવ",
    wholesaleNoticeSub: "સમગ્ર ભારતમાં સેમ્પલ કટીંગ મોકલવામાં આવે છે",
    filterSheetTitle: "કેટાલોગ ફિલ્ટર કરો",
    reset: "રીસેટ",
    applyFilters: "ફિલ્ટર લાગુ કરો",
    stockFilterLabel: "સ્ટોક સ્થિતિ",
    buyTypeFilterLabel: "ઓર્ડર પ્રકાર",
    fabricTypeFilterLabel: "કાપડ પ્રકાર",
    tapToZoom: "વણાટ જોવા માટે ટેપ કરો",
    back: "પાછા",
    copyAddress: "સરનામું કોપી કરો",
    copied: "કોપી થયું!",
    businessHours: "સોમ–શનિ: 9:00 AM – 8:30 PM",
    marketHub: "સુરત માર્કેટ",
    transportTitle: "દૈનિક ટ્રાન્સપોર્ટ સુવિધા",
    transportNotice:
      "દિલ્હી, મુંબઈ, કોલકાતા, જયપુર, અમદાવાદ અને સમગ્ર ભારતમાં દૈનિક બિલ્ટી (LR) રવાના.",
    tradingExp: "વેપાર અનુભવ",
    godownStock: "ગોડાઉન સ્ટોક",
    directDial: "સીધો કોલ",
    chatWhatsApp: "વોટ્સએપ પર વેપારી સાથે વાત કરો",
  },
  hi: {
    brandName: "एम एम फैशन",
    merchantSubtitle: "कपड़ा व्यापारी",
    catalog: "कैटलॉग",
    findThan: "थान खोजें",
    aboutUs: "हमारे बारे में",
    searchPlaceholder: "कॉटन, जॉर्जेट, 60s, जीएसएम खोजें...",
    all: "सभी",
    filters: "फिल्टर्स",
    clearAll: "हटाएं",
    inquireWhatsApp: "व्हाट्सएप पर पूछताछ करें",
    callMerchant: "कॉल करें",
    call: "कॉल",
    inStock: "स्टॉक में उपलब्ध",
    lowStock: "कम स्टॉक",
    outOfStock: "स्टॉक समाप्त",
    moq: "न्यूनतम आर्डर (MOQ)",
    perMeter: "/ मीटर",
    width: "पना (Width)",
    gsm: "जीएसएम (GSM)",
    weave: "बुनाई (Weave)",
    composition: "कपड़ा संरचना",
    buyType: "खरीद प्रकार",
    than: "केवल थान (~90मी)",
    cutMeter: "कट मीटर",
    bothThanCut: "थान व कट दोनों",
    wholesaleRate: "थोक भाव",
    retailRate: "फुटकर भाव",
    specifications: "तकनीकी मिल विवरण",
    dispatchTitle: "डिस्पैच एवं ट्रांसपोर्ट",
    dispatchNotice:
      "सूरत रिंग रोड ट्रांसपोर्ट, वी-ट्रांस और सेफएक्सप्रेस द्वारा पूरे भारत में दैनिक पार्सल डिस्पैच।",
    qualityGuaranteeTitle: "असली थान गुणवत्ता गारंटी",
    qualityGuaranteeDesc:
      "प्रत्येक थान रोल पर सत्यापित मीटर व गुणवत्ता जांच होती है। थोक लॉट के लिए सैंपल कटिंग उपलब्ध।",
    emptyTitle: "कोई कपड़ा नहीं मिला",
    emptySubtitle:
      "हमारे सूरत गोदाम में उपलब्ध हो सकता है। रिंग रोड मिलों से रोजाना नए थान आते हैं। व्हाट्सएप पर पूछें।",
    emptyWhatsAppCta: "व्हाट्सएप पर पूछें",
    dailyUpdates: "दैनिक लॉट व लूम अपडेट",
    instagramNotice: "नए आगमन और तैयार स्टॉक के वीडियो देखें",
    viewInstagram: "इंस्टाग्राम पर देखें",
    b2bBadge: "B2B व्यापार",
    wholesaleNotice: "सीधे मिल थोक भाव",
    wholesaleNoticeSub: "पूरे भारत में सैंपल कटिंग 24 घंटे में रवाना",
    filterSheetTitle: "कैटलॉग फ़िल्टर करें",
    reset: "रीसेट",
    applyFilters: "फ़िल्टर लागू करें",
    stockFilterLabel: "स्टॉक स्थिति",
    buyTypeFilterLabel: "ऑर्डर प्रकार",
    fabricTypeFilterLabel: "कपड़े का प्रकार",
    tapToZoom: "बुनाई देखने के लिए टैप करें",
    back: "वापस",
    copyAddress: "पता कॉपी करें",
    copied: "कॉपी हो गया!",
    businessHours: "सोम–शनि: 9:00 AM – 8:30 PM",
    marketHub: "सूरत हब",
    transportTitle: "दैनिक ट्रांसपोर्ट पार्सल सुविधा",
    transportNotice:
      "दिल्ली, मुंबई, कोलकाता, जयपुर, अहमदाबाद और पूरे भारत में प्रतिदिन LR पार्सल डिस्पैच।",
    tradingExp: "व्यापार अनुभव",
    godownStock: "गोदाम स्टॉक",
    directDial: "सीधा कॉल",
    chatWhatsApp: "व्हाट्सएप पर व्यापारी से बात करें",
  },
};

const STORAGE_KEY = "mm_fashion_lang";

export function getSavedLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    if (saved === "en" || saved === "gu" || saved === "hi") {
      return saved;
    }
  } catch {
    // localStorage might fail in private browsing
  }
  return "en";
}

export function saveLanguage(lang: Language): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
}

