import AddOns from '../../common/AddOns/AddOns'
import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './PickAddOns.module.scss'

const PickAddOns = () => {
	const addOns = [
		{ id: 1, title: 'Online services', subtitle: 'Access to multiplayer game', price: 1, reduxName: 'onlineService' },
		{ id: 2, title: 'Larger storage', subtitle: 'Extra 1TB of cloud services', price: 2, reduxName: 'largerStorage' },
		{ id: 3, title: 'Online services', subtitle: 'Customizable profile', price: 2, reduxName: 'customizableProfile' },
	]

	return (
		<div className={styles.container}>
			<MainContentHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience' />
			{addOns.map(addOn => (
				<AddOns addOn={addOn} key={addOn.id} reduxName={addOn.reduxName} />
			))}
		</div>
	)
}

export default PickAddOns
