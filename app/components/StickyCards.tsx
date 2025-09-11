"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

// A simple hook to check for mobile screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isMobile;
}


// Animated Counter
function AnimatedCounter({ to, showPlus = false }: { to: number; showPlus?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${Math.round(value).toLocaleString()}${showPlus ? "+" : ""}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, showPlus]);

  const setRefs = (node: HTMLSpanElement) => {
    ref.current = node;
    inViewRef(node);
  };

  return <span ref={setRefs}>0{showPlus ? "+" : ""}</span>;
}

// Card Data
interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  count: number;
  countText: string;
}

export function StickyCards() {
  const isMobile = useIsMobile();
  const CARD_HEIGHT_VH = 85;
  const HEADER_HEIGHT_PX = 80;
  const BORDER_RADIUS_PX = 20;

  const cardData: CardData[] = [
    {
      id: 1,
      title: "Green School Program",
      description: "Program edukasi lingkungan untuk sekolah-sekolah",
      image: "/school.jpg",
      bgColor: "#032E15",
      count: 50,
      countText: "sekolah terjangkau",
    },
    {
      id: 2,
      title: "Eco Village Initiative",
      description: "Pemberdayaan desa ramah lingkungan",
      image: "/village.jpg",
      bgColor: "#E3C567",
      count: 20,
      countText: "desa binaan",
    },
    {
      id: 3,
      title: "Zero Waste Campaign",
      description: "Kampanye gaya hidup minim sampah",
      image: "/zerowaste.jpg",
      bgColor: "#C8963E",
      count: 10000,
      countText: "keluarga berpartisipasi",
    },
  ];

  const total = cardData.length;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // ✅ Controls the final section's slide-up animation
  const finalSectionY = useTransform(scrollYProgress, [0.9, 1], ["100%", "0%"]);

  return (
    <div style={{ backgroundColor: "#e9deb9" }}>
      <div className="cards-layout" style={{ paddingTop: `${HEADER_HEIGHT_PX}px` }} ref={containerRef}>
        <div className="title-section">
          <motion.div
            className="title-sticky"
            // ✅ Change: Removed the `titleOpacity` transform. The title is now always visible.
            style={{ opacity: 1 }}
          >
            <h1>
              <div>Kegiatan</div>
              <div>Kami</div>
            </h1>
          </motion.div>
        </div>

        <div className="cards-section">
          {cardData.map((card, idx) => {
            const trackHeightVh = isMobile ? 'auto' : CARD_HEIGHT_VH * 1.5;
            const marginTopVh = isMobile ? 0 : (idx === 0 ? 0 : -CARD_HEIGHT_VH * 0.7);
            const start = idx / total;
            const end = (idx + 1) / total;

            // ✅ Change: Check if the current card is the last one.
            const isLastCard = idx === total - 1;

            // Conditionally apply transformations. The last card will have a constant scale and opacity.
            const scale = isLastCard ? 1 : useTransform(scrollYProgress, [start, end], [1, 0.7]);
            const opacity = isLastCard ? 1 : useTransform(scrollYProgress, [start + 0.05, end], [1, 0]);

            return (
              <div key={card.id} style={{
                  height: `${trackHeightVh}${!isMobile ? 'vh' : ''}`,
                  marginTop: `${marginTopVh}${!isMobile ? 'vh' : ''}`
                }}
              >
                <motion.div
                  style={{
                    ...( !isMobile && {
                      top: `${HEADER_HEIGHT_PX + 40}px`,
                      height: `${CARD_HEIGHT_VH}vh`,
                      // ✅ Change: Use the new conditional scale and opacity values.
                      scale,
                      opacity,
                    }),
                    borderRadius: `${BORDER_RADIUS_PX}px`,
                    backgroundColor: card.bgColor,
                  }}
                  className="card-stick"
                >
                  <div className={`card-content ${idx > 0 ? "dark-text" : ""}`}>
                    <div className="text-block">
                      <p className="card-program-number">Program #{String(card.id).padStart(2, "0")}</p>
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                      <div className="counter-block">
                        <h3>
                          <AnimatedCounter to={card.count} showPlus />
                        </h3>
                        <p>{card.countText}</p>
                      </div>
                    </div>
                    <div className="image-block">
                      <img src={card.image} alt={card.title} />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      
      <motion.div 
        className="extra-section-container"
        style={{
          y: isMobile ? '0%' : finalSectionY,
        }}
      >
        <div className="extra-section-content">
          <h2>Aksi Nyata Melawan Perubahan Iklim</h2>
          <p className="extra-section-subtitle">
            Setiap tindakan kita berkontribusi dalam melawan krisis iklim. Lihat dampak nyata yang telah kita capai bersama.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon"><img src="/tree-svgrepo-com.svg" alt="Pohon Tertanam" /></div>
              <div className="stat-number"><AnimatedCounter to={25000} showPlus /></div>
              <div className="stat-text">Pohon Tertanam</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><img src="/coral-svgrepo-com.svg" alt="Coral tertanam" /></div>
              <div className="stat-number"><AnimatedCounter to={38000} showPlus /></div>
              <div className="stat-text">Coral tertanam</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><img src="/recycle-svgrepo-com.svg" alt="Sampah didaur ulang" /></div>
              <div className="stat-number"><AnimatedCounter to={850} showPlus /></div>
              <div className="stat-text">Ton sampah organik yang berhasil didaur ulang</div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        /* ... Your existing CSS remains unchanged ... */
        .cards-layout {
          display: flex;
          gap: 2rem;
          padding: 0 2rem 2rem 2rem;
          align-items: flex-start;
        }

        .title-section {
          flex: 0.25;
          align-self: stretch;
          z-index: 10;
        }
        .title-sticky {
          position: sticky;
          top: 120px;
          height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title-section h1 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          color: #1c2c26;
        }
        .title-section h1 div {
          display: block;
        }

        .cards-section {
          flex: 0.75;
          position: relative;
          z-index: 1; 
        }

        .card-stick {
          position: sticky;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        .card-content {
          display: flex;
          width: 100%;
          height: 100%;
          padding: 3rem;
          color: #fff;
          gap: 2.5rem;
          align-items: center;
        }
        .card-content.dark-text {
          color: #212121;
        }
        
        .card-program-number {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        .text-block {
          flex: 1.2;
        }
        .card-content h2 {
          margin: 0;
          font-size: 2.2rem;
        }
        .card-content p {
          margin: 0.5rem 0 1rem;
          font-size: 1.05rem;
          line-height: 1.5;
          max-width: 450px;
        }
        .counter-block h3 {
          font-size: 3.2rem;
          font-weight: 700;
          margin: 0;
          line-height: 1;
        }
        .image-block {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 55%;
        }
        .image-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        
        .extra-section-container {
          position: sticky;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 20; /* High z-index to cover everything */
          overflow: hidden;
        }
        
        .extra-section-content {
          background-color: #1c2c26;  
          color: #fff;
          padding: 4rem 2rem;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .extra-section-content h2 {
          font-size: 3.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .extra-section-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          line-height: 1.6;
          margin: 0 auto 3rem;
          color: #e0e0e0;
        }
        .stats-container {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        .stat-item {
          flex: 1;
          min-width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-icon {
          height: 3.5rem;
          margin-bottom: 1rem;
        }
        .stat-icon img {
          height: 100%;
          width: auto;
          filter: invert(1);
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
        }
        .stat-text {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #c7c7c7;
          max-width: 200px;
        }

        @media (max-width: 768px) {
          .cards-layout {
            flex-direction: column;
            padding-left: 1rem;
            padding-right: 1rem;
            gap: 0;
          }

          .title-section {
            padding: 1rem 0;
            width: 100%;
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .title-sticky {
            position: static;
            height: auto;
            justify-content: center;
          }

          .title-section h1 { font-size: 2.5rem; }
          .title-section h1 div { display: inline-block; }
          .title-section h1 div:first-child { margin-right: 0.25em; }
          
          .cards-section { width: 100%; }

          .card-stick {
            position: relative;
            height: auto;
            margin-bottom: 2rem;
          }
          .card-content {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            padding: 1.5rem;
          }
          .image-block {
            order: -1;
            max-width: 100%;
            width: 100%;
            height: 250px;
            margin-bottom: 1.5rem;
          }

          .extra-section-container {
            position: relative;
            width: 100%;
            height: auto;
            z-index: auto;
          }

          .extra-section-content {
            padding: 2rem 1rem;
          }
          .extra-section-content h2 {
            font-size: 2.2rem;
          }
          .extra-section-subtitle {
            font-size: 1rem;
          }
          .stats-container {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}