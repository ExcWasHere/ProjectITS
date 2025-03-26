import { Link } from '@remix-run/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const newsData = [
  {
    id: 1,
    title: "Kegiatan Sosial Bantu Korban Bencana",
    description: "Yayasan kami melakukan aksi tanggap darurat untuk membantu korban bencana alam di daerah terpencil.",
    imageUrl: "#",
    link: "/news"
  },
  {
    id: 2,
    title: "Program Beasiswa Pendidikan",
    description: "Membuka kesempatan bagi pelajar berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan.",
    imageUrl: "#",
    link: "/news"
  },
  {
    id: 3,
    title: "Launching Program Kesehatan Masyarakat",
    description: "Memperkenalkan program pemeriksaan kesehatan gratis bagi warga di wilayah terpencil.",
    imageUrl: "#",
    link: "/news"
  }
];

const AnimatedTitle = () => {
  const letters = "HOT NEWS YMI".split("");

  return (
    <h2 className="text-4xl font-extrabold text-center mb-8 text-green-600 relative">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            delay: index * 0.1,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
};

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const NewsCard = ({ news }: { news: NewsItem }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50 
      }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white border-2 border-green-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link to={news.link}>
        <div className="relative">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-green-900 opacity-30 hover:opacity-20 transition-opacity"></div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold mb-2 text-green-900">
            {news.title}
          </h3>
          <p className="text-green-700 mb-4">
            {news.description}
          </p>
          <motion.div
            whileHover={{ x: 10 }}
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            Baca Selengkapnya
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const HotNewsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedTitle />
        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        
        {/* New Button */}
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://www.itsedekah.id/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(22, 163, 74, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-600 text-white font-bold rounded-full 
            hover:bg-green-700 transition-all duration-300 
            flex items-center space-x-2 
            transform hover:translate-x-1 hover:-translate-y-1"
          >
            <span>Donasi Sekarang</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HotNewsSection;