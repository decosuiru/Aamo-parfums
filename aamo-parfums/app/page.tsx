"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";

// Define your slides
const slides = [
  {
    id: 1,
    image: "/images/Background/bg-home.jpg", 
    title: "AAMO", // Kept for the 'alt' text of the image
    useLogo: true, // <-- NEW: Tells the code to use the logo image instead of text
    logoSrc: "/images/PNG/Logo-2-(Putih).png", // <-- NEW: Path to your white logo
    description: "Inspired by life’s journey, every scent becomes a part of your story.",
    align: "right", 
  },
  {
    id: 2,
    image: "/images/Background/bg-glace-amor.jpg", 
    title: "GLACÉ AMOR",
    description: "The comforting aroma of joyous gatherings.",
    align: "left", 
  },
  {
    id: 3,
    image: "/images/Background/bg-cherrynity.jpg", 
    title: "CHERRYNITY",
    description: "Warmth of an intimate evening with your loved one.",
    align: "left", 
  },
  {
    id: 4,
    image: "/images/Background/bg-emit-light.jpg", 
    title: "EMIT LIGHT",
    description: "A thrilling adventure of discovery and clarity.",
    align: "left", 
  },
  {
    id: 5,
    image: "/images/Background/bg-unseen.jpg", 
    title: "UNSEEN",
    description: "UNSEEN tells the story of a romance that unfolds with each step.",
    align: "left", 
  },
  {
    id: 6,
    image: "/images/Background/bg-luminara.jpg", 
    title: "LUMINARA",
    description: "Luminara Inspired by light (lumen), symbolizing balance through brightness and clarity.",
    align: "left", 
  },
  {
    id: 7,
    image: "/images/Background/bg-noctera.jpg", 
    title: "NOCTÉRA",
    description: "NOCTÉRA is a study in contradiction: soft sweetness meeting shadowed temptation.",
    align: "left", 
  },
  {
    id: 8,
    image: "/images/Background/bg-rosvere.jpg", 
    title: "ROSVÉRÉ",
    description: "ROSVÉRÉ is a tribute to fleeting moments that linger remaining light, effervescent, and full of promise.",
    align: "left", 
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.slice(0, 4);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    
    // We added slides.length inside the brackets below. 
    // Now, if you add a 9th slide, React will automatically fix the timer memory!
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
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
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0} 
                  className="object-cover object-center" 
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className={`absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white
                  ${slide.align === 'right' ? 'items-end text-right' : 'items-start text-left'}
                `}>
                  
                  {/* --- UPDATED: Title / Logo logic --- */}
                  {slide.useLogo && slide.logoSrc ? (
                    // IF useLogo is true -> Show Image
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="relative w-48 h-12 md:w-64 md:h-16 mb-6" // Control logo size here
                    >
                      <Image 
                        src={slide.logoSrc}
                        alt={slide.title}
                        fill
                        className={`object-contain ${slide.align === 'right' ? 'object-right' : 'object-left'}`}
                      />
                    </motion.div>
                  ) : (
                    // OTHERWISE -> Show normal Text
                    <motion.h1 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-4xl md:text-6xl tracking-widest mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                  )}
                  {/* ----------------------------------- */}

                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="text-sm md:text-base tracking-[0.2em] uppercase max-w-md leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {featuredProducts.map((product) => (
            <Link href={`/fragrances/${product.id}`} key={product.id} className="group flex flex-col items-center">
              
              <div className="relative aspect-[3/4] w-full max-w-[280px] mb-0 overflow-hidden flex items-center justify-center">
                <Image 
                  src={product.images[0]} 
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
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