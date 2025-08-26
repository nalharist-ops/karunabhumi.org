"use client";

import Link from "next/link";
import Image from "next/image";

export default function EconomicConfidencePublicDriverPage() {
  return (
    <section className="max-w-none text-sm leading-relaxed">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">Degradation & Marginalization of Socio-Ecological Systems in South Malang Communities</h1>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
        Last Updated - 25 August 2025
      </p>

      {/* Image Preview at Top */}



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
            <p>
                <Link
      href="https://drive.google.com/file/d/1Trmq2ruwnNNc5vx47EphX1Q7YaQ9D85v/view?usp=sharing"
      target="_blank"
      className="flex items-center underline underline-offset-4 hover:text-neutral-500 group"
    >
      Unpublished Works
      <Image
        src="/diagonalarrow.svg"
        alt="arrow right"
        width={16}
        height={16}
        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
      />
    </Link>
            </p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <p>
          This research aimed to explore the economic confidence of public transportation drivers in Malang City.
          As public preference shifts towards private transportation and ride-hailing services
            , traditional public transport drivers face increasing economic uncertainty and challenges.  
        </p>
    <div className="mb-8">
  <div className="relative">
    <Image
      src="/projects/Research4.jpg"
      alt="Preview"
      width={1200}
      height={800}
      className="rounded-lg border border-neutral-800"
    />
    <p className="absolute bottom-2 right-3 text-[11px] text-neutral-100 dark:text-neutral-100 italic bg-black/40 px-2 py-0.5 rounded">
      Preview of Malang City public transport drivers
    </p>
  </div>
</div>
        <p>
           Using phenomenological approach, we conducted in-depth interviews with several drivers and 
           found a rich and interconected themes that shape their belief in their economic confidence, 
           of which includes religious pragmatism, profession romanticism, delegative hope, and instrumental altruism.
        </p>
        <p>
            I believe this research is sucessfully captures the essential experiences of public transportation drivers in Malang City,
            and unearths interesting themes that can be further explored in future research.
        </p>
      </div>
    </section>
  );
}
