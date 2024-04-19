import styles from './Button.module.scss'

const Button = ({ text, color, bgColor, onClick, className, type }) => {
	return (
		<button
			className={`${styles.btn} ${className}`}
			onClick={onClick}
			type={type}
			style={{
				color: color,
				backgroundColor: bgColor,
			}}>
			{text}
		</button>
	)
}

export default Button
