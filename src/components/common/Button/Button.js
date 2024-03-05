import PersonalInfo from '../../steps/PersonalInfo/PersonalInfo'
import styles from './Button.module.scss'

const Button = ({ text, color, bgColor, onClick, className, disabled }) => {
	console.log(disabled)
	return (
		<button
			className={`${styles.btn} ${className}`}
			onClick={onClick}
			disabled={disabled}
			style={{
				color: color,
				backgroundColor: bgColor,
			}}>
			{text}
		</button>
	)
}

export default Button
