import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useRef, useEffect, use } from "react";
import gsap from "gsap";
import useWindowStore from "#store/window";
function Dock() {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    // Animation function
    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const center = rect.left - left + rect.width / 2;

        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 3) / 20000); // smooth curve

        gsap.to(icon, {
          scale: 1 + 0.3 * intensity,
          y: -18 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    // Event handlers
    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (window.isOpen) {
      closeWindow(app.id);
    } else {
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
              className="dock-icon size-16 md:size-14"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
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
