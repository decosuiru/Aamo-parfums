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
    release: "2024",
    olfactive: "Woody, Amber, Fruity, Spicy",
    description: "CHERRYNITY captures the warmth of an intimate evening with your loved one. It begins with vibrant cherry and mandarin, spiced with saffron and ginger. The heart reveals luxurious leather and osmanthus, softened by apricot and nutmeg. Finally, the deep notes of smoked wood, amber, and vanilla wrap you in a comforting embrace. CHERRYNITY is perfect for creating unforgettable moments of closeness and love.",
    notes: {
      top: "Cherry, Saffron, Mandarin, Hawthorn, Ginger, Davana",
      heart: "Leather, Olive, Osmanthus, Apricot, Nutmeg, Iris",
      base: "Smoked Wood, Nagarmotha, Incense, Amber, Vanilla, Oak Moss"
    },
    images: ["/images/PNG/cherrynity.png"],
    type: "Eau de Parfum"
  },
  {
    id: "unseen",
    name: "UNSEEN",
    release: "2024",
    olfactive: "Woody, Amber, Iris",
    description: "UNSEEN tells the story of a romance that unfolds with each step. The richness of amber wraps you in warmth, while earthy woods ground the connection, offering a sense of stability and trust. Iris adds a delicate touch of grace, symbolizing love’s beauty and complexity. UNSEEN mirrors a journey where love deepens with every moment, blending strength, warmth, and elegance into one unforgettable scent.",
    notes: {
      top: "Cardamom, Fig Tree Leaf",
      heart: "Iris, Fig Milk, Cashmere Wood",
      base: "Cedarwood, Sandalwood, Ambergris, Vanilla"
    },
    images: ["/images/PNG/unseen.png"],
    type: "Eau de Parfum"
  },
  {
    id: "luminara",
    name: "LUMINARA",
    release: "2025",
    olfactive: "Floral, Musk, Vanilla",
    description: "LUMINARA: Inspired by light (lumen), symbolizing balance through brightness and clarity. This captivating scent harmonizes the creamy softness of almond milk, the subtle warmth of ambrette, and the delicate freshness of freesia. As the fragrance unfolds, it evolves into a rich, sensual base of exotic tuberose, velvety vanilla, and alluring musk. Perfectly balanced, LUMINARA illuminates the senses, evoking feelings of serenity and sophistication.",
    notes: {
      top: "Almond Milk, Ambrette",
      heart: "Water Orris, Freesia",
      base: "Tuberose, Vanilla, Tonka Bean, Musk"
    },
    images: ["/images/PNG/luminara.png"],
    type: "Eau de Parfum"
  },
  {
    id: "rosvere",
    name: "ROSVÉRÉ",
    release: "2025",
    olfactive: "Floral, Citrus, Powdery",
    description: "ROSVÉRÉ is a tribute to fleeting moments that linger remaining light, effervescent, and full of promise. Imagine the first sip of champagne beneath golden morning light. Zesty mandarin and lemon notes sparkle in the air. Soft blooms of rose water and white rose unfold gently, like secrets whispered between smiles. Champagne bubbles rise delicately, lifting the moment into something timeless.",
    notes: {
      top: "Mandarin, Lemon",
      heart: "Rose Water, White Rose, Champagne Bubbles",
      base: "Edible Notes, Powdery Notes, Cedar Wood"
    },
    images: ["/images/PNG/rosvere.png"],
    type: "Extrait de Parfum"
  },
  {
    id: "noctera",
    name: "NOCTÉRA",
    release: "2025",
    olfactive: "Fruity, Oriental",
    description: "NOCTÉRA is a study in contradiction: soft sweetness meeting shadowed temptation. It opens with the playful innocence of ripe strawberries, bright, juicy and irresistibly inviting. Slowly, the sweetness deepens as leather and musk rise like warm skin in candlelight. What begins as a whisper becomes a bold, intimate pull, leaving a trail that feels indulgent, addictive and impossible to forget.",
    notes: {
      top: "Strawberry, Basil",
      heart: "Rose Damascena, Osmanthus",
      base: "Leather Saffiano, Benzoin Siam, Muskd"
    },
    images: ["/images/PNG/noctera.png"],
    type: "Eau de Parfum"
  },
    
  // Add Cherrynity, Unseen, Luminara, Rosvéré, Noctéra following this exact pattern...
];

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}