"use client"; 

import React from 'react';
import Image from "next/image";

// Using inline SVGs for icons
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const Footer = () => {
    const mutedColor = 'rgba(227, 197, 103, 0.5)';

    return (
        <footer style={{ backgroundColor: '#103D1D' }} className="relative text-white pt-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col min-h-[350px] md:min-h-[400px]">
                {/* Top Section: Logo and Menus */}
                <div className="flex justify-between items-start w-full mb-12">
                    {/* Logo */}
                    <div>
                        <a href="/" aria-label="Beranda">
                            <img
                                src="/favicon.png"
                                alt="Logo Taru Karuna Bhumi"
                                className="w-20 h-20"
                                style={{ filter: 'opacity(0.5)' }}
                            />
                        </a>
                    </div>

                    {/* All Menus Grouped on Right */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-16 text-right sm:text-left">
                        {/* Menu Links */}
                        <div>
                            <h3 className="uppercase font-light text-sm tracking-wider text-white mb-4">Menu</h3>
                            <div className="flex flex-col space-y-3">
                                <a href="/about" className="text-xl text-white hover:text-[#E3C567] transition-colors duration-200">Tentang</a>
                                <a href="/actions" className="text-xl text-white hover:text-[#E3C567] transition-colors duration-200">Kegiatan</a>
                                <a href="/gallery" className="text-xl text-white hover:text-[#E3C567] transition-colors duration-200">Galeri</a>
                                <a href="/blog" className="text-xl text-white hover:text-[#E3C567] transition-colors duration-200">Jurnal</a>
                            </div>
                        </div>

                        {/* Contact and Socials */}
                        <div>
                             <h3 className="uppercase font-light text-sm tracking-wider text-white mb-4">Hubungi Kami</h3>
                            <div className="flex flex-col space-y-3 items-end sm:items-start">
                               <a href="/contact" className="text-xl text-white hover:text-[#E3C567] transition-colors duration-200">Kontak</a>
                                <div className="flex gap-4 text-2xl pt-2">
                                    <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-white hover:text-[#E3C567] transition-colors">
                                        <TwitterIcon />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-white hover:text-[#E3C567] transition-colors">
                                        <LinkedInIcon />
                                    </a>
                                    <a href="mailto:hello@greenearth.org" aria-label="Email" className="text-white hover:text-[#E3C567] transition-colors">
                                        <MailIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer to push bottom content down */}
                <div className="flex-grow"></div>

                {/* Bottom Section */}
                <div className="w-full relative z-20">
                    <div className="border-t mb-4" style={{ borderColor: mutedColor }}></div>
                    <div className="flex justify-between items-center text-sm font-light" style={{ color: mutedColor }}>
                        <p>© {new Date().getFullYear()} Taru Karuna Bhumi.</p>
                        <p>Malang, Jawa Timur, Indonesia</p>
                    </div>
                     <h1 
                        className="uppercase font-black text-center leading-none -mb-15" 
                        style={{ 
                            fontSize: 'clamp(2.5rem, 15vw, 14rem)',
                            color: mutedColor,
                            whiteSpace: 'nowrap',
                        }}
                        aria-hidden="true"
                    >
                        KARUNA BHUMI
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

