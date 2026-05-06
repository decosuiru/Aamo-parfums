"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/Background/bg-home.jpg", 
    title: "AAMO", 
    useLogo: true, 
    logoSrc: "/images/PNG/Logo-2-(Putih).png", 
    description: "Inspired by life’s journey, every scent becomes a part of your story.",
    align: "right",
    mobileposition: "object-[70%_50%]", 
  },
  { id: 2, 
    image: "/images/Background/bg-glace-amor.jpg", 
    title: "GLACÉ AMOR", 
    description: "The comforting aroma of joyous gatherings.", 
    align: "left",
    mobileposition: "object-[55%_50%]",
  },
  { id: 3, 
    image: "/images/Background/bg-cherrynity.jpg", 
    title: "CHERRYNITY", 
    description: "Warmth of an intimate evening with your loved one.", 
    align: "left",
    mobileposition: "object-[55%_50%]",
  },
  { id: 4, 
    image: "/images/Background/bg-emit-light.jpg", 
    title: "EMIT LIGHT", 
    description: "A thrilling adventure of discovery and clarity.", 
    align: "left" ,
    mobileposition: "object-[55%_50%]", 
  },
  { id: 5, 
    image: "/images/Background/bg-unseen.jpg", 
    title: "UNSEEN", 
    description: "UNSEEN tells the story of a romance that unfolds with each step.", 
    align: "left",
    mobileposition: "object-[55%_50%]", 
  },
  { id: 6, 
    image: "/images/Background/bg-luminara.jpg", 
    title: "Luminara", 
    description: "Inspired by light (lumen), symbolizing balance through brightness and clarity.", 
    align: "left",
    mobileposition: "object-[55%_50%]", 
  },
  { id: 7, 
    image: "/images/Background/bg-noctera.jpg", 
    title: "Noctera", 
    description: "NOCTÉRA is a study in contradiction: soft sweetness meeting shadowed temptation.", 
    align: "left",
    mobileposition: "object-[55%_50%]", 
  },
  { id: 8, 
    image: "/images/Background/bg-rosvere.jpg", 
    title: "Rosvere", 
    description: "A tribute to fleeting moments that linger, effervescent, and full of promise.", 
    align: "left",
    mobileposition: "object-[55%_50%]", 
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1d1d1d] text-white overflow-hidden">
      
      {/* HERO SLIDER SECTION */}
      <section className="relative h-screen w-full bg-black overflow-hidden">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }} 
                className="absolute inset-0"
              >
                <Image src={slide.image} alt={slide.title} fill priority={index === 0} className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/40" />

                <div className={`absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white ${slide.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
                  {slide.useLogo && slide.logoSrc ? (
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative w-48 h-12 md:w-64 md:h-16 mb-6">
                      <Image src={slide.logoSrc} alt={slide.title} fill className={`object-contain ${slide.align === 'right' ? 'object-right' : 'object-left'}`} />
                    </motion.div>
                  ) : (
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-4xl md:text-6xl tracking-widest mb-4 font-serif italic">
                      {slide.title}
                    </motion.h1>
                  )}
                  <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="text-sm md:text-base tracking-[0.2em] uppercase max-w-md leading-relaxed">
                    {slide.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-white scale-125" : "bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION (Dark Theme) */}
      <section className="relative w-full py-24">
        
        {/* MASKED LINE FADING FROM RIGHT */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[70%] bg-[url('/images/PNG/Line/line5.png')] bg-cover bg-right bg-no-repeat opacity-15 pointer-events-none z-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
            {featuredProducts.map((product) => (
              <Link href={`/fragrances/${product.id}`} key={product.id} className="group flex flex-col items-center">
                <div className="relative aspect-[3/4] w-full max-w-[280px] mb-4 md:mb-6 overflow-hidden flex items-center justify-center bg-white/5 rounded-sm">
                  <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-center text-xs md:text-sm font-medium tracking-widest text-white">{product.name}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center justify-center gap-8">
            <div className="w-16 h-2 bg-[url('/images/PNG/Line/line8white.png')] bg-contain bg-center bg-no-repeat opacity-50"></div>
            <Link href="/fragrances" className="border-b border-white/50 pb-2 text-xs md:text-sm tracking-[0.2em] hover:text-white hover:border-white transition-all uppercase text-white/70">
              Discover Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}