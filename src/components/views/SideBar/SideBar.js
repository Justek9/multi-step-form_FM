import { useSelector } from 'react-redux'
import { getStep } from '../../../redux/stepRedux'
import StepHeader from '../../features/StepHeader/StepHeader'

import styles from './SideBar.module.scss'

const SideBar = () => {
	const stepNumber = useSelector(getStep)

	const stepsInfo = [
		{ number: 1, header: 'Your info' },
		{ number: 2, header: 'Select plan' },
		{ number: 3, header: 'Add-ons' },
		{ number: 4, header: 'Summary' },
	]

	return (
		<div className={styles.container}>
			{stepsInfo.map(step => {
				return <StepHeader step={step} key={step.number} active={step.number == stepNumber} />
			})}
		</div>
	)
}

export default SideBar
