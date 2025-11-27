import { useState, useEffect } from "react";
import dayjs from "dayjs";
import useWindowStore from "#store/window";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const [openMenu, setOpenMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar-macos z-50 select-none">
      {/* LEFT */}
      <div className="flex items-center gap-3 md:gap-5">
        <img
          src={`${import.meta.env.BASE_URL}images/logoMac.svg`}
          className="w-5 transition hover:brightness-200"
        />

        {/* ALWAYS visible */}
        <p className="font-medium text-sm">Avijit's Portfolio</p>

        {/* DESKTOP NAV LINKS */}
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
        {/* DESKTOP ICONS */}
        <ul className="hidden md:flex items-center gap-3 opacity-90">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="w-4 hover:brightness-200" />
            </li>
          ))}
        </ul>

        {/* CLOCK */}
        <div className="flex flex-col leading-tight text-right text-[10px] sm:text-xs">
          <span>{currentTime.format("ddd DD MMM YYYY")}</span>
          <span>{currentTime.format("h:mm:ss A")}</span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-[3px] p-2"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>

      {/* MOBILE DROPDOWN (links + icons) */}
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

            <div className="flex justify-between">
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
