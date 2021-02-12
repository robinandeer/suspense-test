import Link from 'next/link'
import styles from './container.module.css'

export default function Container({ children, title, back = false }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>{back && <Link href="/">Back</Link>}</p>
        <div>{title}</div>
      </header>
      {children}
    </div>
  )
}
