import { BiChevronRight } from "react-icons/bi";
import { FaEarthAsia } from "react-icons/fa6";

export default function Border3(): JSX.Element {
  return (
    <div className="relative py-20 bg-gradient-to-br from-green-200 to-white overflow-hidden transition-all duration-700 ease-in-out animate-fade-in">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-green-100 opacity-60 animate-pulse" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full -mt-32 -ml-32 opacity-30 blur-xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full -mb-48 -mr-48 opacity-30 blur-xl" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-green-300 rounded-full opacity-50 animate-bounce-slow" />
      <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-green-400 rounded-full opacity-50 animate-bounce-slow delay-300" />
      
      {/* Content */}
      <article className="flex mx-auto p-4 gap-2 h-full max-w-[95vw]">
        <div className="flex flex-col gap-2 w-full md:w-1/2 ">
          <div className="relative aspect-square overflow-hidden flex-1">
            <img
              src="/index/discover1.jpg"
              alt="Top left discover image"
              className="absolute w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black rounded-md opacity-50 backdrop-blur-lg"></div>
            <div className="ml-3 h-full relative z-10 flex flex-col items-start justify-around gap-2 p-4 text-white">
              <FaEarthAsia size={30} />
              <div>
                <h2 className=" text-3xl">
                  Explore more to get your comfort zone.
                </h2>
                <h4 className="text-xl font-light">
                  Book your perfect stay with us
                </h4>
              </div>
              <button className="flex items-center px-4 py-2 text-black bg-white rounded-md shadow-md">
                Gabung dengan kami <BiChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden flex-1">
            <img
              src="/index/discover2.jpg"
              alt="Bottom left discover image"
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>
            <div className="ml-6 text-white flex items-end h-full">
              <div className="relative z-10">
                <h3 className="mb-1 text-3xl font-semibold">Reviewed By</h3>
                <h1 className="mb-8 text-6xl font-bold">1000+ Users</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden w-full md:w-1/2">
          <img
            src="/index/discover3.jpg"
            alt="Right discover image"
            className="absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="h-full w-full flex items-center justify-center text-center text-white relative z-10">
            <h1 className="font-semibold text-4xl">
              Beyond accommodation, creating
              <br />
              memories after life
            </h1>
          </div>
        </div>
      </article>
    </div>
  );
}
