import Image from 'next/image';
import ScreenWrapper from './components/screenwrapper/screenwrapper';
import styles from './page.module.css';

const Home = () => {
	return (
		<ScreenWrapper animateSplash={true} animateNavbar={false}>
			<section className={styles.wrapper}>
				<section className={styles.container}>
					<div className={styles.left}>
						<Image
							src={'/assets/images/profile.png'}
							alt="Rishav Jha"
							width={0}
							height={0}
							sizes="100vw"
							className={styles.profilePic}
						/>
					</div>
					<div className={styles.right}>
						<h4>Hi There !</h4>
						<h1>Meet Rishav</h1>
						<p>
							Diving into the digital world like a fearless adventurer, I blend an array of skills and
							technologies to weave magic into every project. From shaping responsive game development to
							refining the nuances of UI/UX design, each endeavor becomes a canvas for boundless
							creativity and innovation. With a knack for problem-solving, I navigate through challenges,
							crafting solutions that sparkle with simplicity and elegance
						</p>
						<div className={styles.btnContainer}>
							<button className={styles.solidBtn}>Download Resume</button>
							<button className={styles.outlineBtn}>Contact Me</button>
						</div>
					</div>
				</section>
			</section>
		</ScreenWrapper>
	);
};

export default Home;
