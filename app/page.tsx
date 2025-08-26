"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const graphicProjects = [
  { src: "/projects/project1.webp", title: "Mental Health Poster" },
  { src: "/projects/project2.webp", title: "Green Movement" },
  { src: "/projects/project3.webp", title: "Event Illustration" },
  { src: "/projects/project4.webp", title: "Profile Posters" },
  { src: "/projects/project5.webp", title: "Event Logo" },
  { src: "/projects/project6.webp", title: "Marketing Posters" },
  { src: "/projects/project7.webp", title: "Congrats Posters" }
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="prose prose-neutral dark:prose-invert">
      {/* Intro */}
      <p>
        I'm a psychology undergraduate 𝚿 with an interest in critical theory,
        particularly in its relations with human capital management, policy
        studies, and socio-economic research as a whole, while also dabble in
        creative works sometimes.
      </p>

      {/* Action Links */}
      <div className="mt-6 space-y-2">
        <Link
          href="/about"
          className="inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          more about me 👋
          <Image
            src="arrowright.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1 filter invert"
          />
        </Link>
      </div>

      <div className="mt-0 space-y-2">
        <Link
          href="/now"
          className="inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          what I'm up to now ⭐
          <Image
            src="arrowright.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1 filter invert"
          />
        </Link>
      </div>

      {/* Projects */}
      <div id="projects" className="mt-10">
        <h3 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">
          Projects
        </h3>

        {/* Graphic Designs */}
        <div className="mt-10">
          <h4 className="underline underline-offset-4">Graphic Designs 🎨</h4>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-4">
            {graphicProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(project)}
                className="relative group overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {/* ✅ Popup Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)} // close when clicking background
  >
    <div
      className="relative flex flex-col items-center"
      onClick={(e) => e.stopPropagation()} // prevent closing on image click
    >
      {/* Close button */}
      <button
        className="absolute -top-10 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full px-3 py-1"
        onClick={() => setSelectedImage(null)}
      >
        ✕
      </button>

      {/* Image */}
      <Image
        src={selectedImage.src}
        alt={selectedImage.title}
        width={1200}
        height={800}
        className="h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg"
      />
    </div>
  </div>
)}
    </section>
  );
}
