import { getProductById, products } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate static routes at build time for max speed
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) return notFound(); // Shows 404 page if URL is wrong

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-16">
      
      {/* Left side: Sticky Product Image */}
      <div className="w-full md:w-1/2">
        <div className="md:sticky md:top-32 aspect-[4/5] bg-[#FAFAFA] relative flex items-center justify-center p-12">
           <Image 
              src={product.images[0]} 
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
            />
        </div>
      </div>

      {/* Right side: Product Information (Xerjoff Style) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest mb-4">{product.name}</h1>
        
        <div className="text-sm tracking-widest uppercase text-gray-500 mb-10 space-y-2">
          <p>TYPE: {product.type}</p>
          <p>RELEASE: {product.release}</p>
          <p>SCENT PROFILE: {product.olfactive}</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-16 max-w-md">
          {product.description}
        </p>

        {/* Perfume Notes Section */}
        <h3 className="text-sm tracking-[0.2em] font-semibold mb-8 border-b pb-4">PERFUME NOTES</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold tracking-widest mb-3 uppercase">Top</h4>
            <p className="text-gray-600 leading-loose">{product.notes.top}</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-widest mb-3 uppercase">Heart</h4>
            <p className="text-gray-600 leading-loose">{product.notes.heart}</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-widest mb-3 uppercase">Base</h4>
            <p className="text-gray-600 leading-loose">{product.notes.base}</p>
          </div>
        </div>
      </div>
    </div>
  );
}