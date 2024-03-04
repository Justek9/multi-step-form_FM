import styles from './MainContentHeader.module.scss'

const MainContentHeader = ({ title, subtitle }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<h4 className={styles.subTitle}>{subtitle}</h4>
		</div>
	)
}

export default MainContentHeader
