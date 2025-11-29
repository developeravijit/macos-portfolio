import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`mac-loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="mac-loader-box">
        <img src="icons/apple.svg" className="mac-apple-logo" alt="apple" />

        <div className="mac-pulse"></div>

        <div className="mac-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
