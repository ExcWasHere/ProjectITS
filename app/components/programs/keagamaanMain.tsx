import { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';

interface BentukKegiatan {
  id: number;
  title: string;
  subtitle: string;
  buttonLink?: string;
}

const featureList: BentukKegiatan[] = [
  {
    id: 1,
    title: "Pemakmuran Masjid Manarul Ilmi ITS",
    subtitle:
      "Kami mendukung program ini melalui penyaluran dana infaq secara rutin ke rekening Masjid Manarul Ilmi ITS.",
  },
  {
    id: 2,
    title: "Rumah Tahfidz YMI ITS",
    subtitle:
      "Program ini berupa pembinaan Tahfidz Al Quran 30 Juz khusus untuk mahasiswa ITS, melalui hunian yang nyaman, air bersih, pemenuhan makanan tiap hari, serta bimbingan untuk mahasiswa agar memperoleh hafalan 30 Juz selama 3 tahun.",
  },
  {
    id: 3,
    title: "Ingin menyalurkan donasi lewat program kami?",
    subtitle: "Donasi Sekarang!",
    buttonLink: "https://www.itsedekah.id/",
  },
];

const KegiatanCard = ({ feature }: { feature: BentukKegiatan }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative transform transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        bg-white rounded-xl p-8 hover:scale-105 hover:-translate-y-2 hover:shadow-lg`}
    >
      <div className="absolute inset-5 bg-green-100 rounded-xl transform rotate-[1deg]"></div>
      <div className="relative bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 tracking-tight mb-4">
          {feature.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          {feature.subtitle}
        </p>

        {feature.buttonLink && (
          <a 
            href={feature.buttonLink} 
            className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg 
            hover:bg-green-700 transition-colors duration-300 text-center"
          >
            Donasi Sekarang
          </a>
        )}
      </div>
    </div>
  );
};

const PhotoCard = ({ src, title }: { src: string; title: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative transform transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:-translate-y-2`}
    >
      <img 
        src={src} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4 bg-white">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
    </div>
  );
};

export default function IndexFeatures(): JSX.Element {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDescriptionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 relative">
      <div className="container mx-auto px-4 py-16 w-[90vw]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <p 
            ref={descriptionRef}
            className={`max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed 
              font-light italic transition-all duration-1000 ease-out
              ${isDescriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Memperbanyak jumlah penghafal quran dan membantu penyediaan sarana ibadah sehingga dapat menunjang kegiatan keagamaan, menambah wawasan, dan pengetahuan keagamaan mahasiswa ITS.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Program <br />
            <span className="text-green-600">Keagamaan</span>
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <KegiatanCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Dokumentasi Kegiatan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PhotoCard 
              src="/api/placeholder/400/300" 
              title="Kegiatan Tahfidz" 
            />
            <PhotoCard 
              src="/api/placeholder/400/300" 
              title="Pembinaan Masjid" 
            />
            <PhotoCard 
              src="/api/placeholder/400/300" 
              title="Edukasi Keagamaan" 
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-16 flex justify-center">
          <a 
            href="/programs" 
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden 
            bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 
            transition-all duration-300 ease-in-out transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <ArrowLeftIcon 
              className="mr-2 transition-transform duration-300 
              group-hover:-translate-x-1 w-5 h-5"
            />
            <span className="relative z-10 text-lg font-semibold">
              Kembali
            </span>
            <span 
              className="absolute inset-0 bg-green-700 opacity-0 
              group-hover:opacity-10 transition-opacity duration-300"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
}