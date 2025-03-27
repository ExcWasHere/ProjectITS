import { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon } from 'lucide-react';

interface WakafProgramDetails {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  buttonLink?: string;
}

const wakafProgramList: WakafProgramDetails[] = [
  {
    id: 1,
    title: "Wakaf Produktif",
    description: 
      "Wakaf produktif adalah skema pengelolaan donasi wakaf dari umat, yaitu dengan memproduktifkan dana tersebut sehingga mampu memberikan bagi hasil yang berkelanjutan. Bagi hasil tersebut dipergunakan untuk bantuan biaya pendidikan mahasiswa ITS, menciptakan siklus pemberdayaan yang berkelanjutan.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 2,
    title: "Wakaf Air Bersih",
    description: 
      "Program wakaf air bersih bertujuan menyelesaikan krisis air bersih di Indonesia melalui pembangunan sumur bor dan pipanisasi. Hingga saat ini, kami telah melaksanakan proyek di berbagai wilayah, termasuk Kalimantan Timur, Sulawesi Utara, NTT, NTB, Jawa Timur, DIY, dan Jawa Tengah.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  },
  {
    id: 3,
    title: "Wakaf Desain",
    description: 
      "Wakaf desain merupakan kolaborasi YMI ITS dengan Alumni Arsitektur ITS untuk menyediakan desain bangunan sosial dan keagamaan. Kami fokus pada perancangan fasilitas penting seperti Masjid, Pondok Pesantren, Rumah Tahfidz, dan Rumah Sakit, yang bertujuan memberikan solusi arsitektur berkelanjutan.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/"
  }
];

const WakafProgramSection = ({ program, isReverse }: { program: WakafProgramDetails, isReverse?: boolean }) => {
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

export default function WakafPrograms(): JSX.Element {
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
            Program <span className="text-green-600">Wakaf</span>
          </h1>
          <p 
            ref={descriptionRef}
            className={`max-w-3xl mx-auto text-base md:text-xl text-gray-600 leading-relaxed 
              transition-all duration-1000 ease-out
              ${isDescriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Membantu mengabadikan amal umat dengan memberikan harapan kepada yang membutuhkan, melalui berbagai inisiatif wakaf produktif dan berkelanjutan.
          </p>
        </div>

        {wakafProgramList.map((program, index) => (
          <WakafProgramSection 
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