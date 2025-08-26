"use client";

import Link from "next/link";
import Image from "next/image";

export default function DegradationMarginalizationSouthMalangPage() {
  return (
    <section className="max-w-none text-sm leading-relaxed">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">Degradation & Marginalization of Socio-Ecological Systems in South Malang Communities</h1>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
        Last Updated - 25 August 2025
      </p>

      {/* Image Preview at Top */}
<div className="mb-8">
  <div className="relative">
    <Image
      src="/projects/Research2.jpg"
      alt="Preview"
      width={1200}
      height={800}
      className="rounded-lg border border-neutral-800"
    />
    <p className="absolute bottom-2 right-3 text-[11px] text-neutral-100 dark:text-neutral-100 italic bg-black/40 px-2 py-0.5 rounded">
      Preview of the South Malang local beachside
    </p>
  </div>
</div>


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
          This one is one of my personal research projects that I am currently interested in. The opportunity arose when I was assisting my research team (CSPS) in conducting a field study in one of
          the southern coastal communities of Malang. We interviewed several local residents and found that they are facing significant challenges
          related to their environment, culture, and socio-economic conditions.
        </p>
        <p>
          While our team is more focused on the social-psychological aspects particularly in their local narrations, identity, and the role of ecological reconsiliation, 
          I am trying to draw a much broader picture of how their otherwise environmentally innocuous production
systems undergo many transitions to overexploitation of natural resources on which they depend as
a response to state development intervention and/or increasing integration in regional and
global markets. 
        </p>
    <div className="mb-8">
      <div className="relative">
        <Image
          src="/projects/Research2-2.jpg"
          alt="Preview"
          width={1200}
          height={800}
          className="rounded-lg border border-neutral-800"
        />
      </div>
    </div>
        <p>
          This research is very much a work in progress, as I'm still gathering more data and insights from many interdisciplinary perspectives. I hope to share more updates and findings as the research progresses.
        </p>
      </div>
    </section>
  );
}
