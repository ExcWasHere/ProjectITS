import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const profileList = [
  {
    id: 1,
    name: "Ir. Triyanto",
    job: "Ketua Umum YMI",
    image: "#",
  },
  {
    id: 2,
    name: "Adi Dharma, ST, M.MT",
    job: "Wakil Ketua 1 YMI",
    image: "#",
  },
  {
    id: 3,
    name: "Achmad Syaifoel Ghozi, S.Si",
    job: "Wakil Ketua 2 YMI",
    image: "#",
  },
  {
    id: 4,
    name: "Ir. Arief Wisnu Cahyono, ST",
    job: "Sekretaris 1 YMI",
    image: "#",
  },
  {
    id: 5,
    name: "Dr. Ir. Bambang Sampoerno, MT",
    job: "Sekretaris 2 YMI",
    image: "#",
  },
  {
    id: 6,
    name: "Arief Abdurrakhman, ST, MT",
    job: "Bendahara YMI",
    image: "#",
  },
  {
    id: 7,
    name: "Dr. Orchidea Rachmaniah, ST, MT",
    job: "Bidang Kemahasiswaan YMI",
    image: "#",
  },
  {
    id: 8,
    name: "Prof. Dr. Agung Purniawan, S.T., M.Eng",
    job: "Bidang Hubungan Luar Negeri YMI",
    image: "#",
  },
];

export default function PengurusTeam(): JSX.Element {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 relative">
      {/* Back Button */}
      <button 
        onClick={handleGoBack}
        className="absolute top-6 left-6 z-50 group flex items-center space-x-2 
        bg-green-50 hover:bg-green-100 text-green-700 
        px-4 py-2 rounded-full shadow-md 
        transition duration-300 ease-in-out 
        transform hover:-translate-x-1 hover:scale-105"
      >
        <ArrowLeft 
          className="text-green-600 group-hover:text-green-800 
          transition duration-300 transform group-hover:-translate-x-0.5" 
          size={24} 
        />
        <span className="font-medium text-green-800 group-hover:text-green-900">
          Kembali
        </span>
      </button>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Pengurus<br />
              <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Yayasan
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Pengurus Yayasan Manarul Ilmi Institut Teknologi Sepuluh Nopember Periode 2025 - 2030.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              <img
                src="#"
                alt="Team"
                className="w-[300px] h-[150px] md:w-[400px] md:h-[200px] object-cover rounded-lg shadow-xl transform rotate-3 transition duration-500 group-hover:rotate-0"
                style={{ objectPosition: "top bottom" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileList.map((profile) => (
            <div
              key={profile.id}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {profile.name}
                </h1>
                <h2 className="mt-2 text-gray-600 italic">{profile.job}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      </div>
    </div>
  );
}