import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import useWindowStore from "#store/window";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const [openMenu, setOpenMenu] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);
  const dropdownRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(dayjs());
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      document.documentElement.getAttribute("data-theme") ||
      "light"
  );

  useEffect(() => {
    const i = setInterval(() => setCurrentTime(dayjs()), 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setThemeMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const applyTheme = (value) => {
    setTheme(value);

    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);

    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

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

        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              className="cursor-pointer mac-underline"
              onClick={() => openWindow(type)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <ul className="hidden md:flex items-center gap-3 opacity-90">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="w-4 hover:brightness-200" />
            </li>
          ))}
        </ul>

        <div className="relative" ref={dropdownRef}>
          <img
            src="icons/mode.svg"
            className="w-5 cursor-pointer"
            onClick={() => setThemeMenu(!themeMenu)}
          />

          {themeMenu && (
            <div
              className="absolute right-0 mt-2 w-32 rounded-lg shadow-lg p-2 flex flex-col gap-2 z-50"
              style={{
                background: "var(--bg-window)",
                color: "var(--text-main)",
                border: `1px solid var(--border-color)`,
              }}
            >
              <button
                className="flex items-center gap-2 p-2 rounded"
                style={{ background: "transparent" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg-sidebar)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
                onClick={() => applyTheme("light")}
              >
                <img src="icons/sun.svg" className="w-4" />
                <span className="text-sm">Light</span>
              </button>

              <button
                className="flex items-center gap-2 p-2 rounded"
                style={{ background: "transparent" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg-sidebar)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
                onClick={() => applyTheme("dark")}
              >
                <img src="icons/moon.svg" className="w-4" />
                <span className="text-sm">Dark</span>
              </button>
            </div>
          )}
        </div>

        {/* Clock */}
        <div className="flex flex-col leading-tight text-right text-[10px] sm:text-sm">
          <span>{currentTime.format("ddd DD MMM YYYY")}</span>
          <span>{currentTime.format("h:mm:ss A")}</span>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[3px] p-2"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="mobile-menu animate-fadeSlide z-50">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ id, name, type }) => (
              <li
                key={id}
                className="cursor-pointer"
                onClick={() => {
                  openWindow(type);
                  setOpenMenu(false);
                }}
              >
                {name}
              </li>
            ))}

            <hr className="opacity-20" />

            <div className="flex justify-between items-center">
              {navIcons.map(({ id, img }) => (
                <img key={id} src={img} className="w-5" />
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
