"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

// A reusable component for the counting animation
function AnimatedCounter({ to, showPlus = false }: { to: number; showPlus?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        onUpdate(value) {
           if (ref.current) { 
    ref.current.textContent = `${Math.round(value).toLocaleString()}${showPlus ? '+' : ''}`;
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
  
  return <span ref={setRefs}>0{showPlus ? '+' : ''}</span>;
}

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
  const CARD_HEIGHT_VH = 85;
  const HEADER_HEIGHT_PX = 80;
  const SIDE_MARGIN_PX = 16;
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
      image: "zerowaste.jpg",
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

  return (
    <>
      <div
        style={{
          backgroundColor: "#e9deb9",
          paddingTop: `${HEADER_HEIGHT_PX}px`,
        }}
      >
        {/* Cards Section */}
        <div ref={containerRef}>
          {cardData.map((card, idx) => {
            const trackHeightVh = CARD_HEIGHT_VH * 1.5;
            const marginTopVh = idx === 0 ? 0 : -CARD_HEIGHT_VH * 0.7;
            const start = idx / total;
            const end = (idx + 1) / total;
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.7]);
            const opacity = useTransform(
              scrollYProgress,
              [start + 0.05, end],
              [1, 0]
            );

            return (
              <div
                key={card.id}
                style={{
                  height: `${trackHeightVh}vh`,
                  marginTop: `${marginTopVh}vh`,
                }}
              >
                <motion.div
                  style={{
                    top: `${HEADER_HEIGHT_PX + 40}px`,
                    height: `${CARD_HEIGHT_VH}vh`,
                    margin: `0 ${SIDE_MARGIN_PX}px`,
                    borderRadius: `${BORDER_RADIUS_PX}px`,
                    backgroundColor: card.bgColor,
                    scale,
                    opacity,
                  }}
                  className="card-stick"
                >
                  <div className={`card-content ${idx > 0 ? "dark-text" : ""}`}>
                    <div className="text-block">
                      <p className="card-program-number">
                        Program #{String(card.id).padStart(2, '0')}
                      </p>
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                      <div className="counter-block">
                        <h3>
                          <AnimatedCounter to={card.count} showPlus={true} />
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

          {/* Extra Section */}
          <div
            style={{
              height: "100vh",
              marginTop: `-${CARD_HEIGHT_VH / 2}vh`,
            }}
          >
            <div
              style={{
                top: `${HEADER_HEIGHT_PX + 40}px`,
                height: "100vh",
                borderRadius: `${BORDER_RADIUS_PX}px`,
                backgroundColor: "#333",
                color: "#fff",
              }}
              className="card-stick"
            >
              <div className="extra-section">
                <h2>Aksi Nyata Melawan Perubahan Iklim</h2>
                <p className="extra-section-subtitle">
                  Setiap tindakan kita berkontribusi dalam melawan krisis iklim. Lihat dampak nyata yang telah kita capai bersama.
                </p>
                <div className="stats-container">
                  <div className="stat-item">
                    {/* --- ICON UPDATED --- */}
                    <div className="stat-icon">
                      <img src="/tree-svgrepo-com.svg" alt="Pohon Tertanam" />
                    </div>
                    <div className="stat-number">
                      {/* --- ADDED showPlus={true} --- */}
                      <AnimatedCounter to={25000} showPlus={true} />
                    </div>
                    <div className="stat-text">Pohon Tertanam</div>
                  </div>
                  <div className="stat-item">
                    {/* --- ICON UPDATED --- */}
                    <div className="stat-icon">
                      <img src="/coral-svgrepo-com.svg" alt="Coral tertanam" />
                    </div>
                    <div className="stat-number">
                      {/* --- ADDED showPlus={true} --- */}
                      <AnimatedCounter to={38000} showPlus={true} />
                    </div>
                    <div className="stat-text">Coral tertanam</div>
                  </div>
                  <div className="stat-item">
                    {/* --- ICON UPDATED --- */}
                    <div className="stat-icon">
                      <img src="/recycle-svgrepo-com.svg" alt="Sampah didaur ulang" />
                    </div>
                    <div className="stat-number">
                      {/* --- ADDED showPlus={true} --- */}
                      <AnimatedCounter to={850} showPlus={true} />
                    </div>
                    <div className="stat-text">Ton sampah organik yang berhasil didaur ulang</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #e9deb9;
        }
        .card-stick {
          position: sticky;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        .card-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 3rem;
          color: #fff;
          gap: 2rem;
        }
        .card-content.dark-text {
          color: #212121;
        }
        .card-program-number {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 0 0.5rem 0;
          opacity: 0.8;
        }
        .text-block {
          flex: 1;
        }
        .card-content h2 {
          margin: 0;
          font-size: 2.5rem;
        }
        .card-content p {
          margin: 0.5rem 0 1rem;
          font-size: 1.1rem;
          line-height: 1.5;
          max-width: 400px;
        }
        .counter-block h3 {
          font-size: 4rem;
          font-weight: 700;
          margin: 0;
          line-height: 1;
        }
        .counter-block p {
          font-size: 1.1rem;
          margin: 0.25rem 0 0;
          font-weight: 300;
        }
        .image-block {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          max-width: 50%;
        }
        .image-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        .extra-section {
          padding: 3rem;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .extra-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .extra-section-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 4rem;
          color: #e0e0e0;
        }
        .stats-container {
          display: flex;
          justify-content: space-around;
          width: 100%;
          max-width: 900px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          padding: 0 1rem;
        }
        .stat-icon {
          height: 3.5rem; /* Set a container height */
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* --- STYLE FOR ICON IMAGES --- */
        .stat-icon img {
          height: 100%; /* Fill the container height */
          width: auto;
          filter: invert(1); /* Change SVG color to white */
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
        }
        .stat-text {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #c7c7c7;
          max-width: 200px;
        }
        @media (max-width: 768px) {
          .card-program-number { font-size: 0.7rem; }
          .card-content { flex-direction: column; padding: 1.5rem; align-items: flex-start; }
          .card-content h2 { font-size: 1.8rem; }
          .card-content p { font-size: 1rem; }
          .counter-block h3 { font-size: 3rem; }
          .image-block { max-width: 100%; width: 100%; height: 250px; margin-top: 1.5rem; }
          .extra-section h2 { font-size: 2rem; }
          .extra-section-subtitle { font-size: 1rem; margin-bottom: 2.5rem; }
          .stats-container { flex-direction: column; gap: 2.5rem; }
        }
      `}</style>
    </>
  );
}