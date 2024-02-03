import SideBar from '../../views/SideBar/SideBar'
import styles from './MainContent.module.scss'

const MainContent = () => {
	return (
		<div className={styles.container}>
			<SideBar />
			<div>Info</div>
		</div>
	)
}

export default MainContent
