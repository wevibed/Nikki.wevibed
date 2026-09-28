// NIKKI BEAUTY & COSMETICS
// Business contact/location details intentionally left editable until confirmed with the owner.

export const SITE = {
  brand: "NIKKI",
  descriptor: "BEAUTY & COSMETICS",
  tagline: "Beauty Made For You",
  subtagline:
    "Cosmetics, skincare and beauty essentials for your everyday routine.",

  addressLine1: "Contact Nikki for store details",
  addressLine2: "Harare, Zimbabwe",

  hours: "Message Nikki for current hours",
  status: "Beauty Essentials · Skincare · Makeup · Fragrances",

  whatsapp: "",
  phoneDisplay: "Add WhatsApp / phone number",

  instagram: "#",
  facebook: "#",
  mapsUrl: "#",
};

export const IMAGES = {
  hero: "/images/nikki-hero.jpg",
  edit: "/images/nikki-featured.jpg",
  skincare: "/images/nikki-skincare.jpg",
  makeup: "/images/nikki-makeup.jpg",
  fragrances: "/images/nikki-fragrances.jpg",
  haircare: "/images/nikki-haircare.jpg",
  bodycare: "/images/nikki-bodycare.jpg",
  social1: "/images/nikki-social-1.jpg",
  social2: "/images/nikki-social-2.jpg",
  social3: "/images/nikki-social-3.jpg",
  social4: "/images/nikki-social-4.jpg",
  social5: "/images/nikki-social-5.jpg",
};

export const CATEGORIES = [
  { name: "Skincare", image: IMAGES.skincare },
  { name: "Makeup", image: IMAGES.makeup },
  { name: "Fragrances", image: IMAGES.fragrances },
  { name: "Haircare", image: IMAGES.haircare },
  { name: "Body Care", image: IMAGES.bodycare },
];

export function whatsappLink(message) {
  if (!SITE.whatsapp) return "#contact";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  return whatsappLink(
    `Hi Nikki! I'm interested in ${product.name}. Is it available and what is the current price?`
  );
}
