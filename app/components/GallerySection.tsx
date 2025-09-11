"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const waitForImagesToLoad = (container: HTMLElement): Promise<void> =>
  new Promise((resolve) => {
    const images = Array.from(container.querySelectorAll("img"));
    if (images.length === 0) {
      resolve();
      return;
    }
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) resolve();
    };
    images.forEach((img) => {
      if (img.complete) checkAllLoaded();
      else {
        img.addEventListener("load", checkAllLoaded, { once: true });
        img.addEventListener("error", checkAllLoaded, { once: true });
      }
    });
  });

export default function GallerySection() {
  const [images, setImages] = useState<string[]>([]);
  
  const galleryRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/images"); 
        const data = await res.json();
        setImages(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to fetch images", e);
      }
    }
    fetchImages();
  }, []);

  useLayoutEffect(() => {
    if (!row1Ref.current || !row2Ref.current || !row3Ref.current || images.length === 0) {
      return;
    }
    
    const ctx = gsap.context(async () => {
      await waitForImagesToLoad(galleryRef.current!);
      
      const rows = [row1Ref.current!, row2Ref.current!, row3Ref.current!];
      const speeds = [80, 65, 75]; 

      rows.forEach((row, index) => {
        const distance = row.scrollWidth / 2;
        gsap.to(row, {
          x: -distance,
          duration: distance / speeds[index],
          ease: "none",
          repeat: -1,
        });
      });

    }, galleryRef);

    return () => ctx.revert(); 
    
  }, [images]);

  const third = Math.ceil(images.length / 3);
  const row1 = images.slice(0, third);
  const row2 = images.slice(third, third * 2);
  const row3 = images.slice(third * 2);

  return (
    <section 
      ref={galleryRef} 
      // ✅ Background color changed and text is now light
      className="w-full overflow-hidden text-white py-20"
      style={{ backgroundColor: '#032e15' }}
    >
      {/* ✅ Text block is now on top and centered */}
      <div className="text-center px-8 pb-12">
        <h2 className="text-5xl font-bold leading-tight">Galeri</h2>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Potret aksi nyata dan momen-momen berharga dari setiap upaya kami dalam menjaga kelestarian alam.
        </p>
      </div>

      {/* ✅ Gallery marquee is now below the text */}
      <div className="w-full overflow-hidden">
        <div className="flex flex-col justify-center gap-4">
          
          <div ref={row1Ref} className="flex w-max items-center gap-4">
            {[...row1, ...row1].map((src, i) => (
              <img
                key={`row1-${i}`}
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-[180px] w-[280px] object-cover md:h-[220px] md:w-[320px]"
              />
            ))}
          </div>

          <div ref={row2Ref} className="flex w-max items-center gap-4 ml-20">
            {[...row2, ...row2].map((src, i) => (
              <img
                key={`row2-${i}`}
                src={src}
                alt={`Gallery image ${i + third + 1}`}
                className="h-[220px] w-[320px] object-cover md:h-[260px] md:w-[380px]"
              />
            ))}
          </div>
          
          <div ref={row3Ref} className="flex w-max items-center gap-4">
            {[...row3, ...row3].map((src, i) => (
              <img
                key={`row3-${i}`}
                src={src}
                alt={`Gallery image ${i + third * 2 + 1}`}
                className="h-[180px] w-[280px] object-cover md:h-[220px] md:w-[320px]"
              />
            ))}
          </div>

          {/* ✅ Gradient fade divs have been removed */}
          
        </div>
      </div>
    </section>
  );
}