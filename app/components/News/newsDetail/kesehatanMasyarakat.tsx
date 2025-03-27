import { Link } from 'react-router-dom';
import { ArrowLeft, HeartHandshake } from 'lucide-react';
import { useState } from 'react';

export default function KesehatanMasyarakatNews(): JSX.Element {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const programImages = [
    '#',
    '#',
    '#'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 text-black">
      {/* Hero Section */}
      <div className="relative pt-12 pb-16 md:pt-16 md:pb-24 flex flex-col items-center h-full max-w-7xl mx-auto justify-center px-4 md:px-6">
        <h1 className="text-center text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-2xl mb-6 md:mb-8 leading-tight">
          Launching Program Kesehatan
          <span className="text-green-600 relative block text-center">
            Masyarakat
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-green-200/50"></span>
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-16">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center px-4 md:px-6 space-y-8 md:space-y-0">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-amber-200 rounded-full blur-sm"></div>
              <img
                src="#"
                alt="Penulis"
                className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="ml-4 sm:ml-6 flex flex-col">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900">
                Bambang Pamungkas
              </h3>
              <p className="font-medium text-sm sm:text-base text-amber-600">Penulis</p>
            </div>
          </div>
          <div className="md:ml-12">
            <blockquote className="max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 text-center md:text-left">
              &ldquo;Memperkenalkan program pemeriksaan kesehatan gratis bagi warga di wilayah terpencil.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Section Foto */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
            {programImages.map((image, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={image} 
                    alt={`Program Kesehatan ${index + 1}`} 
                    className={`w-full h-full object-cover transition-all duration-300 
                      ${hoveredImage === index ? 'scale-110 brightness-75' : 'scale-100 brightness-100'}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/news"
              className="flex items-center justify-center bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Kembali
            </Link>
            <a 
              href="https://www.itsedekah.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <HeartHandshake className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Donasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}