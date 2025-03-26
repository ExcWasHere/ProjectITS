import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  LucideIcon,
} from "lucide-react";

interface UserReview {
  id: string;
  Name: string;
  jobStatus: string;
  content: string;
  verifiedUser: boolean;
}

const userEaseReviews: UserReview[] = [
  {
    id: "ae001",
    Name: "Lulu Salsabila",
    jobStatus: "Mahasiswa Prodi Teknik Fisika '2022",
    content:
      "Terima kasih untuk YMI ITS sudah memberikan beasiswa kepada kami.  Semoga program ini dapat berjalan terus menerus dan memberi lebih untuk yang membutuhkan.",
    verifiedUser: true,
  },
  {
    id: "ae002",
    Name: "Sri Murtini",
    jobStatus: "Kades Kalurahan Purwosari, Jogja",
    content:
      "Terima kasih sudah memberikan bantuan sumur bor, kini masyarakat tidak perlu khawatir air bersih dan kembali semangat bertani.",
    verifiedUser: true,
  },
];

const reviewImages = [
  "#",
  "#",
  "#"
];

interface NavigationButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: LucideIcon;
}
const NavigationButton = ({
  onClick,
  disabled,
  icon: Icon,
}: NavigationButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-full transition-all duration-200 
      ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 shadow-sm hover:shadow"
      } border border-gray-200`}
  >
    <Icon className="w-5 h-5" />
  </button>
);

export default function IndexReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentReview = userEaseReviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, userEaseReviews.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleImageNext = () => {
    setCurrentImageIndex((prev) => Math.min(prev + 1, reviewImages.length - 1));
  };

  const handleImagePrevious = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Penerima Manfaat <span className="text-green-600">& Testimoni</span>
              </h1>
              <p className="text-lg text-gray-600">
                Pengalaman nyata dari penerima bantuan dan manfaat yang sudah diberikan oleh YMI ITS.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {currentReview.jobStatus}
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  {currentReview.content}
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {currentReview.Name}
                        </h3>
                        {currentReview.verifiedUser && (
                          <BadgeCheck className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <NavigationButton
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        icon={ChevronLeft}
                      />
                      <NavigationButton
                        onClick={handleNext}
                        disabled={currentIndex === userEaseReviews.length - 1}
                        icon={ChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white relative">
              <img
                src={reviewImages[currentImageIndex]}
                alt="Penerima Manfaat"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                <NavigationButton
                  onClick={handleImagePrevious}
                  disabled={currentImageIndex === 0}
                  icon={ChevronLeft}
                />
                <NavigationButton
                  onClick={handleImageNext}
                  disabled={currentImageIndex === reviewImages.length - 1}
                  icon={ChevronRight}
                />
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-green-50 to-yellow-50 blur-3xl opacity-30 rounded-full transform translate-x-8 translate-y-8" />

            <div className="mt-4 flex justify-center gap-2">
              {reviewImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "w-8 bg-green-500" : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {userEaseReviews.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-green-500" : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}