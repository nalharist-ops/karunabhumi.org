"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { socialLinks } from "app/lib/config";

function SocialLink({ href, icon: Icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70 transition"
    >
      <Icon className="text-xl" />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const currentPage = pathname.split("/").filter(Boolean).pop();

  return (
    <nav className="mt-6 mb-6 py-2">
      <div className="flex flex-row items-center justify-between">
        {/* Left Side: Breadcrumb */}
        <div className="flex items-center gap-2 text-sm relative">
          {/* Back arrow */}
          <AnimatePresence>
            {!isHome && (
              <motion.div
                key="back-arrow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <Link href="/" className="flex items-center">
                  <Image
                    src="/backarrow.svg"
                    alt="Back"
                    width={10}
                    height={10}
                    className="w-4 h-4 mr-1 filter invert"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Green dot */}
          <span
            className={`w-3 h-3 rounded-full bg-green-400 inline-block ${
              isHome ? "animate-pulse" : ""
            }`}
          ></span>

          {/* Name shifts position based on whether back arrow is there */}
          <motion.div
            animate={{ x: isHome ? 0 : 8 }} // 👈 shift right by 8px if arrow exists
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Link
              href="/"
              className="font-semibold transition hover:opacity-70"
            >
              Alh.rist_
            </Link>
          </motion.div>

          {/* Breadcrumb path */}
          <AnimatePresence mode="wait">
            {isHome ? (
              <motion.span
                key="home"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="ml-2 text-neutral-400"
              >
                / home
              </motion.span>
            ) : (
              <motion.span
                key={currentPage}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="ml-2 text-neutral-400 capitalize"
              >
                / {currentPage}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Socials */}
        <div className="flex flex-row gap-4 items-center text-lg">
          <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        </div>
      </div>
    </nav>
  );
}
