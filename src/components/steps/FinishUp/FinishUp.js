import { useSelector } from 'react-redux'
import { getIsMonthlyPlan, getSelectedPlan } from '../../../redux/formRedux'
import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './FinishUp.module.scss'

const FinishUp = () => {
	const plan = useSelector(state => getSelectedPlan(state))
	const isMonthly = useSelector(state => getIsMonthlyPlan(state))
	console.log(plan)

	return (
		<div className={styles.container}>
			<MainContentHeader title='Finishing up' subtitle='Double-check everything looks OK before confirming.' />
			<div className={styles.content}>
				<div className={styles.planSummary}>
					<div>
						{plan.name} ({isMonthly ? 'Monthly' : 'Yearly'})<button className={styles.btnChange}>Change</button>
					</div>
					<div>{isMonthly ? `$${plan.monthlyCost}/mo` : `$${plan.yearlyCost}/yr`}</div>
				</div>
			</div>
		</div>
	)
}

export default FinishUp
