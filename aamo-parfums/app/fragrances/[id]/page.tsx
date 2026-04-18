import { getProductById, products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingBag, MapPin, Mail, Navigation } from "lucide-react";
import { ArrowRight } from "lucide-react"; // Icon for the newsletter section

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) return notFound();

  // Find 4 other products for "You May Also Like"
  const recommendedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const backgroundPath = `/images/Background/bg-${product.id}.jpg`;

  return (
    <div className="w-full bg-[#1d1d1d] text-white overflow-x-hidden relative">
      
      {/* =========================================
          BACKGROUND LINE WATERMARKS (Scaled to fit)
          ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-around opacity-70">
        <Image src="/images/PNG/Line/line1white.png" alt="line" width={2000} height={200} className="w-full h-auto object-cover" />
        <Image src="/images/PNG/Line/line4white.png" alt="line" width={2000} height={200} className="w-full h-auto object-cover" />
        <Image src="/images/PNG/Line/line7white.png" alt="line" width={2000} height={200} className="w-full h-auto object-cover" />
      </div>

      {/* =========================================
          SECTION 1: SPLIT SCREEN (ABOVE THE FOLD)
          ========================================= */}
      <div className="flex flex-col lg:flex-row w-full relative z-10">
        
        {/* LEFT SIDE: Clean Studio Image (Sticky) */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen lg:sticky top-0 flex items-center justify-center">
           <div className="relative w-3/4 h-3/4 max-w-[400px]">
             {/* Main Image (Index 0) */}
             <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 75vw, 50vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:scale-105 transition-transform duration-1000 ease-out"
             />
           </div>
        </div>

        {/* RIGHT SIDE: Editorial Information */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-24 lg:py-32 flex flex-col justify-center bg-[#1d1d1d]/80 backdrop-blur-sm">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            
            

            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4 font-semibold">
              {product.olfactive}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white leading-tight">
              {product.name}
            </h1>
            
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-12">
              {product.type} <span className="mx-2 text-gray-600">|</span> {product.release}
            </p>

            <div className="text-sm font- text-gray-300 font-serif italic leading-loose mb-16 font-light">
              <p>{product.description}</p>
            </div>

            {/* Olfactory Pyramid (Fixed text contrast) */}
            <div className="border-t border-white/10 pt-12">
              <h3 className="text-sm tracking-[0.2em] font-bold mb-8 uppercase text-white/90">
                Olfactory Pyramid
              </h3>
              
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-white/5">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/80 text-lg mb-2 sm:mb-0 shrink-0">Top</h4>
                  <p className="text-sm text-gray-400 tracking-wide font-light leading-relaxed">{product.notes.top}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-white/5">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/80 text-lg mb-2 sm:mb-0 shrink-0">Heart</h4>
                  <p className="text-sm text-gray-400 tracking-wide font-light leading-relaxed">{product.notes.heart}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-6">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/80 text-lg mb-2 sm:mb-0 shrink-0">Base</h4>
                  <p className="text-sm text-gray-400 tracking-wide font-light leading-relaxed">{product.notes.base}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: MOOD CANVAS & GALLERY
          ========================================= */}
      
      {/* 2A. Full-Width Scenic Background */}
      <div className="w-full h-[60vh] md:h-[80vh] relative flex items-center justify-center overflow-hidden z-10">
        <Image src={backgroundPath} alt={`Mood of ${product.name}`} fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            The Essence of {product.name}
          </h2>
          <p className="text-white/90 tracking-[0.2em] text-xs md:text-sm uppercase font-medium">
            {product.olfactive}
          </p>
        </div>
      </div>

      {/* 2B. Extra Photos Gallery (Loops through remaining images) */}
      {product.images.length > 1 && (
        <div className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.images.slice(1).map((img, idx) => (
              <div key={idx} className="relative aspect-square md:aspect-[4/5] bg-[#151515] overflow-hidden group flex justify-center items-center">
                <Image 
                  src={img} 
                  alt={`${product.name} detail ${idx + 1}`} 
                  fill 
                  className="object-contain p-12 group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================
          SECTION 3: YOU MAY ALSO LIKE
          ========================================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 z-10 relative">
        <h2 className="text-center text-3xl mb-16 text-white tracking-widest">You May Also Like</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {recommendedProducts.map((rec) => (
            <Link href={`/fragrances/${rec.id}`} key={rec.id} className="group flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full bg-[#151515] mb-6 overflow-hidden flex items-center justify-center">
                <Image 
                  src={rec.images[0]} 
                  alt={rec.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-center text-xs tracking-[0.2em] uppercase font-medium text-white">{rec.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}