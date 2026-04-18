import Link from "next/link";
import Image from "next/image"; // <-- Added Image import
import { ShoppingBag, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-white/10 relative mt-20">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col">
          <Link href="/">
          <img src="/images/PNG/Logo-1-(Putih).png" alt="AAMO Parfums" className="w-auto h-auto mb-7" />
            
          </Link>
          <p className="text-xs text-gray-400 tracking-widest uppercase leading-relaxed max-w-xs">
            Inspired by life’s journey, every scent becomes a part of your story.
          </p>
        </div>

        {/* Available On */}
        <div className="flex flex-col">
          <h4 className="text-sm tracking-[0.2em] uppercase mb-6 font-semibold">Available On</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase text-gray-400">
            <li><a href="https://shopee.co.id/aamoparfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/shopee.png" alt="Shopee" className="w-4 h-4"/> Shopee</a></li>
            <li><a href="https://www.tokopedia.com/aamo-parfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/tokopedia.png" alt="Tokopedia" className="w-4 h-4"/> Tokopedia</a></li>
            <li><a href="https://www.lazada.co.id/shop/aamo-parfume" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/lazada.png" alt="Lazada" className="w-4 h-4"/> Lazada</a></li>
            <li><a href="https://www.tiktok.com/@aamoparfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><img src="/images/PNG/tiktok.png" alt="Tiktok" className="w-4 h-4"/> Tiktok</a></li>
          </ul>
        </div>

        {/* Official Info */}
        <div className="flex flex-col">
          <h4 className="text-sm tracking-[0.2em] uppercase mb-6 font-semibold">Official Info</h4>
          <div className="text-xs text-gray-400 tracking-widest uppercase leading-relaxed space-y-4">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              PT. Aroma Abadi Makmur<br/>
              Perumahan Cibubur Country<br/>
              Bogor, Jawa Barat 16966<br/>
              Indonesia
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} /> hello@aamoparfums.com
            </p>
          </div>
        </div>

        {/* =========================================
            UPDATED: Social Media & Floating Image
            ========================================= */}
        <div className="flex flex-col relative h-full min-h-[200px]">
          
          {/* 
            The Floating Image (Offside to Top) 
            -top-32 pulls the image up so it breaks the top border of the footer!
          */}
          <div className="absolute -top-32 right-0 w-48 h-48 lg:w-64 lg:h-64 z-10 pointer-events-none">
            <Image 
              src="/images/PNG/Aamo-Group.png"
              alt="AAMO Collection Group"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* 
            Social Media Section (Pushed to Bottom)
            mt-auto automatically forces this block to stick to the bottom of the column!
          */}
          <div className="mt-auto relative z-20 pt-24 lg:pt-0">
            <h4 className="text-sm tracking-[0.2em] uppercase mb-6 font-semibold">Social Media</h4>
            <a href="https://www.instagram.com/aamoparfums/" target="_blank" className="text-xs text-gray-400 tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 w-max">
              <img src="/images/PNG/instagram.png" alt="Instagram" className="w-5 h-5" /> Instagram
            </a>
            <a href="https://www.tiktok.com/@aamoparfums" target="_blank" className="text-xs mt-2 text-gray-400 tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 w-max">
              <img src="/images/PNG/tiktok.png" alt="Tiktok" className="w-5 h-5" /> Tiktok
            </a>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] tracking-widest text-gray-500 uppercase">
          © {new Date().getFullYear()} AAMO Parfums. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-[10px] tracking-widest text-gray-500 uppercase">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}