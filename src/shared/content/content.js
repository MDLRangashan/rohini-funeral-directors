const shared = {
  phone: "+94 77 123 4567",
  phoneHref: "tel:+94771234567",
  whatsappHref:
    "https://wa.me/94771234567?text=Hello%20Rohini%20Funeral%20Directors%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.",
  email: "info@rohinifuneraldirectors.lk",
  emailHref: "mailto:info@rohinifuneraldirectors.lk",
};

const places = [
  {
    id: "main",
    address: "No. 140, Dehiwala Road, RWVF+75 Maharagama, Sri Lanka",
    mapsHref: "https://maps.app.goo.gl/nBfKBL4vGaUepyaY9",
    directionsHref: "https://www.google.com/maps/dir/?api=1&destination=6.843227,79.9229927",
    mapEmbed: "https://maps.google.com/maps?q=6.843227,79.9229927&z=17&output=embed",
  },
  {
    id: "farewell",
    address: "RWRC+X2 Maharagama, Sri Lanka",
    mapsHref: "https://maps.app.goo.gl/RyzVr8jcn38tVL749",
    directionsHref: "https://www.google.com/maps/dir/?api=1&destination=6.8423797,79.9200959",
    mapEmbed: "https://maps.google.com/maps?q=6.8423797,79.9200959&z=17&output=embed",
  },
];

