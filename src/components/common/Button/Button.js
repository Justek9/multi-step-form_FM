import styles from './Button.module.scss'

const Button = ({ text, color, bgColor, onClick }) => {
	return (
		<button
			className={styles.btn}
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
