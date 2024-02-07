import { useDispatch, useSelector } from 'react-redux'
import { decrementStep, getStep, incrementStep } from '../../../redux/stepRedux'
import Button from '../../common/Button/Button'
import PersonalInfo from '../../steps/PersonalInfo/PersonalInfo'
import SideBar from '../../views/SideBar/SideBar'
import styles from './MainContent.module.scss'

const MainContent = () => {
	const step = useSelector(getStep)
	const dispatch = useDispatch()

	const nextStepHandler = () => {
		dispatch(incrementStep())
	}

	const previourStepHandler = () => {
		dispatch(decrementStep())
	}
	const confirmHandler = () => {}

	return (
		<div className={styles.container}>
			<SideBar />
			<div className={styles.mainContentContainer}>
				{step === 1 && <PersonalInfo />}
				<div className={styles.buttons}>
					{step !== 4 && <Button text='Next Step' onClick={() => nextStepHandler()} />}
					{step === 4 && (
						<Button text='Confirm' bgColor='#473dff' onClick={() => confirmHandler()} />
					)}
					{step !== 1 && (
						<Button text='Go back' bgColor='transparent' color='#02295a' onClick={() => previourStepHandler()} />
					)}
				</div>
			</div>
		</div>
	)
}

export default MainContent
