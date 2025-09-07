"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HighlightSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Track scroll for text animation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const wordsAnimationProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Title + content
  const titleContent = "TENTANG KAMI";
  const textContent =
    "Kami adalah sebuah organisasi nonprofit yang berfokus pada perubahan iklim dan kegiatan sosial. Melalui program edukasi, aksi kolektif, serta penyuluhan masyarakat, kami berkomitmen untuk mengurangi dampak perubahan iklim dan meningkatkan kesejahteraan sosial.";

  const titleWords = titleContent.split(" ");
  const words = textContent.split(" ");
  const totalWords = titleWords.length + words.length;

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#1a2e23]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row h-full">
          {/* Left side (desktop) / Top side (mobile): Responsive Image */}
          <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
            <picture>
              <source srcSet="/highlight2.webp" media="(max-width: 1023px)" />
              <img
                src="/highlight1.webp"
                alt="About Us"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Right side: Animated Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-6 space-y-6">
            {/* Title */}
            <h2 className="flex flex-wrap items-center text-2xl lg:text-3xl xl:text-4xl font-serif font-bold leading-snug">
              {titleWords.map((word, index) => {
                const start = index / totalWords;
                const end = (index + 1) / totalWords;
                return (
                  <Word
                    key={`title-${index}`}
                    progress={wordsAnimationProgress}
                    range={[start, end]}
                  >
                    {word}
                  </Word>
                );
              })}
            </h2>

            {/* Paragraph */}
            <p className="flex flex-wrap items-center text-lg lg:text-2xl xl:text-3xl font-serif leading-snug max-w-xl">
              {words.map((word, index) => {
                const start = (titleWords.length + index) / totalWords;
                const end = (titleWords.length + index + 1) / totalWords;
                return (
                  <Word
                    key={`text-${index}`}
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
