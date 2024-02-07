import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './FinishUp.module.scss'

const FinishUp = () => {
	return (
		<div className={styles.container}>
			<MainContentHeader title='Finishing up' subtitle='Double-check everything looks OK before confirming.' />
		</div>
	)
}

export default FinishUp
