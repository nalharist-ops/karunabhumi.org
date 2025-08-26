"use client";

import Link from "next/link";
import Image from "next/image";

export default function MemeticCollectivePage() {
  return (
    <section className="max-w-none text-sm leading-relaxed">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">Memetic Media & Collective Identity in r/place 2022</h1>
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
          <p>NVivo, {""}
            <Link
      href="https://2022.place-atlas.stefanocoding.me"
      target="_blank"
      className="flex items-center underline underline-offset-4 hover:text-neutral-500 group"
    >
      Place-Atlas Archive
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
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Status
          </p>
            <p>
                <Link
      href="https://doi.org/10.17977/um070v4i12024p1-10"
      target="_blank"
      className="flex items-center underline underline-offset-4 hover:text-neutral-500 group"
    >
      Published
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
<div className="mb-8">
  <div className="relative">
    <Image
      src="/projects/Research5.png"
      alt="Preview"
      width={1200}
      height={800}
      className="rounded-lg border border-neutral-800"
    />
    <p className="absolute bottom-2 right-3 text-[11px] text-neutral-100 dark:text-neutral-100 italic bg-black/40 px-2 py-0.5 rounded">
      Preview of the Complete r/place 2022 Canvas
    </p>
  </div>
</div>
      {/* Description */}
      <div className="space-y-4">
        <p>
        This is my very first published research article, which was published in Faculty of Psychology, Universitas Negeri Malang's journal, {""} <Link
      href="https://doi.org/10.17977/um070v4i12024p1-10"
      target="_blank"
      className="inline-flex underline underline-offset-4 hover:text-neutral-500 group"
    >
      Flourishing Journal
      <Image
        src="/diagonalarrow.svg"
        alt="arrow right"
        width={16}
        height={16}
        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
      />
    </Link>
    . The research explores how online communities utilize memetic media to construct and express their collective identities, using the 2022 iteration of r/place as a case study.
</p>
        <p>
            People nowadays are perhaps more familiar with {""} <Link
      href="https://wplace.live"
      target="_blank"
      className="inline-flex underline underline-offset-4 hover:text-neutral-500 group"
    >
      wplace.live
      <Image
        src="/diagonalarrow.svg"
        alt="arrow right"
        width={16}
        height={16}
        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
      />
    </Link> where users can collaboratively draw pixel art on world map. However, the original r/place event on Reddit in 2017 and its subsequent iteration in 2022 were pioneering experiments in online collective creativity and community expression.
            Instead of on a world map, r/place is a large limited blank canvas
            where users can place colored pixels to create images. The 2022 event saw the participation of various online communities, each contributing to the canvas with their unique memes and symbols that represent each of their collective identity as a memetic media.
        </p>
        <p>
            As this is a case study, I focused my unit of analysis on two distict yet essentially similar artworks that were created during the event: 'The American Flag' from the american online community, and 'The Night Watch by Rembrandt' from the dutch online community. Both artworks are iconic symbols of their respective cultures, and their recreation on r/place serves as a fascinating example of how online communities use memetic media to express their collective identities.
        </p>
<div className="mb-8">
  <div className="relative">
    <Image
      src="/projects/Research5-1.png"
      alt="Preview"
      width={1200}
      height={800}
      className="rounded-lg border border-neutral-800"
    />
    <p className="absolute bottom-2 right-3 text-[11px] text-neutral-100 dark:text-neutral-100 italic bg-black/40 px-2 py-0.5 rounded">
      The Night Watch by Rembrandt recreated on r/place 2022
    </p>
  </div>
</div>
        <p>
            What this study found is that in general, sense of belonging is the main motivator for individuals to behave in accordance with the collective agency of their group identity. This collective identity is formed through the 'commonality' of attributes/experiences shared by each individual in the group. In accordance with the duality of memetic structures, the cultural products of these groups are then expressed by adapting them while preserving its main essence to the r/place 2022 canvas.
        </p>
<div className="mb-8">
  <div className="relative">
    <Image
      src="/projects/Research5-2.png"
      alt="Preview"
      width={1200}
      height={800}
      className="rounded-lg border border-neutral-800"
    />
    <p className="absolute bottom-2 right-3 text-[11px] text-neutral-100 dark:text-neutral-100 italic bg-black/40 px-2 py-0.5 rounded">
      The American Flag recreated on r/place 2022
    </p>
  </div>
</div>
        <p>
            I wrote this paper in my second year of my undergraduate study, so please forgive any lack of depth in the analysis. However, I believe this research is a good starting point for further exploration into the fascinating world of online communities and their use of memetic media to construct and express their collective identities.
        </p>
      </div>
    </section>
  );
}
