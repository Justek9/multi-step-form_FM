import styles from './Button.module.scss'

const Button = ({ text, color, bgColor, onClick, className }) => {
	return (
		<button
			className={`${styles.btn} ${className}`}
			onClick={onClick}
			style={{
				color: color,
				backgroundColor: bgColor,
			}}>
			{text}
		</button>
	)
}

export default Button
