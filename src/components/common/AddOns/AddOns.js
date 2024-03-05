import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddOns, getAddOns, setAddOns } from '../../../redux/formRedux'
import styles from './AddOns.module.scss'

const AddOns = ({ addOn }) => {
	console.log(addOn)
	const [isChecked, setIsChecked] = useState(false)
	const dispatch = useDispatch()
	const addOns = useSelector(state => getAddOns(state))
	console.log(addOns)
	return (
		<div
			className={`${styles.addOnContainer} ${isChecked ? styles.active : ''}`}
			onClick={() => {
				setIsChecked(!isChecked)
				const isAdded = addOns.find(item => item.name === addOn.title)
				!isAdded && dispatch(setAddOns({ name: addOn.title, price: addOn.price }))
				isAdded && dispatch(deleteAddOns({ name: addOn.title }))
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
