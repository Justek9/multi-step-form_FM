import styles from './MainContentHeader.module.scss'

const MainContentHeader = ({ title, subtitle }) => {
	return (
		<>
			<h3 className={styles.title}>{title}</h3>
			<h6 className={styles.subTitle}>{subtitle}</h6>
		</>
	)
}

export default MainContentHeader
