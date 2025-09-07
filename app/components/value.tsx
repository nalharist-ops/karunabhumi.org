import React from 'react';
import Image from 'next/image';

// --- Data for the Values Section ---
const valuesData = [
  {
    imageSrc: '/photos/keep-growing.png',
    alt: "Edukasi Lingkungan dan Kesadaran",
    title: "Edukasi Kesadaran akan Lingkungan",
    description: "Kami menyediakan informasi terkini tentang perubahan iklim dan dampaknya terhadap dunia.",
    bgColor: "#daba89",
    textColor: "#1c2c26",
  },
  {
    imageSrc: '/photos/supply-utilities.png',
    alt: "Community Icon",
    title: "Program Komunitas",
    description: "Kami melaksanakan berbagai program yang mendorong partisipasi komunitas dalam menjaga lingkungan.",
    bgColor: "#628c7d",
    textColor: "#ffffff",
  },
  {
    imageSrc: '/photos/mitigate-storms.png',
    alt: "Proyek Konservasi",
    title: "Proyek Konservasi",
    description: "Kami aktif terlibat dalam proyek yang bertujuan melestarikan sumber daya alam dan lingkungan.",
    bgColor: "#275f4b",
    textColor: "#ffffff",
  },
  {
    imageSrc: '/photos/restore-ecosystems.png',
    alt: "Kampanye Publik",
    title: "Kampanye Publik",
    description: "Kami tercatat dalam berbagai kampanye untuk meningkatkan kesadaran tentang isu perubahan iklim di masyarakat.",
    bgColor: "#1c2c26",
    textColor: "#ffffff",
  },
];

// --- The Main Component ---
export function ValuesSection() {
  return (
    // FIX 1: Added `gap-16` to create a consistent space between the top and bottom sections.
    <section 
      className="flex flex-col min-h-screen p-8 md:p-16 lg:p-24 gap-16" 
      style={{ backgroundColor: '#103d1d' }}
    >
      {/* Top Section */}
      {/* FIX 2: Removed the large bottom margin (`mb-16 md:mb-24 lg:mb-32`). */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        <h1 className="text-3xl font-serif text-white md:text-5xl mb-8 md:mb-0 w-full md:w-1/2 lg:w-auto">
          Nilai-Nilai Kami
        </h1>
        <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-1-2 lg:w-auto">
          <p className="max-w-md text-base md:text-lg text-white mb-6">
            ini placeholder ges, isi nanti yes. lorem ipsum dolor sit amet blablabla.
          </p>
          <a href="/rainmaker-uses" className="text-[#daba89] hover:text-white transition-colors flex items-center group text-lg font-semibold">
            placeholder button <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Content Grid */}
      {/* FIX 3: Removed `mt-auto`. The new `gap-16` on the parent now controls the spacing. */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
        {valuesData.map((value, index) => (
          <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <Image
              src={value.imageSrc}
              alt={value.alt}
              width={500}
              height={500}
              className="w-full h-auto" 
            />
            <div 
              className="p-6" 
              style={{ backgroundColor: value.bgColor, color: value.textColor }}
            >
              <h2 className="mb-2 text-2xl font-bold">{value.title}</h2>
              <p className="text-base leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}