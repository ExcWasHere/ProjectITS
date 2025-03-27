import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Kegiatan Sosial Bantu Korban Bencana",
    description: "Yayasan kami melakukan aksi tanggap darurat untuk membantu korban bencana alam di daerah terpencil.",
    imageUrl: "#",
    link: "/korban-bencana"
  },
  {
    id: 2,
    title: "Program Beasiswa Pendidikan",
    description: "Membuka kesempatan bagi pelajar berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan.",
    imageUrl: "#",
    link: "/beasiswa-pendidikan"
  },
  {
    id: 3,
    title: "Launching Program Kesehatan Masyarakat",
    description: "Memperkenalkan program pemeriksaan kesehatan gratis bagi warga di wilayah terpencil.",
    imageUrl: "#",
    link: "/kesehatan-masyarakat"
  },
  {
    id: 4,
    title: "Rehabilitasi Hutan Mangrove",
    description: "Upaya pelestarian ekosistem mangrove dan pemberdayaan masyarakat pesisir.",
    imageUrl: "#",
    link: "#"
  },
  {
    id: 5,
    title: "Pemberdayaan UMKM Lokal",
    description: "Program pendampingan dan pelatihan untuk pengusaha kecil di daerah tertinggal.",
    imageUrl: "#",
    link: "#"
  },
  {
    id: 6,
    title: "Edukasi Lingkungan Hidup",
    description: "Sosialisasi pentingnya pelestarian lingkungan dan praktik ramah lingkungan.",
    imageUrl: "#",
    link: "#"
  }
];

const NewsCarousel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth space-x-4 md:space-x-6 pb-4 md:pb-6 w-full"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory'
          }}
        >
          {newsData.map((news) => (
            <motion.div
              key={news.id}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col h-full bg-white border-2 border-green-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-40 md:h-48 w-full">
                  <img 
                    src={news.imageUrl === "#" ? "/api/placeholder/400/250" : news.imageUrl} 
                    alt={news.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-30 hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="flex flex-col flex-grow p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-900 flex-grow">
                    {news.title}
                  </h3>
                  <p className="text-sm md:text-base text-green-700 mb-4 flex-grow">
                    {news.description}
                  </p>
                  <motion.a
                    href={news.link}
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors self-start mt-auto text-sm md:text-base"
                  >
                    Baca Selengkapnya
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;