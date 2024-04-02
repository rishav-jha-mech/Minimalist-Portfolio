'use client';
import gsap from 'gsap';
import { ReactNode, useEffect, useState } from 'react';
import SplashScreen from '../splashscreen/splashScreen';
import Navbar from '../navbar/navbar';
import { usePathname } from 'next/navigation';
import { NavbarUrls } from '@/constants';

type ScreenWrapperProps = {
	animateSplash: boolean;
	animateNavbar: boolean;
	children: ReactNode;
};

const ScreenWrapper = ({ children, animateSplash, animateNavbar }: ScreenWrapperProps) => {
	const [animateSplashScreen, setAnimateSplashScreen] = useState(animateSplash);
	const pathName = usePathname();
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (!animateSplashScreen && animateNavbar) {
			revealNavbar();
		}
	}, [animateSplashScreen, animateNavbar]);

	return (
		<section>
			{animateSplashScreen && (
				<SplashScreen animationCompleted={() => onSplashAnimationDone(animateNavbar, setAnimateSplashScreen)} />
			)}
			<Navbar animate={animateNavbar} showMenu={showMenu} setShowMenu={setShowMenu} />
			{!showMenu && <main id={pathName.replaceAll('/', '')}>{children}</main>}
		</section>
	);
};

export default ScreenWrapper;

// If animate is false, then onSplashAnimationDone is never called, hence no animation of navbar
const onSplashAnimationDone = (animateNavbar: boolean, onComplete: (state: boolean) => void) => {
	const splash = document.getElementById('splash');
	gsap.fromTo(
		splash,
		{
			opacity: 1,
		},
		{
			duration: 0.4,
			opacity: 0,
			onComplete: () => {
				onComplete(false);
				if (animateNavbar) {
					revealNavbar();
				}
			},
		},
	);
};

const revealNavbar = () => {
	try {
		gsap.fromTo(
			'#navbar',
			{ opacity: 0, y: -70 },
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: 'power1.inOut',
				clearProps: 'all',
			},
		);
	} catch (error) {
		console.error('Error in revealNavbar', error);
	}
};
