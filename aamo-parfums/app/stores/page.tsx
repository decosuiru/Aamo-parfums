import Image from "next/image";
import { MapPin, ShoppingBag, Store, Navigation } from "lucide-react"; // Guaranteed correct imports

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
  return (
    <div className="w-full bg-[#1d1d1d] text-white min-h-screen relative overflow-hidden">
      
      {/* Background Line Watermark (Fits Screen) */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/PNG/Line/line4white.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

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
              
              <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
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
                  <li><a href="https://shopee.co.id/aamoparfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Navigation size={12}/> Shopee</a></li>
                  <li><a href="https://www.tokopedia.com/aamo-parfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Navigation size={12}/> Tokopedia</a></li>
                  <li><a href="https://www.lazada.co.id/shop/aamo-parfume" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Navigation size={12}/> Lazada</a></li>
                  <li><a href="https://www.tiktok.com/@aamoparfums" target="_blank" className="hover:text-white transition-colors flex items-center gap-2"><Navigation size={12}/> Tiktok</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Offline Boutiques */}
          <div className="w-full md:w-2/3">
            <h3 className="text-sm tracking-[0.2em] uppercase font-bold mb-10 border-b border-white/10 pb-4 text-white">
              Offline Boutiques
            </h3>
            
            <div className="space-y-16">
              {offlineStores.map((cityGroup) => (
                <div key={cityGroup.city}>
                  <h2 className="text-2xl font-serif italic mb-8 text-white/90 flex items-center gap-3">
                    <MapPin size={24} className="text-white/50" /> {cityGroup.city}
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    {cityGroup.stores.map((store, idx) => (
                      <div key={idx} className="flex flex-col group">
                        <h4 className="text-sm font-semibold tracking-widest uppercase mb-2 text-white/90 group-hover:text-white transition-colors">{store.name}</h4>
                        {store.location && <p className="text-[11px] tracking-widest uppercase font-medium text-gray-500 mb-2">{store.location}</p>}
                        <p className="text-xs text-gray-400 leading-relaxed font-light">{store.address}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 mb-8 flex justify-center w-full">
                    <div className="w-16 h-2 bg-[url('/images/PNG/Line/line8white.png')] bg-contain bg-center bg-no-repeat opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}