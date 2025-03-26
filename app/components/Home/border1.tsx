import { useState, useCallback } from "react";

interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

const heroContent: SlideContent[] = [
  {
    id: 1,
    title: "Wakaf Pendidikan",
    subtitle: "Berikan masa depan cerah bagi generasi penerus bangsa dengan investasi abadi untuk ilmu yang bermanfaat",
    category: "Program Kebaikan",
    image: "/border/wakaf.jpg",
  },
  {
    id: 2,
    title: "Wakaf Air Bersih",
    subtitle: "Setetes air dari Anda, segarkan dahaga saudara kita. hadirkan harapan di daerah yang membutuhkan",
    category: "Program Kebaikan",
    image: "/border/index2.jpg",
  },
  {
    id: 3,
    title: "Infaq Rumah Tahfidz",
    subtitle: "Bersama bangun generasi qurani dan pilar kokoh bagi rumah tahfidz, tempat para penghafal Al-Qur'an menimba ilmu",
    category: "Program Kebaikan",
    image: "/border/index3.jpg",
  },
  {
    id: 4,
    title: "Orang Tua Asuh",
    subtitle: "Ulurkan tangan kasih dan bagikan kebahagiaan, jadilah orang tua asuh bagi yatim dan dhuafa",
    category: "Program Kebaikan",
    image: "/border/index1.jpg",
  },
  {
    id: 5,
    title: "Santunan Anak Yatim",
    subtitle: "Ringankan beban dengan santunan menjadi bukti cinta dan kepedulian untuk mereka",
    category: "Program Kebaikan",
    image: "#",
  },
  {
    id: 6,
    title: "Bedah Rumah",
    subtitle: "Wujudkan impian rumah huni yang dipenuhi kehangatan dan kenyamanan bagi mereka yang membutuhkan",
    category: "Program Kebaikan",
    image: "#",
  },
];

interface IndicatorProps {
  isActive: boolean;
  onClick: () => void;
}

const Indicator = ({ isActive, onClick }: IndicatorProps): JSX.Element => (
  <button
    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
      isActive ? "bg-green-500 scale-125" : "bg-gray-300"
    }`}
    onClick={onClick}
  />
);

export default function Border1() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex((prevIndex) => 
        (prevIndex - 1 + heroContent.length) % heroContent.length
      );
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const handleIndicatorClick = (index: number) => {
    if (index === currentPostIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const getPreviousIndex = () =>
    (currentPostIndex - 1 + heroContent.length) % heroContent.length;

  const getNextIndex = () => (currentPostIndex + 1) % heroContent.length;

  return (
    <div className="relative h-[calc(100vh-4rem)] md:h-screen w-full mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E')",
                 backgroundSize: "60px 60px" 
               }}
          />
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-green-100 to-transparent" />
        </div>

        {/* Conditionally render images if they exist */}
        {[getPreviousIndex(), currentPostIndex, getNextIndex()].map(
          (index, i) => 
            heroContent[index].image && heroContent[index].image !== "#" ? (
              <img
                key={`slide-${index}`}
                src={heroContent[index].image}
                className={`absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out ${
                  i === 0
                    ? isAnimating
                      ? "translate-x-full"
                      : "-translate-x-full"
                    : i === 1
                    ? isAnimating
                      ? "translate-x-full"
                      : "translate-x-0"
                    : isAnimating
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
                style={{
                  objectPosition: "center center",
                  filter: "brightness(60%)",
                }}
                alt={heroContent[index].title}
              />
            ) : null
        )}

        {/* Decorative elements if no image is available */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-400 via-transparent to-transparent opacity-10" />

        <div
          className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
            <div>
              <h3 className="inline-block font-semibold mb-4 bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                {heroContent[currentPostIndex].category}
              </h3>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-800">
              {heroContent[currentPostIndex].title}
            </h1>

            <h2 className="text-gray-600 text-xl md:text-2xl mb-8">
              {heroContent[currentPostIndex].subtitle}
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button 
                onClick={prevSlide} 
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all"
              >
                &#10094; {/* Left arrow */}
              </button>

              <div className="flex gap-2">
                {heroContent.map((_, index) => (
                  <Indicator
                    key={index}
                    isActive={index === currentPostIndex}
                    onClick={() => handleIndicatorClick(index)}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide} 
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all"
              >
                &#10095; {/* Right arrow */}
              </button>
            </div>

            <div className="mt-8">
              <a 
                href="https://www.itsedekah.id/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Kepoin Yuk!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}