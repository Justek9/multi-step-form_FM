import AddOns from '../../common/AddOns/AddOns'
import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './PickAddOns.module.scss'

const PickAddOns = () => {
	const addOns = [
		{ id: 1, title: 'Online services', subtitle: 'Access to multiplayer game', price: 1 },
		{ id: 2, title: 'Larger storage', subtitle: 'Extra 1TB of cloud services', price: 2 },
		{
			id: 3,
			title: 'Customizable profile',
			subtitle: 'Custom theme on your profile',
			price: 2,
		},
	]

	return (
		<div className={styles.container}>
			<MainContentHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience' />
			{addOns.map(addOn => (
				<AddOns addOn={addOn} key={addOn.id} />
			))}
		</div>
	)
}

export default PickAddOns
