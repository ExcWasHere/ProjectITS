import { useState, useEffect, useRef } from "react";
import { ArrowLeftIcon } from "lucide-react";

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
    title: "Tanggap Darurat & Recovery Pasca Bencana",
    description:
      "YMI ITS dan Tim Tanggap Bencana ITS menunjukkan komitmen kemanusiaan yang kuat melalui respon cepat terhadap bencana alam di Indonesia. Tim relawan telah mengunjungi dan memberikan bantuan di 15 daerah bencana, termasuk Luwu Utara, Sukabumi, Kalimantan Selatan, Sulawesi Selatan, Sulawesi Barat, Nganjuk, Jombang, Lumajang, Batu Malang, Malang, Pasaman, Blitar, dan Trenggalek. Fokus utama program ini adalah memberikan bantuan darurat, mendukung proses pemulihan, dan membantu masyarakat pulih dari dampak bencana alam.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/",
  },
  {
    id: 2,
    title: "Peduli Kemanusiaan Palestina",
    description:
      "Sebagai bentuk solidaritas kemanusiaan, YMI ITS mengirimkan bantuan kemanusiaan ke daerah konflik di Palestina. Program ini bertujuan memberikan dukungan konkret kepada saudara muslim yang mengalami penderitaan akibat konflik berkepanjangan. Bantuan mencakup kebutuhan dasar, bantuan medis, dan dukungan psikologis untuk mereka yang terkena dampak langsung dari situasi kemanusiaan yang tragis.",
    imageSrc: "/api/placeholder/400/300",
    buttonLink: "https://www.itsedekah.id/",
  },
];

const ProgramSection = ({
  program,
  isReverse,
}: {
  program: ProgramDetails;
  isReverse?: boolean;
}) => {
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
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isReverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={program.imageSrc}
          alt={program.title}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
          {program.title}
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {program.description}
        </p>
        {program.buttonLink && (
          <a
            href={program.buttonLink}
            className="inline-block mt-4 px-6 md:px-8 py-2 md:py-3 bg-green-600 text-white rounded-lg 
            hover:bg-green-700 transition-colors duration-300 text-center text-sm md:text-base"
          >
            Donasi Sekarang
          </a>
        )}
      </div>
    </div>
  );
};

export default function KemanusiaanPrograms(): JSX.Element {
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
            Program <span className="text-green-600">Kemanusiaan</span>
          </h1>
          <p
            ref={descriptionRef}
            className={`max-w-3xl mx-auto text-base md:text-xl text-gray-600 leading-relaxed 
              transition-all duration-1000 ease-out
              ${
                isDescriptionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            Membantu korban bencana agar segera pulih dan dapat menjalankan
            aktivitas secara normal kembali, serta memberikan dukungan
            kemanusiaan di daerah konflik.
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
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm md:text-base"
          >
            <ArrowLeftIcon
              className="mr-2 transition-transform duration-300 
              group-hover:-translate-x-1 w-4 md:w-5 h-4 md:h-5"
            />
            <span className="relative z-10 font-semibold">Kembali</span>
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
