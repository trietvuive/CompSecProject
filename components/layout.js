import styles from './email.css'

export default function Layout({children}) {
	return <div className={styles.email}> {children} </div>
}
