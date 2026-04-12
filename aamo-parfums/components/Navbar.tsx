"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- IMPORT THIS
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu, MapPin, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // <-- GET CURRENT URL

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links for the overlay menu and desktop nav
  const menuLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "FRAGRANCES", path: "/fragrances" },
    { name: "WHERE TO FIND US", path: "/stores" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop: Top Navbar with logo, centered HOME, and icons on the right */}
      <nav className={`hidden md:flex fixed top-0 w-full z-50 justify-between items-center p-6 transition-colors duration-300 ease-out ${isScrolled ? "bg-white text-black shadow-black/10 shadow-md" : "bg-transparent text-white"}`}>
        <Link href="/" className="flex items-center">
          <picture>
            {!isScrolled && (
              <source srcSet="/images/PNG/Logo-3-(Putih).png" media="(prefers-color-scheme: dark)" />
            )}
            <img
              src="/images/PNG/Logo-3.png"
              alt="AAMO logo"
              className="h-8 w-auto object-contain"
            />
          </picture>
        </Link>

        {/* --- UPDATED: Desktop Links with Active Underline --- */}
        <div className="flex items-center gap-10">
          {menuLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link 
                key={link.name}
                href={link.path}
                className={`text-sm tracking-widest transition-all hover:opacity-70 pb-1 border-b ${
                  isActive ? "border-current" : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* ---------------------------------------------------- */}

        <div className="flex items-center gap-6">
          <Link 
            href="/stores"
            className="hover:opacity-70 transition-opacity"
            title="Where to find us"
          >
            <MapPin size={20} strokeWidth={1} />
          </Link>
          <Link 
            href="/contact"
            className="hover:opacity-70 transition-opacity"
            title="Contact us"
          >
            <Mail size={20} strokeWidth={1} />
          </Link>
        </div>
      </nav>

      {/* Mobile: Top Bar with Menu Icon (hidden on desktop) */}
      <nav className={`md:hidden fixed top-0 w-full z-50 flex justify-between items-center p-6 transition-colors duration-300 ease-out ${isScrolled ? "bg-white text-black shadow-black/10 shadow-md" : "bg-transparent text-white"}`}>
        <button 
          onClick={() => setIsOpen(true)} 
          className={`${isScrolled ? "text-black" : "text-white"} hover:opacity-70 transition-opacity`}
        >
          <Menu size={28} strokeWidth={1} />
        </button>

        <Link href="/" className="flex items-center">
          <picture>
            {!isScrolled && (
              <source srcSet="/images/PNG/Logo-1-(Putih).png" media="(prefers-color-scheme: dark)" />
            )}
            <img
              src="/images/PNG/Logo-1.png"
              alt="AAMO logo"
              className="h-6 w-auto object-contain"
            />
          </picture>
        </Link>

        {/* Empty div to balance the flexbox */}
        <div className="w-8"></div> 
      </nav>

      {/* Desktop: Fullscreen Menu Overlay (slides from top) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="hidden md:flex fixed inset-0 z-[60] bg-black text-white flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-sm tracking-widest"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <ul className="text-center space-y-8">
              {menuLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl md:text-4xl font-light tracking-[0.2em] hover:text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: Side Menu Overlay (slides from left) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-black text-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <picture>
                {!isScrolled && (
                  <source srcSet="/images/PNG/Logo-2-(Putih).png" media="(prefers-color-scheme: dark)" />
                )}
                <img
                  src="/images/PNG/Logo-2.png"
                  alt="AAMO logo"
                  className="h-6 w-auto object-contain"
                />
              </picture>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-70 transition-opacity"
            >
              <X size={28} strokeWidth={1} />
            </button>
            </div>

            <ul className="flex flex-col space-y-6 p-6">
              {menuLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-light tracking-[0.1em] hover:text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}