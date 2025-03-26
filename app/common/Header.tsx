import { useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const currentPage = useLocation();

  useEffect(() => {
    setIsScrolled(false);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
        return;
      }
      if (scrollPosition === 0) {
        setIsScrolled(false);
      }
      const timeoutId = setTimeout(() => {
        setIsScrolled(true);
      }, 60000);
      return () => clearTimeout(timeoutId);
    };
    window.addEventListener("scroll", handleScroll);

    const path = currentPage.pathname;
    if (path === "/") {
      setActiveItem("Home");
    } else {
      const matchedItem = navItems.find(item => 
        path === `/${item.toLowerCase().replace(/\s+/g, "-")}`
      );
      if (matchedItem) setActiveItem(matchedItem);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage.pathname]);

  const navItems = ["Home", "Profile", "Programs", "Galeri", "News"];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <li key={item}>
          <a
            href={`${
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`
            }`}
            className={`relative overflow-hidden group py-2 px-3 rounded-lg transition-all duration-300 
              ${activeItem === item 
                ? "text-green-500 font-bold" 
                : "hover:text-green-500"}`}
            onClick={() => {
              setActiveItem(item);
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
      ))}
    </>
  );

  return (
    <>
      <div
        className={`w-full top-0 left-0 z-50 fixed h-16 md:h-20 flex justify-between items-center shadow-xl px-4 md:px-10 transition-all duration-500 
          ${isScrolled || isMobileMenuOpen 
            ? "text-gray-800 bg-white shadow-md" 
            : "text-white bg-white/20"
        }`}
      >
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold transition-transform duration-300 hover:scale-105">
            Manarul<span className="text-green-400">Ilmi</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 font-semibold">
            <NavLinks />
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 rounded-full hover:bg-green-100 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-green-500" />
          ) : (
            <Menu className={isScrolled ? "text-green-500" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <button
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        onKeyDown={(e) => e.key === 'Escape' && setIsMobileMenuOpen(false)}
        aria-label="Close menu overlay"
        tabIndex={isMobileMenuOpen ? 0 : -1}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 w-64 bg-white h-full shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-2xl`}
      >
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Manarul<span className="text-green-500">Ilmi</span>
          </h1>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="text-green-500" />
          </button>
        </div>
        <nav className="py-6 text-gray-800">
          <ul className="flex flex-col gap-2 font-semibold">
            {navItems.map((item) => (
              <li key={item} className="px-4">
                <a
                  href={`${
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }`}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeItem === item
                      ? "bg-green-500 text-white"
                      : "hover:bg-green-100 hover:text-green-500"
                  }`}
                  onClick={() => {
                    setActiveItem(item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;