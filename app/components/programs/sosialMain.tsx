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
    title: "Program Santunan",
    subtitle:
      "Program santunan ini berfokus ke permasalahan pemenuhan kebutuhan pokok untuk hidup sehari-hari yang dikemas dalam berbagai bentuk program diantaranya: Bantuan Biaya Hidup, Paket Isoman Dhuafa, Bantuan Covid 19, Santunan Yatim, Sedekah Air minum Kemasan, dan Pembagian Paket Sembako.",
  },
  {
    id: 2,
    title: "Program Ramadhan",
    subtitle:
      "Program Ramadhan berfokus pada support kegiatan Ramadhan di Kampus (RDK) ITS, diantaranya: Buka Puasa, Fidyah, Kado Lebaran, Takjil, Sahur, dan Zakat Fitrah.",
  },
  {
    id: 3,
    title: "Program Kesehatan",
    subtitle:
      "Bidang kesehatan berfokus ke pemberian bantuan pengobatan untuk mahasiswa ITS, tenaga kebersihan masjid yang mengalami sakit keras dan membutuhkan biaya pengobatan yang besar. Selain itu pada pandemi covid 19, YMI turut serta memberikan bantuan berupa pendistribusian masker, pemberian APD dan suplemen kesehatan, penyediaan tabung dan gas oksigen, dll.",
  },
  {
    id: 4,
    title: "Program Produktif",
    subtitle:
      "Bidang Program Produktif memberikan bantuan modal usaha kepada pelaku UMKM diwilayah sekitar ITS, modal bisa dirupakan pembelian rombong maupun bahan baku untuk modal awal berjualan.",
  },
  {
    id: 5,
    title: "Program Qurban",
    subtitle:
      "Qurban YMI ITS telah dimulai sejak tahun 2020 dengan perolehan: Tahun 2020 7Sapi 1Kambing, Tahun 2021 5Sapi, Tahun 2022 10Sapi 6Kambing 2Domba, Tahun 2023 9Sapi 8Kambing",
  },
  {
    id: 6,
    title: "Program Bedah Rumah",
    subtitle:
      "Program bedah rumah merupakan kolaborasi antara DPR KPP Kota Surabaya dengan YMI ITS untuk membangun kembali rumah dhuafa di Surabaya menjadi rumah yang layak huni dan sehat. Total telah terbangun 3 rumah di wilayah sekitar ITS.",
  },
  {
    id: 7,
    title: "Program Dies Natalis ITS",
    subtitle:
      "YMI ITS turut mensukseskan program Dies Natalis ITS ke 63 melalui program: Khitanan Massal, Donor Darah, dan Penanaman Pohon pada ITS Climate Action.",
  },
  {
    id: 8,
    title: "Program Umroh Gratis",
    subtitle:
      "Bentuk apresiasi dan kesempatan kepada para pengabdi terbaik ITS untuk melaksanakan ibadah umroh secara gratis.",
  },
  {
    id: 9,
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

export default function IndexSosial(): JSX.Element {
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
            Membantu memenuhi kebutuhan masyarakat yang kekurangan untuk menunjang keberlangsungan hidup umat manusia.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Program
            <span className="text-green-600">Sosial Keumatan</span>
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
              title="Program Santunan" 
            />
            <PhotoCard 
              src="/api/placeholder/400/300" 
              title="Program Ramadhan" 
            />
            <PhotoCard 
              src="/api/placeholder/400/300" 
              title="Program Kesehatan" 
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