import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddOns, setAddOns } from '../../../redux/formRedux'
import styles from './AddOns.module.scss'

const AddOns = ({ addOn, reduxName }) => {
	const [isChecked, setIsChecked] = useState(false)
	const dispatch = useDispatch()
	const addOns = useSelector(state => getAddOns(state))
	return (
		<div
			className={`${styles.addOnContainer} ${isChecked ? styles.active : ''}`}
			onClick={() => {
				setIsChecked(!isChecked)
				const newAddOns = { ...addOns }
				newAddOns[reduxName] = !newAddOns[reduxName]
				dispatch(setAddOns(newAddOns))
			}}>
			<div className={styles.addOnsInput}>
				<input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
				<div className={styles.addOnsHeader}>
					<h4>{addOn.title}</h4>
					<h5>{addOn.subtitle}</h5>
				</div>
			</div>
			<p>+${addOn.price}/mo</p>
		</div>
	)
}

export default AddOns
