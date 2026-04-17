import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { ShoppingBag, Navigation, Mail, MapPin } from "lucide-react"; 

export default function Fragrances() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-40 pb-24">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-widest mb-4 ">FRAGRANCES</h1>
        <p className="text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase">Discover Our Collection</p>
      </div>

      {/* UPDATED BRANDING LINE: Background Layer */}
      <div className="flex justify-center mb-16 w-full">
        <div className="w-24 h-4 bg-[url('/images/PNG/Line/line2.png')] bg-contain bg-center bg-no-repeat opacity-50"></div>
      </div>

      {/* Grid Layout (UPDATED: w-1/2 for 2 columns on mobile) */}
      <div className="flex flex-wrap justify-center -mx-2 md:-mx-6">
        {products.map((product) => (
          
          <div key={product.id} className="w-1/2 lg:w-1/3 px-2 md:px-6 mb-12 md:mb-16 flex justify-center">
            <Link href={`/fragrances/${product.id}`} className="group flex flex-col items-center w-full">
              
              <div className="relative aspect-[3/4] w-full max-w-[280px] mb-4 md:mb-6 overflow-hidden flex items-center justify-center">
                <Image 
                  src={product.images[0]} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="text-center w-full">
                <h3 className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-1 md:mb-2">
                  {product.name}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">
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