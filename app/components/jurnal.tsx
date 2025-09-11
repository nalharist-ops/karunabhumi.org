import React from 'react';

// You can replace this with your actual post data structure
interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  isFeatured?: boolean;
}

// Data has been translated and adapted for an eco-program context, with original images restored.
const blogPostsData: Post[] = [
  {
    id: 1,
    title: 'Inovasi Biopori: Solusi Cerdas Atasi Genangan & Sampah Organik',
    description: 'Melihat bagaimana lubang resapan biopori menjadi pahlawan lingkungan di perkotaan, mengubah sampah menjadi kompos.',
    category: 'Teknologi Hijau',
    date: '10 Sep',
    imageUrl: 'https://cdn.prod.website-files.com/637b4af631bc1255bbd6377a/637b4af631bc12320ed63782_olivia-blog-cover-image-10.jpg',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Gerakan Tanam Seribu Pohon: Menghijaukan Lahan Kritis',
    description: 'Kisah inspiratif para relawan yang bergotong-royong memulihkan ekosistem dan menjaga sumber mata air.',
    category: 'Aksi Komunitas',
    date: '05 Sep',
    imageUrl: 'https://cdn.prod.website-files.com/637b4af631bc1255bbd6377a/637b4af631bc120031d63787_olivia-blog-cover-image-8.jpg',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Dari Sampah Plastik Menjadi Karya Seni Bernilai',
    description: 'Program pemberdayaan yang mengubah limbah plastik menjadi kerajinan tangan dengan nilai ekonomi.',
    category: 'Daur Ulang',
    date: '28 Agu',
    imageUrl: 'https://cdn.prod.website-files.com/637b4af631bc1255bbd6377a/637b4af631bc128675d6378c_olivia-blog-cover-image-5.jpg',
  },
  {
    id: 4,
    title: 'Mengenal Pahlawan Pesisir: Ekosistem Mangrove',
    description: 'Menjelajahi peran vital hutan mangrove dalam melindungi garis pantai dan menjadi rumah bagi keanekaragaman hayati.',
    category: 'Edukasi',
    date: '22 Agu',
    imageUrl: 'https://cdn.prod.website-files.com/637b4af631bc1255bbd6377a/637b4af631bc1261ddd6378f_olivia-blog-cover-image-4.jpg',
  },
   {
    id: 5,
    title: 'Kompos dari Rumah: Mengurangi Limbah, Menyuburkan Tanah',
    description: 'Panduan praktis memulai pengomposan sisa makanan di rumah untuk mengurangi jejak karbon.',
    category: 'Gaya Hidup',
    date: '15 Agu',
    imageUrl: 'https://cdn.prod.website-files.com/637b4af631bc1255bbd6377a/637b4af631bc126f30d6378b_olivia-blog-cover-image-6.jpg',
  },
  {
    id: 6,
    title: 'Energi Terbarukan: Masa Depan Lestari untuk Desa',
    description: 'Studi kasus pemanfaatan panel surya dan mikrohidro untuk kemandirian energi di pedesaan.',
    category: 'Energi',
    date: '07 Agu',
    imageUrl: 'https://cdn.prod.website-files.com/637b4af631bc1255bbd6377a/637b4af631bc127ef5d63790_olivia-blog-cover-image-3.jpg',
  },
];


// Reusable Post Card component with "Read More" button
const PostCard = ({ post, isFeatured }: { post: Post, isFeatured?: boolean }) => {
  const titleSize = isFeatured ? 'text-2xl md:text-3xl' : 'text-xl';
  const descriptionSize = isFeatured ? 'text-base' : 'text-sm';
  
  return (
    <div className="flex flex-col h-full">
      <a href="#" className="group block flex-grow">
        <div className="overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src='https://placehold.co/800x600/ef4444/ffffff?text=Image+Error';
            }}
          />
        </div>
        <div className="pt-4">
          <div className="flex items-center space-x-3 text-sm" style={{ color: '#E3C567' }}>
            <div className="w-8 h-px" style={{ backgroundColor: '#E3C567' }}></div>
            <span>{post.category}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
          </div>
          <div className="mt-2">
              <h2 className={`font-bold text-white ${titleSize}`}>{post.title}</h2>
              <p className={`mt-2 text-gray-300 ${descriptionSize}`}>{post.description}</p>
          </div>
        </div>
      </a>
      <div className="mt-4">
        <a href="#" className="font-semibold transition-colors duration-200" style={{ color: '#C8963E' }} onMouseOver={e => e.currentTarget.style.color='#E3C567'} onMouseOut={e => e.currentTarget.style.color='#C8963E'}>
          Baca Selengkapnya &rarr;
        </a>
      </div>
    </div>
  )
};


const BlogSection = () => {
  const featuredPosts = blogPostsData.filter(post => post.isFeatured);
  const recentPosts = blogPostsData.filter(post => !post.isFeatured);

  return (
    // Updated with the new color palette
    <div style={{ backgroundColor: '#070c0aff' }} className="font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="py-10 md:py-18 text-center border-b" style={{ borderColor: '#ffffffff' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto">
            Karuna Jurnal
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Wawasan dan cerita inspiratif dari program lingkungan kami untuk masa depan yang lebih lestari.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-16">
            
            {/* Left Column: Featured Posts */}
            <div className="flex flex-col space-y-16">
              <h2 className="text-2xl font-bold text-white">Unggulan</h2>
              <div className="flex flex-col space-y-12">
                {featuredPosts.map(post => (
                  <PostCard key={post.id} post={post} isFeatured />
                ))}
              </div>
            </div>

            {/* Right Column: Recent Posts */}
            <div className="flex flex-col space-y-16">
               <h2 className="text-2xl font-bold text-white">Terbaru</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {recentPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