export const copy = {
  en: {
    ...shared,
    assist: "24/7 Funeral Assistance",
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About Us" },
      { id: "services", label: "Our Services" },
      { id: "fleet", label: "Our Fleet" },
      { id: "gallery", label: "Gallery" },
      { id: "packages", label: "Packages" },
      { id: "testimonials", label: "Testimonials" },
      { id: "contact", label: "Contact Us" },
    ],
    footerNav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About Us" },
      { id: "services", label: "Services" },
      { id: "fleet", label: "Fleet" },
      { id: "gallery", label: "Gallery" },
      { id: "packages", label: "Packages" },
      { id: "testimonials", label: "Testimonials" },
      { id: "contact", label: "Contact Us" },
    ],
    callNow: "Call Now",
    whatsapp: "WhatsApp Us",
    ourServices: "Our Services",
    heroKicker: "Rohini Funeral Directors",
    heroTitle: "Honouring Every Life with Dignity, Care & Respect",
    heroText:
      "We provide compassionate and professional funeral services to help you through life's most difficult moments.",
    features: [
      { icon: "care", label: "Compassionate Care" },
      { icon: "professional", label: "Professional Service" },
      { icon: "clock", label: "24/7 Support" },
    ],
    heroQuote: "A respectful farewell is a lasting tribute.",
    servicesKicker: "Our Services",
    servicesTitle: "Comprehensive Funeral Services",
    servicesText:
      "We offer a full range of funeral services, tailored to your needs and traditions.",
    services: [
      {
        icon: "arrange",
        title: "Funeral Arrangements",
        text: "Complete planning and coordination of funeral services.",
      },
      {
        icon: "car",
        title: "Hearse & Funeral Transport",
        text: "Modern and well-maintained vehicles for your loved one's final journey.",
      },
      {
        icon: "flower",
        title: "Floral Arrangements",
        text: "Beautiful floral tributes to express your love and respect.",
      },
      {
        icon: "plan",
        title: "Funeral Planning Assistance",
        text: "Pre-planning guidance and support for peace of mind.",
      },
      {
        icon: "flame",
        title: "Cremation Services",
        text: "Professional and respectful cremation arrangements.",
      },
      {
        icon: "cross",
        title: "Burial Services",
        text: "Traditional and custom burial services.",
      },
      {
        icon: "dining",
        title: "Food and Beverages",
        text: "Meals and refreshments arranged for families and guests.",
      },
    ],
    aboutKicker: "About Rohini Funeral Directors",
    aboutTitle: "Compassionate Support, When You Need It Most",
    aboutText:
      "At Rohini Funeral Directors, we understand that losing a loved one is one of life's most challenging experiences. With years of experience and a deep commitment to our community, we provide respectful, professional and personalised funeral services. Our dedicated team is here to support you with care, empathy and attention to detail — every step of the way.",
    aboutMore:
      "From the first phone call to the final farewell, we guide your family through arrangements, documentation, flowers, transport and the ceremony. Whether you wish for a traditional burial, a cremation, or a private gathering, every detail is shaped around your customs and wishes.",
    learnMore: "Learn More",
    showLess: "Show Less",
    aboutAlt: "Black hearse with a white lily tribute, parked on a tree-lined lane",
    fleetKicker: "Our Fleet",
    fleetTitle: "Dignified Transportation with Care and Respect",
    fleetText:
      "Our modern fleet of funeral vehicles ensures your loved one is transported with the utmost dignity, comfort and respect.",
    viewFleet: "View Our Fleet",
    fleet: [
      { image: "fleet-hearse.jpg", title: "Hearse Vehicles", alt: "Black hearse with white lilies on the bonnet" },
      { image: "fleet-van.jpg", title: "Funeral Vans", alt: "Black Mercedes funeral van beneath trees" },
      { image: "fleet-family.jpg", title: "Family Transport", alt: "Two white Mercedes vans parked under trees" },
    ],
    packagesKicker: "Our Packages",
    packagesTitle: "Funeral Packages",
    packagesText: "Thoughtfully designed to suit your needs and preferences.",
    viewPackages: "View All Packages",
    hidePackages: "Show Fewer Details",
    contactPricing: "Contact for Pricing",
    viewDetails: "View details",
    backToPackages: "Back to packages",
    packageIncludes: "Included in this farewell",
    packageGallery: "Arrangements for this package",
    enquirePackage: "Enquire about this package",
    enquireMessage: "Hello Rohini Funeral Directors, I would like to enquire about the {title}.",
    notedSeparately: "Noted separately",
    packageMissing: "This package could not be found.",
    packages: [
      {
        id: "basic",
        image: "pkg-essential.jpg",
        title: "Basic Package",
        text: "A simple, dignified farewell with the essentials arranged for your family.",
        detail: "Guidance on the day, a modest floral tribute, and respectful transport.",
        alt: "White roses, lilies and baby's breath",
        points: [
          {
            icon: "coffin",
            title: "Coffin and its fittings",
            text: "A simple closed coffin with the essential handles and fittings.",
          },
          {
            icon: "care",
            title: "Preparation of the deceased",
            text: "Careful preparation so your loved one is presented with dignity.",
          },
          {
            icon: "car",
            title: "Hearse and transport charges",
            text: "Hearse transport for the funeral journey, within the included distance.",
          },
          {
            icon: "flower",
            title: "Flowers and wreaths",
            text: "A modest white floral tribute and wreath.",
          },
          {
            icon: "parlour",
            title: "Funeral parlour or viewing facilities",
            text: "A quiet parlour where the family can sit with their loved one.",
          },
          {
            icon: "professional",
            title: "Staff assistance and funeral arrangements",
            text: "Our team guides the arrangements from the first call.",
          },
          {
            icon: "flame",
            title: "Cremation or burial-related services",
            text: "Support for the cremation or burial your family chooses.",
          },
          {
            icon: "note",
            note: true,
            title: "Additional charges, such as distance fees or taxes",
            text: "Distance fees, taxes, and any extras are explained clearly before you decide.",
          },
        ],
        photos: [
          {
            image: "parlour-basic.jpg",
            title: "Parlour",
            alt: "A modest funeral parlour with a simple coffin and white chairs",
          },
          {
            image: "coffin-basic.jpg",
            title: "Coffin",
            alt: "A simple pale-wood coffin with silver handles",
          },
          {
            image: "pkg-essential.jpg",
            title: "Flowers",
            alt: "White roses, lilies and baby's breath",
          },
          {
            image: "fleet-hearse.jpg",
            title: "Hearse",
            alt: "Black hearse with white lilies on the bonnet",
          },
        ],
      },
      {
        id: "standard",
        image: "pkg-complete.jpg",
        title: "Standard Package",
        text: "A coordinated farewell with flowers, transport, and ceremony support.",
        detail:
          "Ceremony coordination, a floral tribute, family transport, and support from the first call through the service.",
        alt: "A full white rose and carnation tribute",
        points: [
          {
            icon: "coffin",
            title: "Coffin and its fittings",
            text: "A polished coffin with brass fittings for a coordinated farewell.",
          },
          {
            icon: "care",
            title: "Preparation of the deceased",
            text: "Thorough, respectful preparation before the viewing.",
          },
          {
            icon: "car",
            title: "Hearse and transport charges",
            text: "Hearse and funeral transport, with the included distance set out in advance.",
          },
          {
            icon: "flower",
            title: "Flowers and wreaths",
            text: "A full white floral tribute and wreath for the parlour and the service.",
          },
          {
            icon: "parlour",
            title: "Funeral parlour or viewing facilities",
            text: "A dressed viewing parlour with seating for family and guests.",
          },
          {
            icon: "professional",
            title: "Staff assistance and funeral arrangements",
            text: "Coordination of the day, from arrival through the service.",
          },
          {
            icon: "flame",
            title: "Cremation or burial-related services",
            text: "Arrangements for cremation or burial, shaped around your wishes.",
          },
          {
            icon: "note",
            note: true,
            title: "Additional charges, such as distance fees or taxes",
            text: "Longer distances, taxes, and optional extras are quoted separately.",
          },
        ],
        photos: [
          {
            image: "parlour-standard.jpg",
            title: "Parlour",
            alt: "A viewing parlour with a walnut coffin, white chairs, and a wreath",
          },
          {
            image: "coffin-standard.jpg",
            title: "Coffin",
            alt: "A polished walnut coffin with brass fittings and white roses",
          },
          {
            image: "gallery-floral.jpg",
            title: "Flowers",
            alt: "A white lily and rose funeral wreath",
          },
          {
            image: "fleet-hearse.jpg",
            title: "Hearse",
            alt: "Black hearse with white lilies on the bonnet",
          },
        ],
      },
      {
        id: "premium",
        image: "gallery-floral.jpg",
        title: "Premium Package",
        text: "A formal farewell with a premium coffin, a dressed hall, and the pansakula offerings.",
        detail:
          "A premium coffin, special florals, a viewing hall, preservation, and the offerings for the final rites.",
        alt: "White funeral flowers arranged on linen",
        points: [
          {
            icon: "coffin",
            title: "Premium coffin",
            text: "A high-finish coffin with ornate fittings, prepared for a formal farewell.",
          },
          {
            icon: "flower",
            title: "Special floral decorations and wreaths",
            text: "Standing sprays, wreaths, and a fuller floral setting for the hall.",
          },
          {
            icon: "car",
            title: "Hearse and body transportation",
            text: "Hearse transport for your loved one's journey to the hall and onwards.",
          },
          {
            icon: "parlour",
            title: "Funeral parlour or viewing hall",
            text: "A dressed viewing hall for family, friends, and the final gathering.",
          },
          {
            icon: "care",
            title: "Body preparation and preservation",
            text: "Careful preparation and preservation for the period of viewing.",
          },
          {
            icon: "stand",
            title: "Funeral stand and decorations",
            text: "A decorated funeral stand dressed in white for the viewing.",
          },
          {
            icon: "professional",
            title: "Staff assistance with funeral arrangements",
            text: "Close support as the arrangements, timings, and hall are set.",
          },
          {
            icon: "arrange",
            title:
              "Pansakula items required for the final funeral rites, including the necessary offerings for Buddhist monks",
            text: "White cloth, flowers, incense, and the offerings prepared for the monks.",
          },
        ],
        photos: [
          {
            image: "parlour-premium.jpg",
            title: "Viewing hall",
            alt: "A grand viewing hall with a floral funeral stand and a dark coffin",
          },
          {
            image: "coffin-premium.jpg",
            title: "Premium coffin",
            alt: "A dark mahogany coffin with silver fittings and white lilies",
          },
          {
            image: "floral-premium.jpg",
            title: "Floral decorations",
            alt: "Standing sprays and a wreath of white lilies, orchids, and pale yellow flowers",
          },
          {
            image: "pansakula.jpg",
            title: "Pansakula offerings",
            alt: "White cloth, an oil lamp, incense, betel leaves, and lotus flowers",
          },
        ],
      },
      {
        id: "custom",
        image: "pkg-custom.jpg",
        title: "Custom Funeral Package",
        text: "A farewell shaped around your customs, wishes, and chosen services.",
        detail:
          "Arrangements built around your religious customs, family wishes, and the scale of farewell you prefer.",
        alt: "White lilies and orchids arranged as a tribute",
        points: [
          {
            icon: "coffin",
            title: "Coffin and its fittings",
            text: "A coffin and fittings chosen around your customs and the farewell you prefer.",
          },
          {
            icon: "care",
            title: "Preparation of the deceased",
            text: "Preparation carried out with the care and customs your family asks for.",
          },
          {
            icon: "car",
            title: "Hearse and transport charges",
            text: "Hearse and transport planned around the places and times you need.",
          },
          {
            icon: "flower",
            title: "Flowers and wreaths",
            text: "Flowers and wreaths selected to suit the scale and style of the farewell.",
          },
          {
            icon: "parlour",
            title: "Funeral parlour or viewing facilities",
            text: "A parlour arranged for a large gathering or a private farewell.",
          },
          {
            icon: "professional",
            title: "Staff assistance and funeral arrangements",
            text: "Staff who shape the arrangements around your family's wishes.",
          },
          {
            icon: "flame",
            title: "Cremation or burial-related services",
            text: "Cremation or burial support, arranged for the rite you follow.",
          },
          {
            icon: "note",
            note: true,
            title: "Additional charges, such as distance fees or taxes",
            text: "Distance fees, taxes, and services beyond the plan are confirmed with you first.",
          },
        ],
        photos: [
          {
            image: "parlour-custom.jpg",
            title: "Parlour",
            alt: "A flexible funeral hall with a wood coffin and white orchids",
          },
          {
            image: "coffin-custom.jpg",
            title: "Coffin",
            alt: "A warm-wood coffin with silver fittings and white orchids and lilies",
          },
          {
            image: "pkg-custom.jpg",
            title: "Flowers",
            alt: "White lilies and orchids arranged as a tribute",
          },
          {
            image: "fleet-hearse.jpg",
            title: "Hearse",
            alt: "Black hearse with white lilies on the bonnet",
          },
        ],
      },
    ],
    galleryKicker: "Our Gallery",
    galleryTitle: "Moments of Care & Respect",
    galleryText:
      "Explore our gallery to see our vehicles, floral arrangements, facilities and special tributes.",
    viewGallery: "View Full Gallery",
    gallery: [
      { image: "fleet-hearse.jpg", title: "Vehicles", alt: "Hearse prepared with a white floral tribute" },
      { image: "gallery-floral.jpg", title: "Floral Arrangements", alt: "White funeral flowers on linen" },
      { image: "gallery-service.jpg", title: "Service Arrangements", alt: "Quiet chapel with wooden pews and candles" },
      { image: "gallery-tribute.jpg", title: "Special Tributes", alt: "Calm cream lounge with a lily arrangement" },
    ],
    storiesKicker: "Testimonials",
    storiesTitle: "Words from Our Families",
    storiesText: "Our greatest reward is the trust and appreciation of the families we serve.",
    stories: [
      {
        quote:
          "Rohini Funeral Directors handled everything with such professionalism and compassion. They made a very difficult time much easier for our family. We are truly grateful.",
        name: "Silva Perera",
        role: "Family Member",
      },
      {
        quote:
          "The team was very supportive, respectful and caring. Every detail was taken care of with great attention. Thank you for your kindness and dedication.",
        name: "Nimal Fernando",
        role: "Family Member",
      },
      {
        quote:
          "Excellent service and very professional. We felt supported from start to finish. Highly recommended.",
        name: "Kumari Jayasinghe",
        role: "Family Member",
      },
    ],
    quickContact: "Quick Contact",
    openingHours: "Opening Hours",
    hours: "24 Hours, 7 Days",
    hoursNote: "We are always here when you need us.",
    directions: "Get Directions",
    viewMap: "View on Google Maps",
    branches: [
      { ...places[0], name: "Rohini Funeral Directors", label: "Main Branch" },
      { ...places[1], name: "Rohini Farewell Home", label: "New Branch" },
    ],
    rights: "© 2026 Rohini Funeral Directors. All rights reserved.",
    privacy: "Privacy Policy",
    privacyTitle: "Privacy Policy",
    privacyBody:
      "When you call or message Rohini Funeral Directors, we use your name and contact details only to answer you and to arrange the services you ask for. We do not sell personal information. To ask about the details you have shared, call us or write to info@rohinifuneraldirectors.lk.",
    close: "Close",
    previous: "Previous",
    next: "Next",
    menu: "Open menu",
    closeMenu: "Close menu",
    tagline: "Honouring Every Life",
    brandSub: "Funeral Directors",
    heroAlt: "Black hearse adorned with white lilies and a candle",
  },
  si: {
    ...shared,
    assist: "24/7 අවමංගල්‍ය සහාය",
    nav: [
      { id: "home", label: "මුල් පිටුව" },
      { id: "about", label: "අප ගැන" },
      { id: "services", label: "අපගේ සේවා" },
      { id: "fleet", label: "අපගේ වාහන" },
      { id: "gallery", label: "ගැලරිය" },
      { id: "packages", label: "පැකේජ" },
      { id: "testimonials", label: "ප්‍රතිචාර" },
      { id: "contact", label: "සම්බන්ධ වන්න" },
    ],
    footerNav: [
      { id: "home", label: "මුල් පිටුව" },
      { id: "about", label: "අප ගැන" },
      { id: "services", label: "සේවා" },
      { id: "fleet", label: "වාහන" },
      { id: "gallery", label: "ගැලරිය" },
      { id: "packages", label: "පැකේජ" },
      { id: "testimonials", label: "ප්‍රතිචාර" },
      { id: "contact", label: "සම්බන්ධ වන්න" },
    ],
    callNow: "දැන් අමතන්න",
    whatsapp: "WhatsApp කරන්න",
    ourServices: "අපගේ සේවා",
    heroKicker: "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු",
    heroTitle: "ගෞරවය, සැලකිල්ල සහ ආදරය ඇතිව සෑම ජීවිතයක්ම සමරමු",
    heroText:
      "ජීවිතයේ දුෂ්කරම මොහොතේ ඔබට සහය වීමට අපි අනුකම්පාවෙන් හා වෘත්තීයභාවයෙන් අවමංගල්‍ය සේවා සපයමු.",
    features: [
      { icon: "care", label: "අනුකම්පා සහගත සත්කාරය" },
      { icon: "professional", label: "වෘත්තීය සේවාව" },
      { icon: "clock", label: "24/7 සහාය" },
    ],
    heroQuote: "ගෞරවනීය සමුගැනීමක් යනු සදාකාලික උපහාරයකි.",
    servicesKicker: "අපගේ සේවා",
    servicesTitle: "සම්පූර්ණ අවමංගල්‍ය සේවා",
    servicesText: "ඔබේ අවශ්‍යතාවලට හා සම්ප්‍රදායන්ට ගැලපෙන පරිදි සම්පූර්ණ අවමංගල්‍ය සේවා පරාසයක් අපි සපයමු.",
    services: [
      { icon: "arrange", title: "අවමංගල්‍ය සැලසුම්", text: "අවමංගල්‍ය සේවා සම්පූර්ණයෙන් සැලසුම් කිරීම සහ සම්බන්ධීකරණය." },
      { icon: "car", title: "ශව වාහන හා ප්‍රවාහනය", text: "ඔබේ ආදරණීයයාගේ අවසන් ගමනට සුදුසු, හොඳින් නඩත්තු කළ වාහන." },
      { icon: "flower", title: "මල් සැරසිලි", text: "ඔබේ ආදරය සහ ගෞරවය ප්‍රකාශ කරන අලංකාර මල් උපහාර." },
      { icon: "plan", title: "පූර්ව සැලසුම් සහාය", text: "සිත සැනසීම සඳහා කල්තියා මඟ පෙන්වීම සහ සහාය." },
      { icon: "flame", title: "ආදාහන සේවා", text: "ගෞරවනීය හා වෘත්තීය ආදාහන සැලසුම්." },
      { icon: "cross", title: "භූමදාන සේවා", text: "සම්ප්‍රදායික හා පවුලේ කැමැත්තට ගැලපෙන භූමදාන සේවා." },
      { icon: "dining", title: "ආහාර සහ පාන", text: "පවුලට සහ අමුත්තන්ට සූදානම් කළ ආහාර සහ පාන." },
    ],
    aboutKicker: "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු ගැන",
    aboutTitle: "ඔබට වඩාත්ම අවශ්‍ය මොහොතේ, අනුකම්පාවෙන් සහය",
    aboutText:
      "ආදරණීයයකු අහිමි වීම ජීවිතයේ දුෂ්කරම අත්දැකීමක් බව රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු දනී. වසර ගණනාවක අත්දැකීම සහ අපේ ප්‍රජාව කෙරෙහි ගැඹුරු කැපවීම ඇතිව, අපි ගෞරවනීය, වෘත්තීය හා පෞද්ගලික අවමංගල්‍ය සේවා සපයමු. අපේ කණ්ඩායම සෑම පියවරකදීම සැලකිල්ලෙන්, අනුකම්පාවෙන් හා සියුම් බවින් ඔබට සහය වේ.",
    aboutMore:
      "පළමු දුරකථන ඇමතුමේ සිට අවසන් සමුගැනීම දක්වා, සැලසුම්, ලේඛන, මල්, ප්‍රවාහනය සහ උත්සවය පිළිබඳව අපි ඔබේ පවුලට මඟ පෙන්වමු. සම්ප්‍රදායික භූමදානයක්, ආදාහනයක් හෝ පෞද්ගලික රැස්වීමක් වේවා, සෑම තොරතුරක්ම ඔබේ සිරිත් සහ කැමැත්ත වටා සකසනු ලැබේ.",
    learnMore: "තව දැනගන්න",
    showLess: "අඩුවෙන් පෙන්වන්න",
    aboutAlt: "ගස් අතර නවතා ඇති, සුදු මල් උපහාරයක් සහිත කළු ශව වාහනය",
    fleetKicker: "අපගේ වාහන",
    fleetTitle: "ගෞරවයෙන් හා සැලකිල්ලෙන් යුතු ප්‍රවාහනය",
    fleetText:
      "අපගේ නවීන වාහන පෙළ, ඔබේ ආදරණීයයා ඉහළම ගෞරවයෙන්, පහසුවෙන් හා සැලකිල්ලෙන් ගෙන යන බව සහතික කරයි.",
    viewFleet: "වාහන බලන්න",
    fleet: [
      { image: "fleet-hearse.jpg", title: "ශව වාහන", alt: "බොනට් එක මත සුදු මල් සහිත කළු ශව වාහනය" },
      { image: "fleet-van.jpg", title: "අවමංගල්‍ය වෑන්", alt: "ගස් යට නවතා ඇති කළු මර්සිඩීස් වෑන් රථය" },
      { image: "fleet-family.jpg", title: "පවුල් ප්‍රවාහනය", alt: "ගස් යට නවතා ඇති සුදු මර්සිඩීස් වෑන් රථ දෙක" },
    ],
    packagesKicker: "අපගේ පැකේජ",
    packagesTitle: "අවමංගල්‍ය පැකේජ",
    packagesText: "ඔබේ අවශ්‍යතා සහ කැමැත්ත සඳහා සිතා සකසන ලදී.",
    viewPackages: "සියලු පැකේජ බලන්න",
    hidePackages: "අඩු විස්තර පෙන්වන්න",
    contactPricing: "මිල ගණන් සඳහා අමතන්න",
    viewDetails: "විස්තර බලන්න",
    backToPackages: "පැකේජ වෙත ආපසු",
    packageIncludes: "මෙම සමුගැනීමට ඇතුළත්",
    packageGallery: "මෙම පැකේජයේ සැලසුම්",
    enquirePackage: "මෙම පැකේජය ගැන විමසන්න",
    enquireMessage: "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරුනි, මට {title} ගැන විමසීමට අවශ්‍යයි.",
    notedSeparately: "වෙනම සටහන් වේ",
    packageMissing: "මෙම පැකේජය සොයාගත නොහැක.",
    packages: [
      {
        id: "basic",
        image: "pkg-essential.jpg",
        title: "මූලික පැකේජය",
        text: "පවුලට අවශ්‍ය මූලික සැලසුම් සහිත සරල, ගෞරවනීය සමුගැනීමක්.",
        detail: "දවස පිළිබඳ මඟ පෙන්වීම, සරල මල් උපහාරයක් සහ ගෞරවනීය ප්‍රවාහනය.",
        alt: "සුදු රෝස, ලිලී මල් සහ කුඩා සුදු මල්",
        points: [
          {
            icon: "coffin",
            title: "මිනීපෙට්ටිය සහ එහි සවිකිරීම්",
            text: "අත්‍යවශ්‍ය හැඩල් සහ සවිකිරීම් සහිත සරල මිනීපෙට්ටියක්.",
          },
          {
            icon: "care",
            title: "මළ සිරුර සූදානම් කිරීම",
            text: "ඔබේ ආදරණීයයා ගෞරවයෙන් පෙනී සිටින පරිදි සැලකිල්ලෙන් සූදානම් කිරීම.",
          },
          {
            icon: "car",
            title: "ශව වාහනය සහ ප්‍රවාහන ගාස්තු",
            text: "ඇතුළත් දුර තුළ, අවමංගල්‍ය ගමන සඳහා ශව වාහන ප්‍රවාහනය.",
          },
          {
            icon: "flower",
            title: "මල් සහ මල්මාලා",
            text: "සරල සුදු මල් උපහාරයක් සහ මල්මාලාවක්.",
          },
          {
            icon: "parlour",
            title: "අවමංගල්‍ය ශාලාව හෝ දැකීමේ පහසුකම්",
            text: "පවුලට වාඩි විය හැකි නිහඬ ශාලාවක්.",
          },
          {
            icon: "professional",
            title: "කාර්ය මණ්ඩල සහාය සහ අවමංගල්‍ය සැලසුම්",
            text: "පළමු ඇමතුමේ සිට සැලසුම් පිළිබඳව අපේ කණ්ඩායමේ මඟ පෙන්වීම.",
          },
          {
            icon: "flame",
            title: "ආදාහන හෝ භූමදාන ආශ්‍රිත සේවා",
            text: "ඔබේ පවුල තෝරන ආදාහනයට හෝ භූමදානයට සහාය.",
          },
          {
            icon: "note",
            note: true,
            title: "අමතර ගාස්තු, දුර ගාස්තු හෝ බදු වැනි",
            text: "දුර ගාස්තු, බදු සහ අමතර දේ, තීරණයට පෙර පැහැදිලිව කියනු ලැබේ.",
          },
        ],
        photos: [
          {
            image: "parlour-basic.jpg",
            title: "ශාලාව",
            alt: "සරල මිනීපෙට්ටියක් සහ සුදු පුටු සහිත සාමාන්‍ය අවමංගල්‍ය ශාලාව",
          },
          {
            image: "coffin-basic.jpg",
            title: "මිනීපෙට්ටිය",
            alt: "රිදී හැඩල් සහිත සරල ලා පැහැති ලී මිනීපෙට්ටිය",
          },
          {
            image: "pkg-essential.jpg",
            title: "මල්",
            alt: "සුදු රෝස, ලිලී මල් සහ කුඩා සුදු මල්",
          },
          {
            image: "fleet-hearse.jpg",
            title: "ශව වාහනය",
            alt: "බොනට් එක මත සුදු මල් සහිත කළු ශව වාහනය",
          },
        ],
      },
      {
        id: "standard",
        image: "pkg-complete.jpg",
        title: "සම්මත පැකේජය",
        text: "මල්, ප්‍රවාහනය සහ උත්සව සහාය සමඟ සම්බන්ධීකරණය කළ සමුගැනීමක්.",
        detail: "උත්සව සම්බන්ධීකරණය, මල් උපහාරයක්, පවුල් ප්‍රවාහනය සහ පළමු ඇමතුමේ සිට සේවය දක්වා සහාය.",
        alt: "සුදු රෝස සහ කානේෂන් මල් උපහාරය",
        points: [
          {
            icon: "coffin",
            title: "මිනීපෙට්ටිය සහ එහි සවිකිරීම්",
            text: "පිත්තල සවිකිරීම් සහිත ඔප දැමූ මිනීපෙට්ටියක්.",
          },
          {
            icon: "care",
            title: "මළ සිරුර සූදානම් කිරීම",
            text: "දැකීමට පෙර ගෞරවයෙන්, ප්‍රවේශමෙන් සූදානම් කිරීම.",
          },
          {
            icon: "car",
            title: "ශව වාහනය සහ ප්‍රවාහන ගාස්තු",
            text: "ශව වාහනය සහ අවමංගල්‍ය ප්‍රවාහනය. ඇතුළත් දුර කල්තියා දන්වනු ලැබේ.",
          },
          {
            icon: "flower",
            title: "මල් සහ මල්මාලා",
            text: "ශාලාවට සහ උත්සවයට සුදු මල් උපහාරයක් සහ මල්මාලාවක්.",
          },
          {
            icon: "parlour",
            title: "අවමංගල්‍ය ශාලාව හෝ දැකීමේ පහසුකම්",
            text: "පවුලට සහ අමුත්තන්ට ආසන සහිත සරසන ලද දැකීමේ ශාලාවක්.",
          },
          {
            icon: "professional",
            title: "කාර්ය මණ්ඩල සහාය සහ අවමංගල්‍ය සැලසුම්",
            text: "පැමිණීමේ සිට උත්සවය දක්වා දවස සම්බන්ධීකරණය කිරීම.",
          },
          {
            icon: "flame",
            title: "ආදාහන හෝ භූමදාන ආශ්‍රිත සේවා",
            text: "ඔබේ කැමැත්තට ගැලපෙන ආදාහන හෝ භූමදාන සැලසුම්.",
          },
          {
            icon: "note",
            note: true,
            title: "අමතර ගාස්තු, දුර ගාස්තු හෝ බදු වැනි",
            text: "දිගු දුර, බදු සහ අමතර සේවා වෙනම දන්වනු ලැබේ.",
          },
        ],
        photos: [
          {
            image: "parlour-standard.jpg",
            title: "ශාලාව",
            alt: "වෝල්නට් මිනීපෙට්ටියක්, සුදු පුටු සහ මල්මාලාවක් සහිත දැකීමේ ශාලාව",
          },
          {
            image: "coffin-standard.jpg",
            title: "මිනීපෙට්ටිය",
            alt: "පිත්තල සවිකිරීම් සහ සුදු රෝස සහිත ඔප දැමූ මිනීපෙට්ටිය",
          },
          {
            image: "gallery-floral.jpg",
            title: "මල්",
            alt: "සුදු ලිලී සහ රෝස මල්මාලාව",
          },
          {
            image: "fleet-hearse.jpg",
            title: "ශව වාහනය",
            alt: "බොනට් එක මත සුදු මල් සහිත කළු ශව වාහනය",
          },
        ],
      },
      {
        id: "premium",
        image: "gallery-floral.jpg",
        title: "ප්‍රිමියම් පැකේජය",
        text: "ප්‍රිමියම් මිනීපෙට්ටියක්, සරසන ලද ශාලාවක් සහ පන්සකුල පූජා සහිත විධිමත් සමුගැනීමක්.",
        detail: "ප්‍රිමියම් මිනීපෙට්ටිය, විශේෂ මල්, දැකීමේ ශාලාව, සංරක්ෂණය සහ අවසන් ක්‍රම සඳහා පූජා.",
        alt: "සුදු අවමංගල්‍ය මල්",
        points: [
          {
            icon: "coffin",
            title: "ප්‍රිමියම් මිනීපෙට්ටිය",
            text: "විධිමත් සමුගැනීමකට සූදානම් කළ, විශේෂ සවිකිරීම් සහිත උසස් මිනීපෙට්ටියක්.",
          },
          {
            icon: "flower",
            title: "විශේෂ මල් සැරසිලි සහ මල්මාලා",
            text: "සිටගෙන සිටින මල් සැරසිලි, මල්මාලා සහ ශාලාවට වඩාත් සම්පූර්ණ මල් අලංකරණය.",
          },
          {
            icon: "car",
            title: "ශව වාහනය සහ සිරුර ප්‍රවාහනය",
            text: "ශාලාව දක්වා සහ ඉන් ඔබ්බට ඔබේ ආදරණීයයාගේ ගමන සඳහා ශව වාහන ප්‍රවාහනය.",
          },
          {
            icon: "parlour",
            title: "අවමංගල්‍ය ශාලාව හෝ දැකීමේ ශාලාව",
            text: "පවුල, ඥාතීන් සහ අවසන් රැස්වීම සඳහා සරසන ලද දැකීමේ ශාලාවක්.",
          },
          {
            icon: "care",
            title: "සිරුර සූදානම් කිරීම සහ සංරක්ෂණය",
            text: "දැකීමේ කාලය සඳහා සැලකිල්ලෙන් සූදානම් කිරීම සහ සංරක්ෂණය.",
          },
          {
            icon: "stand",
            title: "අවමංගල්‍ය වේදිකාව සහ සැරසිලි",
            text: "දැකීම සඳහා සුදු පැහැයෙන් සරසන ලද අවමංගල්‍ය වේදිකාවක්.",
          },
          {
            icon: "professional",
            title: "අවමංගල්‍ය සැලසුම් සඳහා කාර්ය මණ්ඩල සහාය",
            text: "වේලාවන්, ශාලාව සහ සැලසුම් සකසන අතරතුර සමීප සහාය.",
          },
          {
            icon: "arrange",
            title:
              "අවසන් අවමංගල්‍ය ක්‍රම සඳහා අවශ්‍ය පන්සකුල භාණ්ඩ, බෞද්ධ භික්ෂූන් වහන්සේලාට අවශ්‍ය පූජා ඇතුළුව",
            text: "සුදු රෙදි, මල්, සුවඳ දුම් සහ භික්ෂූන් වහන්සේලාට සූදානම් කළ පූජා.",
          },
        ],
        photos: [
          {
            image: "parlour-premium.jpg",
            title: "දැකීමේ ශාලාව",
            alt: "මල් වේදිකාවක් සහ අඳුරු මිනීපෙට්ටියක් සහිත විශාල දැකීමේ ශාලාව",
          },
          {
            image: "coffin-premium.jpg",
            title: "ප්‍රිමියම් මිනීපෙට්ටිය",
            alt: "රිදී සවිකිරීම් සහ සුදු ලිලී සහිත අඳුරු මහෝගනී මිනීපෙට්ටිය",
          },
          {
            image: "floral-premium.jpg",
            title: "මල් සැරසිලි",
            alt: "සුදු ලිලී, ඕකිඩ් සහ ලා කහ මල් සහිත සිටගෙන සිටින සැරසිලි සහ මල්මාලාව",
          },
          {
            image: "pansakula.jpg",
            title: "පන්සකුල පූජා",
            alt: "සුදු රෙදි, පහන, සුවඳ දුම්, බුලත් කොළ සහ ඔළු මල්",
          },
        ],
      },
      {
        id: "custom",
        image: "pkg-custom.jpg",
        title: "අභිරුචි අවමංගල්‍ය පැකේජය",
        text: "ඔබේ සිරිත්, කැමැත්ත සහ තෝරාගත් සේවා වටා සකසන ලද සමුගැනීමක්.",
        detail: "ආගමික සිරිත්, පවුලේ කැමැත්ත සහ ඔබ තෝරන සේවා වටා ගොඩනඟන ලද සැලසුම්.",
        alt: "සුදු ලිලී මල් සහ ඕකිඩ් මල් උපහාරය",
        points: [
          {
            icon: "coffin",
            title: "මිනීපෙට්ටිය සහ එහි සවිකිරීම්",
            text: "ඔබේ සිරිත් සහ ඔබ කැමති සමුගැනීම වටා තෝරාගත් මිනීපෙට්ටියක් සහ සවිකිරීම්.",
          },
          {
            icon: "care",
            title: "මළ සිරුර සූදානම් කිරීම",
            text: "ඔබේ පවුල ඉල්ලන සිරිත් සහ සැලකිල්ල අනුව සූදානම් කිරීම.",
          },
          {
            icon: "car",
            title: "ශව වාහනය සහ ප්‍රවාහන ගාස්තු",
            text: "ඔබට අවශ්‍ය ස්ථාන සහ වේලාවන් වටා සැලසුම් කළ ශව වාහනය සහ ප්‍රවාහනය.",
          },
          {
            icon: "flower",
            title: "මල් සහ මල්මාලා",
            text: "සමුගැනීමේ ප්‍රමාණයට සහ ශෛලියට ගැලපෙන මල් සහ මල්මාලා.",
          },
          {
            icon: "parlour",
            title: "අවමංගල්‍ය ශාලාව හෝ දැකීමේ පහසුකම්",
            text: "විශාල රැස්වීමකට හෝ පෞද්ගලික අවස්ථාවකට සකසන ශාලාවක්.",
          },
          {
            icon: "professional",
            title: "කාර්ය මණ්ඩල සහාය සහ අවමංගල්‍ය සැලසුම්",
            text: "පවුලේ කැමැත්ත වටා සැලසුම් සකසන කාර්ය මණ්ඩලය.",
          },
          {
            icon: "flame",
            title: "ආදාහන හෝ භූමදාන ආශ්‍රිත සේවා",
            text: "ඔබ අනුගමනය කරන චාරිත්‍රයට ගැලපෙන ආදාහන හෝ භූමදාන සහාය.",
          },
          {
            icon: "note",
            note: true,
            title: "අමතර ගාස්තු, දුර ගාස්තු හෝ බදු වැනි",
            text: "දුර ගාස්තු, බදු සහ සැලැස්මෙන් ඔබ්බට යන සේවා පළමුව ඔබ සමඟ තහවුරු කරනු ලැබේ.",
          },
        ],
        photos: [
          {
            image: "parlour-custom.jpg",
            title: "ශාලාව",
            alt: "ලී මිනීපෙට්ටියක් සහ සුදු ඕකිඩ් සහිත නම්‍යශීලී අවමංගල්‍ය ශාලාව",
          },
          {
            image: "coffin-custom.jpg",
            title: "මිනීපෙට්ටිය",
            alt: "රිදී සවිකිරීම්, සුදු ඕකිඩ් සහ ලිලී සහිත උණුසුම් ලී මිනීපෙට්ටිය",
          },
          {
            image: "pkg-custom.jpg",
            title: "මල්",
            alt: "සුදු ලිලී මල් සහ ඕකිඩ් මල් උපහාරය",
          },
          {
            image: "fleet-hearse.jpg",
            title: "ශව වාහනය",
            alt: "බොනට් එක මත සුදු මල් සහිත කළු ශව වාහනය",
          },
        ],
      },
    ],
    galleryKicker: "අපගේ ගැලරිය",
    galleryTitle: "සැලකිල්ලේ හා ගෞරවයේ මොහොත්",
    galleryText: "අපගේ වාහන, මල් සැරසිලි, පහසුකම් සහ විශේෂ උපහාර බැලීමට ගැලරිය විවෘත කරන්න.",
    viewGallery: "සම්පූර්ණ ගැලරිය",
    gallery: [
      { image: "fleet-hearse.jpg", title: "වාහන", alt: "සුදු මල් උපහාරයක් සහිත ශව වාහනය" },
      { image: "gallery-floral.jpg", title: "මල් සැරසිලි", alt: "සුදු අවමංගල්‍ය මල්" },
      { image: "gallery-service.jpg", title: "සේවා සැලසුම්", alt: "ඉටිපන්දම් සහිත නිහඬ දේවස්ථානය" },
      { image: "gallery-tribute.jpg", title: "විශේෂ උපහාර", alt: "ලිලී මල් සහිත සන්සුන් විවේකාගාරය" },
    ],
    storiesKicker: "ප්‍රතිචාර",
    storiesTitle: "අපේ පවුල්වල වචන",
    storiesText: "අපගේ ලොකුම ත්‍යාගය නම් අප සේවය කරන පවුල්වල විශ්වාසය සහ කෘතඥතාවයි.",
    stories: [
      {
        quote:
          "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු සියල්ල වෘත්තීයභාවයෙන් හා අනුකම්පාවෙන් බාරගත්තා. අපේ පවුලට ඉතා දුෂ්කර මේ මොහොත පහසු කළා. අපි සැබවින්ම කෘතඥ වෙමු.",
        name: "Silva Perera",
        role: "පවුලේ සාමාජික",
      },
      {
        quote:
          "කණ්ඩායම ඉතා සහයෝගයෙන්, ගෞරවයෙන් හා සැලකිල්ලෙන් කටයුතු කළා. සෑම තොරතුරක්ම හොඳින් බලාගත්තා. ඔබේ දයාවට ස්තූතියි.",
        name: "Nimal Fernando",
        role: "පවුලේ සාමාජික",
      },
      {
        quote: "විශිෂ්ට සේවාවක්, ඉතා වෘත්තීය. ආරම්භයේ සිට අවසානය දක්වා අපට සහය දැනුණා. මම නිර්දේශ කරනවා.",
        name: "Kumari Jayasinghe",
        role: "පවුලේ සාමාජික",
      },
    ],
    quickContact: "ඉක්මන් සම්බන්ධතා",
    openingHours: "විවෘත වේලාවන්",
    hours: "පැය 24, දින 7",
    hoursNote: "ඔබට අවශ්‍ය සෑම විටම අපි මෙහි සිටිමු.",
    directions: "මාර්ගය ලබාගන්න",
    viewMap: "Google සිතියමේ බලන්න",
    branches: [
      { ...places[0], name: "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු", label: "ප්‍රධාන ශාඛාව" },
      { ...places[1], name: "රෝහිණී සමුගැනීමේ නිවස", label: "නව ශාඛාව" },
    ],
    rights: "© 2026 රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු. සියලු හිමිකම් ඇවිරිණි.",
    privacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
    privacyTitle: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
    privacyBody:
      "ඔබ අමතන විට හෝ පණිවිඩ යවන විට, ඔබට පිළිතුරු දීමට සහ ඔබ ඉල්ලන සේවා සැලසුම් කිරීමට පමණක් අපි ඔබේ නම සහ සම්බන්ධතා විස්තර භාවිත කරමු. අපි පෞද්ගලික තොරතුරු විකුණන්නේ නැත. ඔබ බෙදාගත් විස්තර ගැන විමසීමට අප අමතන්න, නැතහොත් info@rohinifuneraldirectors.lk වෙත ලියන්න.",
    close: "වසන්න",
    previous: "පෙර",
    next: "ඊළඟ",
    menu: "මෙනුව විවෘත කරන්න",
    closeMenu: "මෙනුව වසන්න",
    tagline: "සෑම ජීවිතයක්ම ගෞරව කරමු",
    brandSub: "අවමංගල්‍ය අධ්‍යක්ෂකවරු",
    heroAlt: "සුදු ලිලී මල් සහ ඉටිපන්දමක් සහිත කළු ශව වාහනය",
  },
};

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
];

export function imageSrc(file) {
  return `${process.env.PUBLIC_URL}/images/${file}`;
}
