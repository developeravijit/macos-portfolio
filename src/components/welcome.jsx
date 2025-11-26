import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_Weight = {
  Subtitles: { min: 100, max: 500, default: 100 },
  title: { min: 400, max: 700, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_Weight[type];

  const animateLetters = (el, weight, duration = 0.2) => {
    return gsap.to(el, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    letters.forEach((letter) => {
      const { left, width } = letter.getBoundingClientRect();
      const center = left - rect.left + width / 2;
      const dist = Math.abs(mouseX - center);

      const intensity = Math.exp(-(dist ** 2) / 20000);

      const weight = min + (max - min) * intensity;
      animateLetters(letter, weight);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetters(letter, base, 0.3));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subTitleRef.current, "Subtitles");

    return () => {
      subtitleCleanup();
      subtitleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>
        {renderText(
          "Hey, I'm Avijit! Welcome to my portfolio.",
          "text-3xl font-georama",
          200
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>
    </section>
  );
};

export default Welcome;
