import { BiChevronRight } from "react-icons/bi";
import { FaEarthAsia } from "react-icons/fa6";

export default function Border3(): JSX.Element {
  return (
    <div className="max-h-fit mx-auto bg-white">
      <article className="flex mx-auto p-4 gap-2 h-full max-w-[95vw]">
        <div className="flex flex-col gap-2 w-full md:w-1/2 ">
          <div className="relative aspect-square overflow-hidden flex-1">
            <img
              src="#"
              alt="Top left discover image"
              className="absolute w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black rounded-md opacity-50 backdrop-blur-lg"></div>
            <div className="ml-3 h-full relative z-10 flex flex-col items-start justify-around gap-2 p-4 text-white">
              <FaEarthAsia size={30} />
              <div>
                <h2 className=" text-3xl">
                  Penerima Manfaat
                </h2>
                <h4 className="text-xl font-light">
                  87.480
                </h4>
              </div>
              <a href="https://www.itsedekah.id" className="inline-block">
                <button className="flex items-center px-4 py-2 text-black bg-white rounded-md shadow-md">
                  Donasi Sekarang <BiChevronRight size={20} />
                </button>
              </a>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden flex-1">
            <img
              src="#"
              alt="Bottom left discover image"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>
            <div className="ml-6 text-white flex items-end h-full">
              <div className="relative z-10">
                <h3 className="mb-1 text-3xl font-semibold">Foto </h3>
                <h1 className="mb-8 text-6xl font-bold">Kegiatan</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden w-full md:w-1/2">
          <img
            src="#"
            alt="Right discover image"
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="h-full w-full flex items-center justify-center text-center text-white relative z-10">
            <h1 className="font-semibold text-4xl">
              Foto
              <br />
              Grafik Laporan
            </h1>
          </div>
        </div>
      </article>
    </div>
  );
}
