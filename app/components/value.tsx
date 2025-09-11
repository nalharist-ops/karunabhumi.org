import React from 'react';
import Image from 'next/image';

// --- Data for the Values Section ---
const valuesData = [
  {
    imageSrc: '/photos/keep-growing.png',
    alt: "Edukasi Lingkungan",
    title: "Edukasi Kesadaran akan Lingkungan",
    description: "Kami menyediakan informasi terkini tentang perubahan iklim dan dampaknya terhadap manusia dan lingkungan.",
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
    imageSrc: '/photos/restore-ecosystems.png',
    alt: "Proyek Konservasi",
    title: "Proyek Konservasi",
    description: "Kami aktif terlibat dalam proyek yang bertujuan melestarikan sumber daya alam dan lingkungan.",
    bgColor: "#275f4b",
    textColor: "#ffffff",
  },
  {
    imageSrc: '/photos/mitigate-storms.png',
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
    <section 
      className="flex flex-col min-h-screen p-8 md:p-16 lg:p-24 gap-16" 
      style={{ backgroundColor: '#103d1d' }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        <h1 className="text-3xl font-serif text-white md:text-5xl mb-8 md:mb-0 w-full md:w-1/2 lg:w-auto">
          Nilai-Nilai Kami
        </h1>
      </div>

      {/* Bottom Content Grid */}
      {/* FIX 1: Changed grid gap from `gap-8` to `gap-4` for a tighter layout. */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-start">
        {valuesData.map((value, index) => (
          // FIX 2: Removed `rounded-lg` and `shadow-lg` for solid, sharp edges.
          <div key={index} className="flex flex-col overflow-hidden">
            <Image
              src={value.imageSrc}
              alt={value.alt}
              width={500}
              height={500}
              className="w-full h-auto" 
            />
            <div 
              className="p-6 flex flex-col flex-grow" 
              style={{ backgroundColor: value.bgColor, color: value.textColor }}
            >
              <h2 className="mb-2 text-3xl font-bold">{value.title}</h2>
              <p className="text-base leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
