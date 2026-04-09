export type PerfumeNote = {
  top: string;
  heart: string;
  base: string;
};

export type Product = {
  id: string; // The URL slug (e.g., 'emit-light')
  name: string;
  type: string;
  release: string;
  olfactive: string;
  description: string;
  notes: PerfumeNote;
  images: string[];
};

export const products: Product[] = [
  {
    id: "emit-light",
    name: "EMIT LIGHT",
    type: "Eau de Parfum",
    release: "2024",
    olfactive: "Woody, Citrus, Spicy",
    description: "EMIT LIGHT invites you on a thrilling adventure of discovery. It starts with zesty citron and grapefruit, mixed with bold blackcurrant and a touch of pepper. The scent settles with rich patchouli, vetiver, cedarwood, and moss, creating a grounded finish.",
    notes: {
      top: "Citron, Grapefruit, Blackcurrant, Pepper",
      heart: "Juniper Bay, Ginger, Nutmeg, Geranium",
      base: "Patchouli, Vetiver, Cedarwood, Moss"
    },
    images: ["/images/PNG/emit-light.png", "/images/emit-light-2.jpg"]
  },
  {
    id: "glace-amor",
    name: "GLACÉ AMOR",
    type: "Eau de Parfum",
    release: "2024",
    olfactive: "Floral, Powdery, Woody, Vanilla",
    description: "GLACÉ AMOR blends the essence of joyous gatherings with the comforting aroma of vanilla. It opens with a hint of almond, leading to a heart of rose, white flowers, and heliotrope.",
    notes: {
      top: "Almond",
      heart: "Rose, White Flowers, Heliotrope Flower",
      base: "Vanilla Cream, Edible Notes, Powdery Notes, Patchouli, Tonka Bean"
    },
    images: ["/images/PNG/glace-amor.png", "/images/glace-amor-2.jpg"]
  },
  {
    id: "cherrynity",
    name: "CHERRYNITY",
    release: "2024"
    olfactive: "Woody, Amber, Fruity, Spicy",
    description: "CHERRYNITY captures the warmth of an intimate evening with your loved one. It begins with vibrant cherry and mandarin, spiced with saffron and ginger. The heart reveals luxurious leather and osmanthus, softened by apricot and nutmeg. Finally, the deep notes of smoked wood, amber, and vanilla wrap you in a comforting embrace. CHERRYNITY is perfect for creating unforgettable moments of closeness and love.",
    notes: {
      Top: "Cherry, Saffron, Mandarin, Hawthorn, Ginger, Davana",
      heart: "Leather, Olive, Osmanthus, Apricot, Nutmeg, Iris",
      base: "Smoked Wood, Nagarmotha, Incense, Amber, Vanilla, Oak Moss"
    },
    images: ["/images/PNG/cherrynity.png"]
  },// Add Cherrynity, Unseen, Luminara, Rosvéré, Noctéra following this exact pattern...
];

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}