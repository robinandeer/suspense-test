import React from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function IndexPage() {
  return (
    <div className={styles.page}>
      <header>
        <h1 className={styles.heading}>React Suspense</h1>
        <p className={styles.caption}>...for data fetching!</p>
      </header>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/level-1">Level 1</Link>
          <p className={styles.caption}>Load data without Suspense.</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/level-2">Level 2</Link>
          <p className={styles.caption}>Load data with Suspense.</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/level-3">Level 3</Link>
          <p className={styles.caption}>Load data without manual Suspense-handling.</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/level-4">Level 4</Link>
          <p className={styles.caption}>Load and update data (naively).</p>
        </li>
        <li className={styles.listItem}>
          <Link href="/level-5">Level 5</Link>
          <p className={styles.caption}>Load and update data with transition states.</p>
        </li>
      </ul>
    </div>
  )
}
