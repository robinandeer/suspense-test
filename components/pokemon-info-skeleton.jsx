import styles from './pokemon-info.module.css'

export default function PokemonInfoSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonImage} />
      <div className={styles.separator} />
      <h1 className={styles.name}>??? ???</h1>
    </div>
  )
}
