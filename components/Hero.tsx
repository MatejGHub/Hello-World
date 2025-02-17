import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-null h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-60 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white/[0.03]  dark:bg-grid-white/[0.07] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello World
          </h2>
          <TextGenerateEffect
            className="string text-center text-40px md:text-5xl lg:text-6xl"
            words="Presentation of the world"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi, This is a website about the world
          </p>
          <a href="#worldglobe">
            <MagicButton
              title={"Show the World"}
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
