import { useDispatch, useSelector } from 'react-redux'
import { decrementStep, getStep, incrementStep } from '../../../redux/stepRedux'
import Button from '../../common/Button/Button'
import PersonalInfo from '../../steps/PersonalInfo/PersonalInfo'
import SelectPlan from '../../steps/SelectPlan/SelectPlan'
import PickAddOns from '../../steps/PickAddOns/PickAddOns'
import SideBar from '../SideBar/SideBar'
import styles from './MainContent.module.scss'
import FinishUp from '../../steps/FinishUp/FinishUp'
import FinalPage from '../../steps/FinalPage/FinalPage'
import { useState } from 'react'
import Slider from '../../common/Slider/Slider'

const MainContent = () => {
	const step = useSelector(getStep)
	const [isFormConfirmed, setIsFormConfirmed] = useState(false)
	const dispatch = useDispatch()

	const nextStepHandler = () => {
		dispatch(incrementStep())
	}

	const previourStepHandler = () => {
		dispatch(decrementStep())
	}
	const confirmHandler = () => {
		setIsFormConfirmed(true)
	}

	return (
		<div className={styles.container}>
			<SideBar />
			{!isFormConfirmed && (
				<div className={styles.mainContentContainer}>
					{step === 1 && <PersonalInfo />}
					{step === 2 && <SelectPlan />}
					{step === 3 && <PickAddOns />}
					{step === 4 && <FinishUp />}
					<div className={styles.buttons}>
						{step !== 4 && <Button text='Next Step' onClick={() => nextStepHandler()} />}
						{step === 4 && <Button text='Confirm' bgColor='#473dff' onClick={() => confirmHandler()} />}
						{step !== 1 && (
							<Button text='Go back' bgColor='transparent' color='#02295a' onClick={() => previourStepHandler()} />
						)}
					</div>
				</div>
			)}
			{isFormConfirmed && <FinalPage />}
		</div>
	)
}

export default MainContent
