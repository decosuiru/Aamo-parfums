import Link from "next/link";
import { products } from "@/lib/products";
import Image from "next/image";

export default function Home() {
  // Grab only the first 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-black flex items-center justify-left px-25">
        {/* Replace with an actual <Image> component when you add your assets */}
        <div className="absolute inset-0 opacity-70 bg-[url('/images/hero-slider-1.jpg')] bg-cover bg-center" />
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest mb-6">AAMO</h1>
          <p className="tracking-[0.3em] uppercase text-sm md:text-base">Essence of Elegance</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {featuredProducts.map((product) => (
            <Link href={`/fragrances/${product.id}`} key={product.id} className="group">
              <div className="relative aspect-[3/4] scale-150 bg-[#] overflow-hidden flex items-center justify-center">
                 {/* Placeholder for Product Image */}
                <Image 
                  src={product.images[0]} 
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-center text-sm font-medium tracking-widest">{product.name}</h3>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link 
            href="/fragrances" 
            className="border-b border-black pb-2 text-sm tracking-[0.2em] hover:text-gray-500 hover:border-gray-500 transition-all"
          >
            DISCOVER COLLECTION
          </Link>
        </div>
      </section>
    </div>
  );
}