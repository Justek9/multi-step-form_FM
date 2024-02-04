import Button from '../../common/Button/Button'
import SideBar from '../../views/SideBar/SideBar'
import styles from './MainContent.module.scss'

const MainContent = () => {
	return (
		<div className={styles.container}>
			<SideBar />
			<Button text="Next Step" />
		</div>
	)
}

export default MainContent
