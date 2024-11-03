'use client';

import ScreenWrapper from '@/components/screenWrapper/screenWrapper';
import styles from './skills.module.css';
import { MySkills } from '../constants';
import Header, { HeaderVariant } from '@/components/header/header';

const Skills = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<section className={styles.container}>
				<Header variant={HeaderVariant.Primary} text="My Skills" />
				<Header
					variant={HeaderVariant.Secondary}
					text="
					An overview of the languages, frameworks, and tools I leverage to bring projects to life and solve
					real-world challenges."
				/>
				{MySkills.map((skill, index) => (
					<div key={index} className={styles.skillContainer}>
						<h2>{skill.title}</h2>
						<div className={styles.skills}>
							{skill.children.map((child, index) => (
								<div key={index} className={styles.skillSet}>
									{child.map((item, index) => (
										<span
											key={index}
											className={styles.skillItem}
											style={{
												backgroundColor: `var(${skill.backgroundColor})`,
												color: `var(${skill.textColor})`,
												borderColor: `var(${skill.borderColor})`,
											}}
										>
											{item}
										</span>
									))}
								</div>
							))}
						</div>
					</div>
				))}
				<div className={styles.placeHolder}></div>
			</section>
		</ScreenWrapper>
	);
};

export default Skills;
