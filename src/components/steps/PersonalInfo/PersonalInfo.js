import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './PersonalInfo.module.scss'
import { getPersonalData, setPersonalData } from '../../../redux/formRedux'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { incrementStep } from '../../../redux/stepRedux'
import Button from '../../common/Button/Button'

const PersonalInfo = () => {
	const personalInfo = useSelector(state => getPersonalData(state))
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm()

	const handleSubmit = (_, event) => {
		event.preventDefault()
		dispatch(incrementStep())
	}

	return (
		<div className={styles.container}>
			<MainContentHeader title='Personal info' subtitle='Please provide your name, email address, phone number.' />
			<form onSubmit={validate(handleSubmit)}>
				<div className={styles.labelContainer}>
					<label>Name</label>
					{errors.firstName && <small className={styles.errorMessage}>This field is required</small>}
				</div>

				<input
					{...register('firstName', { required: true })}
					placeholder='e.g. Stephen King'
					value={personalInfo.name}
					onChange={e => dispatch(setPersonalData({ ...personalInfo, name: e.target.value }))}></input>
				<div className={styles.labelContainer}>
					<label>Email Address</label>
					{errors.email && <small className={styles.errorMessage}>{errors.email.message}</small>}
				</div>
				<input
					type='email'
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Entered value does not match email format',
						},
					})}
					placeholder='e.g. stephenking@lorem.com'
					value={personalInfo.emailAddress}
					onChange={e => dispatch(setPersonalData({ ...personalInfo, emailAddress: e.target.value }))}></input>
				<div className={styles.labelContainer}>
					<label>Phone Number</label>
					{errors.number && <small className={styles.errorMessage}>This field is required</small>}
				</div>
				<input
					type='number'
					{...register('number', { required: true })}
					placeholder='e.g. +1 234 567 890'
					value={personalInfo.phone}
					onChange={e => dispatch(setPersonalData({ ...personalInfo, phone: e.target.value }))}></input>
				<Button text='Next Step' type='submit' />
			</form>
		</div>
	)
}

export default PersonalInfo
