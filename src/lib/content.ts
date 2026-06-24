import type {
  Room,
  Service,
  WalkStat,
  Package,
  Testimonial,
  GalleryItem,
  NewsPost,
} from "@/types";

const img = (file: string) => `/images/${file}`;

export const HERO_VIDEO = "/videos/hero.mp4";
export const LUXURY_VIDEO = "/videos/4qFn1E4Qr2SgEglIXimZM1icjQ.mp4";

export const introPortraits = [
  img("6FbTY3JIsbASOUKoQPyq1X6moU.png"),
  img("wwU36NUnvKHYuSI2QnLxeZHsb0.png"),
];

export const luxuryImage = img("3ItuBk29QAByuliEUbnZUdMgA.jpg");

export const rooms: Room[] = [
  {
    name: "Aurelia Sky Grand Suite",
    description:
      "An expansive and beautifully curated space designed to offer the highest level of comfort.",
    image: img("qMYzo2dfUWiyAhrB7twrKN5aro.jpg"),
    size: "90m² - 105m²",
    bed: "3 King Bed",
  },
  {
    name: "Solana Garden Comfort Room",
    description:
      "A cozy and calming environment designed to make your stay feel effortless, with carefully selected details that enhance comfort and relaxation.",
    image: img("NP424SHltVvioI9H63eQtZDsBew.jpg"),
    size: "30m² - 35m²",
    bed: "1 King Bed",
  },
  {
    name: "Alba Coastal Comfort Room",
    description:
      "A cozy and well-designed space where comfort meets simplicity, giving you everything you need for a relaxed and enjoyable stay at Maravilla.",
    image: img("H0aVztE3Z5a5GVXgXSPrAB9c4I.jpg"),
    size: "32m² - 35m²",
    bed: "Double bed",
  },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Reformas integrales",
    tags: ["Presupuesto cerrado", "Gestión completa", "Plazo garantizado"],
    description:
      "Renovamos tu vivienda de principio a fin,\ngestionando cada fase de la obra\nen el plazo acordado.",
    image: img("servicios_integral.webp"),
  },
  {
    number: "02",
    title: "Reformas de cocinas",
    tags: ["Diseño", "Materiales", "Instalación completa"],
    description:
      "Diseñamos y ejecutamos la cocina que siempre quisiste, desde la distribución hasta el último electrodoméstico.",
    image: img("servicios_cocina.jpg"),
  },
  {
    number: "03",
    title: "Reformas de baños",
    tags: ["Sanitarios", "Alicatado", "Entrega rápida"],
    description:
      "Transformamos tu baño con instalación completa, en el plazo que acordamos y dejándolo todo limpio.",
    image: img("servicios_baño.webp"),
  },
  {
    number: "04",
    title: "Reformas de locales comerciales",
    tags: ["Adecuación", "Licencias", "Llave en mano"],
    description:
      "Adecuamos tu local para que puedas abrir cuanto antes, gestionando obra y trámites.",
    image: img("servicios_local.png"),
  },
];

export const extraComfortsImage = img("qyjZQ3zrZSqwh6UXobyb2HHUw.jpg");

export const diningCards = [
  {
    title: "Curated Dining",
    subtitle: "Just for you",
    cta: "DISCOVER DINNING",
    image: img("aOcFm0Fx9tWrBJiZ5bRRsUypf8.png"),
  },
  {
    title: "Curated Relaxation",
    subtitle: "Just for you",
    cta: "DISCOVER WELLNESS",
    image: img("llCociSJWSzl1MclDWYy7rL1Lw.png"),
  },
];

export const walkStats: WalkStat[] = [
  { number: "05", label: "minutes walk to\nRetiro Park", image: img("6bkpnIfzi0dlHnMPK7HwjNMgS0.png") },
  { number: "09", label: "min walk to the\nRiverside Promenade", image: img("rnwBVKT8xxOt4BAbsYRJoSdY098.jpg") },
  { number: "12", label: "min walk to\nthe Historic Old Town", image: img("eOrYyQyU3BUZEeOHE4LSrEDxdgs.png") },
  { number: "18", label: "Conveniently located for\na smooth arrival and departure", image: img("6bkpnIfzi0dlHnMPK7HwjNMgS0.png") },
];

export const packages: Package[] = [
  {
    badge: "For Wellness Escapes",
    name: "Azure Retreat",
    description:
      "Created for those who want to disconnect from routine and reconnect with relaxation, this package offers thoughtfully curated moments designed to restore both body and mind.",
    price: "€260 / night",
    image: img("QWiib2U8lYNNaRYdyXcqyfmKQ.png"),
  },
  {
    badge: "For Luxury Seekers",
    name: "Velvet Stay",
    description:
      "From beautifully designed interiors to personalized experiences throughout your stay, every detail is crafted to deliver comfort with sophistication and ease.",
    price: "€400 / night",
    image: img("jKHoBI7wzjeYXHx1W6uqwGJpO9o.png"),
  },
];

