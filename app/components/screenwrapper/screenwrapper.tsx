"use client";
import { ReactNode, useEffect } from "react";
import SplashScreen from "../loader/splashScreen";
import Navbar from "../navbar/navbar";
import gsap from "gsap";

type ScreenWrapperProps = {
  animate: boolean;
  children: ReactNode;
};

const ScreenWrapper = ({ animate, children }: ScreenWrapperProps) => {
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
          revealNavbar();
        },
      }
    );
  };
  useEffect(() => {
    if (!animate) {
      revealNavbar();
    }
  }, [animate]);

  return (
    <>
      {animate && (
        <SplashScreen
          id={"splash"}
          animationCompleted={onSplashAnimationDone}
        />
      )}
      <main className="min-h-screen">
        <Navbar id="navbar" />
        {children}
      </main>
    </>
  );
};

export default ScreenWrapper;

const revealNavbar = (): gsap.core.Tween => {
  return gsap.fromTo(
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
};
