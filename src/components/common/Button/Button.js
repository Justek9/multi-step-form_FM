import styles from './Button.module.scss'

const Button = ({ text, color, bgColor, onClick, className, type }) => {
	const buttonStyle = {
		color: color,
		backgroundColor: bgColor,
	}


	return (
		<button className={`${styles.btn} ${className}`} onClick={onClick} type={type} style={buttonStyle}>
			{text}
		</button>
	)
}

export default Button
