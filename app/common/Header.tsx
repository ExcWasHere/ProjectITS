import { useLocation } from "@remix-run/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState<boolean>(false);
  const currentPage = useLocation();

  const programSubItems = [
    { name: "Keagamaan", path: "/keagamaan" },
    { name: "Sosial Keumatan", path: "/sosial-keumatan" },
    { name: "Pendidikan", path: "/pendidikan" },
    { name: "Kemanusiaan", path: "/kemanusiaan" },
    { name: "Wakaf", path: "/wakaf" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else if (scrollPosition === 0) {
        setIsScrolled(false);
      }
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
        <li 
          key={item} 
          className={`relative group ${item === "Programs" ? "has-dropdown" : ""}`}
          onMouseEnter={() => item === "Programs" && setIsProgramsDropdownOpen(true)}
          onMouseLeave={() => item === "Programs" && setIsProgramsDropdownOpen(false)}
        >
          {item === "Programs" ? (
            <div 
              className={`relative py-2 px-3 rounded-lg transition-all duration-300 flex items-center
                ${activeItem === item 
                  ? "text-green-500 font-bold" 
                  : "hover:text-green-500"}`}
            >
              <span className="mr-2">{item}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${
                  isProgramsDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`} 
              />
              
              {/* Dropdown Menu */}
              {isProgramsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[200px] z-50">
                  {programSubItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.path}
                      className="block px-4 py-2 hover:bg-green-100 hover:text-green-500 transition-colors"
                      onClick={() => {
                        setActiveItem("Programs");
                        setIsProgramsDropdownOpen(false);
                      }}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              href={`${
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`
              }`}
              className={`py-2 px-3 rounded-lg transition-all duration-300 block 
                ${activeItem === item 
                  ? "text-green-500 font-bold" 
                  : "hover:text-green-500"}`}
              onClick={() => {
                setActiveItem(item);
                setIsMobileMenuOpen(false);
              }}
            >
              {item}
            </a>
          )}
        </li>
      ))}
    </>
  );

  const MobileNavLinks = () => (
    <>
      {navItems.map((item) => (
        <li key={item} className="px-4">
          {item === "Programs" ? (
            <button 
              className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                activeItem === item
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-100 hover:text-green-500"
              }`}
              onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsProgramsDropdownOpen(!isProgramsDropdownOpen);
                }
              }}
              aria-expanded={isProgramsDropdownOpen}
              aria-haspopup="true"
            >
              <div className="flex justify-between items-center">
                <span>{item}</span>
                <ChevronDown 
                  className="w-4 h-4 transition-transform" 
                  style={{ 
                    transform: isProgramsDropdownOpen 
                      ? 'rotate(180deg)' 
                      : 'rotate(0deg)' 
                  }} 
                />
              </div>
              
              {/* Mobile Dropdown */}
              {isProgramsDropdownOpen && (
                <div className="mt-2 space-y-2">
                  {programSubItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.path}
                      className="block mt-2 py-2 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors"
                      onClick={() => {
                        setActiveItem("Programs");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </button>
          ) : (
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
          )}
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
          <ul className="flex gap-4 font-semibold items-center">
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
            <MobileNavLinks />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;