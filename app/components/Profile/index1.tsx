export default function Index1(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 text-black">
      {/* Hero Section */}
      <div className="relative pt-16 pb-24 flex flex-col md:flex-row h-full max-w-7xl mx-auto justify-between px-6">
        <h1 className="text-black font-bold text-5xl md:text-7xl max-w-2xl mb-8 md:mb-0 leading-tight">
          Yayasan <br /> Manarul{" "}
          <span className="text-green-600 relative">
            Ilmi
            <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/50"></span>
          </span>
        </h1>
        <div className="flex flex-col space-y-12 w-full md:w-[60%]">
          <h2 className="text-gray-700 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-justify">
            Yayasan Manarul Ilmi ITS (YMI ITS) didirikan pada tahun 2019 oleh rektor Institut Teknologi Sepuluh Nopember (ITS) pada masa periodenya untuk mengelola dana zakat, infaq, sedekah, wakaf (ZISWAF fokusnya pada kegiatan keagamaan, sosial, pendidikan, keutamaan wakaf). Sejak berdiri, YMI ITS berkomitmen untuk mengelola dana secara profesional dan memberikan manfaat bagi ITS dan masyarakat. Laporan ini, kami akan menyoroti perjalanan, pencapaian, dan dampak positif selama enam tahun terakhir.
          </h2>
          
          {/* Visi Misi Cards Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-amber-100 
              transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl 
              hover:border-amber-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4 transition-colors duration-300 group-hover:text-amber-700">Visi</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
              Menjadi lembaga yang mampu memberikan manfaat besar bagi ITS dan masyarakat dengan pengelolaan yang terpercaya dan profesional
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 border border-green-100 
              transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl 
              hover:border-green-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 transition-colors duration-300 group-hover:text-green-700">Misi</h3>
              <ol className="text-gray-700 list-decimal pl-5 space-y-2 leading-relaxed">
             <li>Menjalankan program-program penyaluran dan pemberdayaan untuk memperbanyak penerima manfaat</li>
             <li>Menghimpun dan melakukan penyaluran dana umat secara amanah, efektif, dan efisien</li>
             <li>Mengelola aset dengan konservatif dan piawai</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}