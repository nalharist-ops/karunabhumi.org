"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const graphicProjects = [
  { src: "/projects/project1.webp", title: "Mental Health Poster" },
  { src: "/projects/project2.webp", title: "Green Movement" },
  { src: "/projects/project3.webp", title: "Event Illustration" },
  { src: "/projects/project4.webp", title: "Profile Posters" },
  { src: "/projects/project5.webp", title: "Event Logo" },
  { src: "/projects/project6.webp", title: "Marketing Posters" },
  { src: "/projects/project7.webp", title: "Congrats Posters" },
];

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ✅ ESC closes modal, arrows navigate
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! + 1) % graphicProjects.length);
      }
      if (e.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex(
          (prev) => (prev! - 1 + graphicProjects.length) % graphicProjects.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

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

      {/* Contact */}
      <div className="mt-10">
        <h3 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">
          Connect with me
        </h3>

        <div className="flex gap-6">
          <Link
            href="mailto:nalharist@gemail.com"
            className="flex items-center underline underline-offset-4 hover:text-neutral-500 group"
          >
            Email
            <Image
              src="/diagonalarrow.svg"
              alt="arrow right"
              width={16}
              height={16}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/naufal-al-harist"
            target="_blank"
            className="flex items-center underline underline-offset-4 hover:text-neutral-500 group"
          >
            LinkedIn
            <Image
              src="/diagonalarrow.svg"
              alt="arrow right"
              width={16}
              height={16}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
            />
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="mt-10">
        <h3 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">
          Projects
        </h3>

        {/* Research */}
        <div className="space-y-4">
          <h4 className="underline underline-offset-4">
            <Link
              href="projects/research"
              className="underline underline-offset-4 hover:text-neutral-500 transition-colors"
            >
              Research 📝
            </Link>
          </h4>
          <div className="space-y-4 pl-6">
            <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
              <div>
                <Link
                  href="/projects/research/Risk-Taking-Experiment"
                  className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
                >
                  Risk-taking between Social-economic Classes
                </Link>
                <span className="ml-2 text-sm text-neutral-400">
                  Experiment study based on{" "}
                  <Link
                    href="https://en.wikipedia.org/wiki/Iowa_gambling_task"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-neutral-400 hover:!text-neutral-500 underline decoration-dotted underline-offset-4"
                  >
                    Iowa Gambling Task
                  </Link>
                </span>
              </div>
              <span className="text-sm text-neutral-400 ml-auto">Ongoing</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
              <div>
                <Link
                  href="/projects/research/Degradation-Marginalization-South-Malang"
                  className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
                >
                  Degradation & Marginalization of Socio-Ecological Systems in South Malang Communities
                </Link>
                <span className="ml-2 text-sm text-neutral-400">
                  Study of political ecology and environmental psychology
                </span>
              </div>
              <span className="text-sm text-neutral-400 ml-auto">Ongoing</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
              <div>
                <Link
                  href="/projects/research/Emotional-Support-Parents-Autism"
                  className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
                >
                  Peer Emotional Support Parents of Children with Autism
                </Link>
                <span className="ml-2 text-sm text-neutral-400">
                  Undergraduate Thesis
                </span>
              </div>
              <span className="text-sm text-neutral-400 ml-auto">Ongoing</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
              <div>
                <Link
                  href="/projects/research/Economic-Confidence-PublicTransport-Driver"
                  className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
                >
                  Economic Confidence of Public Transportation Workers
                </Link>
                <span className="ml-2 text-sm text-neutral-400">
                  phenomenological study of drivers in Malang City
                </span>
              </div>
              <span className="text-sm text-neutral-400 ml-auto">
                Unpublished Paper
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
              <div>
                <Link
                  href="projects/research/memetic-media-collective-identity"
                  className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
                >
                  Memetic Media & Collective Identity
                </Link>
                <span className="ml-2 text-sm text-neutral-400">
                  case study of r/place 2022
                </span>
              </div>
              <span className="text-sm text-neutral-400">Jan • 2024</span>
            </div>
          </div>
        </div>

        {/* Graphic Designs */}
        <div className="mt-10">
          <h4 className="underline underline-offset-4">Graphic Designs 🎨</h4>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-4">
            {graphicProjects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
                onClick={() => setSelectedIndex(index)}
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
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button on top-right of image */}
            <div className="relative">
              <Image
                src={graphicProjects[selectedIndex].src}
                alt={graphicProjects[selectedIndex].title}
                width={1200}
                height={800}
                className="h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg"
              />
            </div>

            {/* Title */}
            <p className="text-white mt-2">
              {graphicProjects[selectedIndex].title}
            </p>

            {/* Arrow Nav */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + graphicProjects.length) %
                      graphicProjects.length
                  )
                }
              >
                <Image
            src="arrowright.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="rotate-180 ml-1 transition-transform duration-300 group-hover:translate-x-1 filter invert"
          />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % graphicProjects.length)
                }
              >
                <Image
            src="arrowright.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1 filter invert"
          />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}