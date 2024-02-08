import { useState } from 'react'
import styles from './Slider.module.scss'

const Slider = () => {
	const [monthlyPlan, setMonthlyPlan] = useState(true)
	console.log(monthlyPlan)
	const handleCheckBoxClick = () => {
		setMonthlyPlan(!monthlyPlan)
	}

	return (
		<div className={styles.container}>
			<p className={monthlyPlan ? styles.active : ''}>Monthly</p>
			<label className={styles.switch}>
				<input type='checkbox' onClick={handleCheckBoxClick}></input>
				<span className={`${styles.slider} ${styles.round}`}></span>
			</label>
			<p className={!monthlyPlan ? styles.active : ''}>Yearly</p>
		</div>
	)
}

export default Slider
