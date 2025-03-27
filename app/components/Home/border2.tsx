const Border2 = () => {
  return (
    <div className="relative py-10 md:py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-white opacity-60 animate-pulse" />

      {/* Border and Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-6 md:p-10 bg-white border-2 md:border-4 border-green-500 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-100 md:hover:scale-105 transition duration-500 animate-fade-out">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 md:mb-6 drop-shadow-md">
          Sejarah Pendirian YMI
        </h2>
        <p className="text-base md:text-lg text-justify text-gray-700 leading-relaxed px-2 md:px-0">
          Yayasan Manarul Ilmi ITS (YMI ITS) didirikan pada tahun 2019 oleh rektor Institut Teknologi Sepuluh Nopember (ITS) pada masa periodenya untuk mengelola dana zakat, infaq, sedekah, wakaf (ZISWAF fokusnya pada kegiatan keagamaan, sosial, pendidikan, keutamaan wakaf). Sejak berdiri, YMI ITS berkomitmen untuk mengelola dana secara profesional dan memberikan manfaat bagi ITS dan masyarakat. Laporan ini, kami akan menyoroti perjalanan, pencapaian, dan dampak positif selama enam tahun terakhir.
        </p>  
      </div>
    </div>
  );
};

export default Border2;