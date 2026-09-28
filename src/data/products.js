import { IMAGES } from "@/lib/site";

// Product names and imagery are presentation placeholders until Nikki's live catalogue is supplied.
// Prices are intentionally not invented; customers are prompted to ask for the current price.
export const PRODUCTS = [
  { id: "skincare-01", name: "Daily Skincare Essentials", category: "Skincare", price: null, currency: "USD", availability: "Ask for availability", description: "A curated skincare option for everyday routines. Confirm the current product, size and price with Nikki.", image_url: IMAGES.skincare, image_url_2: IMAGES.bodycare, is_new_arrival: true, is_in_store: true, featured: true },
  { id: "skincare-02", name: "Hydrating Face Care", category: "Skincare", price: null, currency: "USD", availability: "Ask for availability", description: "Hydrating beauty care for your daily routine. Confirm current stock with Nikki.", image_url: IMAGES.skincare, image_url_2: IMAGES.fragrances, is_new_arrival: true, is_in_store: true, featured: false },
  { id: "makeup-01", name: "Everyday Makeup Edit", category: "Makeup", price: null, currency: "USD", availability: "Ask for availability", description: "Everyday makeup essentials. Ask Nikki about shades, brands and current stock.", image_url: IMAGES.makeup, image_url_2: IMAGES.social2, is_new_arrival: true, is_in_store: true, featured: false },
  { id: "makeup-02", name: "Lip & Cheek Essentials", category: "Makeup", price: null, currency: "USD", availability: "Ask for availability", description: "Lip and cheek beauty essentials in a range of looks and finishes.", image_url: IMAGES.makeup, image_url_2: IMAGES.social5, is_new_arrival: false, is_in_store: true, featured: false },
  { id: "fragrance-01", name: "Signature Fragrance", category: "Fragrances", price: null, currency: "USD", availability: "Ask for availability", description: "Fragrance options for everyday wear and special occasions.", image_url: IMAGES.fragrances, image_url_2: IMAGES.social3, is_new_arrival: true, is_in_store: true, featured: true },
  { id: "fragrance-02", name: "Everyday Scent Edit", category: "Fragrances", price: null, currency: "USD", availability: "Ask for availability", description: "Explore current fragrance options and ask Nikki for recommendations.", image_url: IMAGES.fragrances, image_url_2: IMAGES.social1, is_new_arrival: false, is_in_store: true, featured: false },
  { id: "haircare-01", name: "Haircare Essentials", category: "Haircare", price: null, currency: "USD", availability: "Ask for availability", description: "Haircare essentials for everyday routines. Confirm the current range with Nikki.", image_url: IMAGES.haircare, image_url_2: IMAGES.bodycare, is_new_arrival: false, is_in_store: true, featured: false },
  { id: "haircare-02", name: "Hair & Scalp Care", category: "Haircare", price: null, currency: "USD", availability: "Ask for availability", description: "Care products for hair and scalp routines.", image_url: IMAGES.haircare, image_url_2: IMAGES.social4, is_new_arrival: false, is_in_store: true, featured: false },
  { id: "body-01", name: "Body Care Collection", category: "Body Care", price: null, currency: "USD", availability: "Ask for availability", description: "Body care products for your everyday self-care routine.", image_url: IMAGES.bodycare, image_url_2: IMAGES.skincare, is_new_arrival: true, is_in_store: true, featured: false },
  { id: "body-02", name: "Self-Care Essentials", category: "Body Care", price: null, currency: "USD", availability: "Ask for availability", description: "A simple edit of body and self-care essentials.", image_url: IMAGES.bodycare, image_url_2: IMAGES.social4, is_new_arrival: false, is_in_store: true, featured: false },
];

export const Product = {
  async filter(query = {}, _sort, limit) {
    let items = PRODUCTS.filter((p) => Object.entries(query).every(([key, value]) => p[key] === value));
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async list(_sort, limit) {
    let items = PRODUCTS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async get(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  },
};
