import { getProductById, products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) return notFound();

  // Get 4 random products for "You May Also Like" (excluding the current one)
  const suggestedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const backgroundPath = `/images/Background/bg-${product.id}.jpg`;

  return (
    <div className="w-full bg-[#1d1d1d] text-white overflow-x-hidden relative">
      
      {/* 
        BRANDING BACKGROUND LINE (Full Screen, 100% Opacity)
        It spans the entire background. We use a darker/subtler image if you have one.
      */}
      <div className="fixed inset-0 w-full h-full bg-[url('/images/PNG/Line/line1white.png')] bg-cover bg-center bg-no-repeat pointer-events-none z-0"></div>
      
      {/* =========================================
          SECTION 1: SPLIT SCREEN (ABOVE THE FOLD)
          ========================================= */}
      <div className="flex flex-col lg:flex-row w-full relative z-10 bg-[#1d1d1d]/90"> {/* 90% opacity lets the line peek through */}
        
        {/* LEFT SIDE: Image 1 (The Bottle) */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen lg:sticky top-0 flex items-center justify-center z-0 border-r border-white/5">
           <div className="relative w-3/4 h-3/4 max-w-[400px]">
             <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 75vw, 50vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-1000 ease-out"
             />
           </div>
        </div>

        {/* RIGHT SIDE: Editorial Information */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-24 lg:py-32 flex flex-col justify-center z-10">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            
            <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-10 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/fragrances" className="hover:text-white transition-colors">Fragrances</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>

            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4 font-semibold">
              {product.olfactive}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-4 text-white leading-tight">
              {product.name}
            </h1>
            
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-10">
              {product.type} <span className="mx-2 text-gray-600">|</span> {product.release}
            </p>

            <div className="text-sm text-gray-300 leading-loose mb-16 font-light">
              <p>{product.description}</p>
            </div>

            {/* Olfactory Pyramid (Fixed dark theme colors) */}
            <div className="border-t border-white/10 pt-12">
              <h3 className="text-sm tracking-[0.2em] font-bold mb-8 uppercase text-white">
                Olfactory Pyramid
              </h3>
              
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-white/5">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/70 text-lg mb-2 sm:mb-0 shrink-0">Top</h4>
                  <p className="text-sm text-gray-400 tracking-wide font-light leading-relaxed">{product.notes.top}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-white/5">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/70 text-lg mb-2 sm:mb-0 shrink-0">Heart</h4>
                  <p className="text-sm text-gray-400 tracking-wide font-light leading-relaxed">{product.notes.heart}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-6">
                  <h4 className="w-32 font-serif italic tracking-widest uppercase text-white/70 text-lg mb-2 sm:mb-0 shrink-0">Base</h4>
                  <p className="text-sm text-gray-400 tracking-wide font-light leading-relaxed">{product.notes.base}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: PHOTO 2 (LIFESTYLE / BOX)
          ========================================= */}
      {/* How to add it: Go to lib/products.ts and add a second image URL to the images array! */}
      {product.images[1] && (
        <div className="w-full h-[50vh] md:h-[70vh] relative flex items-center justify-center bg-[#111111] z-10 border-t border-white/5">
          <Image 
            src={product.images[1]} 
            alt={`${product.name} Lifestyle`}
            fill
            sizes="100vw"
            className="object-contain md:object-cover object-center opacity-90"
          />
        </div>
      )}

      {/* =========================================
          SECTION 3: MOOD CANVAS (SCENIC BACKGROUND)
          ========================================= */}
      <div className="w-full h-[60vh] md:h-[80vh] relative flex items-center justify-center overflow-hidden z-10">
        <Image 
          src={backgroundPath} 
          alt={`Mood of ${product.name}`}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 drop-shadow-lg">
            The Essence of {product.name}
          </h2>
          {/* Solid line (100% opacity) */}
          <div className="w-24 h-4 bg-[url('/images/PNG/Line/line1white.png')] bg-contain bg-center bg-no-repeat mb-6"></div>
          <p className="text-white/90 tracking-[0.2em] text-xs md:text-sm uppercase font-medium">
            {product.olfactive}
          </p>
        </div>
      </div>

      {/* =========================================
          SECTION 4: YOU MAY ALSO LIKE
          ========================================= */}
      <div className="w-full py-24 px-6 bg-[#1d1d1d] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-4">You May Also Like</h3>
            <div className="w-16 h-2 bg-[url('/images/PNG/Line/line8white.png')] bg-contain bg-center bg-no-repeat"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {suggestedProducts.map((p) => (
              <Link href={`/fragrances/${p.id}`} key={p.id} className="group flex flex-col items-center">
                <div className="relative aspect-[3/4] w-full max-w-[280px] mb-6 overflow-hidden flex items-center justify-center bg-white/5 rounded-sm">
                  <Image 
                    src={p.images[0]} 
                    alt={p.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-center text-xs md:text-sm font-medium tracking-widest text-white">{p.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}