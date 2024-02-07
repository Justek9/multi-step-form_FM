import { useDispatch, useSelector } from 'react-redux'
import { getStep, incrementStep } from '../../../redux/stepRedux'
import Button from '../../common/Button/Button'
import PersonalInfo from '../../steps/PersonalInfo/PersonalInfo'
import SideBar from '../../views/SideBar/SideBar'
import styles from './MainContent.module.scss'

const MainContent = () => {
	const step = useSelector(getStep)
	const dispatch = useDispatch()

	const nextStepHandler = () => {
		dispatch(incrementStep())
		console.log(step)
	}

	return (
		<div className={styles.container}>
			<SideBar />
			<div className={styles.mainContentContainer}>
				{step === 1 && <PersonalInfo />}
				<Button text='Next Step' onClick={() => nextStepHandler()} />
			</div>
		</div>
	)
}

export default MainContent
