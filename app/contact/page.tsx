import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import { MyContacts } from '@/constants';
import styles from './contact.module.css';
import Image from 'next/image';

const ContactMe = () => {
	return (
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<div className={styles.container}>
				<h1>Contact Me</h1>
				<p>
					Feel free to reach out for inquiries or to simply start a conversation. I&apos;m eager to connect
					and collaborate with you. Let&apos;s get in touch!
				</p>
				<section className={styles.contactMe}>
					<div className={styles.left}>
						{MyContacts.map(({ asset, title, content }, index) => (
							<div key={index} className={styles.cardItem}>
								<div className={styles.icon}>
									<Image src={asset} alt={title} width={40} height={40} />
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
