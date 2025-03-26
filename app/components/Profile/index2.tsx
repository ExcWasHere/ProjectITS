import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export default function Index2(): JSX.Element {
  const divisionData = [
    {
      id: 'pendiri',
      title: 'Pendiri dan Pembina',
      description: 'Pendiri dan Pembina Yayasan Manarul Ilmi ITS',
      backgroundColor: 'bg-white',
    },
    {
      id: 'pengawas',
      title: 'Dewan Pengawas Yayasan',
      description: 'Periode 2025 - 2030',
      backgroundColor: 'bg-white',
    },
    {
      id: 'pengurus',
      title: 'Pengurus Yayasan',
      description: 'Pengurus Yayasan Manarul Ilmi ITS periode 2025 - 2030',
      backgroundColor: 'bg-white',
    }
  ];

  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardClick = (divisionId: string) => {
    navigate(`/${divisionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-black">
      {/* Hero Section */}
    <div className="relative pt-16 pb-24 flex flex-col md:flex-row h-full max-w-7xl mx-auto justify-between px-6">
      <h1 className="text-black font-bold text-5xl md:text-7xl max-w-2xl mb-8 md:mb-0 leading-tight text-right ml-auto">
        Struktur <br />
        <span className="text-green-600 relative">
        Organisasi
        </span>
      </h1>
    </div>

      {/* Division Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {divisionData.map((division) => (
          <button 
            key={division.id}
            className={`
              ${division.backgroundColor} 
              rounded-2xl 
              p-6 
              shadow-lg 
              transform 
              transition-all 
              duration-300 
              hover:scale-105 
              hover:shadow-2xl 
              cursor-pointer 
              relative 
              overflow-hidden
              text-left
              w-full
              ${hoveredCard === division.id ? 'border-2 border-green-500' : ''}
            `}
            onClick={() => handleCardClick(division.id)}
            onMouseEnter={() => setHoveredCard(division.id)}
            onMouseLeave={() => setHoveredCard(null)}
            aria-label={`View ${division.title}`}
          >
            <div className="flex justify-between items-center">
              <div className="text-5xl mb-4">{division.icon}</div>
              <ChevronRightIcon 
                className={`
                  absolute 
                  top-4 
                  right-4 
                  text-gray-500 
                  transition-transform 
                  duration-300 
                  ${hoveredCard === division.id ? 'translate-x-1' : ''}
                `} 
              />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {division.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {division.description}
            </p>
            <div 
              className={`
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-1 
                transition-all 
                duration-300 
                ${hoveredCard === division.id ? 'bg-green-500 h-2' : 'bg-gray-200'}
              `}
            />
          </button>
        ))}
      </div>
    </div>
  );
}