"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

// 1. Import the custom hook
import { useScrollDirection } from "../hooks/useScrollDirection"; // Ensure this path is correct

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // 2. Use the hook to get the current scroll direction
  const scrollDirection = useScrollDirection();

  // Variant for the main menu panel slide-down animation
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

  // ... (Your other variants like staggerVariants and fadeVariants remain the same)
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
    // 3. Update the className for the <nav> element
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between 
        bg-transparent text-white transition-transform duration-300 ease-in-out
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          className="filter invert brightness-0"
          src="/favicon.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
      </Link>

      {/* Title */}
      <h1 className="font-serif text-3xl tracking-wide absolute left-1/2 transform -translate-x-1/2 z-[60]">
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

      {/* Menu (Your existing framer-motion code is unchanged) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-[80vh] bg-green-950 text-white flex flex-col overflow-hidden z-[50]"
          >
           {/* ... all your menu content ... */}
            <motion.div
              variants={staggerVariants}
              className="px-20 pt-36 pb-18 flex flex-col flex-1"
            >
              {/* Menu and Quick Links section */}
              <div className="flex justify-start flex-1">
                {/* Large Logo */}
                <motion.div
                  variants={fadeVariants}
                  className="hidden md:flex col-span-1 flex-col items-start w-[330px] mr-60"
                >
                  <Image
                    src="/favicon.png"
                    alt="Logo"
                    width={330}
                    height={330}
                  />
                </motion.div>
                {/* Menu links container */}
                <div className="flex gap-30 font-serif mt-15">
                  {/* First Column */}
                  <div className="flex-none w-64">
                    <motion.p
                      variants={fadeVariants}
                      className="text-sm uppercase tracking-widest mb-4"
                    >
                      Menu
                    </motion.p>
                    <ul className="space-y-4 text-4xl font-light leading-tight">
                      {[
                        { label: "About", href: "/about" },
                        { label: "Actions", href: "/actions" },
                        { label: "Gallery", href: "/gallery" },
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

                  {/* Second Column */}
                  <div className="flex-none pt-10 w-64">
                    <ul className="space-y-4 text-4xl font-light leading-tight">
                      {[
                        { label: "People", href: "/people" },
                        { label: "Blog", href: "/blog" },
                        { label: "Contact", href: "/contact" },
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

              {/* Footer section */}
              <motion.div
                variants={fadeVariants}
                className="border-t border-gray-700 mt-12 pt-6 flex justify-between items-center text-base text-gray-400"
              >
                <span>© {new Date().getFullYear()} Taru Karuna Bhumi</span>

                {/* Socials */}
                <div className="flex gap-10 text-2xl">
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