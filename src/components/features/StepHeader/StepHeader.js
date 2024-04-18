import { useMediaQuery } from 'react-responsive'

import styles from './StepHeader.module.scss'

const StepHeader = ({ step, active }) => {
	const isMobile = useMediaQuery({ query: `(max-width: 776px)` })

	return (
		<div className={styles.singleStep}>
			<div className={`${styles.number} ${active ? styles.active : ''}`}>{step.number}</div>
			{!isMobile && (
				<div>
					<p className={styles.stepNo}>Step {step.number}</p>
					<p className={styles.header}>{step.header}</p>
				</div>
			)}
		</div>
	)
}

export default StepHeader
