import { useLayoutEffect, useRef } from "react";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 767px)").matches;

const windowWrapper = (Component, boundWindowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();

    const effectiveKey = props.windowKey ?? boundWindowKey;
    const win = windows[effectiveKey] || {};
    const { isOpen, isMinimized, isMaximized, zIndex } = win;

    const ref = useRef(null);
    const dragInstance = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isMobile()) {
        dragInstance.current = null;
        return;
      }

      dragInstance.current = Draggable.create(el, {
        onPress: () => focusWindow(effectiveKey),
        bounds: document.body,
        edgeResistance: 0.75,
      })[0];

      return () => {
        dragInstance.current?.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isMinimized) {
        gsap.to(el, {
          scale: 0.1,
          opacity: 0,
          y: 140,
          duration: 0.28,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.28,
          ease: "power3.out",
        });
      }
    }, [isMinimized]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      const mobile = isMobile();

      if (mobile && isOpen) {
        el.classList.add("mobile-fullscreen");

        dragInstance.current?.disable?.();

        gsap.set(el, { x: 0, y: 0 });
      } else {
        el.classList.remove("mobile-fullscreen");
      }

      if (isMaximized && !mobile) {
        dragInstance.current?.disable?.();

        gsap.to(el, {
          position: "fixed",
          top: 0,
          left: 0,
          x: 0,
          y: 0,
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          duration: 0.22,
          ease: "power2.out",
        });
      } else if (!isMaximized && !mobile) {
        dragInstance.current?.enable?.();

        gsap.to(el, {
          position: "absolute",
          width: "",
          height: "",
          top: "",
          left: "",
          x: 0,
          y: 0,
          borderRadius: "0.75rem",
          duration: 0.22,
          ease: "power2.out",
        });
      }
    }, [isMaximized, isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={effectiveKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute window"
        onMouseDown={() => focusWindow(effectiveKey)}
      >
        <Component {...props} windowKey={effectiveKey} />
      </section>
    );
  };

  Wrapped.displayName = `windowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default windowWrapper;
