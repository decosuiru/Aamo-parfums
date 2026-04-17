import { getProductById, products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static routes at build time
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) return notFound();

  // Filter out the current product to get 4 recommendations
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  // Dynamically load the specific background for this variant
  const backgroundPath = `/images/Background/bg-${product.id}.jpg`;

  return (
    <div className="w-full bg-[#1d1d1d] text-white overflow-x-hidden">
      
      {/* =========================================
          SECTION 1: SPLIT SCREEN (ABOVE THE FOLD)
          ========================================= */}
      <div className="flex flex-col lg:flex-row w-full relative">
        
        {/* LEFT SIDE: Clean Studio Image (Sticky) */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen lg:sticky top-0 flex items-center justify-center bg-[#151515] z-0">
           
           {/* Photo 1 (Main Bottle) */}
           <div className="relative w-3/4 h-3/4 max-w-[400px]">
             <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 75vw, 50vw"
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-1000 ease-out"
             />
           </div>
        </div>

        {/* RIGHT SIDE: Editorial Information */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-24 lg:py-32 flex flex-col justify-center bg-[#1d1d1d] z-10">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            
            {/* Breadcrumbs */}
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-10 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/fragrances" className="hover:text-white transition-colors">Fragrances</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>

            {/* Olfactive Profile */}
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4 font-semibold">
              {product.olfactive}
            </p>

            {/* Title (Ivy Family) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-4 text-white leading-tight">
              {product.name}
            </h1>
            
            {/* Type / Release */}
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-8">
              {product.type} <span className="mx-2 text-gray-600">|</span> {product.release}
            </p>

            {/* BRANDING: Solid AAMO Line (FIXED to White) */}
            <div className="w-24 h-4 bg-[url('/images/PNG/Line/line1white.png')] bg-contain bg-no-repeat bg-left mb-10"></div>

            {/* Description */}
            <div className="text-sm text-gray-300 leading-loose mb-16 font-light">
              <p>{product.description}</p>
            </div>

            {/* Olfactory Pyramid (Xerjoff Style) */}
            <div className="border-t border-white/10 pt-12">
              <h3 className="text-sm tracking-[0.2em] font-bold mb-8 uppercase text-white">
                Olfactory Pyramid
              </h3>
              
              <div className="flex flex-col">
                {/* Top Notes */}
                <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-white/5">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/70 text-lg mb-2 sm:mb-0 shrink-0">
                    Top
                  </h4>
                  <p className="text-sm text-gray-300 tracking-wide font-light leading-relaxed">
                    {product.notes.top}
                  </p>
                </div>

                {/* Heart Notes */}
                <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-white/5">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/70 text-lg mb-2 sm:mb-0 shrink-0">
                    Heart
                  </h4>
                  <p className="text-sm text-gray-300 tracking-wide font-light leading-relaxed">
                    {product.notes.heart}
                  </p>
                </div>

                {/* Base Notes */}
                <div className="flex flex-col sm:flex-row sm:items-center py-6">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/70 text-lg mb-2 sm:mb-0 shrink-0">
                    Base
                  </h4>
                  <p className="text-sm text-gray-300 tracking-wide font-light leading-relaxed">
                    {product.notes.base}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: MOOD CANVAS (BELOW THE FOLD)
          ========================================= */}
      <div className="w-full h-[60vh] md:h-[80vh] relative flex items-center justify-center overflow-hidden">
        
        <Image 
          src={backgroundPath} 
          alt={`Mood of ${product.name}`}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 drop-shadow-lg">
            The Essence of {product.name}
          </h2>
          
          {/* White Solid Line */}
          <div className="w-24 h-4 bg-[url('/images/PNG/Line/line1white.png')] bg-contain bg-center bg-no-repeat mb-6"></div>
          
          <p className="text-white/90 tracking-[0.2em] text-xs md:text-sm uppercase font-medium">
            {product.olfactive}
          </p>
        </div>
      </div>

      {/* =========================================
          SECTION 3: EDITORIAL GALLERY (2ND PHOTO)
          ========================================= */}
      {/* It only shows if a 2nd image exists in the products.ts array */}
      {product.images[1] && (
        <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-square md:aspect-[4/3] bg-[#151515] p-12 overflow-hidden flex items-center justify-center">
             <Image 
                src={product.images[1]} 
                alt={`${product.name} Detail`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain hover:scale-105 transition-transform duration-1000 ease-out"
             />
          </div>
        </div>
      )}

      {/* =========================================
          SECTION 4: YOU MAY ALSO LIKE
          ========================================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-6">You May Also Like</h2>
          <div className="w-24 h-4 mx-auto bg-[url('/images/PNG/Line/line8white.png')] bg-contain bg-center bg-no-repeat opacity-50"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {relatedProducts.map((related) => (
            <Link href={`/fragrances/${related.id}`} key={related.id} className="group flex flex-col items-center">
              
              {/* Product Image Box */}
              <div className="relative aspect-[3/4] w-full max-w-[280px] mb-4 md:mb-6 bg-[#151515] overflow-hidden flex items-center justify-center">
                <Image 
                  src={related.images[0]} 
                  alt={related.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-center text-xs md:text-sm font-medium tracking-widest text-white group-hover:text-gray-400 transition-colors">
                {related.name}
              </h3>
              <p className="text-center text-[10px] text-gray-500 tracking-widest uppercase mt-2">
                {related.type}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}