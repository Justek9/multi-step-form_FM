import { useDispatch, useSelector } from 'react-redux'
import { getIsMonthlyPlan, isMonthlyPlan } from '../../../redux/formRedux'
import styles from './Slider.module.scss'

const Slider = () => {
	const isMonthly = useSelector(state => getIsMonthlyPlan(state))
	const dispatch = useDispatch()

	const handleCheckBoxClick = () => {
		dispatch(isMonthlyPlan(!isMonthly))
	}

	return (
		<div className={styles.container}>
			<p className={isMonthly ? styles.active : ''}>Monthly</p>
			<label className={styles.switch}>
				<input type='checkbox' onClick={handleCheckBoxClick} checked={!isMonthly} onChange={() => {}}></input>
				<span className={`${styles.slider} ${styles.round}`}></span>
			</label>
			<p className={!isMonthly ? styles.active : ''}>Yearly</p>
		</div>
	)
}

export default Slider
