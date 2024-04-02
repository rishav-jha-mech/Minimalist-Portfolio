import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import styles from './portfolio.module.css';
import { MyPortfolio } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<h1>My Portfolio</h1>
					<p>
						Bringing creativity and functionality together to build seamless web solutions as a versatile
						full stack developer.
					</p>
					<section className={styles.portfolio}>
						{MyPortfolio.map(({ name, content, poster }, index) => (
							<div key={index} className={styles.portfolioItem}>
								<Image src={poster} alt={name} width={300} height={200} />
							</div>
						))}
					</section>
					<h3>
						<Link href="/portfolio">View All Projects&nbsp;&nbsp;&nbsp;</Link>
						<Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={28} height={28} />
					</h3>
				</div>
			</div>
		</ScreenWrapper>
	);
};

export default Portfolio;
