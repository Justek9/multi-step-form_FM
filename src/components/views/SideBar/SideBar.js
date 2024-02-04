import { useState } from 'react'
import StepHeader from '../../features/StepHeader/StepHeader'
import styles from './SideBar.module.scss'

const SideBar = () => {
	const stepsInfo = [
		{ number: 1, header: 'Your info' },
		{ number: 2, header: 'Select plan' },
		{ number: 3, header: 'Add-ons' },
		{ number: 4, header: 'Summary' },
	]

	return (
		<div className={styles.container}>
			{stepsInfo.map(step => {
				return <StepHeader step={step} />
			})}
		</div>
	)
}

export default SideBar
