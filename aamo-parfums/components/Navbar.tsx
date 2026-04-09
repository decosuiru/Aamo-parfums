"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links for the overlay menu
  const menuLinks = [
    { name: "HOME", path: "/" },
    { name: "FRAGRANCES", path: "/fragrances" },
    { name: "ABOUT US", path: "/about" },
    { name: "WHERE TO FIND US", path: "/stores" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-transparent mix-blend-difference text-white">
        <button 
          onClick={() => setIsOpen(true)} 
          className="text-sm tracking-widest hover:opacity-70 transition-opacity"
        >
          MENU
        </button>

        <Link href="/" className="text-3xl font-serif tracking-widest">
          AAMO
        </Link>

        {/* Empty div to balance the flexbox (keeps logo centered) */}
        <div className="w-12"></div> 
      </nav>

      {/* Fullscreen Menu Overlay using Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }} // Starts hidden above screen
            animate={{ y: 0 }}       // Slides down
            exit={{ y: "-100%" }}    // Slides back up on close
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }} // Luxury easing curve
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col justify-center items-center"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
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
    </>
  );
}