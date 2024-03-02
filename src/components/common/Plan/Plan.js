import { getIsMonthlyPlan, getSelectedPlan, selectedPlan, selectPlan } from '../../../redux/formRedux'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Plan.module.scss'
import { useEffect, useState } from 'react'

const Plan = ({ plan }) => {
	const isMonthly = useSelector(state => getIsMonthlyPlan(state))
	const selectedPlan = useSelector(state => getSelectedPlan(state))
	console.log(selectedPlan)
	const dispatch = useDispatch()
	const handleSelectPlan = e => {
		e.preventDefault()
		dispatch(selectPlan(plan.name))
	}

	return (
		<button
			className={`${selectedPlan === plan.name ? styles.active : ''} ${styles.container}`}
			onClick={e => handleSelectPlan(e)}>
			<img src={plan.src}></img>
			<div>
				<h3>{plan.name}</h3>
				{isMonthly && <p className={styles.cost}>${plan.monthlyCost}/mo</p>}
				{!isMonthly && <p className={styles.cost}>${plan.yearlyCost}/yr</p>}
				{!isMonthly && <p className={styles.free}>2 months free</p>}
			</div>
		</button>
	)
}
export default Plan
