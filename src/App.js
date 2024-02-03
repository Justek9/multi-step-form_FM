import Footer from './components/layout/Footer/Footer'
import MainContent from './components/layout/MainContent/MainContent'

import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.container}>
			<MainContent />
			<Footer />
		</div>
	)
}

export default App
