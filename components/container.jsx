import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function Container({ children, title, back = false }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <p>
                    {back && <Link className={styles.pageTitle} href="/">Back</Link>}
                </p>
                <div className={styles.pageTitle}>{title}</div>
            </header>
            {children}
        </div>
    )
}
