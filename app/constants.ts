export const NavbarUrls = {
	ABOUT: { name: 'About', url: '/about' },
	EXPERIENCES: { name: 'Experiences', url: '/experiences' },
	SKILLS: { name: 'Skills', url: '/skills' },
	PORTFOLIO: { name: 'Portfolio', url: '/portfolio' },
	CONTACT: { name: 'Contact', url: '/contact' },
};

export const MyExperiences = [
	{
		title: 'Tech Particle',
		subTitle: 'React Developer',
		date: 'April 2021 - June 2021',
	},
	{
		title: 'K Plus Classes',
		subTitle: 'Full Stack Developer',
		date: 'Dec 2021 - March 2022',
	},
	{
		title: 'Triunits',
		subTitle: 'Android Developer',
		date: 'Jan 2022 - May 2022',
	},
	{
		title: 'Tricket',
		subTitle: 'Flutter Developer',
		date: 'April 2022 - May 2022',
	},
	{
		title: 'Capricon Technology',
		subTitle: 'Cross Platform App Developer',
		date: 'May 2022 - Present',
	},
	{
		title: 'Reliance Industries Limited',
		subTitle: 'Summer Intern',
		date: 'May 2023 - July 2023',
	},
	{
		title: 'Google Summer of Code',
		subTitle: 'Open Source Contributor',
		date: 'May 2023 - Oct 2023',
	},
	{
		title: 'Cuemath',
		subTitle: 'Game Developer',
		date: 'Oct 2023 - Present',
	},
];

export const MySkills = [
	{
		title: 'Languages',
		children: [
			['C', 'C++', 'Javascript', 'Typescript', 'Python', 'Dart'],
			['HTML', 'CSS', 'SCSS'],
		],
		textColor: '--secondary-color',
		backgroundColor: '--primary-color',
	},
	{
		title: 'Frameworks & Libraries',
		children: [
			['Phaser', 'Three JS'],
			['Puppeteer', 'Beautiful Soup'],
			['React JS', 'Next JS', 'Jest'],
			['Django', 'Flask', 'Express JS'],
			['Material UI', 'Bootstrap', 'Tailwind'],
		],
		textColor: '--primary-color',
		backgroundColor: '--light-grey',
	},
	{
		title: 'App Development',
		children: [['React Native', 'Flutter', 'Electron']],
		textColor: '--secondary-color',
		backgroundColor: '--primary-color',
	},
	{
		title: 'DevOps & Version Control',
		children: [
			['Docker', 'Linux', 'AWS EC2', 'GCP'],
			['Git', 'Github', 'Gitlab'],
		],
		textColor: '--primary-color',
		backgroundColor: '--secondary-grey',
		borderColor: '--primary-color',
	},
	{
		title: 'UI/UX Design',
		children: [['Figma', 'Canva']],
		textColor: '--secondary-color',
		backgroundColor: '--primary-color',
	},
];
