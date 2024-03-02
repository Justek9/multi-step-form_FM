import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './PersonalInfo.module.scss'
import { getPersonalData, setPersonalData } from '../../../redux/formRedux'
import { useDispatch, useSelector } from 'react-redux'

const PersonalInfo = () => {
	const personalInfo = useSelector(state => getPersonalData(state))
	const dispatch = useDispatch()

	return (
		<div className={styles.container}>
			<MainContentHeader title='Personal info' subtitle='Please provide your name, email address, phone number.' />
			<form>
				<label>Name</label>
				<input
					placeholder='e.g. Stephen King'
					value={personalInfo.name}
					onChange={e => dispatch(setPersonalData({ ...personalInfo, name: e.target.value }))}></input>
				<label>Email Address</label>
				<input
					type='email'
					placeholder='e.g. stephenking@lorem.com'
					value={personalInfo.emailAddress}
					onChange={e => dispatch(setPersonalData({ ...personalInfo, emailAddress: e.target.value }))}></input>
				<label>Phone Number</label>
				<input
					type='number'
					placeholder='e.g. +1 234 567 890'
					value={personalInfo.phone}
					onChange={e => dispatch(setPersonalData({ ...personalInfo, phone: e.target.value }))}></input>
			</form>
		</div>
	)
}

export default PersonalInfo
