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

const reviewImages = ["/programs/autumn.jpeg", "#", "#", "#", "#", "#"];

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
  const currentReview = userEaseReviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, userEaseReviews.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="space-y-8">
          <div className="relative pt-2 pb-8 flex flex-col md:flex-row h-full max-w-7xl mx-auto justify-center px-6">
            <h1 className="text-black font-bold text-5xl md:text-7xl max-w-2xl mb-2 md:mb-0 leading-tight text-center">
              Testimoni &{" "}
              <span className="text-green-600 relative">Penerima Manfaat</span>
            </h1>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-4">
            {reviewImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Penerima Manfaat ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
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

          {/* Testimonial Indicator */}
          <div className="flex justify-center gap-2">
            {userEaseReviews.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-green-500"
                    : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
