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
    title: "Beasiswa Pendidikan Dhuafa",
    description: 
      "Beasiswa ini diberikan kepada mahasiswa ITS yang memiliki keterbatasan ekonomi sehingga tidak bisa membayar UKT. Program ini fokus membantu mahasiswa dengan kebutuhan yang sangat mendesak, memastikan mereka dapat melanjutkan pendidikan tinggi meskipun menghadapi tantangan ekonomi.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 2,
    title: "Beasiswa Pendidikan Guru Tahfidz",
    description: 
      "Beasiswa khusus diberikan kepada ustadzah pendamping rumah tahfidz putri untuk menempuh pendidikan di perguruan tinggi. Program ini bertujuan mendukung pengembangan profesional para pendidik yang berdedikasi, membantu mereka mencapai potensi akademik dan profesional mereka.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 3,
    title: "Beasiswa Pendidikan OTA Yatim",
    description: 
      "Beasiswa pendidikan yang dikhususkan untuk anak tendik/dosen ITS yang yatim, mahasiswa ITS yatim, serta anak-anak yatim dhuafa di sekitar ITS. Program ini memberikan dukungan komprehensif untuk membantu mereka yang kehilangan orang tua untuk tetap dapat melanjutkan pendidikan.",
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
      className={`flex items-center justify-between py-16 space-x-12 
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isReverse ? 'flex-row-reverse' : ''}`}
    >
      <div className="w-1/2">
        <img 
          src={program.imageSrc} 
          alt={program.title} 
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-green-800 mb-4">{program.title}</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {program.description}
        </p>
        {program.buttonLink && (
          <a 
            href={program.buttonLink} 
            className="inline-block mt-4 px-8 py-3 bg-green-600 text-white rounded-lg 
            hover:bg-green-700 transition-colors duration-300 text-center"
          >
            Donasi Sekarang
          </a>
        )}
      </div>
    </div>
  );
};

export default function PendidikanPrograms(): JSX.Element {
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
      <div className="container mx-auto px-16 py-16">
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Program <span className="text-green-600">Pendidikan</span>
          </h1>
          <p 
            ref={descriptionRef}
            className={`max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed 
              transition-all duration-1000 ease-out
              ${isDescriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Membantu biaya pendidikan bagi keluarga yang kurang mampu maupun keluarga terdampak bencana, memberikan kesempatan untuk mengakses pendidikan tinggi.
          </p>
        </div>

        {programList.map((program, index) => (
          <ProgramSection 
            key={program.id} 
            program={program} 
            isReverse={index % 2 !== 0} 
          />
        ))}

        <div className="mt-16 flex justify-center">
          <a 
            href="/" 
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