"use client";

import Link from "next/link";
import Image from "next/image";

export default function EmotionalSupportParentsPage() {
  return (
    <section className="max-w-none text-sm leading-relaxed">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">Peer Emotional Support Parents of Child with Autism</h1>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
        Last Updated - 25 August 2025
      </p>


      {/* Meta Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-neutral-800 pt-6 mb-8">
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Category
          </p>
          <p>Research</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Role
          </p>
            <p>Researcher</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Tools
          </p>
          <p>NVivo</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Status
          </p>
            <p>Ongoing</p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <p>
            This research is part of my undergraduate thesis in Psychology, where I am exploring the essence of peer emotional support among parents of children with autism
        </p>
        <p>
            The study aims to understand how these parents provide and receive emotional support from one another, the challenges they face, and the impact of such support on their well-being. Using phenomenological approach, 
            I plan on conducting in-depth interviews with several parents to gather rich, qualitative data that captures their lived experiences.
        </p>

        <p>
            This research is a work in progress, as I am currently in the process of perfecting my methodological framework and preparing for data collection.
        </p>
      </div>
    </section>
  );
}
