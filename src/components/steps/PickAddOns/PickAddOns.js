import { useSelector } from 'react-redux'
import { getAddOns } from '../../../redux/formRedux'
import AddOns from '../../common/AddOns/AddOns'
import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './PickAddOns.module.scss'

const PickAddOns = () => {
	const addOns = useSelector(state => getAddOns(state))

	return (
		<div className={styles.container}>
			<MainContentHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience' />
			{addOns.map(addOn => {
				return <AddOns addOn={addOn} key={addOn.id} />
			})}
		</div>
	)
}

export default PickAddOns
