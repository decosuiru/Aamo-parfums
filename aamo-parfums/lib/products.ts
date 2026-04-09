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
    images: ["/images/PNG/emit-light.png", "/images/PNG/emit-light.png"]
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
  // Add Cherrynity, Unseen, Luminara, Rosvéré, Noctéra following this exact pattern...
];

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}