export const packageQuote = {
  text: "A thoughtfully designed escape where dining, wellness, and stays come together with quiet sophistication.",
  name: "Sofía Navarro",
  role: "Guest Experience Director",
  image: img("SuZD6QlRB7X8jbGJPsRmLc7w.png"),
};

export const testimonialBg = img("CwfvIeP8t10aPBZWZPDUNU04D8.png");
export const testimonialAvatars = [
  img("9KtkeCdEZAMAANBNOS6w3nDu9E.png"),
  img("iDWglFBmEbS0WvxMcREX66x6E.png"),
  img("hynZItQ23EhInLdXKnOiDWsftM.png"),
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The atmosphere, service, and attention to detail made every meal feel special. A truly refined dining experience.",
    name: "Sofía Morales",
    image: img("8jmc4pa52nV688vvKvkiGVXU.png"),
  },
  {
    quote:
      "The Mediterranean Deluxe Room had beautiful natural light and such a peaceful vibe. It had everything, comfortable stay.",
    name: "Sofía Castro",
    image: img("njIDCb4lxSqe45tKEMz0zdxtU0.png"),
  },
  {
    quote:
      "I stayed in the Mediterranean Deluxe Room and loved how simple yet comfortable it was.",
    name: "Lucas Rodríguez",
    image: img("WGaUY0zijtJZiptiQIVkOBszkmg.png"),
  },
  {
    quote:
      "Dining at Maravilla was one of the highlights of our stay. Every dish felt fresh, beautifully presented, and full of flavor.",
    name: "Alejandr Ruiz",
    image: img("cXCahBHU2nTs2upy6qwF66Hhgc.png"),
  },
  {
    quote:
      "The Signature Ocean Suite was spacious, elegant, and incredibly relaxing. It made our stay feel truly special.",
    name: "Alejandro Ruiz",
    image: img("jHLdFKmOFMj2FRqGN2gTRJXrWE.png"),
  },
];

export const partnerLogos = [
  img("Gn7vHcxUq7PDpn0t7ke5MTPLPS8.png"),
  img("elcHVcnDTahjkoXfpAVWsjJFZRg.png"),
  img("a1lIuaJAcaagQlks0xih1rIeNf0.png"),
  img("sA5OvSogFlscTYH2aCXWajoxgAY.png"),
  img("HyGKHwFKT30bYze5udpc9ddciU.png"),
  img("Wssi6Mm0lGVuvaxnY8GImh5o8k4.png"),
  img("OWaFruzq7hqCZWA1kBjGSwjuLFE.png"),
  img("kXlZz9g2w8Nbx61OnKuVDw2NxUo.png"),
];

export const galleryItems: GalleryItem[] = [
  { image: img("lOFUodZU9vVVdyVZhnqJi3Z7rk.png"), caption: "Quiet moments, beautifully lived" },
  { image: img("eOcbSQl8FHmbxa29eTBDeaNWcA.png"), caption: "Comfort in every detail" },
  { image: img("uEJ7DuWTc1K7RfOj6J04XAxmnQ.png"), caption: "Where calm comes naturally" },
  { image: img("D4yAO93x2fQ1Ge7xjNcYAKgubMQ.png"), caption: "A space to slow down" },
  { image: img("lnDpqRTlc9dpM55R8PUu4occ90.png"), caption: "Simple moments, well enjoyed" },
];

export const newsPosts: NewsPost[] = [
  {
    category: "Experiences",
    title: "Why meaningful Experiences define modern Travel",
    date: "May 12, 2026",
    image: img("OUe3P5oWeP4DlLzRYeOr1L5xPCQ.png"),
  },
  {
    category: "Dining",
    title: "Why great Dining is about more than just Food",
    date: "May 12, 2026",
    image: img("mcBaXVPTeFtXcVkImRjYTd0MU88.png"),
  },
  {
    category: "Experiences",
    title: "Why the best Experiences are often the Simplest",
    date: "May 12, 2026",
    image: img("zjzpRqgi0hyC8y7IvSzXkws.png"),
  },
];

export const ctaCards = [
  { label: "CHOOSE YOUR", title: "Stay", image: img("hfBVsgiUQfOiy4IaA42ugGhWY4A.jpg") },
  { label: "EXPERIENCE", title: "Dining", image: img("yYA8uETcPYFy1bCEpIY5GxZGWBc.jpg") },
];
