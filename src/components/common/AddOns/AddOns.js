import { useDispatch } from 'react-redux'
import { setAddOns } from '../../../redux/formRedux'
import styles from './AddOns.module.scss'

const AddOns = ({ addOn }) => {
	const dispatch = useDispatch()

	return (
		<div
			className={`${styles.addOnContainer} ${addOn.isChecked ? styles.active : ''}`}
			onClick={() => {
				dispatch(setAddOns({ name: addOn.title }))
			}}>
			<div className={styles.addOnsInput}>
				<input
					type='checkbox'
					checked={addOn.isChecked}
					onChange={e => {}}
					onClick={event => {
						event.stopPropagation()
						dispatch(setAddOns({ name: addOn.title }))
					}}></input>
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
