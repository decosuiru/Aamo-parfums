import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

// 1. Load TT Norms (Sans-Serif)
const ttNorms = localFont({
  src: "../public/fonts/tt-norms-regular.woff2", // Update path if needed
  variable: "--font-ttnorms",
  display: "swap",
});

// 2. Load Ivy Family (Serif Italic)
const ivyFamily = localFont({
  src: "../public/fonts/IvyOraDisplay-RegularItalic.woff2", // Update path if needed
  variable: "--font-ivy",
  display: "swap",
});

export const metadata = {
  title: "AAMO Parfums | Luxury Fragrances",
  description: "Official website of AAMO Parfums",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Apply the font variables to the HTML tag
    <html lang="en" className={`${ttNorms.variable} ${ivyFamily.variable}`}>
      <body className="bg-white text-black antialiased font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}