import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-[#1d1d1d] text-white overflow-hidden font-sans">
      
      {/* =========================================
          ROW 1: Introduction (Line fading from RIGHT)
          ========================================= */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-40 pb-24 border-b border-white/5">
        
        {/* Right-Anchored Fading Line */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[70%] bg-[url('/images/PNG/Line/line8white.png')] bg-cover bg-right bg-no-repeat opacity-20 pointer-events-none z-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-gray-400 mb-6">Executive Summary</h2>
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-widest text-white drop-shadow-md">AAMO</h1>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-lg">
              AAMO is an Indonesia-based artisanal perfume brand that specializes in creating unique, unisex fragrances designed to evoke powerful emotions and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ROW 2: Philosophy (Line fading from LEFT)
          ========================================= */}
      <section className="relative w-full min-h-[50vh] flex items-center py-24 border-b border-white/5">
        
        {/* Left-Anchored Fading Line */}
        <div 
          className="absolute inset-y-0 left-0 w-full md:w-[70%] bg-[url('/images/PNG/Line/line4white.png')] bg-cover bg-left bg-no-repeat opacity-20 pointer-events-none z-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 md:pl-20">
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-8">Accessible Luxury</h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-lg">
              With a focus on high-quality ingredients and sophisticated scent compositions, AAMO aims to offer luxury in every bottle, ensuring that premium experiences remain at an accessible price point for true enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ROW 3: Vision (Line fading from RIGHT)
          ========================================= */}
      <section className="relative w-full min-h-[50vh] flex items-center py-24">
        
        {/* Right-Anchored Fading Line */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[70%] bg-[url('/images/PNG/Line/line1white.png')] bg-cover bg-right bg-no-repeat opacity-15 pointer-events-none z-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-8">Aesthetic Harmony</h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-lg">
              AAMO combines aesthetics and craftsmanship, delivering fragrances that are as visually striking as they are captivating to the senses. Every angle, every scent profile, tells a unified story.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}