'use client';

import ScreenWrapper from '@/components/screenWrapper/screenWrapper';
import styles from './projects.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AllProjects, ProjectDomain } from '../constants';
import DomainIcon from '@/utils/DomainIcon';
import { SVG_ASSETS } from '../../public/assets/icons';

enum ProjectViews {
	GRID = 'GRID',
	TABLE = 'TABLE',
}

const Projects = () => {
	const router = useRouter();
	const [selectedDomain, setSelectedDomain] = useState(ProjectDomain.ALL);
	const [defaultView, setDefaultView] = useState<ProjectViews>(
		window.innerWidth > 1000 ? ProjectViews.TABLE : ProjectViews.GRID,
	);

	useEffect(() => {
		document.title = 'Rishav Jha | Projects';
	}, []);

	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false} showNavbar={false}>
			<section className={styles.container}>
				<button className={styles.backBtn} onClick={() => router.back()}>
					<SVG_ASSETS.Back alt="BackBtn" width={20} height={20} />
					&nbsp; Rishav Jha
				</button>
				<h1>All Projects</h1>
				<p>
					Discover a curated selection of my projects, ranging from public repositories to private endeavors,
					offering a glimpse into my diverse skill set and collaborative development approach.
				</p>
				<div className={styles.controlSection}>
					<div className={styles.filterSection}>
						{Object.values(ProjectDomain).map((project, index) => (
							<button
								key={index}
								className={
									selectedDomain === project ? styles.filterBtnActive : styles.fitlerBtnInactive
								}
								onClick={() => setSelectedDomain(project)}
							>
								<div className={styles.btnIcon}>
									<DomainIcon domain={project} />
								</div>
								{project}
							</button>
						))}
					</div>
					{window.innerWidth >= 1000 && (
						<div className={styles.selectView}>
							<button
								className={
									defaultView === ProjectViews.TABLE ? styles.viewBtnActive : styles.viewBtnInactive
								}
								onClick={() => setDefaultView(ProjectViews.TABLE)}
							>
								<SVG_ASSETS.TableView stroke={defaultView === ProjectViews.TABLE ? '#fff' : '#000'} />
							</button>
							<button
								className={
									defaultView === ProjectViews.GRID ? styles.viewBtnActive : styles.viewBtnInactive
								}
								onClick={() => setDefaultView(ProjectViews.GRID)}
							>
								<SVG_ASSETS.GridView stroke={defaultView === ProjectViews.GRID ? '#fff' : '#000'} />
							</button>
						</div>
					)}
				</div>
				{/* For desktops */}
				{defaultView === ProjectViews.TABLE && (
					<section className={styles.tableWrapper}>
						<table>
							<tr>
								<th>Year</th>
								<th>Project</th>
								{/* <th>Type</th> */}
								<th>Built With</th>
								<th>Source Code</th>
								<th>Link</th>
							</tr>
							{AllProjects.map((project, index) => (
								<tr key={index}>
									<td>{project.year}</td>
									<td>
										<a href="http://" target="_blank" rel="noopener noreferrer">
											{project.project}
										</a>
									</td>
									{/* <td>{project.type}</td> */}
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
				{defaultView === ProjectViews.GRID && (
					<section className={styles.cardWrapperGrid}>
						{AllProjects.map((project, index) => (
							<section key={index} className={styles.card}>
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
											View
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
