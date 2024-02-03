import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<p>
				Challenge by {''}
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
					Frontend Mentor
				</a>
			</p>
			Coded by Justyna Konikiewicz
		</footer>
	)
}

export default Footer
