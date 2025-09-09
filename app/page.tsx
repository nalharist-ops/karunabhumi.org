"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { HighlightSection } from "@/components/HighlightSection";
import { ValuesSection } from '@/components/value';
import { StickyCards } from '@/components/StickyCards';

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
      <ValuesSection />
      <StickyCards />
      {/* You can now add other sections below */}
      <section className="z-20 h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl text-black">This is the Next Section</h2>
        
      </section>
      
      <section className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-4xl text-black">Another Section</h2>
      </section>
    </main>
  );
}

// Corrected Hero Section component
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
    // FIX 1: Changed 'items-center' to 'items-end'. 
    // This pushes the content to the bottom of the section on ALL screen sizes.
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-center">
      
      {/* Background Image Layer (no changes here) */}
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

      {/* Overlay Layer (no changes here) */}


      {/* Content Layer */}
      {/* FIX 2: Removed redundant flex classes and added bottom padding (pb-20) 
          to create space from the screen's edge. */}
      <div className="relative z-20 w-full px-4 sm:px-8 text-white pb-20">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Main headline */}
          <div className="md:col-span-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
              Bersama Melawan <br /> Perubahan Iklim
            </h1>
          </div>
          
          {/* Sub-content and Call to Action */}
          <div className="md:col-span-1 flex flex-col items-start md:items-end">
             <p className="mt-4 md:mt-6 max-w-md text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 drop-shadow md:text-right">
               Bergabunglah dengan gerakan global untuk melindungi bumi kita.
               Melalui aksi nyata dan kegiatan sosial, kita dapat menciptakan
               perubahan positif untuk masa depan yang berkelanjutan.
             </p>
             <div className="mt-8">
               <Link
                 href="#get-involved"
                 className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white px-6 py-3 rounded-full text-white font-medium transition-colors backdrop-blur-md"
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