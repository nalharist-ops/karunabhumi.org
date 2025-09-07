"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HighlightSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Track scroll for text animation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const wordsAnimationProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const textContent =
    "Kami adalah sebuah organisasi nonprofit yang berfokus pada perubahan iklim dan kegiatan sosial. Melalui program edukasi, aksi kolektif, serta penyuluhan masyarakat, kami berkomitmen untuk mengurangi dampak perubahan iklim dan meningkatkan kesejahteraan sosial.";
  const words = textContent.split(" ");

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#1a2e23]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row h-full">
          {/* Left side (desktop) / Top side (mobile): Responsive Image */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
            <picture>
              {/* Mobile */}
              <source
                srcSet="/highlight2.webp"
                media="(max-width: 1023px)"
              />
              {/* Desktop */}
              <Image
                src="/highlight1.webp"
                alt="About Us"
                fill
                priority={false}
                className="object-cover"
              />
            </picture>
          </div>

          {/* Right side: Animated Text */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <p className="flex flex-wrap items-center text-lg lg:text-2xl xl:text-3xl font-serif leading-snug max-w-xl">
              {words.map((word, index) => {
                const start = index / words.length;
                const end = (index + 1) / words.length;
                return (
                  <Word
                    key={index}
                    progress={wordsAnimationProgress}
                    range={[start, end]}
                  >
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Word animation component
function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) {
  const [start, end] = range;
  const mid = start + (end - start) * 0.5;

  const color = useTransform(progress, [start, mid, end], [
    "#424839",
    "#867c5d",
    "#daba89",
  ]);
  const opacity = useTransform(progress, [start, mid, end], [0.3, 0.7, 1]);
  const scale = useTransform(progress, [start, mid, end], [0.95, 1, 1.05]);

  return (
    <span className="relative mt-2 mr-2">
      <motion.span style={{ color, opacity, scale }}>{children}</motion.span>
    </span>
  );
}
