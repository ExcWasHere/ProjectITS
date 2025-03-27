const NewsHero = () => {
  return (
    <div className="relative h-[30vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/programs/autumn.jpeg"
        alt="Yayasan Manarul Ilmi ITS Background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      />
      {/* Content */}
      <div className="relative mt-5 z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg text-center">
          News &
          <span className="text-green-500 ml-2 sm:ml-3">Article YMI</span>
        </h1>
        <div className="h-1 w-24 sm:w-32 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default NewsHero;