import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AAMO Parfums | Luxury Fragrances",
  description: "Official website of AAMO Parfums",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}