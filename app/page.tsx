"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const graphicProjects = [
  { src: "/projects/project1.webp", title: "Mental Health Poster"},
  { src: "/projects/project2.webp", title: "Green Movement" },
  { src: "/projects/project3.webp", title: "Event Illustration"},
  { src: "/projects/project4.webp", title: "Profile Posters"},
  { src: "/projects/project5.webp", title:  "Event Logo"},
  { src: "/projects/project6.webp", title: "Marketing Posters" },
  { src: "/projects/project7.webp", title: "Congrats Posters" }
];

export default function Page() {
  // state for each collapsible
  const [openSections, setOpenSections] = useState({
    research: false,
    graphics: false,
    music: false,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key], // only toggle the clicked one
    }));
  };

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
        <br />
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
        <br />
      </div>
      

      {/* Projects */}
      <div  id="projects" className="mt-10">
        <h3 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">
          Projects
        </h3>
        <div className="space-y-4">
          {/* Research */}
          <div>
            <button
              onClick={() => toggleSection("research")}
              className="flex justify-between items-center w-full border-b border-neutral-700 pb-2 text-left"
            >
              <div>
                <span className="underline underline-offset-4 cursor-pointer hover:text-neutral-500">
                  Research 📝
                </span>
                <span className="ml-2 text-sm text-neutral-400">
                  mostly qualitative research
                </span>
              </div>
              <span className="text-sm text-neutral-400">
                {openSections.research ? "▼" : "▶"}
              </span>
            </button>

<div
  className={`transition-all duration-700 overflow-hidden ${
    openSections.research ? "max-h-[5000px] mt-6" : "max-h-0"
  }`}
>
  <div className="space-y-4 pl-6"> {/* indent */}
    {/* Last entry moved to top */}
    <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
      <div>
        <Link
          href="#"
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
          href="#"
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
          href="#"
          className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          Peer Emotional Support between Parents of Children with Autism
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
          href="https://drive.google.com/file/d/1Trmq2ruwnNNc5vx47EphX1Q7YaQ9D85v/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          Economic Confidence of Public Transportation Workers
        </Link>
        <span className="ml-2 text-sm text-neutral-400">
          phenomenological study of drivers in Malang City
        </span>
      </div>
      <span className="text-sm text-neutral-400 ml-auto">Unpublished Paper</span>
    </div>

    <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
      <div>
        <Link
          href="https://doi.org/10.17977/um070v4i12024p1-10"
          target="_blank"
          rel="noopener noreferrer"
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
          </div>


          {/* Graphic Designs */}
          <div>
            <button
              onClick={() => toggleSection("graphics")}
              className="flex justify-between items-center w-full border-b border-neutral-700 pb-2 text-left"
            >
              <div>
                <span className="underline underline-offset-4 cursor-pointer hover:text-neutral-500">
                  Graphic Designs 🎨
                </span>
                <span className="ml-2 text-sm text-neutral-400">
                  Illustrations, logos, posters
                </span>
              </div>
              <span className="text-sm text-neutral-400">
                {openSections.graphics ? "▼" : "▶"}
              </span>
            </button>

            <div
              className={`transition-all duration-700 overflow-hidden ${
                openSections.graphics ? "max-h-[1000px] mt-6" : "max-h-0"
              }`}
            >
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-4">
                {graphicProjects.map((project, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg break-inside-avoid"
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
          {/* Music (hidden for now) */}
          {/*
          <button
            onClick={() => toggleSection("music")}
            className="flex justify-between items-center w-full border-b border-neutral-700 pb-2 text-left"
          >
            <div>
              <span className="underline underline-offset-4 cursor-pointer hover:text-neutral-500">
                Music
              </span>
              <span className="ml-2 text-sm text-neutral-400">
                personal projects, trying to learn music production from scratch
              </span>
            </div>
            <span className="text-sm text-neutral-400">
              {openSections.music ? "▼" : "▶"}
            </span>
          </button>

          <div
            className={`transition-all duration-700 overflow-hidden ${
              openSections.music ? "max-h-[5000px] mt-6" : "max-h-0"
            }`}
          >
            <div className="space-y-6 pl-6"> 
              <div className="flex flex-col border-b border-neutral-700 pb-4">
                <span className="underline decoration-dotted underline-offset-4 text-lg">
                  Dreamscape
                </span>
                <span className="text-sm text-neutral-400 mb-2">
                  Ambient soundtrack for short film
                </span>
                <audio controls className="w-full">
                  <source src="/music/dreamscape.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div className="flex flex-col border-b border-neutral-700 pb-4">
                <span className="underline decoration-dotted underline-offset-4 text-lg">
                  City Lights
                </span>
                <span className="text-sm text-neutral-400 mb-2">
                  Lo-fi experimental composition
                </span>
                <audio controls className="w-full">
                  <source src="/music/citylights.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div className="flex flex-col border-b border-neutral-700 pb-4">
                <span className="underline decoration-dotted underline-offset-4 text-lg">
                  River Flow
                </span>
                <span className="text-sm text-neutral-400 mb-2">
                  Piano improvisation
                </span>
                <audio controls className="w-full">
                  <source src="/music/riverflow.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
          */}

        </div>
      </div>

      
    </section>
  );
}
