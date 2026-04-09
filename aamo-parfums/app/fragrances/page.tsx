import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Fragrances() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
      
      {/* Page Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest mb-4">FRAGRANCES</h1>
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Discover Our Collection</p>
      </div>

      {/* Grid Layout for all products */}
      {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {products.map((product) => (
          <Link href={`/fragrances/${product.id}`} key={product.id} className="group">
            
            {/* Image Container with Hover Effect */}
            <div className="relative aspect-[4/5] bg-[#FAFAFA] mb-8 overflow-hidden flex items-center justify-center">
              {/* Note: Until you add real images to public/images, this might show a broken image icon. */}
              <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                className="object-contain p-12 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Product Details below image */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 tracking-widest uppercase">
                {product.type}
              </p>
            </div>

          </Link>
        ))}
      </div>

    </div>
  );
}