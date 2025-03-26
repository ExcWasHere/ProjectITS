import { useNavigate } from 'react-router-dom';

const profileList = [
  {
    id: 1,
    Judul: "Rumah Tahfidz YMI ITS",
    Deskripsi: " 49 santri mukim, 82 santri alumni dan 1.421 santri online.",
    image: "#",
    link: "/rumah-tahfidz",
  },
  {
    id: 2,
    Judul: "Santunan Yatim",
    Deskripsi: "-",
    image: "#",
    link: "/santunan-yatim",
  },
  {
    id: 3,
    Judul: "Buka Puasa",
    Deskripsi: "-",
    image: "#",
    link: "/buka-puasa",
  },
  {
    id: 4,
    Judul: "Fidyah",
    Deskripsi: "-",
    image: "#",
    link: "/fidyah",
  },
  {
    id: 5,
    Judul: "Kado Lebaran",
    Deskripsi: "-",
    image: "#",
    link: "/kado-lebaran",
  },
  {
    id: 6,
    Judul: "Qurban",
    Deskripsi: "-",
    image: "#",
    link: "/qurban",
  },
  {
    id: 7,
    Judul: "Bedah Rumah",
    Deskripsi: "-",
    image: "#",
    link: "/bedah-rumah",
  },
  {
    id: 8,
    Judul: "Tanggap Darurat",
    Deskripsi: "-",
    image: "#",
    link: "/tanggap-darurat",
  },
  {
    id: 9,
    Judul: "Wakaf Desain",
    Deskripsi: "-",
    image: "#",
    link: "/wakaf-desain",
  },
  {
    id: 10,
    Judul: "Wakaf Air Bersih",
    Deskripsi: "-",
    image: "#",
    link: "/wakaf-air-bersih",
  },
];

export default function GaleriCard(): JSX.Element {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 to-white py-16">
      <div className="container mx-auto px-4 py-16 max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Galeri
            <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              YMI
            </span>
          </h1>
          <p className="mt-6 text-lg text-white leading-relaxed text-center">
            Hasil dokumentasi kegiatan penyaluran program-program YMI.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileList.map((profile) => (
            <button
              key={profile.id}
              onClick={() => handleCardClick(profile.link)}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(profile.link)}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer w-full text-left"
              role="link"
              tabIndex={0}
            >
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.Judul}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-green-800/80 to-transparent">
                <h1 className="text-2xl font-bold mb-2 text-white text-center">
                  {profile.Judul}
                </h1>
                <h2 className="text-green-100 italic text-center">
                  {profile.Deskripsi}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      </div>
    </div>
  );
}