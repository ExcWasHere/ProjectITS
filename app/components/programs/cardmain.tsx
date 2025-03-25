import React from 'react';
import Link from 'next/link';
import { Card } from "../ui/card";

// Customized Icons
const KeagamaanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SosialUmatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9l2 2 4-4" />
</svg>
);

const PendidikanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
  </svg>
);

const KemanusiaanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9l2 2 4-4" />
  </svg>
);

const WakafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const DonasiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Existing Card Component remains the same
interface SupportCenterCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const SupportCenterCard: React.FC<SupportCenterCardProps> = ({
  icon,
  title,
  description,
  linkText,
  href
}) => {
  return (
    <Card className="p-6 text-center flex flex-col items-center justify-between h-full bg-gradient-to-b from-green-50 to-white">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
      </div>
      <Link 
        href={href} 
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        {linkText}
      </Link>
    </Card>
  );
};

// Page Component
const ProgramCard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-amber-50 to-white">
      <h1 className="text-4xl font-bold text-center mb-12">Program Yayasan Manarul Ilmi ITS</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <SupportCenterCard 
          icon={<KeagamaanIcon />}
          title="Keagamaan"
          description="Memperbanyak jumlah penghafal quran dan membantu penyediaan sarana ibadah sehingga dapat menunjang kegiatan keagamaan, menambah wawasan, dan pengetahuan keagamaan mahasiswa ITS"
          linkText="View More Details"
          href="/keagamaan"
        />
        
        <SupportCenterCard 
          icon={<SosialUmatIcon />}
          title="Sosial Keumatan"
          description="Membantu memenuhi kebutuhan masyarakat yang kekurangan untuk menunjang keberlangsungan hidup umat"
          linkText="View More Details"
          href="/sosial-keumatan"
        />
        
        <SupportCenterCard 
          icon={<PendidikanIcon />}
          title="Pendidikan"
          description="Membantu biaya pendidikan bagi keluarga yang kurang mampu maupun keluarga terdampak bencana"
          linkText="View More Details"
          href="/pendidikan"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <SupportCenterCard 
          icon={<KemanusiaanIcon />}
          title="Kemanusiaan"
          description="Membantu korban bencana agar segera pulih dan dapat menjalankan aktivitas secara normal kembali"
          linkText="View More Details"
          href="/kemanusiaan"
        />
        
        <SupportCenterCard 
          icon={<WakafIcon />}
          title="Wakaf"
          description="Membantu mengabadikan amal umat dengan memberikan harapan kepada yang membutuhkan"
          linkText="View More Details"
          href="/wakaf"
        />
        
        <SupportCenterCard 
          icon={<DonasiIcon />}
          title="Dukung Kami"
          description="Kami memberikan kesempatan kepada anda untuk berpartisipasi dalam mendukung program-program YMI ITS"
          linkText="Donasi Sekarang"
          href="https://www.itsedekah.id/"
        />
      </div>
    </div>
  );
};

export default ProgramCard;