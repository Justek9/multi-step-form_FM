import { useSelector } from 'react-redux'
import { getStep } from '../../../redux/stepRedux'
import Button from '../../common/Button/Button'
import PersonalInfo from '../../steps/PersonalInfo/PersonalInfo'
import SideBar from '../../views/SideBar/SideBar'
import styles from './MainContent.module.scss'

const MainContent = () => {
	const step = useSelector(getStep)

	return (
		<div className={styles.container}>
			<SideBar />
			<div className={styles.mainContentContainer}>
			{step === 1 && <PersonalInfo />}
			<Button text='Next Step' />
			</div>
		</div>
	)
}

export default MainContent
