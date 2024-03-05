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
import { getAddOns, getPersonalData, getSelectedPlan } from '../../../redux/formRedux'

const MainContent = () => {
	const step = useSelector(getStep)
	const personalInfo = useSelector(getPersonalData)
	const plan = useSelector(getSelectedPlan)
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

	function isNextStepButtonDisabled() {
		if (step === 1 && personalInfo.name && personalInfo.emailAddress && personalInfo.phone) return false
		if (step === 2 && plan) return false
		if (step === 3) return false

		return true
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
						{step !== 1 && (
							<Button text='Go back' bgColor='transparent' color='#02295a' onClick={() => previourStepHandler()} />
						)}
						{step !== 4 && (
							<Button text='Next Step' onClick={() => nextStepHandler()} disabled={isNextStepButtonDisabled()} />
						)}
						{step === 4 && <Button text='Confirm' bgColor='#473dff' onClick={() => confirmHandler()} />}
					</div>
				</div>
			)}
			{isFormConfirmed && <FinalPage />}
		</div>
	)
}

export default MainContent
