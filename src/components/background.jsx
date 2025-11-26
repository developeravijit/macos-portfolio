import React from "react";

const Background = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-0"
    >
      <source
        src={`${import.meta.env.BASE_URL}videos/bg2.mp4`}
        type="video/mp4"
      />
    </video>
  );
};

export default Background;
