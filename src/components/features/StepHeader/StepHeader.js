import styles from './StepHeader.module.scss'

const StepHeader = ({ step, active }) => {
	console.log(active)

	return (
		<div className={styles.singleStep}>
			<div className={`${styles.number} ${active ? styles.active : ''}`}>{step.number}</div>
			<div>
				<p className={styles.stepNo}>Step {step.number}</p>
				<p className={styles.header}>{step.header}</p>
			</div>
		</div>
	)
}

export default StepHeader
