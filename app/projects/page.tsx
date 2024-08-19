'use client';

import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import styles from './projects.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AllProjects } from '@/constants';
import { useEffect, useState } from 'react';

const Projects = () => {
	const router = useRouter();

	useEffect(() => {
		document.title = 'Rishav Jha | Projects';
	}, []);

	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false} showNavbar={false}>
			<section className={styles.container}>
				<button className={styles.backBtn} onClick={() => router.back()}>
					<Image src="/assets/icons/back.svg" alt="NextJS" width={20} height={22} />
					&nbsp; Rishav Jha
				</button>
				<h1>All Projects</h1>
				<p>
					Discover a curated selection of my projects, ranging from public repositories to private endeavors,
					offering a glimpse into my diverse skill set and collaborative development approach.
				</p>

				{/* For desktops */}
				{window.innerWidth >= 1000 && (
					<section className={styles.tableWrapper}>
						<table>
							<tr>
								<th>Year</th>
								<th>Project</th>
								<th>Type</th>
								<th>Built With</th>
								<th>Source Code</th>
								<th>Link</th>
							</tr>
							{AllProjects.map((project, index) => (
								<tr key={index}>
									<td>{project.year}</td>
									<td>{project.project}</td>
									<td>{project.type}</td>
									<td className={styles.builtWith}>
										{project.builtWith.map((item, _index) => (
											<span key={_index} className={styles.capsule}>
												{item}
											</span>
										))}
									</td>
									<td>
										<a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
											<Image src="/assets/icons/link.svg" alt="NextJS" width={20} height={20} />
										</a>
									</td>
									<td>
										<a href={project.link} target="_blank" rel="noopener noreferrer">
											<Image src="/assets/icons/link.svg" alt="NextJS" width={20} height={20} />
										</a>
									</td>
								</tr>
							))}
						</table>
					</section>
				)}

				{/* For Mobile Screens */}
				{window.innerWidth < 1000 && (
					<section className={styles.cardWrapper}>
						{AllProjects.map((project, index) => (
							<section key={index} className={styles.card}>
								<div className={styles.header}>
									<span>{project.year}</span>
									<span>{project.type} Project</span>
								</div>
								<div className={styles.content}>
									<h2>{project.project}</h2>
									<h4>{project.description}</h4>
									<br />
									<h4>
										<strong>Tech Stack</strong>
									</h4>
									<div>
										{project.builtWith.map((item, _index) => (
											<span key={_index} className={styles.capsule}>
												{item}
											</span>
										))}
									</div>
									<div className={styles.btnContainer}>
										<a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
											Source Code
										</a>
										<a href={project.link} target="_blank" rel="noopener noreferrer">
											Link
										</a>
									</div>
								</div>
							</section>
						))}
					</section>
				)}
			</section>
		</ScreenWrapper>
	);
};

export default Projects;
