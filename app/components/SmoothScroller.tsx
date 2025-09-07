"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroller = () => {
  useEffect(() => {
    // 1. Create a new Lenis instance
    const lenis = new Lenis();

    // 2. Set up the animation loop to run on every frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Clean up when the component is removed
    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // This component doesn't render HTML, it just runs the scroll effect
};

export default SmoothScroller;