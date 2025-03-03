import { MdDarkMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext, useState } from "react";
import ThemeContext from "./context/useContext";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const context = useContext(ThemeContext);

  // Check if the context is undefined (fallback)
  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider");
  }

  const { toggleTheme } = context;
  return (
    <>
      <header className="sticky top-0 py-8 flex items-start justify-around md:mx-auto z-50 xl:items-center backdrop-blur-sm bg-slate-300/30 dark:bg-black/40 p-6">
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu} // Toggle the menu visibility
            className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white dark:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`flex flex-row items-center text-gray-800 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer space-x-2 pt-2 xl:pt-0 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <div className="text-sm lg:flex-grow flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-gray-100"
            >
              <FaHome size={24} className="dark:white" />
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-gray-100"
            >
              <FaTwitter size={24} className="dark:white" />
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-gray-100"
            >
              <FaLinkedin size={24} className="dark:white" />
            </a>
            <button
              onClick={toggleTheme}
              className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-gray-100"
            >
              <MdDarkMode size={24} className="dark:white" />
            </button>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-row items-center text-black hover:text-gray-900 dark:hover:text-white dark:text-gray-100 cursor-pointer space-x-2 pt-2 xl:pt-0">
          <MdEmail size={24} className="" />
          <span className="text-black dark:text-white">Get in touch</span>
        </div>
      </header>
      ;
    </>
  );
}
