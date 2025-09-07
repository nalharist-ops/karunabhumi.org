"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { HighlightSection } from "@/components/HighlightSection"
const backgroundImages = [
  '/photos/bg1.webp',
  '/photos/bg2.webp',
  '/photos/bg3.webp',
  '/photos/bg4.webp',
];

export default function Home() {
  return (
    <main>
      {/* Your Hero Section with the alternating background */}
      <HeroSection />
      <HighlightSection />
      {/* You can now add other sections below */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl text-black">This is the Next Section</h2>
      </section>
      
      <section className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-4xl text-black">Another Section</h2>
      </section>
    </main>
  );
}

// I've moved your hero section into its own component for clarity
function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // 1. The parent section needs 'relative' and 'overflow-hidden'
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 2. CHANGE: The background is now 'absolute' to fill its parent section */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Nature background"
            fill
            priority={index === 0}
            className={`
              object-cover object-center transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
      </div>

      {/* 3. The overlay sits on top of the background */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 4. The content sits on top of the overlay */}
      <div className="mt-60 relative z-20 flex items-center justify-center px-8 text-white">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Main headline */}
          <div className="md:col-span-1">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
              Bersama Melawan <br /> Perubahan Iklim
            </h1>
          </div>
          {/* ... your other content ... */}
          <div className="md:col-span-1 flex flex-col items-start md:items-end">
             <p className="mt-6 max-w-md text-lg md:text-xl leading-relaxed text-gray-200 drop-shadow md:text-right">
               Bergabunglah dengan gerakan global untuk melindungi bumi kita.
               Melalui aksi nyata dan kegiatan sosial, kita dapat menciptakan
               perubahan positif untuk masa depan yang berkelanjutan.
             </p>
             <div className="mt-8">
               <Link
                 href="#get-involved"
                 className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white px-6 py-3 rounded-full text-white text-lg font-medium transition-colors backdrop-blur-md"
               >
                 Get Involved
               </Link>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}