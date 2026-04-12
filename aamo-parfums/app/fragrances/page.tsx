import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Fragrances() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
      
      {/* Page Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl tracking-widest mb-4">FRAGRANCES</h1>
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Discover Our Collection</p>
      </div>

      {/* 
        UPDATED LAYOUT: 
        Switched from 'grid' to 'flex flex-wrap justify-center'. 
        This allows items to wrap to the next line automatically, 
        and 'justify-center' forces any left-over items on the bottom row into the middle. 
      */}
      <div className="flex flex-wrap justify-center -mx-4 md:-mx-6">
        {products.map((product) => (
          
          /* 
            WIDTH CONTROLS:
            Mobile: w-full (1 per row)
            Tablet: md:w-1/2 (2 per row)
            Desktop: lg:w-1/3 (3 per row)
          */
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 mb-16 flex justify-center">
            
            <Link href={`/fragrances/${product.id}`} className="group flex flex-col items-center w-full">
              
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-[3/4] w-full scale-120 overflow-hidden flex items-center justify-center">
                <Image 
                  src={product.images[0]} 
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Product Details below image */}
              <div className="text-center w-full">
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 tracking-widest uppercase">
                  {product.type}
                </p>
              </div>

            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}