export interface SiteConfig {
  name: string;
  tagline: string;
  logo: string;
  establishedYear: number;
  gstRegistered: boolean;
  marketLocation: {
    shop: string;
    market: string;
    landmark: string;
    area: string;
    road: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  contact: {
    whatsappNumber: string;
    phoneNumber: string;
    displayPhone: string;
    email: string;
  };
  businessHours: {
    days: string;
    hours: string;
  };
  social: {
    instagram: string;
    instagramHandle: string;
  };
  siteUrl: string;
  tradeInfo: {
    experienceYears: number;
    corridors: string[];
    dispatchNotice: string;
    minOrderThanNotice: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "MM Fashion",
  tagline: "Wholesale Viscose Fabric Lump & Cutpiece Merchant",
  logo: "/logo.jpg",
  establishedYear: 2002,
  gstRegistered: false, // Explicitly false: Do NOT display any GST related info anywhere
  marketLocation: {
    shop: "Shop no. 1030-1032",
    market: "Shri Shiv Market",
    landmark: "Opp. Sindicate Samosa",
    area: "Begum Wadi",
    road: "Ring Road",
    city: "Surat",
    state: "Gujarat",
    pincode: "395002",
    fullAddress:
      "Shop no. 1030-1032, Shri Shiv Market, Opp. Sindicate Samosa, Begum wadi, Ring Road, Surat, Gujarat 395002",
  },
  contact: {
    whatsappNumber:
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919376132974",
    phoneNumber:
      process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 93761 32974",
    displayPhone: "+91 93761 32974",
    email: "abdullahaakukara@gmail.com",
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "9:00 AM – 8:30 PM",
  },
  social: {
    instagram: "https://www.instagram.com/m.m.fashion12",
    instagramHandle: "@m.m.fashion12",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://mmfashion.pages.dev",
  tradeInfo: {
    experienceYears: new Date().getFullYear() - 2002,
    corridors: [
      "Delhi (Gandhi Nagar)",
      "Mumbai (Mangaldas)",
      "Kolkata (Burrabazar)",
      "Jaipur",
      "Ahmedabad",
    ],
    dispatchNotice:
      "Daily pan-India transport dispatch via Ring Road parcel brokers, V-Trans & SafeXpress.",
    minOrderThanNotice:
      "Than lots (standard ~90m rolls) and cut meter lengths available on select qualities.",
  },
};

