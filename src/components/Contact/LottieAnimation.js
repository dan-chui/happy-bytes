"use client";

import dynamic from "next/dynamic";

const DotLottiePlayer = dynamic(
  () => import("@dotlottie/react-player").then((mod) => mod.DotLottiePlayer),
  { ssr: false },
);

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <DotLottiePlayer
        src="/Astronaut.lottie"
        autoplay
        loop
        mode="bounce"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default LottieAnimation;
