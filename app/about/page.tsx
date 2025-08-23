// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Callout from "../components/callout";

const photos = [
  { src: "/photos/photo1.jpg", title: "My hometown outskirts - Lawang, Malang City" },
  { src: "/photos/photo2.jpg", title: "Hiking @ Mt. Prau"},
  { src: "/photos/photo3.jpg", title: "Local beachside @ South Malang" },
  { src: "/photos/photo4.jpg", title: "Cozy coffee shop vibes" },
  { src: "/photos/photo5.jpg", title: "Flight~" },
  { src: "/photos/photo6.jpg", title: "Recent breakfast" },
  { src: "/photos/photo7.jpg", title: "Arts with friends" },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-3 space-y-12">


      {/* Intro Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpeg" // replace with your profile photo in /public
            alt="Naufal Al Harist"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-semibold text-neutral-100">
              Hey, I’m Naufal Al Harist 👋
            </h1>
            <p className="text-neutral-400">
              Currently an undergraduate psychology student at{" "}
              <Link
          href="/https://fpsi.um.ac.id"
          className="text-neutral-100 inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          Universitas Negeri Malang
          <Image
            src="diagonalarrow.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
          />
        </Link>, 
              exploring{" "}
              <span className="text-neutral-200">
                critical theory, industrial–organizational psychology, and social psychology
              </span>. Passionate about{" "}
              <span className="text-neutral-200">contemporary philosophy and qualitative research</span>
              
            </p>
          </div>
        </div>
      </section>






      <section>
        <Callout>
          Key areas of work include research analysis both quantitative such as developing psychological instruments and using software analysis like SPSS; and Qualitative such as phenomenology, thematic analysis, and using software analysis like NVivo. Experienced in psychological assessment using various tools like IST, EPPS, Kraeplin, and more. Skilled in designing software especially Adobe CC. If needed, I can also assist in front-end web development with a little bit of both React and Next.js. <span className="text-neutral-100">I tried to be a jack of all trades :D</span>
        </Callout>
      </section>



{/* Photos Section */}
<section className="mt-12">
  

  {/* Make the entire grid a group for greying effect */}
  <div className="group/photos columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
    {photos.map((photo, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg break-inside-avoid 
                   transform transition duration-300
                   group-hover/photos:opacity-50 hover:!opacity-100 
                   hover:scale-105 hover:rotate-3"
      >
        <Image
          src={photo.src}
          alt={photo.title}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg transition duration-300"
        />

        {/* Tooltip label appears when the whole card is hovered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="relative bg-black text-white text-xs sm:text-sm px-3 py-1 rounded shadow-lg">
            {photo.title}
            {/* little triangle */}
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
                            border-l-4 border-r-4 border-t-4 
                            border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




      {/* Work Experience */}
      <section>
        <h3 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">Experience</h3>
        <div className="space-y-6 text-neutral-400">
          <div>
            <Link
          href="/https://klubbungabutikresort.com"
          className="text-neutral-100 inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          HR Intern, Klub Bunga Theme Park Hotel
          <Image
            src="diagonalarrow.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
          />
        </Link>
            <p className="text-sm text-neutral-100">Aug 2025 – Now</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Assisted the HR team in supporting daily operations and strategic initiatives to enhance employee experience and organizational effectiveness. 
</li>

            </ul>
          </div>
          <div></div>
          <div>
            <Link
          href="/https://www.instagram.com/catalyst.ins"
          className="text-neutral-100 inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          General Admin, PT. Katalis Pendidikan Indonesia
          <Image
            src="diagonalarrow.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
          />
        </Link>
            <p className="text-sm text-neutral-100">Oct 2021 – Jan 2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Handled company correspondence and administration.</li>
              <li>Organized operational and event-related documents.</li>
            </ul>
          </div>
          <div>
            <Link
          href="/https://csps.um.ac.id"
          className="text-neutral-100 inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          Research Assistant, PT. CSPS Talenta Humanika
          <Image
            src="diagonalarrow.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
          />
        </Link>
            <p className="text-sm text-neutral-100">Aug 2024 – May 2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Conducted psychological assessments across institutions.</li>
              <li>Assisted in instrument development & data analysis (quantitative & qualitative).</li>
              <li>Supported academic writing & publication.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">Education</h2>
        <div className="space-y-6 text-neutral-400">
          <div>
            <Link
          href="/https://fpsi.um.ac.id"
          className="text-neutral-100 inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
        >
          Universitas Negeri Malang - B.A. Psychology
          <Image
            src="diagonalarrow.svg"
            alt="arrow right"
            width={20}
            height={20}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
          />
        </Link>
            <p className="text-sm text-neutral-100">Aug 2022 – Present</p>
            <p className="mt-2">
              GPA: 3.74 / 4.00. 
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-sm tracking-wide uppercase mb-3 text-neutral-500">Skills</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-neutral-200">
          <span>Quantitative & Qualitative Research Design</span>
          <span>Job Analysis</span>
          <span>Job Analysis</span>
          <span>SPSS</span>
          <span>NVivo</span>
          <span>JASP</span>
          <span>Adobe CC</span>
          <span>Psychological Assessment</span>
          <span>Canva</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
        </div>
      </section>

            <section>
        <div className="text-sm text-neutral-500 italic">
            Last updated: August 2025
        </div>
      </section>
    </main>
  );
}
