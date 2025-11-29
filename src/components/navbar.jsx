import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import useWindowStore from "#store/window";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  // Load theme from saved/local or default to light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      document.documentElement.getAttribute("data-theme") ||
      "light"
  );

  const [openMenu, setOpenMenu] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);

  const dropdownRef = useRef(null);

  // Auto-update time
  const [currentTime, setCurrentTime] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(dayjs()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Apply theme on load
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Click outside to close theme dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setThemeMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyTheme = (value) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
    setThemeMenu(false);
  };

  return (
    <nav className="navbar-macos z-50 select-none">
      {/* LEFT */}
      <div className="flex items-center gap-3 md:gap-5">
        <img
          src={`${import.meta.env.BASE_URL}images/logoMac.svg`}
          className="w-5 transition hover:brightness-200"
        />

        <p className="font-medium text-sm">Avijit's Portfolio</p>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer mac-underline"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* Desktop Icons */}
        <ul className="hidden md:flex items-center gap-3 opacity-90">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="w-4 hover:brightness-200" />
            </li>
          ))}

          {/* Mode dropdown */}
          <li className="relative" ref={dropdownRef}>
            <img
              src="icons/mode.svg"
              className="w-5 cursor-pointer"
              onClick={() => setThemeMenu(!themeMenu)}
            />

            {themeMenu && (
              <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-2 flex flex-col gap-2 z-50">
                <button
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                  onClick={() => applyTheme("light")}
                >
                  <img src="icons/sun.svg" className="w-4" />
                  <span className="text-sm">Light</span>
                </button>

                <button
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                  onClick={() => applyTheme("dark")}
                >
                  <img src="icons/moon.svg" className="w-4" />
                  <span className="text-sm">Dark</span>
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Clock */}
        <div className="flex flex-col leading-tight text-right text-[10px] sm:text-xs">
          <span>{currentTime.format("ddd DD MMM YYYY")}</span>
          <span>{currentTime.format("h:mm:ss A")}</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[3px] p-2"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <div className="mobile-menu animate-fadeSlide z-50">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ id, name, type }) => (
              <li
                key={id}
                onClick={() => {
                  openWindow(type);
                  setOpenMenu(false);
                }}
                className="cursor-pointer"
              >
                {name}
              </li>
            ))}

            <hr className="opacity-20" />

            <div className="flex justify-between items-center">
              {navIcons.map(({ id, img }) => (
                <img key={id} src={img} className="w-5" />
              ))}

              {/* Theme inside mobile */}
              <img
                src="icons/mode.svg"
                className="w-5 cursor-pointer"
                onClick={() => setThemeMenu(!themeMenu)}
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
