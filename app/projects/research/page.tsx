"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const researchProjects = [
  {
    title: "Memetic Media & Collective Identity",
    description: "Case study of r/place 2022",
    year: "2024",
    category: "Published",
    image: "/projects/Research5-1.png",
    link: "/projects/research/memetic-media-collective-identity",
  },
  {
    title: "Economic Confidence of Public Transportation Workers",
    description: "Phenomenological study of drivers in Malang City",
    year: "Unpublished",
    category: "Unpublished",
    image: "/projects/Research4.jpg",
    link: "/projects/research/Economic-Confidence-PublicTransport-Driver",
  },
  {
    title: "Peer Emotional Support between Parents of Children with Autism",
    description: "Undergraduate thesis project",
    year: "Ongoing",
    category: "Ongoing",
    image: "/projects/Research3.jpg",
    link: "/projects/research/Emotional-Support-Parents-Autism",
  },
  {
    title: "Degradation & Marginalization of Socio-Ecological Systems in South Malang",
    description: "Study of political ecology and environmental psychology",
    year: "Ongoing",
    category: "Ongoing",
    image: "/projects/Research2.jpg",
    link: "/projects/research/Degradation-Marginalization-South-Malang",
  },
  {
    title: "Risk-taking between Social-economic Classes",
    description: "Experiment Study based on Iowa Gambling Task",
    year: "Ongoing",
    category: "Ongoing",
    image: "/projects/Research1.jpg",
    link: "/projects/research/Risk-Taking-Experiment",
  },
];

const categories = ["All", "Published", "Unpublished", "Ongoing"];

export default function ResearchPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? researchProjects
    : researchProjects.filter((p) => p.category === filter);

  return (
    <section className="prose prose-neutral dark:prose-invert max-w-3xl">
      {/* Header */}
      <h1 className="text-2xl font-semibold">Research</h1>
      <p className="text-neutral-400">Some of my recent academic work.</p>

      {/* Tabs */}
      <div className="flex gap-6 mt-6 mb-8 text-sm">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`underline-offset-4 ${
              filter === c
                ? "underline text-white"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {c}{" "}
            <span className="text-neutral-500">
              {c === "All"
                ? researchProjects.length
                : researchProjects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      {/* Research List */}
      <div className="space-y-8">
        {filtered.map((project, idx) => (
          <div className="flex items-center justify-between border-b border-neutral-700 pb-6">
  {/* Left: Image + Text */}
  <div className="flex gap-4 items-start">
    {project.image && (
      <Image
        src={project.image}
        alt={project.title}
        width={120}
        height={80}
        className="rounded-md object-cover"
      />
    )}
    <div>
      <Link
        href={project.link}
        className="underline underline-offset-4 hover:text-neutral-500"
      >
        {project.title}
      </Link>
      <p className="text-sm text-neutral-400">{project.description}</p>
    </div>
  </div>

  {/* Right: Year */}
  <span className="text-sm text-neutral-400 whitespace-nowrap">
    {project.year}
  </span>
</div>

        ))}
      </div>
    </section>
  );
}
