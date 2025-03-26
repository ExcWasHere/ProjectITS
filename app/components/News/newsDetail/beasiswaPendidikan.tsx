import { Link } from 'react-router-dom';
import { ArrowLeft, HeartHandshake } from 'lucide-react';
import { useState } from 'react';

export default function BeasiswaPendidikanNews(): JSX.Element {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const programImages = [
    '/programs/autumn.jpeg',
    '/index/hero.jpg',
    '/programs/spring.jpeg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 text-black">
      {/* Hero Section */}
      <div className="relative pt-16 pb-24 flex flex-col items-center h-full max-w-7xl mx-auto justify-center px-6">
        <h1 className="text-center text-black font-bold text-5xl md:text-7xl max-w-2xl mb-8 md:mb-0 leading-tight">
          Program Beasiswa
          <span className="text-green-600 relative block text-center">
            Pendidikan
            <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/50"></span>
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center px-6 space-y-8 md:space-y-0">
          <div className="flex items-center mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-amber-200 rounded-full blur-sm"></div>
              <img
                src="#"
                alt="Penulis"
                className="relative w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="ml-6 flex flex-col">
              <h3 className="font-bold text-xl md:text-2xl text-gray-900">
                Bambang Pamungkas
              </h3>
              <p className="font-medium text-amber-600">Penulis</p>
            </div>
          </div>
          <div className="md:ml-12">
            <blockquote className="max-w-3xl text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              &ldquo;Membuka kesempatan bagi pelajar berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Section Foto */}
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <div className="grid grid-cols-3 gap-6 mb-8">
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
                    alt={`Beasiswa Pendidikan ${index + 1}`} 
                    className={`w-full h-full object-cover transition-all duration-300 
                      ${hoveredImage === index ? 'scale-110 brightness-75' : 'scale-100 brightness-100'}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tombol */}
          <div className="flex justify-center space-x-4">
            <Link 
              to="/news"
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="mr-2" />
              Kembali
            </Link>
            <a 
              href="https://www.itsedekah.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <HeartHandshake className="mr-2" />
              Donasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}