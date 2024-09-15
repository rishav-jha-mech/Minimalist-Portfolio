import React from 'react';
import ScreenWrapper from '@/components/screenWrapper/screenWrapper';
import styles from './experiences.module.css';
import Image from 'next/image';
import { MyExperiences } from '@/constants';
import Header, { HeaderVariant } from '@/components/header/header';

const Experiences = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<Header variant={HeaderVariant.Primary} text="My Experiences" />
					<Header
						variant={HeaderVariant.Secondary}
						text="
					Complementing my academic pursuits, my hands-on experiences through internships and projects have
					fortified my expertise in real-world applications."
					/>
				</div>
				<section className={styles.experiences}>
					<div className={styles.midLine} />
					{MyExperiences.map(({ title, subTitle, date }, index) => {
						return index % 2 === 0 ? (
							<div
								className={`${styles.leftWrapper} ${index === 0 ? styles.firstIndex : ''} ${index === MyExperiences.length - 1 ? styles.lastLeftIndex : ''}`}
								key={index}
							>
								<div className={`${styles.leftContent} ${styles.contentCard}`}>
									<div className={styles.index}>{index + 1}</div>
									<div className={styles.triangle} />
									<div className={styles.title}>
										<h3>{title}</h3>
										<Image src="assets/icons/link.svg" alt="link" width={28} height={28} />
									</div>
									<p className={styles.subTitle}>{subTitle}</p>
									<p className={`${styles.date} mt-6`}>
										<Image
											src="assets/icons/calendar.svg"
											className="mr-2"
											alt="link"
											width={20}
											height={20}
										/>
										{date}
									</p>
								</div>
							</div>
						) : (
							<div
								className={`${styles.rightWrapper} ${index === 0 ? styles.firstIndex : ''} ${index === MyExperiences.length - 1 ? styles.lastRightIndex : ''}`}
								key={index}
							>
								<div className={`${styles.rightContent} ${styles.contentCard}`}>
									<div className={styles.index}>{index + 1}</div>
									<div className={styles.triangle} />
									<div className={styles.title}>
										<h3>{title}</h3>
										<Image src="assets/icons/link.svg" alt="link" width={28} height={28} />
									</div>
									<p className={styles.subTitle}>{subTitle}</p>
									<p className={`${styles.date} mt-6`}>
										<Image
											src="assets/icons/calendar.svg"
											className="mr-2"
											alt="link"
											width={20}
											height={20}
										/>
										{date}
									</p>
								</div>
							</div>
						);
					})}
				</section>
			</div>
		</ScreenWrapper>
	);
};

export default Experiences;
