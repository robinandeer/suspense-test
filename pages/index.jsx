import Link from "next/link";
import Container from "../components/container";
import styles from '../styles/index.module.css'

export default function IndexPage() {
  return (
    <Container>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/1">Level 1</Link>
          <p>Load data without Suspense.</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/2">Level 2</Link>
          <p>Load data with Suspense.</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/3">Level 3</Link>
          <p>Load data without manual Suspense-handling.</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/4">Level 4</Link>
          <p>Load and update data (naively).</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/5">Level 5</Link>
          <p>Load and update data with transition states.</p>
        </li>
      </ul>
    </Container>
  )
}
