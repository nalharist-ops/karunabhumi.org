"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useScrollDirection } from "../hooks/useScrollDirection"; // Ensure this path is correct

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const menuVariants: Variants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1],
        when: "afterChildren",
      },
    },
  };

  const staggerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { ease: "easeIn", duration: 0.3 },
    },
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-6 flex items-center justify-between 
        bg-transparent text-white transition-transform duration-300 ease-in-out
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Logo */}
      <Link href="/" className="z-[60]">
        <Image
          className="filter invert brightness-0"
          src="/favicon.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
      </Link>

      {/* Title - FIX 1: Hide on mobile (hidden) and show on medium screens and up (md:block) to prevent overlap */}
      <h1 className="hidden md:block font-serif text-3xl tracking-wide absolute left-1/2 transform -translate-x-1/2 z-[60]">
        Taru Karuna Bhumi
      </h1>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-8 flex flex-col justify-center items-center z-[60] text-white"
      >
        <span
          className={`absolute h-1 w-10 bg-current rounded transition-transform duration-300 ${
            isOpen ? "rotate-45" : "-translate-y-3"
          }`}
        />
        <span
          className={`absolute h-1 w-10 bg-current rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-1 w-10 bg-current rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45" : "translate-y-3"
          }`}
        />
      </button>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-screen md:h-[80vh] bg-green-950 text-white flex flex-col overflow-y-auto z-[50]"
          >
            {/* FIX 2: Use responsive padding. Smaller on mobile, larger on desktop. */}
            <motion.div
              variants={staggerVariants}
              className="px-6 sm:px-12 lg:px-20 pt-28 pb-12 flex flex-col flex-1"
            >
              {/* Menu and Quick Links section */}
              {/* FIX 3: Stack vertically on mobile (flex-col) and go to row on large screens (lg:flex-row) */}
              <div className="flex flex-col lg:flex-row justify-start flex-1">
                {/* Large Logo - This is already hidden on mobile which is correct */}
                <motion.div
                  variants={fadeVariants}
                  className="hidden md:flex col-span-1 flex-col items-start w-[330px] lg:mr-20 xl:mr-60"
                >
                  <Image
                    src="/favicon.png"
                    alt="Logo"
                    width={330}
                    height={330}
                  />
                </motion.div>
                
                {/* Menu links container - FIX 4: Stack columns on mobile, use row on medium+ screens */}
                <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24 font-serif md:mt-15">
                  {/* First Column - FIX 5: Full width on mobile, fixed on medium+ */}
                  <div className="flex-none w-full md:w-64 mb-8 md:mb-0">
                    <motion.p
                      variants={fadeVariants}
                      className="text-sm uppercase tracking-widest mb-4"
                    >
                      Menu
                    </motion.p>
                    {/* FIX 6: Smaller font on mobile, larger on small screens and up */}
                    <ul className="space-y-3 text-3xl sm:text-4xl font-light leading-tight">
                      {[
                        { label: "Tentang", href: "/about" },
                        { label: "Kegiatan", href: "/actions" },
                        { label: "Galeri", href: "/gallery" },
                      ].map((item, i) => (
                        <motion.li key={i} variants={fadeVariants}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between group cursor-pointer transition-colors hover:text-[#E3C567]`}
                          >
                            {item.label}
                            <span className="flex items-center transition-transform group-hover:translate-x-2">
                              <FiArrowRight className="text-2xl" />
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Second Column - FIX 7: Full width on mobile, fixed on medium+. Removed top padding for mobile. */}
                  <div className="flex-none w-full md:w-64 md:pt-10">
                    <ul className="space-y-3 text-3xl sm:text-4xl font-light leading-tight">
                      {[
                        { label: "Jurnal", href: "/blog" },
                        { label: "Kontak", href: "/contact" },
                      ].map((item, i) => (
                        <motion.li key={i} variants={fadeVariants}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between group cursor-pointer transition-colors hover:text-[#E3C567]"
                          >
                            {item.label}
                            <span className="flex items-center transition-transform group-hover:translate-x-2">
                              <FiArrowRight className="text-2xl" />
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer section - FIX 8: Stack on mobile, row on medium+. Center items and add gap for mobile. */}
              <motion.div
                variants={fadeVariants}
                className="border-t border-gray-700 mt-12 pt-6 flex flex-col text-center gap-4 md:flex-row md:text-left md:justify-between items-center text-sm sm:text-base text-gray-400"
              >
                <span>© {new Date().getFullYear()} Taru Karuna Bhumi</span>

                {/* Socials */}
                <div className="flex gap-8 text-2xl">
                  <Link href="https://twitter.com" target="_blank">
                    <FaXTwitter />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <FaLinkedinIn />
                  </Link>
                  <Link href="mailto:hello@greenearth.org">
                    <TbMailFilled />
                  </Link>
                </div>

                <span>Malang, Jawa Timur, Indonesia</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}