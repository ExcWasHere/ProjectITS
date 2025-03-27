import { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon } from 'lucide-react';

interface ProgramDetails {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  buttonLink?: string;
}

const programList: ProgramDetails[] = [
  {
    id: 1,
    title: "Program Santunan",
    description: 
      "Program santunan ini berfokus ke permasalahan pemenuhan kebutuhan pokok untuk hidup sehari-hari yang dikemas dalam berbagai bentuk program diantaranya: Bantuan Biaya Hidup, Paket Isoman Dhuafa, Bantuan Covid 19, Santunan Yatim, Sedekah Air minum Kemasan, dan Pembagian Paket Sembako. Kami berkomitmen untuk membantu mereka yang membutuhkan dengan memberikan bantuan yang tepat guna dan berkelanjutan.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 2,
    title: "Program Ramadhan",
    description: 
      "Program Ramadhan berfokus pada support kegiatan Ramadhan di Kampus (RDK) ITS, diantaranya: Buka Puasa, Fidyah, Kado Lebaran, Takjil, Sahur, dan Zakat Fitrah. Kami berupaya untuk memberikan dukungan penuh kepada civitas akademika ITS selama bulan suci Ramadhan, membantu mereka menjalankan ibadah dengan nyaman dan penuh berkah.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 3,
    title: "Program Kesehatan",
    description: 
      "Bidang kesehatan berfokus ke pemberian bantuan pengobatan untuk mahasiswa ITS, tenaga kebersihan masjid yang mengalami sakit keras dan membutuhkan biaya pengobatan yang besar. Selain itu pada pandemi covid 19, YMI turut serta memberikan bantuan berupa pendistribusian masker, pemberian APD dan suplemen kesehatan, penyediaan tabung dan gas oksigen, dan berbagai bentuk dukungan kesehatan lainnya.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 4,
    title: "Program Produktif",
    description: 
      "Bidang Program Produktif memberikan bantuan modal usaha kepada pelaku UMKM diwilayah sekitar ITS. Modal yang diberikan bisa berupa pembelian rombong maupun bahan baku untuk modal awal berjualan. Tujuan kami adalah memberdayakan ekonomi lokal dan membantu pengusaha kecil untuk berkembang.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 5,
    title: "Program Qurban",
    description: 
      "Qurban YMI ITS telah dimulai sejak tahun 2020 dengan perolehan yang terus meningkat: Tahun 2020 7Sapi 1Kambing, Tahun 2021 5Sapi, Tahun 2022 10Sapi 6Kambing 2Domba, Tahun 2023 9Sapi 8Kambing. Kami berkomitmen untuk terus mengembangkan program qurban dan membagikannya kepada masyarakat yang membutuhkan.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  }
];

const ProgramSection = ({ program, isReverse }: { program: ProgramDetails, isReverse?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`flex flex-col md:flex-row items-center justify-between py-8 md:py-16 md:space-x-12 
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isReverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img 
          src={program.imageSrc} 
          alt={program.title} 
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{program.title}</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {program.description}
        </p>
        {program.buttonLink && (
          <a 
            href={program.buttonLink} 
            className="inline-block mt-4 px-6 md:px-8 py-2 md:py-3 bg-green-600 text-white rounded-lg 
            hover:bg-green-700 transition-colors duration-300 text-center"
          >
            Donasi Sekarang
          </a>
        )}
      </div>
    </div>
  );
};

export default function SosialPrograms(): JSX.Element {
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
      <div className="container mx-auto px-4 md:px-16 py-8 md:py-16">
        <div className="mb-12 md:mb-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Program <span className="text-green-600">Sosial Keumatan</span>
          </h1>
          <p 
            ref={descriptionRef}
            className={`max-w-3xl mx-auto text-base md:text-xl text-gray-600 leading-relaxed
              transition-all duration-1000 ease-out
              ${isDescriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Membantu memenuhi kebutuhan masyarakat yang kekurangan untuk menunjang keberlangsungan hidup umat manusia.
          </p>
        </div>

        {programList.map((program, index) => (
          <ProgramSection 
            key={program.id} 
            program={program} 
            isReverse={index % 2 !== 0} 
          />
        ))}

        <div className="mt-8 md:mt-16 flex justify-center">
          <a 
            href="/" 
            className="group relative inline-flex items-center px-6 md:px-8 py-2 md:py-3 overflow-hidden 
            bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 
            transition-all duration-300 ease-in-out transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <ArrowLeftIcon 
              className="mr-2 transition-transform duration-300 
              group-hover:-translate-x-1 w-4 md:w-5 h-4 md:h-5"
            />
            <span className="relative z-10 text-base md:text-lg font-semibold">
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