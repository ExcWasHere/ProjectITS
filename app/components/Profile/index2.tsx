import { useState } from 'react';

export default function Index2(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const roleData = [
    {
      id: 'pembina',
      title: 'Pendiri dan Pembina',
      members: [
        "Prof. Mahmud Zaki, MSc (alm) - Rektor ITS ke-4 (1973-1982)",
        "Ir. Harjono Sigit, B.S, IAI - Rektor ITS ke-5 (1982-1986)",
        "Prof. Ir. Soegono - Rektor ITS ke-7 (1995-2003)",
        "Prof. Dr. Ir. Mohammad Nuh, DEA - Rektor ITS ke-8 (2003-2007)",
        "Prof. Dr. Ir. Priyo Soeprobo M.S, PhD - Rektor ITS ke-9 (2007-2011)",
        "Prof. Dr. Ir. Tri Yogi Yuwono, DEA - Rektor ITS ke-10 (2011-2015)",
        "Prof. Ir. Joni Hermana, M.Sc.ES, PhD - Rektor ITS ke 11 (2015-2019)",
        "Prof. Dr. Soegimin Wahyu Winata - Tokoh Senior ITS",
        "Ir. Hanafi Pratomo (alm) - Tokoh Senior ITS"
      ],
      backgroundColor: 'bg-blue-50'
    },
    {
      id: 'dewan-pengawas',
      title: 'Dewan Pengawas Yayasan 2025-2030',
      members: [
        "Ketua: Ir. Abdullah, M.Si",
        "Anggota: Dr. Ir. Soekartedjo, M.Si",
        "Anggota: Dr. Ir. Tontowi, M.Si",
        "Anggota: Prof. Ir. Achmad Baktir, M. APP",
        "Anggota: Ir. Murdijanto, M.Eng",
        "Anggota: Ir. Sudjud Darsopuspito, MT"
      ],
      backgroundColor: 'bg-green-50'
    },
    {
      id: 'pengurus',
      title: 'Pengurus Yayasan Manarul Ilmi ITS 2025-2030',
      members: [
        "Ketua: Ir. Triyanto",
        "Ketua 1: Adi Dharma, ST, M.MT",
        "Ketua 2: Achmad Syaifoel Ghozi, S.Si",
        "Sekretaris 1: Ir. Arief Wisnu Cahyono, ST",
        "Sekretaris 2: Dr. Ir. Bambang Sampoerno, MT",
        "Bendahara: Arief Abdurrakhman, ST, MT",
        "Bidang Kemahasiswaan: Dr. Orchidea Rachmaniah, ST, MT",
        "Bidang Hubungan Luar Negeri: Prof. Dr. Agung Purniawan, S.T., M.Eng"
      ],
      backgroundColor: 'bg-amber-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-black">
      {/* Header Section with Improved Mobile Responsiveness */}
      <div className="relative pt-8 md:pt-16 pb-4 md:pb-8 flex flex-col md:flex-row h-full max-w-7xl mx-auto justify-between px-4 md:px-6">
        <h1 className="text-black font-bold text-3xl md:text-5xl lg:text-7xl max-w-2xl mb-4 md:mb-0 leading-tight text-center md:text-right ml-auto">
          Struktur{" "}
          <span className="text-green-600 relative">
            Organisasi
          </span>
        </h1>
      </div>

      {/* Single Long Photo with Improved Mobile Responsiveness */}
      <div className="h-[40vh] md:h-[60vh] relative">
        <img 
          src="/programs/autumn.jpeg" 
          alt="Struktur Organisasi Yayasan Manarul Ilmi ITS" 
          className="absolute inset-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Roles Cards Section with Improved Mobile Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 -mt-8 md:-mt-16">
        {roleData.map((role) => (
          <div 
            key={role.id}
            className={`
              ${role.backgroundColor}
              rounded-xl md:rounded-2xl 
              p-4 md:p-6 
              shadow-md md:shadow-lg 
              transform 
              transition-all 
              duration-300 
              hover:-translate-y-2 
              hover:shadow-2xl 
              relative 
              overflow-hidden
              ${hoveredCard === role.id ? 'border-2 border-green-500' : ''}
            `}
            onMouseEnter={() => setHoveredCard(role.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">
              {role.title}
            </h2>
            <div className="space-y-1 md:space-y-2 max-h-48 md:max-h-64 overflow-y-auto">
              {role.members.map((member, index) => (
                <p key={index} className="text-xs md:text-sm text-gray-600">
                  {member}
                </p>
              ))}
            </div>
            <div 
              className={`
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-1 
                transition-all 
                duration-300 
                ${hoveredCard === role.id ? 'bg-green-500 h-2' : 'bg-gray-200'}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}