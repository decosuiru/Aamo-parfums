"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ShoppingBag, Store, Navigation, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const offlineStores = [
  {
    city: "Jakarta",
    stores: [
      { name: "Tomorrow World", location: "Lippo Mall Nusantara, Lt. SL", address: "Kawasan Bisnis Granadha, Jl. Jend. Sudirman No.Kav. 50, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan 12930" },
      { name: "MU+KU", location: "Blok M Plaza, Lt. 3", address: "Jl. Bulungan No.76, RT.6/RW.6, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan 12130" },
      { name: "Tuesbelle Scent", location: "Pasaraya Blok M, Lt. G", address: "Jl. Iskandarsyah II No.2, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan 12160" },
    ]
  },
  {
    city: "Tangerang",
    stores: [
      { name: "NOES Perfumery", location: "Store", address: "Jl. Boulevard Palem Raya No.1911, Bencongan, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810" },
    ]
  },
  {
    city: "Bandung",
    stores: [
      { name: "Tomorrow Mini", location: "Bandung Indah Plaza, Lt. UG", address: "Jl. Merdeka No.56, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115" },
    ]
  },
  {
    city: "Bali",
    stores: [
      { name: "DISCLOSURE STORE", location: "Boutique", address: "Jl. Sunset Road No.81X, Seminyak, Kec. Kuta Utara, Kabupaten Badung, Bali 80361" },
    ]
  },
  {
    city: "Surabaya",
    stores: [
      { name: "MU+KU", location: "Pakuwon Mall Surabaya, Lt. Ground", address: "Jl. Pakuwon Trade Center No.2, Lontar, Kec. Wiyung, Surabaya, Jawa Timur 602" },
    ]
  },
  {
    city: "Medan",
    stores: [
      { name: "Tomorrow Mini", location: "Sun Plaza Medan, Lt. LG", address: "Jl. KH. Zainul Arifin No.7, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20152" },
    ]
  },
  {
    city: "Palembang",
    stores: [
      { name: "Tomorrow Mini", location: "Mall Palembang square, Lt. UG", address: "Jalan Angkatan 45, Kel. Lorok Pakjo, Kec. Lilit Barat l, Palembang, Sumatera Selatan" },
    ]
  },
  {
    city: "Sidoarjo",
    stores: [
      { name: "Tomorrow Mini", location: "Lippo Plaza Sidoarjo, Lt. UG", address: "Jl. Jati Raya No.1, Jati, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61226" },
    ]
  }
];

export default function Stores() {
  // State to track which city accordion is currently open. 
  // We set "Jakarta" as the default open tab.
  const [openCity, setOpenCity] = useState<string | null>("Jakarta");

  const toggleCity = (city: string) => {
    // If clicking the already open city, close it. Otherwise, open the new one.
    setOpenCity(openCity === city ? null : city);
  };

  return (
    <div className="w-full bg-[#1d1d1d] text-white min-h-screen relative overflow-hidden">
      
      {/* Background Line Watermark */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/PNG/Line/line4white.png')] bg-cover bg-center opacity-10 pointer-events-none fixed"></div>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl tracking-widest mb-6 font-serif italic text-white drop-shadow-md">WHERE TO FIND US</h1>
          <div className="w-24 h-4 mx-auto bg-[url('/images/PNG/Line/line3white.png')] bg-contain bg-center bg-no-repeat"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* LEFT COLUMN: Head Office & Digital (Sticky) */}
          <div className="w-full md:w-1/3">
            <div className="md:sticky md:top-32 space-y-12">
              
              <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/10 transition-colors duration-500">
                <h3 className="text-sm tracking-[0.2em] uppercase font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <Store size={18} /> Head Office
                </h3>
                <p className="text-sm font-semibold mb-2 text-white/90">PT. AROMA ABADI MAKMUR</p>
                <p className="text-xs leading-relaxed text-gray-400 font-light">
                  Perumahan Cibubur Country<br/>
                  Blok CCOR 30 Jalan Raya Letda Natsir,<br/>
                  Cikeas Udik, Kec. Gunung Putri,<br/>
                  Kab. Bogor, Jawa Barat, 16966<br/>
                  Indonesia
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase font-bold mb-6 flex items-center gap-3">
                  <ShoppingBag size={18} /> Online Boutiques
                </h3>
                <ul className="space-y-4 text-xs tracking-widest uppercase text-gray-400">
                  <li><a href="https://shopee.co.id/aamoparfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/shopee.png" alt="Shopee" className="h-4 w-auto" /> Shopee</a></li>
                  <li><a href="https://www.tokopedia.com/aamo-parfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/tokopedia.png" alt="Tokopedia" className="h-4 w-auto" /> Tokopedia</a></li>
                  <li><a href="https://www.lazada.co.id/shop/aamo-parfume" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/lazada.png" alt="Lazada" className="h-4 w-auto" /> Lazada</a></li>
                  <li><a href="https://www.tiktok.com/@aamoparfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/tiktok.png" alt="Tiktok" className="h-4 w-auto" /> Tiktok</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Offline Boutiques (Expandable Accordion) */}
          <div className="w-full md:w-2/3">
            <h3 className="text-sm tracking-[0.2em] uppercase font-bold mb-8 border-b border-white/10 pb-4 text-white">
              Offline Boutiques
            </h3>
            
            <div className="flex flex-col">
              {offlineStores.map((cityGroup) => {
                const isOpen = openCity === cityGroup.city;

                return (
                  <div key={cityGroup.city} className="border-b border-white/10">
                    
                    {/* Accordion Header (Clickable) */}
                    <button
                      onClick={() => toggleCity(cityGroup.city)}
                      className="w-full flex justify-between items-center py-6 focus:outline-none group"
                    >
                      <h2 className="text-xl md:text-2xl font-serif italic text-white/80 group-hover:text-white transition-colors flex items-center gap-4">
                        <MapPin size={20} className={`${isOpen ? 'text-white' : 'text-white/30'} transition-colors`} /> 
                        {cityGroup.city}
                      </h2>
                      
                      {/* Animated Chevron Arrow */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      >
                        <ChevronDown size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                      </motion.div>
                    </button>
                    
                    {/* Accordion Content (Animated Height) */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Luxury easing curve
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pb-10 pt-4">
                            {cityGroup.stores.map((store, idx) => (
                              <div key={idx} className="flex flex-col group/store">
                                <h4 className="text-sm font-semibold tracking-widest uppercase mb-2 text-white/90 group-hover/store:text-white transition-colors">
                                  {store.name}
                                </h4>
                                {store.location && (
                                  <p className="text-[11px] tracking-widest uppercase font-medium text-gray-500 mb-2">
                                    {store.location}
                                  </p>
                                )}
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                  {store.address}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}