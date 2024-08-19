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

export const MyPortfolio = [
	{
		name: 'Treklers Passenger App',
		content: `Treklers is a Taxi Booking App that allows users to book a cab
		and track the driver in real-time. It has several options live
		location and emergency calling.`,
		poster: '/assets/images/portfolio/treklers.webp',
	},
	{
		name: 'Placement Management System',
		content: `Made to keep track of the placement process, by ensuring proper
		communication between the placement coordinators and placement
		cell.`,
		poster: '/assets/images/portfolio/pms.webp',
	},
	{
		name: 'UV Downloader',
		content: `UV Downloader is a video downloader app which allows users to
		download videos from various platforms like Youtube, Facebook,
		Instagram, Twitter, etc.`,
		poster: '/assets/images/portfolio/uvd.webp',
	},
];

export const MyContacts = [
	{
		asset: '/assets/icons/contact/email.svg',
		title: 'Email',
		content: 'rishav.nitdgp24@gmail.com',
	},
	{
		asset: '/assets/icons/contact/linkedin.svg',
		title: 'LinkedIn',
		content: 'rishav-devraj',
	},
	{
		asset: '/assets/icons/contact/github.svg',
		title: 'Github',
		content: 'rishav-jha-mech',
	},
	{
		asset: '/assets/icons/contact/location.svg',
		title: 'Location',
		content: 'Bangalore, India',
	},
];
export const AllProjects: {
	year: number;
	project: string;
	type: 'personal' | 'professional';
	builtWith: string[];
	description?: string;
	sourceCode: string;
	link: string;
}[] = [
	{
		year: 2024,
		project: 'Weather App',
		type: 'personal',
		builtWith: ['React', 'TypeScript', 'API', 'CSS'],
		description: 'A weather app that provides real-time weather information based on your location.',
		sourceCode: 'https://github.com/user/weather-app',
		link: 'https://weather-app-demo.com',
	},
	{
		year: 2023,
		project: 'E-commerce Platform',
		type: 'professional',
		builtWith: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
		description: 'An e-commerce platform with a modern, responsive design for selling products online.',
		sourceCode: 'https://github.com/user/ecommerce-platform',
		link: 'https://ecommerce-platform.com',
	},
	{
		year: 2022,
		project: 'Portfolio Website',
		type: 'personal',
		builtWith: ['Gatsby', 'GraphQL', 'Sass'],
		description: 'A personal portfolio website showcasing my projects and skills.',
		sourceCode: 'https://github.com/user/portfolio-website',
		link: 'https://user-portfolio.com',
	},
	{
		year: 2021,
		project: 'Social Media Dashboard',
		type: 'professional',
		builtWith: ['Vue.js', 'Vuetify', 'Firebase'],
		description: 'A dashboard for managing and analyzing social media accounts.',
		sourceCode: 'https://github.com/user/social-media-dashboard',
		link: 'https://social-dashboard.com',
	},
	{
		year: 2024,
		project: 'Task Manager',
		type: 'personal',
		builtWith: ['Angular', 'NgRx', 'Material UI'],
		description: 'A task management app with features for creating, updating, and organizing tasks.',
		sourceCode: 'https://github.com/user/task-manager',
		link: 'https://task-manager-app.com',
	},
	{
		year: 2023,
		project: 'Finance Tracker',
		type: 'professional',
		builtWith: ['React Native', 'Redux', 'SQLite'],
		description: 'A mobile app for tracking and managing personal finances and expenses.',
		sourceCode: 'https://github.com/user/finance-tracker',
		link: 'https://finance-tracker-app.com',
	},
	{
		year: 2022,
		project: 'Real-Time Chat App',
		type: 'personal',
		builtWith: ['Socket.io', 'Node.js', 'Express', 'React'],
		description: 'A chat application that allows users to send and receive messages in real-time.',
		sourceCode: 'https://github.com/user/chat-app',
		link: 'https://real-time-chat.com',
	},
	{
		year: 2021,
		project: 'Blog Platform',
		type: 'professional',
		builtWith: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
		description: 'A blogging platform with features for creating and managing blog posts.',
		sourceCode: 'https://github.com/user/blog-platform',
		link: 'https://blog-platform.com',
	},
	{
		year: 2024,
		project: 'Crypto Price Tracker',
		type: 'personal',
		builtWith: ['React', 'TypeScript', 'API', 'Sass'],
		description: 'An app to track and monitor cryptocurrency prices and market trends.',
		sourceCode: 'https://github.com/user/crypto-tracker',
		link: 'https://crypto-tracker.com',
	},
	{
		year: 2023,
		project: 'Online Learning Platform',
		type: 'professional',
		builtWith: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
		description: 'A platform for online learning with courses, quizzes, and progress tracking.',
		sourceCode: 'https://github.com/user/online-learning',
		link: 'https://learning-platform.com',
	},
	{
		year: 2022,
		project: 'Fitness App',
		type: 'personal',
		builtWith: ['Flutter', 'Dart', 'Firebase'],
		description: 'A mobile app for tracking fitness goals, workouts, and nutrition.',
		sourceCode: 'https://github.com/user/fitness-app',
		link: 'https://fitness-app.com',
	},
	{
		year: 2021,
		project: 'News Aggregator',
		type: 'professional',
		builtWith: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
		description: 'An aggregator that collects and displays news articles from various sources.',
		sourceCode: 'https://github.com/user/news-aggregator',
		link: 'https://news-aggregator.com',
	},
	{
		year: 2024,
		project: 'Recipe Sharing Platform',
		type: 'personal',
		builtWith: ['Next.js', 'Supabase', 'Tailwind CSS'],
		description: 'A platform for sharing and discovering recipes with user-generated content.',
		sourceCode: 'https://github.com/user/recipe-sharing',
		link: 'https://recipe-sharing.com',
	},
	{
		year: 2023,
		project: 'Job Board',
		type: 'professional',
		builtWith: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
		description: 'A job board platform for posting and applying to job listings.',
		sourceCode: 'https://github.com/user/job-board',
		link: 'https://job-board.com',
	},
	{
		year: 2022,
		project: 'Event Management System',
		type: 'personal',
		builtWith: ['Angular', 'Node.js', 'MongoDB', 'Material UI'],
		description: 'A system for managing events, including scheduling, registration, and ticketing.',
		sourceCode: 'https://github.com/user/event-management',
		link: 'https://event-management.com',
	},
	{
		year: 2021,
		project: 'Health Monitoring Dashboard',
		type: 'professional',
		builtWith: ['Vue.js', 'Vuetify', 'Firebase'],
		description: 'A dashboard for monitoring health metrics and generating reports.',
		sourceCode: 'https://github.com/user/health-monitoring',
		link: 'https://health-monitoring.com',
	},
	{
		year: 2024,
		project: 'Movie Recommendation Engine',
		type: 'personal',
		builtWith: ['Python', 'Flask', 'Machine Learning', 'React'],
		description: 'An engine for recommending movies based on user preferences and viewing history.',
		sourceCode: 'https://github.com/user/movie-recommendation',
		link: 'https://movie-recommendation.com',
	},
	{
		year: 2023,
		project: 'E-book Store',
		type: 'professional',
		builtWith: ['Ruby on Rails', 'PostgreSQL', 'React'],
		description: 'An online store for purchasing and downloading e-books.',
		sourceCode: 'https://github.com/user/ebook-store',
		link: 'https://ebook-store.com',
	},
	{
		year: 2022,
		project: 'Virtual Classroom',
		type: 'personal',
		builtWith: ['React', 'WebRTC', 'Node.js', 'Express'],
		description: 'A virtual classroom platform for online teaching and collaboration.',
		sourceCode: 'https://github.com/user/virtual-classroom',
		link: 'https://virtual-classroom.com',
	},
	{
		year: 2021,
		project: 'Online Marketplace',
		type: 'professional',
		builtWith: ['Magento', 'PHP', 'MySQL'],
		description: 'A marketplace for buying and selling products with user and seller accounts.',
		sourceCode: 'https://github.com/user/online-marketplace',
		link: 'https://online-marketplace.com',
	},
];
