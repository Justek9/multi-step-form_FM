import styles from './Button.module.scss'

const Button = ({ text, color, onClick }) => {
	return (
		<button
			className={styles.btn}
			onClick={onClick}
			style={{
				backgroundColor: color,
			}}>
			{text}
		</button>
	)
}

export default Button
