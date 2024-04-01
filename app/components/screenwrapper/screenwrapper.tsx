"use client";
import gsap from "gsap";
import { ReactNode, useEffect } from "react";
import SplashScreen from "../splashscreen/splashScreen";
import Navbar from "../navbar/navbar";

type ScreenWrapperProps = {
  animateSplash: boolean;
  animateNavbar: boolean;
  children: ReactNode;
};

const ScreenWrapper = ({
  children,
  animateSplash,
  animateNavbar,
}: ScreenWrapperProps) => {
  // If animate is false, then onSplashAnimationDone is never called, hence no animation of navbar
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
          if (animateNavbar) {
            revealNavbar();
          }
        },
      }
    );
  };
  useEffect(() => {
    if (!animateSplash && animateNavbar) {
      revealNavbar();
    }
  }, [animateSplash, animateNavbar]);

  return (
    <section>
      {animateSplash && <SplashScreen animationCompleted={onSplashAnimationDone} />}
      <main>
        <Navbar animate={animateNavbar} />
        {children}
      </main>
    </section>
  );
};

export default ScreenWrapper;

const revealNavbar = () => {
  try {
    gsap.fromTo(
      "#navbar",
      { opacity: 0, y: -70 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        clearProps: "all",
      }
    );
  } catch (error) {
    console.error("Error in revealNavbar", error);
  }
};
