import { getIsMonthlyPlan } from '../../../redux/formRedux'
import { useSelector } from 'react-redux'

import styles from './Plan.module.scss'

const Plan = ({ plan }) => {
	const isMonthly = useSelector(getIsMonthlyPlan)

	const handleSelectPlan = () => {
		console.log('plan selected')
	}

	return (
		<button className={styles.container} onClick={handleSelectPlan}>
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
