import ScreenWrapper from '@/components/screenWrapper/screenWrapper';
import styles from './portfolio.module.css';
import { MyPortfolio } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Header, { HeaderVariant } from '@/components/header/header';

const Portfolio = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Header variant={HeaderVariant.Primary} text="My Portfolio" />
					<Header
						variant={HeaderVariant.Secondary}
						text="Bringing creativity and functionality together to build seamless web solutions as a versatile
						full stack developer."
					/>
					<section className={styles.portfolio}>
						{MyPortfolio.map(({ name, content, poster }, index) => (
							<div key={index} className={styles.portfolioItem}>
								<Image src={poster} alt={name} width={300} height={200} />
							</div>
						))}
					</section>
					<h6>
						<Link href="/projects">View All Projects&nbsp;&nbsp;&nbsp;</Link>
						<Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={28} height={28} />
					</h6>
				</div>
			</div>
		</ScreenWrapper>
	);
};

export default Portfolio;
