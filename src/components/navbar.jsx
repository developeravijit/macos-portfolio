import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(dayjs());

  // LIVE CLOCK TICKING EVERY SECOND
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar-macos z-50 select-none">
      {/* LEFT — logo + menu */}
      <div className="flex items-center gap-3 md:gap-5">
        <img
          src={`${import.meta.env.BASE_URL}images/logoMac.svg`}
          className="w-5 transition duration-200 hover:brightness-200"
        />

        <p className="font-medium text-sm hidden sm:inline">
          Avijit's Portfolio
        </p>

        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map(({ id, name }) => (
            <li key={id} className="relative cursor-pointer mac-underline">
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — status icons + clock */}
      <div className="flex items-center gap-4">
        {/* Desktop status icons */}
        <ul className="hidden md:flex items-center gap-3 opacity-90">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="w-4 hover:brightness-200 transition" />
            </li>
          ))}
        </ul>

        {/* Clock (centered on wrap) */}
        <div className="flex flex-col leading-tight text-right text-xs">
          <span>{currentTime.format("ddd DD MMM YYYY")}</span>
          <span>{currentTime.format("h:mm:ss A")}</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[3px] p-2"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>

      {/* Mobile animated dropdown */}
      {openMenu && (
        <div className="mobile-menu animate-fadeSlide z-50">
          <ul className="flex justify-between">
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} className="w-5 hover:brightness-200" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
