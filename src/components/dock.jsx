import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import useWindowStore from "#store/window";

function Dock() {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = Array.from(dock.querySelectorAll(".dock-icon"));
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // ---------- Desktop: GSAP hover magnify ----------
    if (!isMobile) {
      // mousemove handler that computes distance-based intensity
      const animateIcons = (mouseX) => {
        const { left } = dock.getBoundingClientRect();

        icons.forEach((icon) => {
          const rect = icon.getBoundingClientRect();
          const center = rect.left - left + rect.width / 2;
          const distance = Math.abs(mouseX - center);

          // intensity curve (smooth falloff)
          const intensity = Math.exp(-(distance ** 3) / 20000);

          gsap.to(icon, {
            scale: 1 + 0.35 * intensity,
            y: -18 * intensity,
            duration: 0.18,
            ease: "power1.out",
          });
        });
      };

      const handleMouseMove = (e) => {
        const { left } = dock.getBoundingClientRect();
        animateIcons(e.clientX - left);
      };

      const handleMouseLeave = () => {
        icons.forEach((icon) => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        });
      };

      dock.addEventListener("mousemove", handleMouseMove);
      dock.addEventListener("mouseleave", handleMouseLeave);

      // cleanup for desktop listeners
      return () => {
        dock.removeEventListener("mousemove", handleMouseMove);
        dock.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    // ---------- Mobile: touch zoom behavior ----------
    // add touchstart / touchend to each icon
    const touchHandlers = [];
    icons.forEach((icon) => {
      const onTouchStart = () => icon.classList.add("active-touch");
      const onTouchEnd = () => icon.classList.remove("active-touch");

      icon.addEventListener("touchstart", onTouchStart, { passive: true });
      icon.addEventListener("touchend", onTouchEnd, { passive: true });
      icon.addEventListener("touchcancel", onTouchEnd, { passive: true });

      touchHandlers.push({ icon, onTouchStart, onTouchEnd });
    });

    return () => {
      touchHandlers.forEach(({ icon, onTouchStart, onTouchEnd }) => {
        icon.removeEventListener("touchstart", onTouchStart);
        icon.removeEventListener("touchend", onTouchEnd);
        icon.removeEventListener("touchcancel", onTouchEnd);
      });
    };
  }, []); // run once

  // Bounce icon (elastic) when opening app
  const bounceIcon = (el) => {
    if (!el) return;
    // quick up-and-down bounce
    gsap.fromTo(
      el,
      { y: 0 },
      { y: -18, duration: 0.28, ease: "power1.out", yoyo: true, repeat: 1 }
    );
  };

  const toggleApp = (app, e) => {
    if (!app.canOpen) return;

    const iconEl = e?.currentTarget ?? null;
    const win = windows[app.id];

    if (win?.isOpen) {
      closeWindow(app.id);
    } else {
      // play bounce, then open
      bounceIcon(iconEl);
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon size-14 md:size-14"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              disabled={!canOpen}
              onClick={(e) => toggleApp({ id, canOpen }, e)}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${icon}`}
                alt={name}
                className={`w-full h-full object-contain ${
                  canOpen ? "" : "opacity-60"
                }`}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
}

export default Dock;
