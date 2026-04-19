"use client";

import dynamic from "next/dynamic";

const DotLottiePlayer = dynamic(
  () => import("@dotlottie/react-player").then((mod) => mod.DotLottiePlayer),
  { ssr: false },
);

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <DotLottiePlayer
          src="/Astronaut.lottie"
          autoplay
          loop
          mode="bounce"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LottieAnimation;
