"use client";

import { useState } from "react";
import SplashScreen from "./loader/splashScreen";
import Navbar from "./navbar/navbar";
import gsap from "gsap";

export default function Home() {
  const onSplashAnimationDone = () => {
    const splash = document.getElementById("splash");
    gsap.fromTo(
      splash,
      {
        opacity: 1,
      },
      {
        duration: 0.4,
        opacity: 0,
        onComplete: () => {
          splash?.remove();
          gsap.fromTo(
            "#navbar",
            { opacity: 0, scale: 0.6 },
            {
              opacity: 1,
              scale: 1,
              animationDuration: 1,
              clearProps: "all",
            }
          );
        },
      }
    );
  };
  return (
    <>
      <SplashScreen id={"splash"} animationCompleted={onSplashAnimationDone} />
      <main className="min-h-screen .main">
        <Navbar id="navbar" />
      </main>
    </>
  );
}
