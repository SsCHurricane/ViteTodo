import Moon from '../../assets/img/svg/moon';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<a href='/' className={styles.headerLogo}>
				ViteTodo
			</a>
			<button className={styles.headerButton}>
				<Moon />
			</button>
		</header>
	);
};

export default Header;
