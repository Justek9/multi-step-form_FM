import styles from './MainContentHeader.module.scss'

const MainContentHeader = ({ title, subtitle }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<h3 className={styles.subTitle}>{subtitle}</h3>
		</div>
	)
}

export default MainContentHeader
