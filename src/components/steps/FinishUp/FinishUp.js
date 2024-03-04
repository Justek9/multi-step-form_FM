import { useSelector } from 'react-redux'
import { getAddOns, getIsMonthlyPlan, getSelectedPlan } from '../../../redux/formRedux'
import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './FinishUp.module.scss'

const FinishUp = () => {
	const plan = useSelector(state => getSelectedPlan(state))
	const isMonthly = useSelector(state => getIsMonthlyPlan(state))
	const addOns = useSelector(state => getAddOns(state))
	console.log(addOns)

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
				<div>
					<div className={styles.addOnsSummary}>
						<div>{plan.name}</div>
						<div>{isMonthly ? `$${plan.monthlyCost}/mo` : `$${plan.yearlyCost}/yr`}</div>
					</div>
					<div className={styles.addOnsSummary}>
						<div>{plan.name}</div>
						<div>{isMonthly ? `$${plan.monthlyCost}/mo` : `$${plan.yearlyCost}/yr`}</div>
					</div>
					<div className={styles.addOnsSummary}>
						<div>{plan.name}</div>
						<div>{isMonthly ? `$${plan.monthlyCost}/mo` : `$${plan.yearlyCost}/yr`}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FinishUp
