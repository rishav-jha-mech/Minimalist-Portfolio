import ScreenWrapper from '@/components/screenWrapper/screenWrapper';
import { MyContacts } from '../constants';
import styles from './contact.module.css';
import Image from 'next/image';
import Header, { HeaderVariant } from '@/components/header/header';
import { SVG_ASSETS } from '../../public/assets/icons';

const ContactMe = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<div className={styles.container}>
				<Header variant={HeaderVariant.Primary} text="Contact Me" />
				<Header
					variant={HeaderVariant.Secondary}
					text="
					Feel free to reach out for inquiries or to simply start a conversation. I'm eager to connect
					and collaborate with you. Let's get in touch!"
				/>
				<section className={styles.contactMe}>
					<div className={styles.left}>
						{MyContacts.map(({ asset, title, content }, index) => (
							<div key={index} className={styles.cardItem}>
								<div className={styles.icon}>
									{asset}
								</div>
								<div className={styles.content}>
									<h2>{title}</h2>
									<p>{content}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.right}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="Enter your email" />
						<label htmlFor="message">Message</label>
						<textarea id="message" placeholder="Enter your message"></textarea>
						<button>Send Message</button>
					</div>
				</section>
				<div className={styles.footer}>
					<Image
						src="/assets/icons/contact/copyright.svg"
						className="mr-4"
						alt="Copyright"
						width={20}
						height={20}
					/>
					<span>Rishav Jha 2024</span>
				</div>
			</div>
		</ScreenWrapper>
	);
};

export default ContactMe;
