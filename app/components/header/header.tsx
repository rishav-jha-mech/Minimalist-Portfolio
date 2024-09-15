import React, { memo } from 'react';
import styles from './header.module.css';

export enum HeaderVariant {
	Primary = 'Primary',
	Secondary = 'Secondary',
}

type HeaderProps = {
	variant: HeaderVariant;
	text: string;
};

const Header: React.FC<HeaderProps> = ({ variant, text }) => {
	return variant === HeaderVariant.Primary ? (
		<h1 className={styles.header}>{text}</h1>
	) : (
		<h3 className={styles.secondaryHeader}>{text}</h3>
	);
};

export default memo(Header);
