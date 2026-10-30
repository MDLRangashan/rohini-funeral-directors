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
    packages: [
      {
        image: "pkg-essential.jpg",
        title: "Basic Package",
        text: "A simple, dignified farewell with the essentials arranged for your family.",
        detail:
          "Guidance on the day, a modest floral tribute, and respectful transport.",
        alt: "White roses, lilies and baby's breath",
      },
      {
        image: "pkg-complete.jpg",
        title: "Standard Package",
        text: "A coordinated farewell with flowers, transport, and ceremony support.",
        detail:
          "Ceremony coordination, a floral tribute, family transport, and support from the first call through the service.",
        alt: "A full white rose and carnation tribute",
      },
      {
        image: "gallery-floral.jpg",
        title: "Premium Package",
        text: "A fuller farewell with added flowers, refreshments, and care for guests.",
        detail:
          "Expanded floral tributes, family transport, refreshments, and close coordination throughout the day.",
        alt: "White funeral flowers arranged on linen",
      },
      {
        image: "pkg-custom.jpg",
        title: "Custom Funeral Package",
        text: "A farewell shaped around your customs, wishes, and chosen services.",
        detail:
          "Arrangements built around your religious customs, family wishes, and the scale of farewell you prefer.",
        alt: "White lilies and orchids arranged as a tribute",
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
    packages: [
      {
        image: "pkg-essential.jpg",
        title: "මූලික පැකේජය",
        text: "පවුලට අවශ්‍ය මූලික සැලසුම් සහිත සරල, ගෞරවනීය සමුගැනීමක්.",
        detail: "දවස පිළිබඳ මඟ පෙන්වීම, සරල මල් උපහාරයක් සහ ගෞරවනීය ප්‍රවාහනය.",
        alt: "සුදු රෝස, ලිලී මල් සහ කුඩා සුදු මල්",
      },
      {
        image: "pkg-complete.jpg",
        title: "සම්මත පැකේජය",
        text: "මල්, ප්‍රවාහනය සහ උත්සව සහාය සමඟ සම්බන්ධීකරණය කළ සමුගැනීමක්.",
        detail: "උත්සව සම්බන්ධීකරණය, මල් උපහාරයක්, පවුල් ප්‍රවාහනය සහ පළමු ඇමතුමේ සිට සේවය දක්වා සහාය.",
        alt: "සුදු රෝස සහ කානේෂන් මල් උපහාරය",
      },
      {
        image: "gallery-floral.jpg",
        title: "ප්‍රිමියම් පැකේජය",
        text: "මල්, ආහාරපාන සහ අමුත්තන් සඳහා වැඩි සැලකිල්ලක් ඇති සම්පූර්ණ සමුගැනීමක්.",
        detail: "විශාල මල් උපහාර, පවුල් ප්‍රවාහනය, ආහාරපාන සහ දවස පුරා සමීප සම්බන්ධීකරණය.",
        alt: "සුදු අවමංගල්‍ය මල්",
      },
      {
        image: "pkg-custom.jpg",
        title: "අභිරුචි අවමංගල්‍ය පැකේජය",
        text: "ඔබේ සිරිත්, කැමැත්ත සහ තෝරාගත් සේවා වටා සකසන ලද සමුගැනීමක්.",
        detail: "ආගමික සිරිත්, පවුලේ කැමැත්ත සහ ඔබ තෝරන සේවා වටා ගොඩනඟන ලද සැලසුම්.",
        alt: "සුදු ලිලී මල් සහ ඕකිඩ් මල් උපහාරය",
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
