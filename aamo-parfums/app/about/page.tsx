import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#1d1d1d] text-white relative overflow-hidden flex items-center">
      
      {/* 
        TOP-RIGHT PATTERN (From Image 2 Reference) 
        We use line8white.png and a CSS mask so it gently fades out into the background!
      */}
      <div 
        className="absolute top-0 right-0 w-full max-w-2xl h-[500px] bg-[url('/images/PNG/Line/line8white.png')] bg-cover bg-right-top bg-no-repeat opacity-80 rotate-180 pointer-events-none z-0"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
          maskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-32 md:py-40 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          {/* LEFT SIDE: Titles */}
          <div className="w-full md:w-5/12 flex flex-col justify-between md:min-h-[300px]">
            <h2 className="text-3xl md:text-4xl font-sans font-light tracking-wide text-white/90 mb-16 md:mb-0">
              Executive Summary
            </h2>
            
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-widest text-white mt-auto">
                <img src="/images/PNG/Logo-3-(Putih).png" alt="AAMO Logo" className="w-80 h-auto mt-10 object-contain" />

            </h1>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="w-full md:w-7/12 space-y-10 text-sm md:text-base text-gray-300 font-light leading-relaxed">
            <p>
              AAMO is an Indonesia-based artisanal perfume brand that specializes in creating unique, unisex fragrances designed to evoke powerful emotions and experiences.
            </p>
            <p>
              With a focus on high-quality ingredients and sophisticated scent compositions, AAMO aims to offer luxury in every bottle, but at an accessible price point.
            </p>
            <p>
              AAMO combines aesthetics and craftsmanship, delivering fragrances that are as visually striking as they are captivating to the senses.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}