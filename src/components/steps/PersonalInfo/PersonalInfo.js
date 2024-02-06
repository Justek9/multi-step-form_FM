import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './PersonalInfo.module.scss'

const PersonalInfo = () => {
	return (
		<div className={styles.container}>
			<MainContentHeader title='Personal info' subtitle='Please provide your name, email address, phone number.' />
			<form>
				<label>Name</label>
				<input placeholder='e.g. Stephen King'></input>
				<label>Email Address</label>
				<input type='email' placeholder='e.g. stephenking@lorem.com'></input>
				<label>Phone Number</label>
				<input type='number' placeholder='e.g. +1 234 567 890'></input>
			</form>
		</div>
	)
}

export default PersonalInfo
