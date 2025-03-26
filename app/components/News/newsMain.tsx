import React, { useState } from 'react';
import { BookOpen, Hand, Calendar, User, Image, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  fullDescription: string;
  author: string;
  date: string;
  donationLink: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    image: "/api/placeholder/400/250",
    title: "Membantu Pendidikan Anak Desa",
    description: "Program pemberdayaan pendidikan untuk anak-anak di daerah terpencil. Setiap donasi membawa harapan baru.",
    fullDescription: "Program ini bertujuan untuk meningkatkan akses pendidikan bagi anak-anak di daerah terpencil. Kami fokus pada pemberian beasiswa, perbaikan infrastruktur sekolah, dan pengadaan alat-alat belajar. Setiap donasi akan membantu mencerdaskan generasi muda yang memiliki potensi besar namun terbatas akan akses pendidikan.",
    author: "Tim Publikasi",
    date: "15 Maret 2024",
    donationLink: "https://www.itsedekah.id/"
  },
  {
    id: 2,
    image: "/api/placeholder/400/250",
    title: "Rehabilitasi Hutan Mangrove",
    description: "Upaya pelestarian ekosistem mangrove dan pemberdayaan masyarakat pesisir. Mari berkontribusi untuk bumi kita.",
    fullDescription: "Proyek rehabilitasi hutan mangrove ini bertujuan untuk melestarikan ekosistem pesisir, melindungi keanekaragaman hayati, dan memberdayakan masyarakat lokal. Kami melakukan penanaman bibit mangrove, edukasi konservasi, dan pengembangan mata pencaharian alternatif bagi masyarakat sekitar hutan mangrove.",
    author: "Tim Konservasi",
    date: "20 Februari 2024",
    donationLink: "https://www.itsedekah.id/"
  }
];

const NewsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % newsData.length
    );
  };

  const currentNews = newsData[currentIndex];

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-green-50 to-white">
      <div className="relative max-w-md mx-auto">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10">
          <button 
            onClick={goToPrevious}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
          <button 
            onClick={goToNext}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* News Card */}
        <div className="w-full max-w-md mx-auto bg-white border-2 border-green-600 rounded-lg shadow-lg overflow-hidden transition-all duration-300 group">
          {/* Image with enhanced fade-out effect */}
          <div className="relative overflow-hidden">
            <img 
              src={currentNews.image} 
              alt={currentNews.title} 
              className="w-full h-48 object-cover transition-all duration-500 
                group-hover:scale-110 
                group-hover:brightness-75 
                group-hover:contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 
              flex items-end p-4 text-white">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Lihat Detail
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-green-800 mb-2">{currentNews.title}</h3>
            <p className="text-gray-700 mb-4">{currentNews.description}</p>
          </div>

          {/* Buttons */}
          <div className="p-4 bg-green-50 flex flex-col space-y-2">
            <button 
              onClick={() => setIsDetailOpen(true)}
              className="w-full py-2 px-4 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <BookOpen size={20} />
              <span>Detail Berita</span>
            </button>
            <a 
              href={currentNews.donationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Hand size={20} />
              <span>Donasi Sekarang</span>
            </a>
          </div>
        </div>
      </div>

      {/* Detailed News Modal */}
      {isDetailOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">News Detail</h2>
                <button 
                  onClick={() => setIsDetailOpen(false)}
                  className="text-gray-600 hover:text-green-800 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* News Details */}
              <div className="space-y-4">
                {/* Judul */}
                <div>
                  <h3 className="font-bold text-xl text-green-700 flex items-center">
                    <BookOpen className="mr-2 text-green-600" size={20} />
                    Judul
                  </h3>
                  <p className="pl-6">{currentNews.title}</p>
                </div>

                {/* Deskripsi */}
                <div>
                  <h3 className="font-bold text-xl text-green-700 flex items-center">
                    <BookOpen className="mr-2 text-green-600" size={20} />
                    Deskripsi
                  </h3>
                  <p className="pl-6">{currentNews.fullDescription}</p>
                </div>

                {/* Foto */}
                <div>
                  <h3 className="font-bold text-xl text-green-700 flex items-center">
                    <Image className="mr-2 text-green-600" size={20} />
                    Foto
                  </h3>
                  <img 
                    src={currentNews.image} 
                    alt={currentNews.title} 
                    className="w-full rounded-lg mt-2 shadow-md"
                  />
                </div>

                {/* Penulis */}
                <div>
                  <h3 className="font-bold text-xl text-green-700 flex items-center">
                    <User className="mr-2 text-green-600" size={20} />
                    Penulis
                  </h3>
                  <p className="pl-6">{currentNews.author}</p>
                </div>

                {/* Tanggal Terbit */}
                <div>
                  <h3 className="font-bold text-xl text-green-700 flex items-center">
                    <Calendar className="mr-2 text-green-600" size={20} />
                    Tanggal Terbit
                  </h3>
                  <p className="pl-6">{currentNews.date}</p>
                </div>
                <a 
                  href={currentNews.donationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Hand size={20} />
                  <span>Donasi Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;