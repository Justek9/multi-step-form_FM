import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './SelectPlan.module.scss'

const SelectPlan = () => {
	return (
		<div className={styles.container}>
			<MainContentHeader title='Select your plan' subtitle='You have option of monthly or yearly billing.' />
		</div>
	)
}

export default SelectPlan
