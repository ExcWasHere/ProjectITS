const Border2 = () => {
    return (
      <div className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-white opacity-60 animate-pulse" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full -mt-32 -ml-32 opacity-30 blur-xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full -mb-48 -mr-48 opacity-30 blur-xl" />
  
        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-green-200 rounded-full opacity-50 animate-bounce-slow" />
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-50 animate-bounce-slow delay-300" />
  
        {/* Border and Content */}
        <div className="relative max-w-4xl mx-auto p-10 bg-white border-4 border-green-500 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500">
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6 drop-shadow-md animate-fade-in">
            Sejarah Pendirian YMI
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-slide-in">
          Yayasan Manarul Ilmi ITS (YMI ITS) didirikan pada tahun 2019 oleh rektor Institut Teknologi Sepuluh Nopember (ITS) pada masa periodenya untuk mengelola dana zakat, infaq, sedekah, wakaf (ZISWAF fokusnya pada kegiatan keagamaan, sosial, pendidikan, keutamaan wakaf). Sejak berdiri, YMI ITS berkomitmen untuk mengelola dana secara profesional dan memberikan manfaat bagi ITS dan masyarakat. Laporan ini, kami akan menyoroti perjalanan, pencapaian, dan dampak positif selama enam tahun terakhir.
          </p>  
        </div>
      </div>
    );
  };
  
  export default Border2;
  