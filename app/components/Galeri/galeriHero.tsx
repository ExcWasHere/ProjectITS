const GaleriHero = () => {
  return (
    <div className="relative h-[40vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/programs/autumn.jpeg"
        alt="Yayasan Manarul Ilmi ITS Background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      />
      {/* Content */}
      <div className="relative mt-5 z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Galeri 
          <span className="text-green-500 ml-3">YMI</span>
        </h1>
        <p className="text-xl md:text-2xl mb-5 text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Dokumentasi Perjalanan Pemberdayaan dan Kepedulian Yayasan Manarul Ilmi ITS
        </p>
        <div className="h-1 w-32 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default GaleriHero;