import { useDispatch, useSelector } from 'react-redux'
import { getAddOns, getIsMonthlyPlan, getSelectedPlan } from '../../../redux/formRedux'
import { decrementStep } from '../../../redux/stepRedux'
import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './FinishUp.module.scss'

const FinishUp = () => {
	const plan = useSelector(state => getSelectedPlan(state))
	const isMonthly = useSelector(state => getIsMonthlyPlan(state))
	const addOns = useSelector(state => getAddOns(state))
	const dispatch = useDispatch()

	const changePlanHandler = () => {
		dispatch(decrementStep())
		dispatch(decrementStep())
	}
	const calculateTotal = () => {
		const planCost = isMonthly ? plan.monthlyCost : plan.yearlyCost
		const calculateMonthlyAddOns = addOns.reduce((acc, curr) => (curr.isChecked !== false ? acc + curr.price : acc), 0)
		const addOnsCost = isMonthly ? calculateMonthlyAddOns : calculateMonthlyAddOns * 12
		return planCost + addOnsCost
	}
	return (
		<div className={styles.container}>
			<MainContentHeader title='Finishing up' subtitle='Double-check everything looks OK before confirming.' />
			<div className={styles.content}>
				<div className={styles.planSummary}>
					<div className={styles.planName}>
						<b>
							{plan.name} ({isMonthly ? 'Monthly' : 'Yearly'})
						</b>
						<button className={styles.btnChange} onClick={changePlanHandler}>
							Change
						</button>
					</div>
					<div className={styles.planName}>
						<b>{isMonthly ? `$${plan.monthlyCost}/mo` : `$${plan.yearlyCost}/yr`}</b>
					</div>
				</div>
				<div>
					{addOns.map((item, idx) => {
						if (item.isChecked !== false) {
							return (
								<div className={styles.addOnsSummary} key={idx}>
									<div>{item.title}</div>
									<div className={styles.addOnPrice}>{isMonthly ? `+$${item.price}/mo` : `$${item.price * 12}/yr`}</div>
								</div>
							)
						}
					})}
				</div>
			</div>
			<div className={styles.total}>
				<p className={styles.totalCaption}>Total {isMonthly ? '(per month)' : '(yearly)'}:</p>
				<p className={styles.totalAmount}>{isMonthly ? `+$${calculateTotal()}/mo` : `+$${calculateTotal()}/yr`}</p>
			</div>
		</div>
	)
}

export default FinishUp
