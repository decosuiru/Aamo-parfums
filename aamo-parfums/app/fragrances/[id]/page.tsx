import Link from "next/link";
import { getProductById, products } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate static routes at build time for max speed
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) return notFound(); // Shows 404 page if URL is wrong

  const otherProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const splitNotes = (noteString: string) =>
    noteString.split(",").map((note) => note.trim()).filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-20">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="lg:sticky lg:top-32">
          <div className="aspect-[4/5] bg-[#FAFAFA] relative flex items-center justify-center p-12">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Link href="/fragrances" className="text-sm uppercase tracking-[0.35em] text-gray-400 hover:text-gray-900 transition-colors mb-6">
            ← Back to collection
          </Link>

          <p className="text-xs uppercase tracking-[0.45em] text-gray-500 mb-4">
            {product.type} · {product.release}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif tracking-widest mb-6">{product.name}</h1>

          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-8">{product.olfactive}</p>

          <div className="max-w-2xl space-y-8">
            <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-700 mb-4">Fragrance profile</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.name} is crafted to make a lasting impression with bright opening notes, a rich heart, and a warm, lingering dry down.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-700 mb-4">Wearing notes</h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Apply to pulse points for a lasting trail.</li>
                  <li>• Ideal for evening wear and memorable moments.</li>
                  <li>• Layer with unscented body lotion to enhance softness.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-2">Notes</p>
            <h2 className="text-3xl font-serif tracking-widest">Perfume notes</h2>
          </div>
          <p className="max-w-xl text-sm text-gray-600">
            Discover the opening, heart, and base notes that define the emotional arc of this fragrance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Top", value: splitNotes(product.notes.top) },
            { label: "Heart", value: splitNotes(product.notes.heart) },
            { label: "Base", value: splitNotes(product.notes.base) },
          ].map((noteSection) => (
            <div key={noteSection.label} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-700 mb-3">{noteSection.label}</h3>
              <div className="flex flex-wrap gap-3">
                {noteSection.value.map((note) => (
                  <span key={note} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-600">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-2">You may also like</p>
          <h2 className="text-3xl font-serif tracking-widest">More from the collection</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {otherProducts.map((item) => (
            <Link
              key={item.id}
              href={`/fragrances/${item.id}`}
              className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-[#FAFAFA] transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white p-10">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-base font-semibold tracking-[0.2em] uppercase text-gray-900">{item.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">{item.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
