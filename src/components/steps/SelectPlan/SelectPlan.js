import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import Plan from '../../common/Plan/Plan'
import Slider from '../../common/Slider/Slider'

import styles from './SelectPlan.module.scss'

const SelectPlan = () => {
	const plans = [
		{ id: 1, name: 'Arcade', yearlyCost: 90, monthlyCost: 9, src: '../../assets/images/icon-arcade.svg' },
		{ id: 2, name: 'Advanced', yearlyCost: 120, monthlyCost: 12, src: '../../assets/images/icon-advanced.svg' },
		{ id: 3, name: 'Pro', yearlyCost: 150, monthlyCost: 15, src: '../../assets/images/icon-pro.svg' },
	]

	return (
		<div className={styles.container}>
			<MainContentHeader title='Select your plan' subtitle='You have option of monthly or yearly billing.' />
			<div className={styles.plansContainer}>
				{plans.map(plan => (
					<Plan plan={plan} key={plan.id} />
				))}
			</div>
			<Slider />
		</div>
	)
}

export default SelectPlan
