import MainContentHeader from '../../common/MainContentHeader/MainContentHeader'
import styles from './FinalPage.module.scss'

const FinalPage = () => {
	return (
		<div className={styles.container}>
			<img src='../../assets/images/icon-thank-you.svg'></img>
			<h1 className={styles.header}>Thank you!</h1>
			<h4 className={styles.finalText}>
				Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
				please feel free to email us at support@loremgaming.com.
			</h4>
		</div>
	)
}

export default FinalPage
